import React from "react";
import PropTypes from "prop-types";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return <div className={styles.layoutContainer}>{children}</div>;
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  children: undefined,
};

export default MainLayout;
