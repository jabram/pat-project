import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.scss";

const Section = ({ id, children }) => {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  id: undefined,
  children: undefined,
};

export default Section;
