import React from "react";
import PropTypes from "prop-types";
import styles from "./StoryContainer.module.scss";

const StoryContainer = ({ makeRoomForMenu, children }) => {
  return (
    <div
      className={`${styles.storyContainer} ${
        !makeRoomForMenu ? styles.noMenu : ""
      }`}
    >
      {children}
    </div>
  );
};

StoryContainer.propTypes = {
  makeRoomForMenu: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

StoryContainer.defaultProps = {
  makeRoomForMenu: true,
  children: undefined,
};

export default StoryContainer;
