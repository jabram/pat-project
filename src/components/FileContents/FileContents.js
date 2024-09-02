import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { downloadStorageFile } from "../../firebase";
import Markdown from "markdown-to-jsx";
import ContentBlock from "../ContentBlock/ContentBlock";
import PlayerButton from "../PlayerButton/PlayerButton";

const FileContents = ({ fileUrl }) => {
  const [content, setContent] = useState(null);

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
            },
          },
        }}
      >
        {content || "### Loading..."}
      </Markdown>
    </ContentBlock>
  );
};

FileContents.propTypes = {
  fileUrl: PropTypes.string.isRequired,
};

FileContents.defaultProps = {
  fileUrl: undefined,
};

export default FileContents;
