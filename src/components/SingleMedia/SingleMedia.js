import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleMedia.module.scss";
import YouTube from "react-youtube";
import Caption from "../Caption/Caption";

const SingleMedia = ({ url, alt, youtubeId }) => {
  return (
    <div>
      <div className={styles.mediaContainer}>
        <div className={`${styles.media} ${youtubeId ? "" : styles.flexMedia}`}>
          {youtubeId ? (
            <YouTube videoId={youtubeId} />
          ) : (
            <img src={url} alt={alt} />
          )}
        </div>
      </div>
      <Caption text={alt} />
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
