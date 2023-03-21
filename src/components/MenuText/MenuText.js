import React from "react";
import PropTypes from "prop-types";
import styles from "./MenuText.module.scss";

const MenuText = ({ text, className }) => {
  return (
    <span className={`${styles.menuText}${className ? className : ""}`}>
      {text}
    </span>
  );
};

MenuText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MenuText.defaultProps = {
  text: undefined,
  className: undefined,
};

export default MenuText;
