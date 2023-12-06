import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.scss";

const Section = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`${styles.section} ${className ? className : ""}`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  id: undefined,
  className: undefined,
  children: undefined,
};

export default Section;
