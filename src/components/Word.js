import React from "react";

//Function that checks each character within the selected word again the users input.
const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
