import React from "react";
import PropTypes from "prop-types";
import styles from "./Caption.module.scss";
import Markdown from "markdown-to-jsx";

const Caption = ({ text }) => {
  return (
    <p className={styles.caption}>
      <Markdown>{text}</Markdown>
    </p>
  );
};

Caption.propTypes = {
  text: PropTypes.node, // allow strings with markup
};

Caption.defaultProps = {
  text: undefined,
};

export default Caption;
