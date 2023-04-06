import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import styles from "./MainLayout.module.scss";
import MainMenu from "../MainMenu/MainMenu";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";

const MainLayout = ({ showMenu, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.layoutContainer}>
      {showMenu && (
        <ButtonUnstyled onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Hamburger className={styles.menuIcon} />
        </ButtonUnstyled>
      )}
      {children}
      <MainMenu
        isMenuOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(false)}
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
