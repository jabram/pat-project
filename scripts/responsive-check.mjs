// Responsive regression check.
//
// Loads the running app at several screen widths in light and dark mode,
// fails if anything makes the page scroll sideways or if key UI sticks out
// of the screen, and saves screenshots for a person to review.
//
// Usage (the dev server must already be running):
//   npm run check:responsive                 # screenshots -> responsive-screenshots/latest
//   npm run check:responsive -- baseline     # screenshots -> responsive-screenshots/baseline
//   BASE_URL=http://localhost:5000 npm run check:responsive
//
// Exit code is 1 when any check fails.

import { chromium } from "playwright";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const LABEL = process.argv[2] || "latest";
const OUT_DIR = path.join("responsive-screenshots", LABEL);
const VIEWPORTS = [
  { name: "375", width: 375, height: 812 },
  { name: "390", width: 390, height: 844 },
  { name: "844x390", width: 844, height: 390, mobile: true }, // landscape phone
  { name: "768", width: 768, height: 1024 },
  { name: "881", width: 881, height: 1494 }, // book title wraps to 4 lines in the header
  { name: "1024", width: 1024, height: 768 },
  { name: "1440", width: 1440, height: 900 },
];
const MIN_TAP = 40; // px; minimum tap-target size on touch screens
const THEMES = ["light", "dark"];

// CSS modules hash class names, so match on the readable prefix.
const sel = (component, cls) => `[class*="${component}_${cls}__"]`;

const failures = [];
const fail = (where, message) => failures.push(`[${where}] ${message}`);

// Returns elements that stick out past the left or right edge of the screen,
// ignoring fixed UI (checked separately) and anything clipped by an ancestor
// with overflow hidden/clip (for example gallery slides mid-animation).
const findOverflow = () => {
  const vw = document.documentElement.clientWidth;
  const isFixedOrClipped = (el) => {
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.position === "fixed") return true;
      if (n !== el && /hidden|clip/.test(cs.overflowX)) return true;
    }
    return false;
  };
  const out = [];
  for (const el of document.body.querySelectorAll("*")) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.right <= vw + 1 && r.left >= -1) continue;
    if (isFixedOrClipped(el)) continue;
    const cls = String(el.className?.baseVal ?? el.className ?? "");
    out.push(`${el.tagName.toLowerCase()}.${cls.split(" ")[0]} (left ${Math.round(r.left)}, right ${Math.round(r.right)})`);
    if (out.length >= 8) break;
  }
  return {
    vw,
    docWidth: document.documentElement.scrollWidth,
    out,
  };
};

