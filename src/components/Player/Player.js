import React from "react";
import PropTypes from "prop-types";
import styles from "./Player.module.scss";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import { ReactComponent as CloseX } from "../../icons/closeX.svg";
import YouTube from "react-youtube";

const Player = ({ title, youtubeId, lyrics, onClose }) => {
  return (
    <div className={`playerModal ${styles.modalContainer}`}>
      <div className={styles.player}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.youtube}>
          <YouTube videoId={youtubeId} />
        </div>
        <div className={styles.lyrics}>
          <h3 className={styles.innerTitle}>{title}</h3>
          <p>{lyrics}</p>
        </div>

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
  lyrics: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

Player.defaultProps = {
  title: undefined,
  youtubeId: undefined,
  lyrics: undefined,
  onClose: undefined,
};

export default Player;
