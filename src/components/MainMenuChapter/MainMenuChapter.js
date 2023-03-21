import React from "react";
import PropTypes from "prop-types";
import styles from "./MainMenuChapter.module.scss";
import MenuText from "../MenuText/MenuText";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";

const MainMenuChapter = ({ title }) => {
  return (
    <ButtonUnstyled className={styles.chapterLink}>
      <MenuText text={title} />
    </ButtonUnstyled>
  );
};

MainMenuChapter.propTypes = {
  title: PropTypes.string.isRequired,
};

MainMenuChapter.defaultProps = {
  title: undefined,
};

export default MainMenuChapter;
