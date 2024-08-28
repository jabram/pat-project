/**
 * inspired by Framer Motion Image Gallery example:
 * https://codesandbox.io/s/framer-motion-image-gallery-pqvx3
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from "./Gallery.module.scss";
import { ReactComponent as CaretLeft } from "../../icons/caretLeft.svg";
import { ReactComponent as CaretRight } from "../../icons/caretRight.svg";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import YouTube from "react-youtube";
import Caption from "../Caption/Caption";

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Gallery = ({ slides }) => {
  const [[slide, direction], setSlide] = useState([0, 0]);
  const slideIndex = wrap(0, slides.length, slide);

  const slideIt = (newDirection) => {
    setSlide([slide + newDirection, newDirection]);
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.slideContainer}>
        <div className={styles.animationContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className={styles.slide}
              key={slide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  slideIt(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  slideIt(-1);
                }
              }}
            >
              <div className={styles.mediaContainer}>
                <div
                  className={`${styles.media} ${
                    slides[slideIndex].youtubeId ? "" : styles.flexMedia
                  }`}
                >
                  {slides[slideIndex].youtubeId ? (
                    <YouTube
                      videoId={slides[slideIndex].youtubeId}
                      opts={{ playerVars: { cc_load_policy: 1 } }}
                    />
                  ) : (
                    <ButtonUnstyled
                      className={styles.imageButton}
                      onClick={() =>
                        window.open(
                          slides[slideIndex].url,
                          "_blank",
                          "noreferrer"
                        )
                      }
                    >
                      <img
                        src={slides[slideIndex].url}
                        alt={slides[slideIndex].alt}
                      />
                    </ButtonUnstyled>
                  )}
                </div>
              </div>
              <Caption text={slides[slideIndex].alt} />
            </motion.div>
          </AnimatePresence>
        </div>
        <ButtonUnstyled className={styles.leftButt} onClick={() => slideIt(1)}>
          <CaretLeft />
        </ButtonUnstyled>
        <ButtonUnstyled
          className={styles.rightButt}
          onClick={() => slideIt(-1)}
        >
          <CaretRight />
        </ButtonUnstyled>
      </div>
      <div className={styles.thumbnailContainer}>
        {slides.map((slide, i) => (
          <ButtonUnstyled
            key={i}
            onClick={() => slideIt(i - slideIndex)}
            className={slideIndex === i ? styles.selected : ""}
          >
            <img
              src={slide.thumbUrl ? slide.thumbUrl : slide.url}
              alt={slide.alt}
            />
          </ButtonUnstyled>
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string.isRequired,
      youtubeId: PropTypes.string,
      thumbUrl: PropTypes.string,
    })
  ).isRequired,
};

Gallery.defaultProps = {
  slides: undefined,
};

export default Gallery;
