import React from "react";
import PropTypes from "prop-types";
import styles from "./MainMenu.module.scss";
import { ReactComponent as CloseX } from "./closeX.svg";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";

const MainMenu = ({ isMenuOpen, closeMenu }) => {
  return (
    <div
      className={`${styles.mask} ${isMenuOpen === true ? styles.visible : ""}`}
    >
      <div className={styles.menuContainer}>
        <div className={styles.menuContent}>
          <h2 className={styles.menuTitle}>Table of Contents</h2>
          <p>
            hola menu content goes here. if it's long it'll wrap to two lines.
          </p>
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
