import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonSecondary.module.scss";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const ButtonSecondary = ({ className, onClick, children }) => {
  return (
    <ButtonPrimary
      className={`${styles.buttonSecondary} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </ButtonPrimary>
  );
};

ButtonSecondary.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

ButtonSecondary.defaultProps = {
  className: undefined,
  onClick: undefined,
  children: undefined,
};

export default ButtonSecondary;
