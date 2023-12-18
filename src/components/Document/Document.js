import React from "react";
import PropTypes from "prop-types";
import Section from "../Section/Section";
import ContentBlock from "../ContentBlock/ContentBlock";
import FileContents from "../FileContents/FileContents";
import { CONTENT_ARRAY_NAME } from "../../config/constants";
import Slides from "../Slides/Slides";

// This component displays data from Firebase Documents
// Could contain arrays for titles and contentBlocks
const Document = ({ id, data, setNewChapter }) => {
  return (
    <Section id={id} setNewChapter={setNewChapter}>
      {data ? (
        <>
          {data.titles && (
            <ContentBlock>
              {data.titles.map((title, index) => (
                <h3 key={`${id}-title${index}}`}>{title}</h3>
              ))}
            </ContentBlock>
          )}
          {data[CONTENT_ARRAY_NAME] &&
            data[CONTENT_ARRAY_NAME].map((section, index) => {
              switch (section.type) {
                case "FILE":
                  return (
                    <FileContents
                      key={`${id}-section${index}`}
                      fileUrl={section.value}
                    />
                  );
                case "SLIDES":
                  return (
                    <Slides
                      key={`${id}-section${index}`}
                      id={id}
                      slides={data.slides[section.value]}
                    />
                  );
                case "STRING":
                default:
                  return (
                    <ContentBlock key={`${id}-section${index}`}>
                      <p>{section.value}</p>
                    </ContentBlock>
                  );
              }
            })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Section>
  );
};

Document.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    titles: PropTypes.arrayOf(PropTypes.string),
    // or whatever the current CONTENT_ARRAY_NAME is
    contentBlocks: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ),
  }),
  setNewChapter: PropTypes.func,
};

Document.defaultProps = {
  id: undefined,
  data: undefined,
  setNewChapter: undefined,
};

export default Document;
