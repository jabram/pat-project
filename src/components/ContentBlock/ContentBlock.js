// rename this to ContentWithPadding?
import React from "react";
import PropTypes from "prop-types";
import styles from "./ContentBlock.module.scss";

const ContentBlock = ({ makeRoomForMenu, children }) => {
  return (
    <div
      className={`${styles.contentBlock} ${
        !makeRoomForMenu ? styles.noMenu : ""
      }`}
    >
      {children}
    </div>
  );
};

ContentBlock.propTypes = {
  makeRoomForMenu: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ContentBlock.defaultProps = {
  makeRoomForMenu: true,
  children: undefined,
};

export default ContentBlock;
