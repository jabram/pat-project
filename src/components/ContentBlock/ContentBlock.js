import React from "react";
import PropTypes from "prop-types";
import styles from "./ContentBlock.module.scss";

const ContentBlock = ({ makeRoomForMenu, className, children }) => {
  return (
    <div
      className={`${styles.contentBlock} ${
        !makeRoomForMenu ? styles.noMenu : ""
      } ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

ContentBlock.propTypes = {
  makeRoomForMenu: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ContentBlock.defaultProps = {
  makeRoomForMenu: true,
  className: undefined,
  children: undefined,
};

export default ContentBlock;
