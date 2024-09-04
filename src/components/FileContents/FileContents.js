import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { downloadStorageFile } from "../../firebase";
import Markdown from "markdown-to-jsx";
import ContentBlock from "../ContentBlock/ContentBlock";
import PlayerButton from "../PlayerButton/PlayerButton";
import Player from "../Player/Player";

const FileContents = ({ fileUrl, media }) => {
  const [content, setContent] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  useEffect(() => {
    fetchContent().then((response) => setContent(response));
  });

  const fetchContent = async () => {
    try {
      return await downloadStorageFile(fileUrl);
    } catch (error) {
      console.error("fetchContent error:", error);
    }
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
                  setCurrentPlayer(mediaId.replace("#", ""));
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
          mediaId={currentPlayer}
          title={media[currentPlayer].title}
          youtubeId={media[currentPlayer].youtubeId}
          lyrics={media[currentPlayer].lyrics}
          onClose={() => setCurrentPlayer(null)}
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
