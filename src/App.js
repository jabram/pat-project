import React, { useState } from "react";
import styles from "./App.module.scss";
import Gallery from "./components/Gallery/Gallery";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import ExpandableBlock from "./components/ExpandableBlock/ExpandableBlock";
import { THEME_OPTIONS } from "./config/constants";
import ButtonUnstyled from "./components/ButtonUnstyled/ButtonUnstyled";
import { ReactComponent as Hamburger } from "./icons/hamburger.svg";
import MainMenu from "./components/MainMenu/MainMenu";
import Section from "./components/Section/Section";

const App = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === THEME_OPTIONS.dark || false
  );

  const toggleDarkMode = () => {
    localStorage.setItem(
      "theme",
      isDarkMode ? THEME_OPTIONS.light : THEME_OPTIONS.dark
    );
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${styles.layoutContainer} ${
        isDarkMode ? styles.darkMode : ""
      }`}
    >
      {showMenu && (
        <ButtonUnstyled
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Hamburger className={styles.menuIcon} />
        </ButtonUnstyled>
      )}

      <Section id="intro">
        <p>this is the whole main layout deal</p>
        <ContentBlock makeRoomForMenu={showMenu}>
          <h2>Intro</h2>
          <p>here's a story</p>
          <p>
            Culpa fugiat ad tempor dolor enim anim quis voluptate qui consequat
            labore.
          </p>
          <p>
            Elit do sit exercitation veniam amet aliquip voluptate magna
            exercitation tempor occaecat proident quis proident. Nulla duis do
            do exercitation excepteur dolor.
          </p>
          <p>
            Anim dolor id consequat minim exercitation in culpa cupidatat nisi
            mollit id in.
          </p>
          <p>
            Ullamco magna dolor ex voluptate proident sit enim dolore aliqua
            esse adipisicing eu. Pariatur veniam occaecat sunt eiusmod
            reprehenderit eu commodo eu nisi eu.
          </p>
          <p>Quis aliquip quis ex do excepteur ipsum sint laborum.</p>
          <p>
            Do commodo sunt elit non exercitation amet do et anim ullamco
            reprehenderit nisi in nisi.
          </p>
          <p>
            Ullamco consectetur do aute qui ut. Veniam deserunt nulla proident
            commodo consectetur. Cillum dolor ex reprehenderit eiusmod mollit
            nostrud cillum.
          </p>
          <p>
            Elit cupidatat labore non id ea eiusmod incididunt mollit officia et
            qui fugiat incididunt.
          </p>
          <p>
            Aliqua sunt consectetur magna sint aute tempor officia. In anim non
            consequat et occaecat amet irure magna dolor occaecat exercitation.
          </p>
          <p>
            Exercitation sint consequat Lorem ex duis minim sunt eu laborum
            magna consectetur officia.
          </p>
          <p>
            Anim reprehenderit aliqua nostrud exercitation ipsum do mollit
            mollit cupidatat consectetur. Sunt voluptate adipisicing enim
            laboris.
          </p>
          <p>
            Quis tempor exercitation cillum cupidatat laboris ipsum eiusmod ea.
          </p>
          <p>
            Exercitation sit ipsum in ullamco occaecat consequat qui nisi
            excepteur. Ea sit adipisicing tempor et eu reprehenderit.
          </p>
          <p>
            Culpa fugiat ad tempor dolor enim anim quis voluptate qui consequat
            labore.
          </p>
          <p>
            Elit do sit exercitation veniam amet aliquip voluptate magna
            exercitation tempor occaecat proident quis proident. Nulla duis do
            do exercitation excepteur dolor.
          </p>
          <p>
            Anim dolor id consequat minim exercitation in culpa cupidatat nisi
            mollit id in.
          </p>
          <p>
            Ullamco magna dolor ex voluptate proident sit enim dolore aliqua
            esse adipisicing eu. Pariatur veniam occaecat sunt eiusmod
            reprehenderit eu commodo eu nisi eu.
          </p>
          <p>Quis aliquip quis ex do excepteur ipsum sint laborum.</p>
          <p>
            Do commodo sunt elit non exercitation amet do et anim ullamco
            reprehenderit nisi in nisi.
          </p>
          <p>
            Ullamco consectetur do aute qui ut. Veniam deserunt nulla proident
            commodo consectetur. Cillum dolor ex reprehenderit eiusmod mollit
            nostrud cillum.
          </p>
          <p>
            Elit cupidatat labore non id ea eiusmod incididunt mollit officia et
            qui fugiat incididunt.
          </p>
          <p>
            Aliqua sunt consectetur magna sint aute tempor officia. In anim non
            consequat et occaecat amet irure magna dolor occaecat exercitation.
          </p>
          <p>
            Exercitation sint consequat Lorem ex duis minim sunt eu laborum
            magna consectetur officia.
          </p>
          <p>
            Anim reprehenderit aliqua nostrud exercitation ipsum do mollit
            mollit cupidatat consectetur. Sunt voluptate adipisicing enim
            laboris.
          </p>
          <p>
            Quis tempor exercitation cillum cupidatat laboris ipsum eiusmod ea.
          </p>
          <p>
            Exercitation sit ipsum in ullamco occaecat consequat qui nisi
            excepteur. Ea sit adipisicing tempor et eu reprehenderit.
          </p>
          <p>
            Culpa fugiat ad tempor dolor enim anim quis voluptate qui consequat
            labore.
          </p>
          <p>
            Elit do sit exercitation veniam amet aliquip voluptate magna
            exercitation tempor occaecat proident quis proident. Nulla duis do
            do exercitation excepteur dolor.
          </p>
          <p>
            Anim dolor id consequat minim exercitation in culpa cupidatat nisi
            mollit id in.
          </p>
          <p>
            Ullamco magna dolor ex voluptate proident sit enim dolore aliqua
            esse adipisicing eu. Pariatur veniam occaecat sunt eiusmod
            reprehenderit eu commodo eu nisi eu.
          </p>
          <p>Quis aliquip quis ex do excepteur ipsum sint laborum.</p>
          <p>
            Do commodo sunt elit non exercitation amet do et anim ullamco
            reprehenderit nisi in nisi.
          </p>
          <p>
            Ullamco consectetur do aute qui ut. Veniam deserunt nulla proident
            commodo consectetur. Cillum dolor ex reprehenderit eiusmod mollit
            nostrud cillum.
          </p>
          <p>
            Elit cupidatat labore non id ea eiusmod incididunt mollit officia et
            qui fugiat incididunt.
          </p>
          <p>
            Aliqua sunt consectetur magna sint aute tempor officia. In anim non
            consequat et occaecat amet irure magna dolor occaecat exercitation.
          </p>
        </ContentBlock>
        <ExpandableBlock title="Part 1, Chapter 1 Lyrics & Media">
          <Gallery
            slides={[
              {
                url: "https://firebasestorage.googleapis.com/v0/b/pat-project-ddfee.appspot.com/o/test1.png?alt=media&token=15f52b19-cd95-4278-b40c-2f21dc68883c&_gl=1*kmmloc*_ga*MTY5MTE0NjczOC4xNjc5NTk0ODMw*_ga_CW55HF8NVT*MTY5NzEyMDMyNS45NS4xLjE2OTcxMjA1OTUuMTcuMC4w",
                alt: "we need alt text here",
                youtubeId: "gZhQXJOK-dk",
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/pat-project-ddfee.appspot.com/o/test2.png?alt=media&token=40308ede-2153-491f-94c6-6afe478ed310&_gl=1*mjekee*_ga*MTY5MTE0NjczOC4xNjc5NTk0ODMw*_ga_CW55HF8NVT*MTY5NzEyMDMyNS45NS4xLjE2OTcxMjA2MDguNC4wLjA.",
                alt: "",
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/pat-project-ddfee.appspot.com/o/test3.png?alt=media&token=7e03fd4f-ea4b-4952-9a46-0f8b3a6b01ab&_gl=1*1e6t4qm*_ga*MTY5MTE0NjczOC4xNjc5NTk0ODMw*_ga_CW55HF8NVT*MTY5NzEyMDMyNS45NS4xLjE2OTcxMjA1NTIuNjAuMC4w",
                alt: "",
              },
            ]}
          />
        </ExpandableBlock>
        <ContentBlock makeRoomForMenu={showMenu}>
          <p>here's another story</p>
          <p>
            Exercitation sint consequat Lorem ex duis minim sunt eu laborum
            magna consectetur officia.
          </p>
          <p>
            Anim reprehenderit aliqua nostrud exercitation ipsum do mollit
            mollit cupidatat consectetur. Sunt voluptate adipisicing enim
            laboris.
          </p>
          <p>
            Quis tempor exercitation cillum cupidatat laboris ipsum eiusmod ea.
          </p>
          <p>
            Exercitation sit ipsum in ullamco occaecat consequat qui nisi
            excepteur. Ea sit adipisicing tempor et eu reprehenderit.
          </p>
          <p>
            Anim reprehenderit aliqua nostrud exercitation ipsum do mollit
            mollit cupidatat consectetur. Sunt voluptate adipisicing enim
            laboris.
          </p>
          <p>
            Quis tempor exercitation cillum cupidatat laboris ipsum eiusmod ea.
          </p>
          <p>
            Exercitation sit ipsum in ullamco occaecat consequat qui nisi
            excepteur. Ea sit adipisicing tempor et eu reprehenderit.
          </p>
          <p>
            Culpa fugiat ad tempor dolor enim anim quis voluptate qui consequat
            labore.
          </p>
          <p>
            Elit do sit exercitation veniam amet aliquip voluptate magna
            exercitation tempor occaecat proident quis proident. Nulla duis do
            do exercitation excepteur dolor.
          </p>
        </ContentBlock>
      </Section>

      <Section id="section1-1">
        <ContentBlock makeRoomForMenu={true}>
          <h2>Chapter 1: Goober's Hill Blues</h2>
        </ContentBlock>
      </Section>

      <Section id="section1-2">
        <ContentBlock makeRoomForMenu={true}>
          <h2>Chapter 2: Carbondale</h2>
        </ContentBlock>
      </Section>

      <Section id="section1-3">
        <ContentBlock false={true}>
          <h2>Chapter 3: Game Changers</h2>
        </ContentBlock>
      </Section>

      <MainMenu
        isMenuOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(false)}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
};

export default App;
