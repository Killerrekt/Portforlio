import { useState } from "react";
import { ReactTyped } from "react-typed";
import "./App.css";
import "./styles/globals.css";
import NavBar from "./components/navbar";
import TypeWriter from "./components/typewrite";
import TerminalText from "./components/terminal";

function App() {
  var [Terminal, SetTerminal] = useState(false);

  const lines = [
    "User validated and online...",
    "[[init]]",
    "Retriving command data...",
    "[complete]",
    "User ip found and indexed:",
    "Initiating quantum decryption sequence",
    "Syncing neural network interfaces.........",
    "Overriding mainframe security protocols",
    "Hacking into the mainframe matrix...",
    "$User id set to 8y14e9f8",
    "Initiating quantum decryption sequence...",
    "Syncing neural network interfaces...",
    "Overriding mainframe security protocols...",
    "Hacking into the mainframe matrix...",
    "----------------------------------------",
    "Disrupting network protocols with raw socket manipulation...",
    "Executing stealth maneuvers with bitwise masking...",
    "Loading Welcome............",
  ];

  const handleTerminal = () => {
    SetTerminal(true);
  };

  //815 width minimum need to set
  return (
    <>
      {typeof window === "undefined" || !Terminal ? (
        <>
          <TerminalText textLines={lines} onTypingComplete={handleTerminal} />
        </>
      ) : (
        <div className="main bgcolor">
          <div className="center">
            <NavBar />
            <br />
            <TypeWriter />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