// Checks that a touch control is big enough to tap.
// Contrast between an element's color (or border color) and the nearest
// opaque background behind it. Runs in the page.
const contrastRatio = ([selector, borderSide]) => {
  const el = document.querySelector(selector);
  if (!el) return null;
  const parse = (c) => (c.match(/[\d.]+/g) || []).map(Number);
  const lum = ([r, g, b]) => {
    const f = (v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const fg = parse(getComputedStyle(el)[borderSide ? `border${borderSide}Color` : "color"]);
  let n = borderSide ? el.parentElement : el;
  let bg = [255, 255, 255];
  for (; n; n = n.parentElement) {
    const c = parse(getComputedStyle(n).backgroundColor);
    if (c.length >= 3 && (c.length === 3 || c[3] > 0.9)) { bg = c; break; }
  }
  const [a, b] = [lum(fg), lum(bg)].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
};

// The selected gallery thumbnail's border must stand out from the panel (3:1 for UI parts).
const checkSelectedThumb = async (page, where) => {
  const s = `${sel("Gallery", "thumbnailContainer")} button${sel("Gallery", "selected")}`;
  const ratio = await page.evaluate(contrastRatio, [s, "Top"]);
  if (ratio !== null && ratio < 3) fail(where, `selected thumbnail border contrast is ${ratio.toFixed(1)}:1 (min 3)`);
};

// Icon-only buttons need a name screen readers can announce.
const checkName = async (page, where, selector, name) => {
  const label = await page.evaluate((s) => {
    const el = document.querySelector(s);
    return el ? (el.getAttribute("aria-label") || el.textContent || "").trim() : null;
  }, selector);
  if (label === "") fail(where, `${name} has no accessible name`);
};

const checkTapTarget = async (page, where, selector, name) => {
  const info = await page.evaluate((s) => {
    const el = document.querySelector(s);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { w: r.width, h: r.height };
  }, selector);
  if (!info) return;
  if (info.w < MIN_TAP || info.h < MIN_TAP)
    fail(where, `${name} tap target is ${Math.round(info.w)}x${Math.round(info.h)}px (min ${MIN_TAP})`);
};

// Checks that an element is fully inside the screen.
const checkInside = async (page, where, selector, name) => {
  const box = await page.evaluate((s) => {
    const el = document.querySelector(s);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      left: r.left,
      right: r.right,
      top: r.top,
      bottom: r.bottom,
      vw: document.documentElement.clientWidth,
      vh: window.innerHeight,
    };
  }, selector);
  if (!box) return fail(where, `${name} not found (${selector})`);
  const off = [];
  if (box.left < -1) off.push(`left ${Math.round(box.left)}`);
  if (box.right > box.vw + 1) off.push(`right ${Math.round(box.right)} > ${box.vw}`);
  if (box.top < -1) off.push(`top ${Math.round(box.top)}`);
  if (box.bottom > box.vh + 1) off.push(`bottom ${Math.round(box.bottom)} > ${box.vh}`);
  if (off.length) fail(where, `${name} is outside the screen: ${off.join(", ")}`);
};

const shot = (page, width, theme, name) =>
  page.screenshot({ path: path.join(OUT_DIR, `${width}-${theme}-${name}.png`) });

const scrollToEl = async (page, selector, offset = 0) => {
  await page.evaluate(
    ([s, o]) => {
      const el = document.querySelector(s);
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - o);
    },
    [selector, offset],
  );
  await page.waitForTimeout(900); // Section's InView uses a 500ms delay
};

