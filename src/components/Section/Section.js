import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.scss";
import { InView } from "react-intersection-observer";

const Section = ({ id, className, children, setNewChapter }) => {
  return (
    <InView
      as="section"
      // setting threshold breaks scroll navigation when there's content
      // works fine when printing dummy content
      // threshold={0.5}
      delay={500}
      onChange={(inView) => inView && setNewChapter()}
      id={id}
      className={`${styles.section} ${className ? className : ""}`}
    >
      {children}
    </InView>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  setNewChapter: PropTypes.func,
};

Section.defaultProps = {
  id: undefined,
  className: undefined,
  children: undefined,
  setNewChapter: undefined,
};

export default Section;
