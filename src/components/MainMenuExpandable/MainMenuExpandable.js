import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./MainMenuExpandable.module.scss";
import { ReactComponent as CaretUp } from "../../icons/caretUp.svg";
import { ReactComponent as CaretDown } from "../../icons/caretDown.svg";
import MenuText from "../MenuText/MenuText";
import MainMenuButton from "../MainMenuButton/MainMenuButton";

const MainMenuExpandable = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.section}>
      <MainMenuButton onClick={() => setIsExpanded(!isExpanded)}>
        <MenuText className={styles.titleText} text={title} />
        {isExpanded ? <CaretUp /> : <CaretDown />}
      </MainMenuButton>
      <motion.div
        className={styles.sectionContent}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={{
          expanded: { height: "auto", padding: "1rem 0 2rem" },
          collapsed: { height: 0, padding: 0 },
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

MainMenuExpandable.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

MainMenuExpandable.defaultProps = {
  title: undefined,
  children: undefined,
};

export default MainMenuExpandable;
