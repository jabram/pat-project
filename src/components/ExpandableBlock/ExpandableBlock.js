import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./ExpandableBlock.module.scss";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { ReactComponent as CaretUp } from "../../icons/caretUp.svg";
import { ReactComponent as CaretDown } from "../../icons/caretDown.svg";

const ExpandableBlock = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className={styles.section}>
      <ButtonSecondary
        className={`${styles.toggleButton} ${!isExpanded ? styles.closed : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title ? title : isExpanded ? "Collapse" : "Expand"}
        {isExpanded ? <CaretUp /> : <CaretDown />}
      </ButtonSecondary>
      <motion.div
        className={styles.expandableBlock}
        initial="expanded"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={{
          expanded: {
            height: "auto",
            padding: "3rem",
            transition: { when: "beforeChildren" },
          },
          collapsed: {
            height: 16,
            padding: "0 3rem",
            transition: { when: "afterChildren" },
          },
        }}
      >
        <motion.div
          variants={{
            expanded: { opacity: 1 },
            collapsed: { opacity: 0 },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

ExpandableBlock.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ExpandableBlock.defaultProps = {
  title: undefined,
  children: undefined,
};

export default ExpandableBlock;
