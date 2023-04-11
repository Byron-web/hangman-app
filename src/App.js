import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import HelpPopup from "./components/HelpPopup";
import { showNotification as show } from "./helpers/helpers";

//List of words the user might recieve to guess.
const words = [
  "Algorithm",
  "API",
  "Application",
  "Array",
  "Boolean",
  "Bytecode",
  "Cache",
  "Character",
  "Class",
  "Closure",
  "Code",
  "Compiler",
  "Condition",
  "Constructor",
  "Data",
  "Database",
  "Debugging",
  "Declaration",
  "Default",
  "Directive",
  "Enumeration",
  "Exception",
  "Function",
  "Generic",
  "Global",
  "Hash",
  "Header",
  "Hexadecimal",
  "HTTP",
  "IDE",
  "Index",
  "Inheritance",
  "Initialization",
  "Instance",
  "Integer",
  "Interface",
  "Interpreter",
  "Iterator",
  "Library",
  "Linker",
  "Literal",
  "Loops",
  "Machine code",
  "Memory",
  "Method",
  "Module",
  "Namespace",
  "Null",
  "Object",
  "Operand",
  "Operator",
  "Optimization",
  "Overloading",
  "Package",
  "Parameter",
  "Parser",
  "Polymorphism",
  "Precision",
  "Preprocessor",
  "Private",
  "Procedural",
  "Program",
  "Property",
  "Public",
  "Query",
  "Recursion",
  "Reflection",
  "Regular expression",
  "Return",
  "Runtime",
  "Scope",
  "Script",
  "SDK",
  "Semaphore",
  "Serialization",
  "Singleton",
  "Source code",
  "SQL",
  "Stack",
  "Statement",
  "Static",
  "String",
  "Subroutine",
  "Syntax",
  "Template",
  "Thread",
  "Token",
  "Trace",
  "Transpiler",
  "Try-catch",
  "Type",
  "Unicode",
  "Variable",
  "Vector",
  "Version control",
  "Virtual",
  "Web server",
  "While loop",
  "XML",
  "Zip",
];

//Fucntion that thats the word array and spits out a random word for the user to guess.
let selectedWord =
  words[Math.floor(Math.random() * words.length)].toLowerCase();

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  //Eventlistener that listens for keyboard strokes from the user.
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        //Two conditionals that checks if the users input value matches the the current character in the selectedword.
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    //removes any addition eventlisteners to avoid performance issues.
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  //Changes Playable state if the users chooses to play again
  function playAgain() {
    setPlayable(true);

    //Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    //Reinitialized the logic for user to play again
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  //Toggles between ShowHelp state
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  //Closes the ShowHelp component
  const closeHelp = () => {
    setShowHelp(false);
  };

  //This is for testing purposes
  console.log(selectedWord);

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <button className="help-btn" onClick={toggleHelp}>
        Help
      </button>
      {showHelp && <HelpPopup onClose={closeHelp} />}

      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;

/* 
  Notes >> Make a read me component within the app and also edit the readme in the repo the app read me helps users use the app and the repo one helps users.devs install the app.

  Make selectedWord lower case to avoid issues where first letter is Capital.

  Source >> https://www.youtube.com/watch?v=jj0W8tYX_q8&t=2305s -> React Hangman tutorial. 
*/
