import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import styles from "./MainLayout.module.scss";
import MainMenu from "../MainMenu/MainMenu";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";

const THEME_OPTIONS = {
  light: "light",
  dark: "dark",
};

const MainLayout = ({ showMenu, children }) => {
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
        <ButtonUnstyled onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Hamburger className={styles.menuIcon} />
        </ButtonUnstyled>
      )}
      {children}
      <MainMenu
        isMenuOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(false)}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
};

MainLayout.propTypes = {
  showMenu: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  showMenu: true,
  children: undefined,
};

export default MainLayout;
