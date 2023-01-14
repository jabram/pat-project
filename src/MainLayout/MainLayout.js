import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ showMenu, children }) => {
  return (
    <div className={styles.layoutContainer}>
      {showMenu && (
        <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
      )}
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
