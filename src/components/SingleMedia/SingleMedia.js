import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleMedia.module.scss";
import YouTube from "react-youtube";

const SingleMedia = ({ url, alt, youtubeId }) => {
  return (
    <div className={styles.mediaContainer}>
      {youtubeId ? (
        <YouTube videoId={youtubeId} />
      ) : (
        <img className={styles.image} src={url} alt={alt} />
      )}
    </div>
  );
};

SingleMedia.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  youtubeId: PropTypes.string,
};

SingleMedia.defaultProps = {
  url: undefined,
  alt: undefined,
  youtubeId: undefined,
};

export default SingleMedia;
