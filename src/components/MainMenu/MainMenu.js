import React from "react";
import PropTypes from "prop-types";
import styles from "./MainMenu.module.scss";
import { ReactComponent as CloseX } from "./closeX.svg";
import MainMenuPart from "../MainMenuPart/MainMenuPart";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import MainMenuChapter from "../MainMenuChapter/MainMenuChapter";

const MainMenu = ({ isMenuOpen, closeMenu }) => {
  return (
    <div
      className={`${styles.mask} ${isMenuOpen === true ? styles.visible : ""}`}
    >
      <div className={styles.menuContainer}>
        <div className={styles.menuContent}>
          <h2 className={styles.menuTitle}>Table of Contents</h2>

          <MainMenuPart title="Introduction">
            <MainMenuChapter title="Chapter 0: Point of Departure" />
          </MainMenuPart>
          <MainMenuPart title="Part 1: The 70's">
            <MainMenuChapter title="Chapter 1: Goober's Hill Blues" />
            <MainMenuChapter title="Chapter 2: Carbondale" />
            <MainMenuChapter title="Chapter 3: Game Changers" />
            <MainMenuChapter title="Chapter 4: Birth of a Cynic" />
            <MainMenuChapter title="Chapter 5: Awake Before Dawn" />
          </MainMenuPart>
          <MainMenuPart title="Part 2: The 80's">
            <MainMenuChapter title="Chapter 1: Neither Here nor There" />
            <MainMenuChapter title="Chapter 2: The Road to Mount Gretna" />
            <MainMenuChapter title="Chapter 3: Is This Thing On" />
            <MainMenuChapter title="Chapter 4: Born That Way" />
            <MainMenuChapter title="Chapter 5: But It's Art Show Weekend" />
            <MainMenuChapter title="Chapter 6: Hello Old Friends" />
            <MainMenuChapter title="Chapter 7: A Good Talking To" />
            <MainMenuChapter title="Chapter 8: Dutch Blues and Chautauqua Rags" />
          </MainMenuPart>
          <MainMenuPart title="Part 3: Boston and the 90's">
            <MainMenuChapter title="Chapter 1: Love's Illusions" />
            <MainMenuChapter title="Chapter 2: Long Time Comin'" />
            <MainMenuChapter title="Chapter 3: Bad Liver and a Broken Heart" />
            <MainMenuChapter title="Chapter 4: Crescendo and Diminuendo in Booze" />
          </MainMenuPart>
          <MainMenuPart title="Part 4: The 00's">
            <MainMenuChapter title="Chapter 1: The '00s Gutted" />
            <MainMenuChapter title="Chapter 2: Before the Fall" />
            <MainMenuChapter title="Chapter 3: Swim or Sink" />
            <MainMenuChapter title="Chapter 4: Deeper Hole" />
            <MainMenuChapter title="Chapter 5: No Fight Left" />
            <MainMenuChapter title="Chapter 6: I Had No Idea" />
          </MainMenuPart>
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
};

MainMenu.defaultProps = {
  isMenuOpen: false,
  closeMenu: undefined,
};

export default MainMenu;
