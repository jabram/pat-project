import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import ReactDOMServer from "react-dom/server";
import styles from "./PlayerButton.module.scss";

const PlayerButton = ({ children: title, href: mediaId, onClick }) => {
  return (
    <span className={styles.playerButtonContainer}>
      <button
        data-tooltip-id={mediaId}
        data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
          <div>
            Listen to: <span className={styles.title}>{title}</span>
          </div>
        )}
        className={styles.playerButton}
        onClick={() => onClick(mediaId)}
      >
        {title}
      </button>
      <Tooltip
        id={mediaId}
        className={styles.tooltip}
        classNameArrow={styles.tooltipArrow}
      />
    </span>
  );
};

PlayerButton.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

PlayerButton.defaultProps = {
  children: undefined,
  href: undefined,
  onClick: undefined,
};

export default PlayerButton;
