import React from "react";
import PropTypes from "prop-types";
import ExpandableBlock from "../ExpandableBlock/ExpandableBlock";
import SingleMedia from "../SingleMedia/SingleMedia";
import Gallery from "../Gallery/Gallery";

const Slides = ({ id, slides }) => {
  return (
    <ExpandableBlock title="Lyrics & Media">
      {slides.length === 1 ? (
        <SingleMedia
          url={slides[0].url}
          alt={slides[0].alt}
          youtubeId={slides[0].youtubeId}
        />
      ) : (
        <Gallery slides={slides} />
      )}
    </ExpandableBlock>
  );
};

Slides.propTypes = {
  id: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string.isRequired,
      youtubeId: PropTypes.string,
    })
  ),
};

Slides.defaultProps = {
  id: undefined,
  slides: undefined,
};

export default Slides;
