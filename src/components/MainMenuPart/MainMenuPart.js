import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./MainMenuPart.module.scss";
import { ReactComponent as CaretUp } from "./caretUp.svg";
import { ReactComponent as CaretDown } from "./caretDown.svg";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import MenuText from "../MenuText/MenuText";

const MainMenuPart = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.part}>
      <ButtonUnstyled
        className={styles.titleButton}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <MenuText className={styles.titleText} text={title} />
        {isExpanded ? <CaretUp /> : <CaretDown />}
      </ButtonUnstyled>
      <motion.div
        className={styles.partContent}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={{
          expanded: { height: "auto", padding: "1rem 0 2rem" },
          collapsed: { height: 0, padding: 0 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

MainMenuPart.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

MainMenuPart.defaultProps = {
  title: undefined,
  children: undefined,
};

export default MainMenuPart;
