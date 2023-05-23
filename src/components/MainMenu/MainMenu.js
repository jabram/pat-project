import React from "react";
import PropTypes from "prop-types";
import styles from "./MainMenu.module.scss";
import { ReactComponent as CloseX } from "./closeX.svg";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import MainMenuItem from "../MainMenuItem/MainMenuItem";
import MainMenuExpandable from "../MainMenuExpandable/MainMenuExpandable";
import Switch from "../Switch/Switch";

const MainMenu = ({ isMenuOpen, closeMenu, isDarkMode, toggleDarkMode }) => {
  return (
    <div
      className={`${styles.mask} ${isMenuOpen === true ? styles.visible : ""}`}
    >
      <div className={styles.menuContainer}>
        <div className={styles.menuContent}>
          <h2 className={`${styles.menuTitle} ${styles.header}`}>
            Table of Contents
          </h2>

          <MainMenuItem
            title="Introduction"
            onClick={() => console.log("TODO: go to intro")}
          />

          <MainMenuExpandable title="Part 1: The 70's">
            <MainMenuItem
              title="Chapter 1: Goober's Hill Blues"
              onClick={() => console.log("TODO: go to Chapter 1")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 2: Carbondale"
              onClick={() => console.log("TODO: go to Chapter 2")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 3: Game Changers"
              onClick={() => console.log("TODO: go to Chapter 3")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 4: Birth of a Cynic"
              onClick={() => console.log("TODO: go to Chapter 4")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 5: Awake Before Dawn"
              onClick={() => console.log("TODO: go to Chapter 5")}
              isExpandedContent={true}
            />
          </MainMenuExpandable>

          <MainMenuExpandable title="Part 2: The 80's">
            <MainMenuItem
              title="Chapter 1: Neither Here nor There"
              onClick={() => console.log("TODO: go to Chapter 1")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 2: The Road to Mount Gretna"
              onClick={() => console.log("TODO: go to Chapter 2")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 3: Is This Thing On"
              onClick={() => console.log("TODO: go to Chapter 3")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 4: Born That Way"
              onClick={() => console.log("TODO: go to Chapter 4")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 5: But It's Art Show Weekend"
              onClick={() => console.log("TODO: go to Chapter 5")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 6: Hello Old Friends"
              onClick={() => console.log("TODO: go to Chapter 6")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 7: A Good Talking To"
              onClick={() => console.log("TODO: go to Chapter 7")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 8: Dutch Blues and Chautauqua Rags"
              onClick={() => console.log("TODO: go to Chapter 8")}
              isExpandedContent={true}
            />
          </MainMenuExpandable>

          <MainMenuExpandable title="Part 3: Boston and the 90's">
            <MainMenuItem
              title="Chapter 1: Love's Illusions"
              onClick={() => console.log("TODO: go to Chapter 1")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 2: Long Time Comin'"
              onClick={() => console.log("TODO: go to Chapter 2")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 3: Bad Liver and a Broken Heart"
              onClick={() => console.log("TODO: go to Chapter 3")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 4: Crescendo and Diminuendo in Booze"
              onClick={() => console.log("TODO: go to Chapter 4")}
              isExpandedContent={true}
            />
          </MainMenuExpandable>

          <MainMenuExpandable title="Part 4: The 00's">
            <MainMenuItem
              title="Chapter 1: The '00s Gutted"
              onClick={() => console.log("TODO: go to Chapter 1")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 2: Before the Fall"
              onClick={() => console.log("TODO: go to Chapter 2")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 3: Swim or Sink"
              onClick={() => console.log("TODO: go to Chapter 3")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 4: Deeper Hole"
              onClick={() => console.log("TODO: go to Chapter 4")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 5: No Fight Left"
              onClick={() => console.log("TODO: go to Chapter 5")}
              isExpandedContent={true}
            />
            <MainMenuItem
              title="Chapter 6: I Had No Idea"
              onClick={() => console.log("TODO: go to Chapter 6")}
              isExpandedContent={true}
            />
          </MainMenuExpandable>

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
