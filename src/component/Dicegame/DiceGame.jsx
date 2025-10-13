import React, { useState } from "react";
import  './dice.css'

const DiceGame = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);

    let rollCount = 0;
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      rollCount++;

      if (rollCount >= 15) {
        clearInterval(rollInterval);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(finalValue);
        setIsRolling(false);
      }
    }, 100);
  };

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

  const renderDiceFace = (value) => {
    const dots = {
      1: [4],
      2: [0, 8],
      3: [0, 4, 8],
      4: [0, 2, 6, 8],
      5: [0, 2, 4, 6, 8],
      6: [0, 2, 3, 5, 6, 8]
    };

    return (
      <div className={`dice ${isRolling ? 'rolling' : ''}`}>
        <div className="dice-face">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((pos) => (
            <div
              key={pos}
              className={`dot ${dots[value].includes(pos) ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="dice-game-container">
      <h1>Play Dice</h1>
      <p className="dice-subtitle">Click the dice to roll!</p>

      <div className="dice-wrapper" onClick={rollDice}>
        {renderDiceFace(diceValue)}
      </div>

      {!isRolling && diceValue && (
        <div className="dice-result">
          <div className="dice-value">You rolled a {diceValue}!</div>
          <p className="motivational-message">{getMotivationalMessage(diceValue)}</p>
        </div>
      )}
    </div>
  );
};

export default DiceGame;
