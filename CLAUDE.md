# pat-project

A single-page, scroll-through reader for a book about songwriting. It mixes
prose, song lyrics, and embedded YouTube performances. The book is organized
into parts and chapters, with an appendix at the end. The app is built with
Create React App and hosted on Firebase.

## Running it

- `npm start` (dev server on :3000), `npm run build`, `npm test`, and
  `npm run storybook` (Storybook on :6006).
- `.env` must hold `REACT_APP_FIREBASE_API_KEY`, `REACT_APP_FIREBASE_PROJECT_ID`
  and `REACT_APP_FIREBASE_APP_ID` (template: `sample.env`). CRA reads `.env`
  only when the server starts, so restart after changing it. Never print or
  commit `.env`.
- `.npmrc` sets `legacy-peer-deps=true` because Storybook 6.5 and React 18
  need it. Keep it.

## Deploy

GitHub Actions run `npm ci && npm run build` and deploy to the Firebase
Hosting project `pat-project-ddfee`:

- A push to `main` goes to the live channel, so merging to `main` publishes.
- A same-repo PR gets a preview channel.

`build/` and `.firebase/` are deploy artifacts. Don't edit them by hand.

## How content flows

- `src/App.js` renders the sections in this order: `Title`, `Preface`,
  `Intro`, then one `Document` per id in `FIREBASE_DOC_ORDER`
  (`src/config/constants.js`). That array sets the chapter order. Each id
  must match a document id in the Firestore collection `main-content`.
- `Preface` and `Intro` are hard-coded in `src/content/*.tsx`. Everything
  else comes from Firestore through `getMainContent()` in `src/firebase.js`.
- The shape of a chapter document: `titles[]`, `partName`, `showSuperTitle`,
  `contentBlocks[]` (each block is `{ type, value }`, and the field name comes
  from `CONTENT_ARRAY_NAME`), `media{}` and `slides{}`.
  - `STRING`: `value` is rendered as a plain paragraph.
  - `FILE`: `value` is a `gs://` Storage URI for a Markdown file.
    `FileContents` downloads it and renders it with `markdown-to-jsx`.
  - `SLIDES`: `value` is a key into the document's `slides` object.
- Inside chapter Markdown, **every link is a player button.** The link
  target is a key into the chapter's `media` object
  (`{ title, youtubeId, youtubeStart, lyricsUrl, shouldHideLyrics }`).
  Clicking it opens `Player`, which shows the YouTube video and the lyrics
  fetched from `lyricsUrl`.
- `FileContents` also overrides `footer` (footnotes) and `blockquote`. The
  footnote override depends on the exact child structure that
  `markdown-to-jsx` produces, so recheck it if that library is upgraded.
- Navigation: each `Section` is an `InView` (react-intersection-observer)
  that calls `setNewChapter` when it scrolls into view. That updates
  `currentIndex`, the URL hash (`#chapterN`), the header's part and chapter
  label, and the previous/next buttons. Don't set `threshold` on
  `Section`: the comment there says it breaks scroll navigation.
- Dark mode is a class on the layout container, and the choice is saved in
  `localStorage.theme`.

## Code conventions

- Components live in `src/components/Name/` as `Name.js`,
  `Name.module.scss` and usually `Name.stories.js`. They use default
  exports, `PropTypes` and `defaultProps`.
- Most code is JS. TS is allowed (`allowJs`, `strict: false`), and
  `src/content` is `.tsx`.
- Styles use SCSS modules. Shared colors are in `src/config/colors.scss`,
  and the Storybook themes are in `.storybook/light.css` and `dark.css`.
- Icons are SVGs in `src/icons/`, imported as
  `{ ReactComponent as X } from "./icons/x.svg"`.
- Static images are served from `public/images/`.
