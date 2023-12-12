import React from "react";
import PropTypes from "prop-types";
import styles from "./Caption.module.scss";

const Caption = ({ text }) => {
  return <p className={styles.caption}>{text}</p>;
};

Caption.propTypes = {
  text: PropTypes.string,
};

Caption.defaultProps = {
  text: undefined,
};

export default Caption;
