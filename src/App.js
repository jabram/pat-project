import React, { useEffect, useState } from "react";
import { getMainContent } from "./firebase";
import styles from "./App.module.scss";
import { FIREBASE_DOC_ORDER, THEME_OPTIONS } from "./config/constants";
import MainMenu from "./components/MainMenu/MainMenu";
import Title from "./components/Title/Title";
import Document from "./components/Document/Document";
import Header from "./components/Header/Header";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(null);
  const [mainContent, setMainContent] = useState(null);
  const [showMenu] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === THEME_OPTIONS.dark || false
  );

  // updates the route when currentIndex is updated
  useEffect(() => {
    const newId = FIREBASE_DOC_ORDER[currentIndex];
    if (newId) {
      navigate(`#${newId}`);
    } else {
      navigate(); // root route, for title component
    }
  }, [currentIndex, navigate]);

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

  const getChapterTitle = () => {
    const currentId = FIREBASE_DOC_ORDER[currentIndex];
    const titles = mainContent?.[currentId]?.titles;
    return titles ? titles[0] : null;
  };

  return (
    <div
      className={`${styles.layoutContainer} ${
        isDarkMode ? styles.darkMode : ""
      }`}
    >
      <Header
        showMenu={showMenu}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        chapterTitle={getChapterTitle()}
      />

      <Title setNewChapter={() => setCurrentIndex(null)} />

      {FIREBASE_DOC_ORDER.map((docId, index) => (
        <Document
          key={docId}
          id={docId}
          data={mainContent?.[docId] || null}
          setNewChapter={() => setCurrentIndex(index)}
        />
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
