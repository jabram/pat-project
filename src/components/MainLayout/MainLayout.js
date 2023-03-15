import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ showMenu, children }) => {
  return (
    <div className={styles.layoutContainer}>
      {showMenu && <Hamburger className={styles.menuIcon} />}
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  showMenu: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  showMenu: false,
  children: undefined,
};

export default MainLayout;
