import React, { useEffect, useState } from "react";
import { getMainContent } from "./firebase";
import styles from "./App.module.scss";
import { FIREBASE_DOC_ORDER, THEME_OPTIONS } from "./config/constants";
import MainMenu from "./components/MainMenu/MainMenu";
import Title from "./components/Title/Title";
import Document from "./components/Document/Document";
import Header from "./components/Header/Header";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";
import { ReactComponent as CaretUp } from "./icons/caretUp.svg";
import { ReactComponent as CaretDown } from "./icons/caretDown.svg";

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

  const getChapterTitle = (index) => {
    const currentId = FIREBASE_DOC_ORDER[index];
    const titles = mainContent?.[currentId]?.titles;
    return titles ? titles[0] : null;
  };

  const scrollToIndex = (newIndex) => {
    const chapterId = FIREBASE_DOC_ORDER[newIndex];
    const chapter = document.getElementById(chapterId);
    chapter.scrollIntoView({ behavior: "smooth" });
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
        chapterTitle={getChapterTitle(currentIndex)}
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

      {currentIndex > 0 && !!getChapterTitle(currentIndex - 1) && (
        <ButtonPrimary
          className={`${styles.navButton} ${styles.previousChapter}`}
          onClick={() => scrollToIndex(currentIndex - 1)}
        >
          <div>
            <span>Previous:</span>
            <p>{getChapterTitle(currentIndex - 1)}</p>
          </div>
          <CaretUp />
        </ButtonPrimary>
      )}

      {currentIndex < FIREBASE_DOC_ORDER.length - 1 &&
        !!getChapterTitle(currentIndex + 1) && (
          <ButtonPrimary
            className={`${styles.navButton} ${styles.nextChapter}`}
            onClick={() => scrollToIndex(currentIndex + 1)}
          >
            <div>
              <span>Up Next:</span>
              <p>{getChapterTitle(currentIndex + 1)}</p>
            </div>
            <CaretDown />
          </ButtonPrimary>
        )}

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
