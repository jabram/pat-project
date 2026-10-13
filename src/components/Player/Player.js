import React from "react";
import PropTypes from "prop-types";
import styles from "./Player.module.scss";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import { ReactComponent as CloseX } from "../../icons/closeX.svg";
import YouTube from "react-youtube";
import Markdown from "markdown-to-jsx";

const Player = ({
  title,
  youtubeId,
  youtubeStart,
  lyrics,
  onClose,
  shouldHideLyrics,
}) => {
  return (
    <div className={`playerModal ${styles.modalContainer}`}>
      <div
        className={`${styles.player} ${
          shouldHideLyrics ? styles.hideLyrics : ""
        }`}
      >
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.youtube}>
          <YouTube
            videoId={youtubeId}
            opts={{ playerVars: { start: youtubeStart } }}
          />
        </div>
        {!shouldHideLyrics && (
          <div className={styles.lyrics}>
            <h3 className={styles.innerTitle}>{title}</h3>
            <Markdown>{lyrics}</Markdown>
          </div>
        )}
        <ButtonUnstyled onClick={onClose} className={styles.closeButton}>
          <CloseX />
        </ButtonUnstyled>
      </div>
    </div>
  );
};

Player.propTypes = {
  title: PropTypes.string.isRequired,
  youtubeId: PropTypes.string.isRequired,
  youtubeStart: PropTypes.number,
  lyrics: PropTypes.string.isRequired,
  shouldHideLyrics: PropTypes.bool,
  onClose: PropTypes.func,
};

Player.defaultProps = {
  title: undefined,
  youtubeId: undefined,
  youtubeStart: 0,
  lyrics: undefined,
  shouldHideLyrics: false,
  onClose: undefined,
};

export default Player;
