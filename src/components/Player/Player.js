import React from "react";
import PropTypes from "prop-types";
import styles from "./Player.module.scss";
import ButtonUnstyled from "../ButtonUnstyled/ButtonUnstyled";
import { ReactComponent as CloseX } from "../../icons/closeX.svg";

const Player = ({ mediaId, onClose }) => {
  return (
    <div className={`playerModal ${styles.modalContainer}`}>
      <div className={styles.player}>
        <h2 className={styles.title}>title goes here</h2>
        <div className={styles.youtube}>youtube video goes here</div>
        <div className={styles.lyrics}>
          <h3 className={styles.innerTitle}>title again</h3>
          <p>lyrics go here</p>
          <p>mediaId: {mediaId}</p>
        </div>

        <ButtonUnstyled onClick={onClose} className={styles.closeButton}>
          <CloseX />
        </ButtonUnstyled>
      </div>
    </div>
  );
};

Player.propTypes = {
  mediaId: PropTypes.string,
  onClose: PropTypes.func,
};

Player.defaultProps = {
  mediaId: undefined,
  onClose: undefined,
};

export default Player;
