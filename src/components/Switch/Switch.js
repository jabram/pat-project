import React from "react";
import PropTypes from "prop-types";
import styles from "./Switch.module.scss";

const Switch = ({ isOn }) => {
  return (
    <span className={`${styles.switchContainer} ${isOn ? styles.isOn : ""}`}>
      <span className={styles.switchHead}></span>
    </span>
  );
};

Switch.propTypes = {
  isOn: PropTypes.bool,
};

Switch.defaultProps = {
  isOn: false,
};

export default Switch;
