import React, { useRef, useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const LyricsContainer = styled.div`
  border: 5px solid orange;
  height: 300px;
  flex: 0 0 300px;
  overflow: hidden;
  position: relative;
  margin: 10px 0 20px;
`;

const LyricsImage = styled.img`
  display: block;
  width: 100%;
  transform: ${({ currentTransform }) =>
    currentTransform ? `translateY(-${currentTransform}px)` : "translateY(0)"};
  transition: transform 0.5s ease-out;
`;

const BlurContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: absolute;
  left: 0;
  transition: height 0.5s ease-out;
`;

const BlurTop = styled(BlurContainer)`
  top: 0;
  height: ${({ hasStarted }) => (hasStarted ? "120px" : "0")};
`;

const BlurBottom = styled(BlurContainer)`
  bottom: 0;
  height: ${({ hasStarted }) => (hasStarted ? "120px" : "0")};
`;

const SettingsContainer = styled.div`
  border: 5px solid green;
  margin-bottom: 20px;
  flex: 1;
  overflow: auto;
`;

const LineRow = styled.div`
  display: flex;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 20px;
  }

  label {
    display: block;
  }
`;

const initialCueSheet = [
  {
    line: 1,
    transform: 108,
    seconds: 32.371644,
  },
  {
    line: 2,
    transform: 143,
    seconds: 40.703511,
  },
  {
    line: 3,
    transform: 178,
    seconds: 48.954797,
  },
];

function App() {
  const audioRef = useRef();
  const [cueSheet, setCueSheet] = useState(initialCueSheet);
  const [cueSheetIndex, setCueSheetIndex] = useState(-1);
  const [startSeconds, setStartSeconds] = useState(initialCueSheet[0].seconds);
  const [hasStarted, setHasStarted] = useState(false);

  const handleTimeUpdate = (e) => {
    const potentialMatches = cueSheet.filter(
      (line) => e.target.currentTime > line.seconds
    );
    setCueSheetIndex(potentialMatches.length - 1);
    if (e.target.currentTime > startSeconds) {
      setHasStarted(true);
    } else {
      setHasStarted(false);
    }
  };

  const updateSeconds = (index, newValue) => {
    setCueSheet((existing) => {
      return [
        ...existing.slice(0, index),
        (existing[index] = { ...existing[index], seconds: newValue }),
        ...existing.slice(index + 1),
      ];
    });
  };

  const updateTransform = (index, newValue) => {
    setCueSheet((existing) => {
      return [
        ...existing.slice(0, index),
        (existing[index] = { ...existing[index], transform: newValue }),
        ...existing.slice(index + 1),
      ];
    });
  };

  return (
    <MainContainer>
      <p>here's an audio player</p>
      <audio
        ref={audioRef}
        controls
        src="audio/Goobers-Hill-Blues.mp3"
        onTimeUpdate={handleTimeUpdate}
      />
      <LyricsContainer>
        <LyricsImage
          src="lyrics/Goobers-Hill-Blues.png"
          currentTransform={cueSheet[cueSheetIndex]?.transform}
        />
        <BlurTop hasStarted={hasStarted} />
        <BlurBottom hasStarted={hasStarted} />
      </LyricsContainer>

      <p>settings:</p>
      <SettingsContainer>
        <LineRow>
          <p>start</p>
          <p>
            <label>timecode in seconds:</label>
            <input
              value={startSeconds}
              onChange={(e) => setStartSeconds(parseInt(e.target.value))}
            />
          </p>
          <button
            onClick={() => (audioRef.current.currentTime = startSeconds + 0.01)}
          >
            preview
          </button>
        </LineRow>
        {cueSheet.map((line, index) => (
          <LineRow key={line.line}>
            <p>line {line.line}</p>
            <p>
              <label>timecode in seconds:</label>
              <input
                value={line.seconds}
                onChange={(e) => updateSeconds(index, parseInt(e.target.value))}
              />
            </p>
            <p>
              <label>position in image:</label>
              <input
                value={line.transform}
                onChange={(e) =>
                  updateTransform(index, parseInt(e.target.value))
                }
              />
            </p>
            <button
              onClick={() =>
                (audioRef.current.currentTime = line.seconds + 0.01)
              }
            >
              preview
            </button>
          </LineRow>
        ))}
      </SettingsContainer>
    </MainContainer>
  );
}

export default App;
