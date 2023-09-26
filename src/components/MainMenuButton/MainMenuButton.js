import React from "react";
import PropTypes from "prop-types";
import styles from "./MainMenuButton.module.scss";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";

const MainMenuButton = ({ className, onClick, children }) => {
  return (
    <ButtonUnstyled
      className={`${styles.menuButton} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </ButtonUnstyled>
  );
};

MainMenuButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

MainMenuButton.defaultProps = {
  className: undefined,
  onClick: undefined,
  children: undefined,
};

export default MainMenuButton;
