import React from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.scss";

const Gallery = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topper}></div>
      <div className={styles.gallery}>{children}</div>
      <div className={styles.bottom}></div>
    </div>
  );
};

Gallery.propTypes = {
  children: PropTypes.node,
};

Gallery.defaultProps = {
  children: undefined,
};

export default Gallery;
