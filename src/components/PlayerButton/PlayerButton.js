import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import ReactDOMServer from "react-dom/server";
import styles from "./PlayerButton.module.scss";

const PlayerButton = ({ children, href }) => {
  return (
    <span className={styles.playerButtonContainer}>
      <button
        data-tooltip-id={href}
        data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
          <div>
            Listen to: <span className={styles.title}>{children}</span>
          </div>
        )}
        className={styles.playerButton}
        onClick={() => console.log("clicked it!", href)}
      >
        {children}
      </button>
      <Tooltip
        id={href}
        className={styles.tooltip}
        classNameArrow={styles.tooltipArrow}
      />
    </span>
  );
};

PlayerButton.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

PlayerButton.defaultProps = {
  children: undefined,
  href: undefined,
};

export default PlayerButton;
