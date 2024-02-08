import React, { useState } from "react";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-iconslibrary.add(fas)';
import  './dice.css'

const DiceGame = () => {
  // State to store the current dice value
  const [diceValue, setDiceValue] = useState(1);

  // Function to roll the dice
  const rollDice = () => {
    // Generate a random number between 1 and 6
    const newValue = Math.floor(Math.random() * 6) + 1;
    // Update the dice value
    setDiceValue(newValue);
  };

  return (
    <div className="dice-game-container">
      <h1>Dice Game</h1>
      {/* Display the current dice value */}
      <div className="dice-value">Current Value: {diceValue}</div>
      {/* Button to roll the dice */}
      <button className="roll-button" onClick={rollDice}>
        Roll Dice
      </button>
    </div>
  );
};

export default DiceGame;
