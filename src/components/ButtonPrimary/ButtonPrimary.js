import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonPrimary.module.scss";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";

const ButtonPrimary = ({ className, children }) => {
  return (
    <ButtonUnstyled
      className={`${styles.buttonPrimary} ${className ? className : ""}`}
    >
      {children}
    </ButtonUnstyled>
  );
};

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ButtonPrimary.defaultProps = {
  className: undefined,
  children: undefined,
};

export default ButtonPrimary;