const run = async () => {
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();

  for (const theme of THEMES) {
    for (const vp of VIEWPORTS) {
      const width = vp.name;
      const touch = vp.mobile || vp.width < 768;
      const where = `${vp.name} ${theme}`;
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1,
        isMobile: touch,
        hasTouch: touch,
      });
      await context.addInitScript((t) => localStorage.setItem("theme", t), theme);
      const page = await context.newPage();
      await page.goto(BASE_URL, { waitUntil: "load" });
      // Wait for Firestore chapters and at least one Markdown file to render.
      await page.waitForFunction(
        () => document.querySelectorAll("section").length > 10 &&
          !document.body.innerText.includes("Loading..."),
        null,
        { timeout: 30000 },
      ).catch(() => fail(where, "content did not finish loading within 30s"));

      // 1. Whole page: no sideways scrolling.
      const o = await page.evaluate(findOverflow);
      if (o.docWidth > o.vw) fail(where, `page is ${o.docWidth}px wide on a ${o.vw}px screen`);
      for (const e of o.out) fail(where, `sticks out: ${e}`);

      // 2. Title page.
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);
      await checkInside(page, where, "#title h1", "title");
      await checkInside(page, where, "#title h2", "subtitle");
      // The header is hidden on the title page; no part of it (or its shadow) may show.
      const headerBottom = await page.evaluate((h) => {
        const el = document.querySelector(h);
        return el ? Math.round(el.getBoundingClientRect().bottom) : null;
      }, sel("Header", "header"));
      if (headerBottom !== null && headerBottom > -28) // 28px = shadow offset + blur
        fail(where, `hidden header still shows: its bottom edge is at ${headerBottom}px`);
      await shot(page, width, theme, "01-title");

      // 3. Reading text, with header and previous/next buttons showing.
      await scrollToEl(page, "#chapter1", -300);
      await page.evaluate(() => window.scrollBy(0, -60)); // header shows on scroll up
      await page.waitForTimeout(900);
      const textWidth = await page.evaluate(() => {
        const p = document.querySelector("#chapter1 p");
        return p ? Math.round(p.getBoundingClientRect().width) : 0;
      });
      const minText = Math.min(280, vp.width - 60);
      if (textWidth < minText) fail(where, `reading text is only ${textWidth}px wide`);
      await checkInside(page, where, sel("Header", "header"), "header");
      await checkInside(page, where, sel("App", "previousChapter"), "previous-chapter button");
      await checkInside(page, where, sel("App", "nextChapter"), "next-chapter button");
      if (touch) {
        await checkTapTarget(page, where, sel("App", "previousChapter"), "previous-chapter button");
        await checkTapTarget(page, where, sel("App", "nextChapter"), "next-chapter button");
        await checkTapTarget(page, where, sel("Header", "menuButton"), "menu button");
      }
      await checkName(page, where, sel("App", "previousChapter"), "previous-chapter button");
      await checkName(page, where, sel("App", "nextChapter"), "next-chapter button");
      await checkName(page, where, sel("Header", "menuButton"), "menu button");
      await shot(page, width, theme, "02-reading");

      // 4. Gallery inside an expandable block.
      const gallery = sel("Gallery", "galleryContainer");
      if (await page.$(gallery)) {
        await scrollToEl(page, sel("ExpandableBlock", "section"), 100);
        await scrollToEl(page, gallery, 120);
        await checkInside(page, where, `${gallery} ${sel("Gallery", "leftButt")}`, "gallery left arrow");
        await checkInside(page, where, `${gallery} ${sel("Gallery", "rightButt")}`, "gallery right arrow");
        if (touch) {
          await checkTapTarget(page, where, `${gallery} ${sel("Gallery", "leftButt")}`, "gallery left arrow");
        }
        await checkName(page, where, `${gallery} ${sel("Gallery", "leftButt")}`, "gallery left arrow");
        await checkName(page, where, `${gallery} ${sel("Gallery", "rightButt")}`, "gallery right arrow");
        await checkSelectedThumb(page, where);
        await shot(page, width, theme, "03-gallery");
      }

      // 5. Quote block (if this content has one): its text must contrast with the page.
      if (await page.$("blockquote")) {
        await scrollToEl(page, "blockquote", 200);
        const ratio = await page.evaluate(contrastRatio, ["blockquote p", null]);
        if (ratio !== null && ratio < 4.5) fail(where, `quote text contrast is ${ratio.toFixed(1)}:1 (min 4.5)`);
        await shot(page, width, theme, "04-quote");
      }

      // 6. Main menu open.
      await page.$eval(sel("Header", "menuButton"), (el) => el.click());
      await page.waitForTimeout(900);
      await checkInside(page, where, sel("MainMenu", "menuContainer"), "menu");
      await checkInside(page, where, sel("MainMenu", "closeButton"), "menu close button");
      await checkName(page, where, sel("MainMenu", "closeButton"), "menu close button");
      await shot(page, width, theme, "05-menu");
      await page.$eval(sel("MainMenu", "closeButton"), (el) => el.click());
      await page.waitForTimeout(900);

      // 7. Song player modal (with lyrics).
      const playerButton = sel("PlayerButton", "playerButton");
      if (await page.$(playerButton)) {
        await page.$eval(playerButton, (el) => el.scrollIntoView({ block: "center" }));
        await page.waitForTimeout(500);
        await page.$eval(playerButton, (el) => el.click());
        await page.waitForSelector(".playerModal", { timeout: 5000 }).catch(() => {});
        await page.waitForTimeout(1500);
        await checkInside(page, where, sel("Player", "player"), "player");
        await checkInside(page, where, sel("Player", "closeButton"), "player close button");
        await checkName(page, where, sel("Player", "closeButton"), "player close button");
        const lyricsHeight = await page.evaluate((s) => {
          const el = document.querySelector(s);
          return el ? Math.round(el.getBoundingClientRect().height) : null;
        }, sel("Player", "lyrics"));
        if (lyricsHeight !== null && lyricsHeight < 100)
          fail(where, `player lyrics area is only ${lyricsHeight}px tall`);
        await shot(page, width, theme, "06-player");
      }

      await context.close();
    }
  }

  await browser.close();
  const report = failures.length ? failures.join("\n") : "All checks passed.";
  await writeFile(path.join(OUT_DIR, "report.txt"), report + "\n");
  console.log(report);
  console.log(`\nScreenshots: ${OUT_DIR}/`);
  process.exit(failures.length ? 1 : 0);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
