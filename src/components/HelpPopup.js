import React from "react";

const HelpPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <h2>How to Play Hangman</h2>
      <p>
        Hangman is a word guessing game. The player must guess the word by
        suggesting letters.
      </p>
      <p>
        The player has a limited number of guesses, and for each incorrect
        guess, a part of the hangman is drawn.
      </p>
      <p>
        The game ends when the player correctly guesses the word, or when the
        hangman is fully drawn.
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HelpPopup;
