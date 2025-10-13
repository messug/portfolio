import React, { useState } from "react";
import IonDiceOutline from "../Dicegame/IonDiceOutline";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-iconslibrary.add(fas)';
import  './dice.css'

const DiceGame = () => {
  // State to store the current dice value
  const [diceValue, setDiceValue] = useState(null);

  // Function to roll the dice
  const rollDice = () => {
    // Generate a random number between 1 and 6
    const newValue = Math.floor(Math.random() * 6) + 1;
    // Update the dice value
    setDiceValue(newValue);
  };

  // Motivational messages based on roll value
  const getMotivationalMessage = (value) => {
    const messages = {
      1: "Every coder starts somewhere!",
      2: "Keep rolling forward!",
      3: "Keep rolling forward!",
      4: "Keep rolling forward!",
      5: "Keep rolling forward!",
      6: "You're on fire!"
    };
    return messages[value] || "Keep rolling forward!";
  };

  return (
    <div className="dice-game-container">
      <h1>Play Dice</h1>
      <p className="dice-subtitle">Roll the dice and see what fortune brings!</p>
      {/* Button to roll the dice */}
      <button className="roll-button" onClick={rollDice}>
        🎲 Roll the Dice
      </button>
      {/* Display the current dice value and motivational message */}
      {diceValue && (
        <div className="dice-result">
          <div className="dice-value">You rolled a {diceValue}!</div>
          <p className="motivational-message">{getMotivationalMessage(diceValue)}</p>
        </div>
      )}
    </div>
  );
};

export default DiceGame;
