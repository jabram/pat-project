import React from "react";
import PropTypes from "prop-types";
import styles from "./MainMenuItem.module.scss";
import MainMenuButton from "../MainMenuButton/MainMenuButton";
import MenuText from "../MenuText/MenuText";

const MainMenuItem = ({ title, onClick, isExpandedContent }) => {
  return (
    <MainMenuButton
      className={`${styles.menuItem} ${
        isExpandedContent ? styles.innerItem : ""
      }`}
      onClick={onClick}
    >
      <MenuText text={title} />
    </MainMenuButton>
  );
};

MainMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isExpandedContent: PropTypes.bool,
};

MainMenuItem.defaultProps = {
  title: undefined,
  onClick: undefined,
  isExpandedContent: false,
};

export default MainMenuItem;
