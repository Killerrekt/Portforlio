import React, { useEffect, useState } from "react";

const TerminalText = ({ textLines, onTypingComplete }) => {
  var [lineIndex, setLineIndex] = useState(0);
  var [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    if (lineIndex < textLines.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedLines((prevLines) => [...prevLines, textLines[lineIndex]]);
        setLineIndex(lineIndex + 1);
      }, lineIndex * 10);

      return () => clearTimeout(timeoutId);
    } else {
      setTimeout(() => {
        if (onTypingComplete) {
          onTypingComplete();
        }
      }, 750);
    }
  }, [lineIndex, textLines, onTypingComplete]);

  return (
    <div className="terminal">
      {displayedLines.map((line, index) => (
        <>
          <span key={index}>{line}</span>
          <br />
        </>
      ))}
    </div>
  );
};

export default TerminalText;
