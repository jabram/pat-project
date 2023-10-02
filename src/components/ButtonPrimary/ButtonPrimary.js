import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonPrimary.module.scss";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";

const ButtonPrimary = ({ className, onClick, children }) => {
  return (
    <ButtonUnstyled
      className={`${styles.buttonPrimary} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </ButtonUnstyled>
  );
};

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

ButtonPrimary.defaultProps = {
  className: undefined,
  onClick: undefined,
  children: undefined,
};

export default ButtonPrimary;
