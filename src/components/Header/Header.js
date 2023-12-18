import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import styles from "./Header.module.scss";
import { ReactComponent as Hamburger } from "../../icons/hamburger.svg";

// inspired by https://codepen.io/codemzy/pen/vYWjzNY?editors=1010
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const Header = ({ showMenu, toggleMenu, chapterTitle }) => {
  const scrollDirection = useScrollDirection();

  const getAnimation = () => {
    if (!chapterTitle) {
      return "hidden";
    }
    if (scrollDirection === "down") {
      return "visible";
    } else {
      return "hidden";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.header}
        initial={chapterTitle ? "visible" : "hidden"}
        animate={getAnimation()}
        variants={{
          visible: { top: 0 },
          hidden: { top: "-100px" },
        }}
      >
        <p className={styles.title}>
          Sad Celebrations
          <br />
          and Laughable Laments <span>A Lyrical Autobiography</span>
        </p>

        <p className={styles.chapterTitle}>{chapterTitle}</p>

        {showMenu && (
          <ButtonUnstyled className={styles.menuButton} onClick={toggleMenu}>
            <Hamburger className={styles.menuIcon} />
          </ButtonUnstyled>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

Header.propTypes = {
  showMenu: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
  chapterTitle: PropTypes.string,
};

Header.defaultProps = {
  showMenu: true,
  toggleMenu: undefined,
  chapterTitle: undefined,
};

export default Header;
