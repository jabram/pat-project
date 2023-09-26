import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonUnstyled.module.scss";

const ButtonUnstyled = ({ className, onClick, children }) => {
  return (
    <button
      className={`${styles.unstyledButton} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonUnstyled.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

ButtonUnstyled.defaultProps = {
  className: undefined,
  onClick: undefined,
  children: undefined,
};

export default ButtonUnstyled;
