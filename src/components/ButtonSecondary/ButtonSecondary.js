import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonSecondary.module.scss";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const ButtonSecondary = ({ className, children }) => {
  return (
    <ButtonPrimary
      className={`${styles.buttonSecondary} ${className ? className : ""}`}
    >
      {children}
    </ButtonPrimary>
  );
};

ButtonSecondary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ButtonSecondary.defaultProps = {
  className: undefined,
  children: undefined,
};

export default ButtonSecondary;
