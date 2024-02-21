import React from 'react';
import DiceGame from '../Dicegame/DiceGame';

function IonDiceOutline(props) {
  return (
     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37"></path>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="m69 153.99l187 110l187-110m-187 310v-200"></path>
      <ellipse cx={256} cy={152} fill="currentColor" rx={24} ry={16}></ellipse>
      <ellipse cx={208} cy={296} fill="currentColor" rx={16} ry={24}></ellipse>
      <ellipse cx={112} cy={328} fill="currentColor" rx={16} ry={24}></ellipse>
      <ellipse cx={304} cy={296} fill="currentColor" rx={16} ry={24}></ellipse>
      <ellipse cx={400} cy={240} fill="currentColor" rx={16} ry={24}></ellipse>
      <ellipse cx={304} cy={384} fill="currentColor" rx={16} ry={24}></ellipse>
      <ellipse cx={400} cy={328} fill="currentColor" rx={16} ry={24}></ellipse>
    </svg>

  );
}

export default IonDiceOutline;
