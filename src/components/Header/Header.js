import React from "react";
import PropTypes from "prop-types";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import styles from "./Header.module.scss";
import { ReactComponent as Hamburger } from "../../icons/hamburger.svg";

const Header = ({ showMenu, toggleMenu, chapterTitle }) => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>
        Sad Celebrations
        <br />
        and Laughable Laments <span>A Lyrical Autobiography</span>
      </p>

      <p className={styles.chapterTitle}>{chapterTitle}</p>

      {showMenu && (
        <ButtonUnstyled className={styles.menuButton} onClick={toggleMenu}>
          <Hamburger className={styles.menuIcon} />
        </ButtonUnstyled>
      )}
    </div>
  );
};

Header.propTypes = {
  showMenu: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
  chapterTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  showMenu: true,
  toggleMenu: undefined,
  chapterTitle: undefined,
};

export default Header;
