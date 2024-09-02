import React from "react";
import PropTypes from "prop-types";
import styles from "./MainMenu.module.scss";
import { ReactComponent as CloseX } from "../../icons/closeX.svg";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import MainMenuItem from "../MainMenuItem/MainMenuItem";
import MainMenuExpandable from "../MainMenuExpandable/MainMenuExpandable";
import Switch from "../Switch/Switch";

const MainMenu = ({ isMenuOpen, closeMenu, isDarkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return (
    <div
      className={`${styles.mask} ${isMenuOpen === true ? styles.visible : ""}`}
      onClick={closeMenu}
    >
      <div
        className={styles.menuContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.menuContent}>
          <h2 className={`${styles.menuTitle} ${styles.header}`}>
            Table of Contents
          </h2>

          <MainMenuItem
            title="Introduction"
            onClick={() => scrollToSection("intro")}
          />

          <MainMenuExpandable title="Part 1: The 70's">
            <MainMenuItem
              title="Chapter 0: Point of Departure"
              onClick={() => scrollToSection("chapter0")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 1: Goober's Hill Blues"
              onClick={() => scrollToSection("chapter1")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 2: Carbondale"
              onClick={() => scrollToSection("chapter2")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 3: Game Changers"
              onClick={() => scrollToSection("chapter3")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 4: Birth of a Cynic"
              onClick={() => scrollToSection("chapter4")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 5: Awake Before Dawn"
              onClick={() => scrollToSection("chapter5")}
              isExpandedContent={true}
            />
          </MainMenuExpandable>

          <MainMenuExpandable title="Part 2: The 80's">
            <MainMenuItem
              title="Chapter 6: Neither Here nor There"
              onClick={() => scrollToSection("chapter6")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 7: The Road to Mount Gretna"
              onClick={() => scrollToSection("chapter7")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 8: Is This Thing On?"
              onClick={() => scrollToSection("chapter8")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 9: Born That Way"
              onClick={() => scrollToSection("chapter9")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 10: But It's Art Show Weekend"
              onClick={() => scrollToSection("chapter10")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 11: Hello Old Friends"
              onClick={() => scrollToSection("chapter11")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 12: A Good Talking To"
              onClick={() => scrollToSection("chapter12")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 13: Dutch Blues and Chautauqua Rags"
              onClick={() => scrollToSection("chapter13")}
              isExpandedContent={true}
            />
          </MainMenuExpandable>

          <MainMenuExpandable title="Part 3: Boston and the 90's">
            <MainMenuItem
              title="Chapter 14: Love's Illusions"
              onClick={() => scrollToSection("chapter14")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 15: Long Time Coming"
              onClick={() => scrollToSection("chapter15")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 16: Bad Liver and a Broken Heart (In Brighton)"
              onClick={() => scrollToSection("chapter16")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 17: Crescendo and Diminuendo in Booze"
              onClick={() => scrollToSection("chapter17")}
              isExpandedContent={true}
            />
          </MainMenuExpandable>

          <MainMenuExpandable title="Part 4: The 00's">
            <MainMenuItem
              title="Chapter 18: Gutted"
              onClick={() => scrollToSection("chapter18")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 19: Before the Fall"
              onClick={() => scrollToSection("chapter19")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 20: Swim or Sink"
              onClick={() => scrollToSection("chapter20")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 21: Deeper Hole"
              onClick={() => scrollToSection("chapter21")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 22: No Fight Left"
              onClick={() => scrollToSection("chapter22")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 23: I Had No Idea"
              onClick={() => scrollToSection("chapter23")}
              isExpandedContent={true}
            />
          </MainMenuExpandable>

          <MainMenuItem
            title="Appendix-itis"
            onClick={() => scrollToSection("appendix-itis")}
          />

          <h2 className={styles.menuTitle}>Options</h2>

          <MainMenuItem
            title="Launch Audio Player"
            onClick={() => console.log("TODO: launch audio player")}
          />

          <MainMenuItem
            title="Dark Mode"
            onClick={toggleDarkMode}
            additionalContent={<Switch isOn={isDarkMode} />}
          />
        </div>

        <ButtonUnstyled onClick={closeMenu} className={styles.closeButton}>
          <CloseX />
        </ButtonUnstyled>
      </div>
    </div>
  );
};

MainMenu.propTypes = {
  isMenuOpen: PropTypes.bool,
  closeMenu: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func.isRequired,
};

MainMenu.defaultProps = {
  isMenuOpen: false,
  closeMenu: undefined,
  isDarkMode: false,
  toggleDarkMode: undefined,
};

export default MainMenu;
