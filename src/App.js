import React, { useEffect, useState } from "react";
import { getMainContent } from "./firebase";
import styles from "./App.module.scss";
import { FIREBASE_DOC_ORDER, THEME_OPTIONS } from "./config/constants";
import ButtonUnstyled from "./components/ButtonUnstyled/ButtonUnstyled";
import { ReactComponent as Hamburger } from "./icons/hamburger.svg";
import MainMenu from "./components/MainMenu/MainMenu";
import Title from "./components/Title/Title";
import Document from "./components/Document/Document";

const App = () => {
  const [mainContent, setMainContent] = useState(null);
  const [showMenu] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === THEME_OPTIONS.dark || false
  );

  useEffect(() => {
    fetchContent().then((response) => setMainContent(response));
  }, []);

  const fetchContent = async () => {
    try {
      return await getMainContent();
    } catch (error) {
      console.error("fetchContent error:", error);
    }
  };

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

      <Title />

      {FIREBASE_DOC_ORDER.map((docId) => (
        <Document key={docId} id={docId} data={mainContent?.[docId] || null} />
      ))}

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
