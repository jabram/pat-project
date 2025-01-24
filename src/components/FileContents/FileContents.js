import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { downloadStorageFile } from "../../firebase";
import Markdown from "markdown-to-jsx";
import ContentBlock from "../ContentBlock/ContentBlock";
import PlayerButton from "../PlayerButton/PlayerButton";
import Player from "../Player/Player";

const LYRICS_LOADING_TEXT = "Loading lyrics...";

const FileContents = ({ fileUrl, media }) => {
  const [content, setContent] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [lyrics, setLyrics] = useState(LYRICS_LOADING_TEXT);

  const fetchContent = useCallback(async (url) => {
    try {
      return await downloadStorageFile(url);
    } catch (error) {
      console.error("fetchContent error:", error);
    }
  }, []);

  useEffect(() => {
    if (!content) {
      fetchContent(fileUrl).then((response) => setContent(response));
    }
  }, [fileUrl, content, fetchContent]);

  const closePlayer = () => {
    setCurrentPlayer(null);
    setLyrics(LYRICS_LOADING_TEXT);
  };

  return (
    <ContentBlock>
      <Markdown
        // all a tags are treated as buttons to launch video/lyrics player
        options={{
          overrides: {
            a: {
              component: PlayerButton,
              props: {
                onClick: (mediaId) => {
                  fetchContent(media[mediaId].lyricsUrl).then((response) =>
                    setLyrics(response)
                  );
                  setCurrentPlayer(mediaId);
                },
              },
            },
          },
        }}
      >
        {content || "### Loading..."}
      </Markdown>
      {currentPlayer && (
        <Player
          title={media[currentPlayer].title}
          youtubeId={media[currentPlayer].youtubeId}
          lyrics={lyrics}
          onClose={closePlayer}
        />
      )}
    </ContentBlock>
  );
};

FileContents.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  media: PropTypes.object,
};

FileContents.defaultProps = {
  fileUrl: undefined,
  media: undefined,
};

export default FileContents;
