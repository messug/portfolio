import React from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const history = useNavigate();

  const navigateToProjects = () => {
    history('/projects');
  };

  const navigateToResume = () => {
    history('/resume');
  };

  const playDice = () => {
    // Handle navigation programmatically
  };
  return (
  <section className="about-section">
      <div className="content-container">
        <div className='svg-content'>
     <svg xmlns="" width="128" height="128" viewBox="0 0 128 128" className="custom-svg"><path fill="#41484A" d="m71.08 63.95l4.69-9.39l10.51-13.51L99.8 31.1l13.51-6.2l7.28-.18l1.83 2.81l-3.1 14.22l-4.93 20.98l-3.09 5.06l-7.32 4.09L96.51 73l7.61 3.52l5.63 4.37l3.23 4.5v6.06l-2.81 7.88l-8.45 6.76l-5.21 1.97l-8.16-1.97l-1.83-2.11l-3.9-6.2l-2.72-9.29l-5.49-2.82l-5.3 2.91l1.92 12.44l-.42 3.94l-.7 2.82l-1.97 3.94l-5.07 2.95l-7.18.15l-9.29-2.54l-5.49-4.22l-3.38-5.63l.84-7.46l9.57-12.25l-8.02 2.95l-10.28.29l-8.44-9.16L8.24 55.83l-3.23-9.29l2.67-2.82h7.74l16.62 2.68l18.16 7.18l13.09 7.46z"/>
<path fill="#676F72" d="M67.02 46.26s1.23-11.63 2.53-16.19c1.83-6.41 7.04-11.47 11.4-11.97c4.36-.49 3.8 2.89 1.13 4.29c-2.57 1.35-5.35.56-5.35.56s-3.59 2.62-4.79 8.02c-1.41 6.34-2.53 16.19-2.53 16.19zm-3.87.77s-4.77-9.69-9.92-15.84c-5.14-6.12-11.68-6.34-12.6-6.41c-.92-.07-4.79.56-4.79 2.39c0 2.46 3.4 2.9 5.35 2.53c2.25-.42 3.31-1.76 3.31-1.76s4.18 1.66 6.97 5c3.24 3.87 9.22 15.56 9.22 15.56l.42 1.55z"/>
<path fill="#FF8B03" d="M54.84 93.7c-1.75-.87-7.04 4.08-7.04 6.48c0 1.57 1.13 4.22 3.52 3.52c2.4-.71 5.78-8.88 3.52-10m-9.43 0c2.25 1.97 5.97-1.95 7.6-4.5c1.97-3.1 2.96-10.84 2.39-10.56c-.56.28-7.6 5.35-7.6 5.35s-5.34 7.13-2.39 9.71m10.7 9.57c0 2.46 2.67 4.22 5.35 3.8c1.4-.22 3.91-1.52 3.66-3.8c-.28-2.53-1.41-6.34-4.08-6.76c-2.68-.42-4.93 2.68-4.93 6.76m14.9-19.36s-3.69 7.75-4.49 9.64c-1.13 2.67-1.17 9.34 1.83 10.42c2.14.77 2.67-2.96 2.67-2.96s.28-7.75 2.25-10.99c1.97-3.24 6.2-6.55 6.2-6.55s-3.31-1.11-8.46-1.56m-30.4 2.1s-2.25 6.55-2.39 7.46c-.14.84.7 4.64 2.39 4.08c1.69-.56 4.22-2.82 4.22-2.82s-.14-6.62-.98-7.75c-.84-1.11-3.62-1.79-3.62-1.79zm-4.79 9.71s-.56 1.13 1.69 1.55c2.25.42 4.22-1.66 4.22-1.66s-1.41-1.92-1.26-3.52c.14-1.52 1.26-4.36 1.26-4.36s-2.89-.14-3.91 1.92c-1.01 2.14-1.26 6.07-1.26 6.07zm8.74-21.4s1.26-1.69 1.41-3.24c.14-1.7-.7-4.57-.7-4.57s-3.24-.99-4.64.84c-1.4 1.84-3.69 4.08-3.69 4.08s2.53 1.76 5.02 2.89m-7.25 23.01s-.14 2.39 1.26 1.4c1.4-.98 3.17-2.11 3.17-2.11s.7-1.69-.14-3.24c-.84-1.55-1.69-3.31-1.69-3.31s-1.97 1.26-2.82 3.17c-.84 1.92-1.06 4.08-1.06 4.08z"/>
<path fill="#FFA500" d="M74.2 72.36c-4.49-2.82-4.64-4.64-4.64-4.64s1.92-.98 4.49.98c2.53 1.92 2.68 4.08 2.68 4.08s-1.28.99-2.53 1.58m-24.47-3.1s-1.83-1.76-1.26-4.08c.56-2.39 3.24-3.24 3.24-3.24s1.26 1.83.42 4.08c-.84 2.39-2.4 3.24-2.4 3.24zm4.08-14.08s.84-.28 1.83-2.67c1.01-2.39 2.25-4.22 2.25-4.22s2.39.84 1.26 3.66c-1.13 2.82-4.34 3.22-4.34 3.22zm5.78 20.2s-4.22-1.97-5.99-4.71c-1.97-3.24-2.53-6.76-2.53-6.76s2.39-2.96 4.93-.98c2.53 1.97 5.07 7.75 5.07 7.75s-.56 5.51-1.48 4.71zm4.49-26.74s.7-1.69 2.25-3.24c1.55-1.55 3.52-2.25 3.52-2.25s1.97 2.11.56 3.97c-1.41 1.87-2.96 3.17-2.96 3.17s-2.89.99-3.37-.65c-.42-1.55-1-1.06-1-1.06zm-11.2 20.92s-.7-1.83 0-4.5c.7-2.67 2.96-5.07 2.96-5.07s2.53 1.55 1.48 4.71c-.98 3.17-3.96 4.57-3.96 4.57zm-6.2-16.35s.42-2.46 1.4-3.24c1.01-.77 3.59-1.4 3.59-1.4s1.01 2.53.28 3.94c-.7 1.41-2.11 2.53-2.11 2.53s-1.4.84-2.25-.28c-.84-1.12-1.91-1.55-1.91-1.55zm-6.06 16.92s1.83-2.11 2.67-4.22c.84-2.11 2.96-3.52 2.96-3.52s1.41 2.11.14 4.22c-1.26 2.11-3.52 3.59-3.52 3.59s-2.39.84-2.39-.56c0-1.55-.86-.51-.86-.51zm23.72-2.96c0 .47 3.73 3.8 5.07 2.11c1.4-1.97-.42-3.52-.42-3.52s-2.96-1.83-4.64.28c-1.69 2.11-.98 1.13-.98 1.13z"/>
<path fill="#FCCF4D" d="M71.08 63.95l4.69-9.39l10.51-13.51L99.8 31.1l13.51-6.2l7.28-.18l1.83 2.81l-3.1 14.22l-4.93 20.98l-3.09 5.06l-7.32 4.09L96.51 73l7.61 3.52l5.63 4.37l3.23 4.5v6.34l-1.26 3.09l-4.29 1.26h-9.92l-7.18-3.23l-7.46-4.71l-5.16-3.52l-3.87-4.93l-2.25-4.77l-2.53-5.94l-1.97-5.88zm-1.4-10.3l-1.26 2.68l1.54 6.88l2.89-1.26l1.97-5.72l-1.4-7.54l-3.07 4.96zm2.25-7.18l1.97-1.55l3.87 2.11l-.14 5.2l-3.66-2.96l-2.04-2.8z"/>
<path fill="#000" d="M69.42 57.67c-.28-.56-1.13-.84-.84-1.69c.42-1.4 1.83-.84 1.83-.84s.56 1.13.14 2.11c-.42 1.13-.7.98-.7.98zm7.46-7.04s-.7-.14-1.13-1.4c-.56-1.55.7-2.82.7-2.82s1.55.28 2.68 1.54c1.26 1.26.56 1.26.56 1.26zm16.14-14.94s1.4.28 1.83 2.11c.56 1.97-.7 3.52-.7 3.52s-1.55-.28-2.25-2.11c-.7-1.97.14-2.42.14-2.42zm9.43 25.26s-.98-1.83-.14-3.38c.84-1.55 3.31-3.24 3.31-3.24s1.26 1.83.14 3.52c-1.13 1.69-2.31 3.1-2.31 3.1zm-4.49 14.65s-1.13-2.04 1.48-2.82c2.53-.84 6.55-3.38 6.55-3.38s1.41 1.97-1.13 3.31c-2.53 1.35-3.93 3.46-3.93 3.46zm-6.97 7.28s-1.83-1.83-.14-4.57c1.69-2.74 6.97-5.07 6.97-5.07s1.97 2.11-.7 4.77c-2.67 2.67-6.13 4.84-6.13 4.84zm-6.69 2.96s.7-2.39 1.83-4.08c1.13-1.69 4.08-2.25 4.08-2.25s1.55 2.11-.14 4.5c-1.7 2.39-2.68 2.82-2.68 2.82zm-4.22-6.13s.84-1.13 2.11-1.69c1.26-.56 2.53-3.38 2.53-3.38s-1.13-1.13-2.53-.98c-1.4.14-2.25 3.24-2.25 3.24zm-5.36 1.4s.14-1.97 1.83-2.11c1.69-.14 4.08-2.82 4.08-2.82s-.28-1.97-1.69-1.55c-1.4.42-3.31 2.82-3.31 2.82zm-11.93-13.79s1.54.14 2.11-1.69c.56-1.83-.14-4.08-.14-4.08s-.98.14-2.11 2.11c-1.13 1.83-1.97 3.66-1.97 3.66z"/>
<path fill="#AE956D" d="M72.5 60.11c0 .47-1.83.84-3.38.28c-1.55-.56-1.4-1.69-1.4-1.69s1.97-.14 3.38-.56c1.26-.28 1.97-.56 1.97-.56zm21.69-13.51c0 .47-2.67 2.25-3.38 2.67c-.7.42-1.26-.84-1.26-.84s2.53-2.39 3.38-3.1c.7-.56 1.26-.14 1.26-.14zm12.48 30.26s-3.8-1.97-5.51-3.24c-1.69-1.26-3.52-2.96-3.52-2.96s2.96-2.11 5.16-.7c2.25 1.4 6.34 5.51 6.34 5.51s-1.28 4.5-2.47 4.39zm5.43-22.74s.28-1.55-1.26-3.31c-1.55-1.76-4.08-2.11-4.08-2.11s-1.97 1.69-.42 3.38c1.55 1.69 4.76 2.11 4.76 2.11zm-15.55 20.06s-.98-1.97-1.97-3.8c-1.01-1.97-2.39-4.57-2.39-4.57s1.4-1.13 2.96.56c1.55 1.69 2.96 4.64 2.96 4.64s.56 4.36-.56 3.17zm-11.42-16.63s1.55-.7 3.24-2.11c1.69-1.4 3.66-2.67 3.66-2.67s1.69 1.97.14 3.94c-1.55 1.97-2.89 3.24-2.89 3.24s-2.39.14-3.66-1.35c-1.13-1.13-1.29-.05-1.29-.05zm-5.2 18.44s1.54-.42 2.96-1.26c1.41-.84 3.52-1.83 3.52-1.83s1.55 1.13-.56 2.96c-2.11 1.83-4.08 2.82-4.08 2.82s-1.12-.42-1.84-1.13c-.84-.84-.01-.56-.01-.56zm-9.64-6.48s2.11-1.26 3.8-1.69c1.69-.42 4.93-2.25 4.93-2.25s.42 1.26-1.83 2.25c-2.25 1.01-5.51 2.39-5.51 2.39zm-2.53-1.13s2.82-1.54 4.5-1.83c1.69-.28 5.2-.14 5.2-.14s.28 1.4-1.4 2.11c-1.69.7-4.08 1.26-4.08 1.26s-1.12-.14-1.83-.56c-.7-.42-.39-.84-.39-.84zm-4.5-6.41s2.67-1.54 4.08-2.82c1.41-1.35 3.24-2.39 3.24-2.39s.7 1.4-.7 2.96c-1.41 1.55-3.8 2.25-3.8 2.25s-1.13-.28-2.11-.7c-.84-.42-.71-.3-.71-.3zm-7.18 8.46s2.96-1.97 4.57-3.52c1.69-1.55 3.31-3.52 3.31-3.52s1.13 1.55-.14 4.08c-1.28 2.25-3.8 3.38-3.8 3.38s-1.55-.14-3.31-.7c-1.76-.56-.43-.22-.43-.22zm1.97 6.34s2.11-1.26 3.38-2.39c1.26-1.13 2.96-2.96 2.96-2.96s.42 1.54-1.55 3.38c-1.83 1.83-3.38 2.11-3.38 2.11s-1.04-.14-1.69-.42c-.56-.28-.72-.72-.72-.72zm-11.63 1.4s2.11-1.26 3.66-2.39c1.55-1.13 3.52-2.96 3.52-2.96s.7 1.69-1.55 3.24c-2.25 1.55-4.57 2.11-4.57 2.11s-1.13-.14-2.11-.56c-.84-.42-.95-.44-.95-.44zm-9.71-4.57s1.97-.7 3.38-1.83c1.41-1.13 3.38-2.39 3.38-2.39s.14 1.55-1.83 3.38c-1.83 1.76-4.08 2.53-4.08 2.53s-.42-.14-.7-.3c-.42-.14-.14-.39-.14-.39zm-5.51-9.64s2.96-1.69 4.57-2.82c1.69-1.4 3.31-2.67 3.31-2.67s.56 1.54-1.55 3.24c-2.11 1.69-4.57 2.11-4.57 2.11s-1.13-.14-2.11-.56c-.84-.42-.65-.3-.65-.3zm-5.94-4.08s2.67-.7 4.08-1.69c1.41-1.01 3.38-2.25 3.38-2.25s.28 1.54-1.76 3.24c-2.11 1.97-4.71 2.11-4.71 2.11s-.42-.28-.84-.42c-.42-.14-.15-.99-.15-.99zm-4.5-5.51s2.82-1.13 4.5-1.83c1.69-.56 3.52-1.69 3.52-1.69s.7 1.26-1.26 2.53c-1.55 1.13-3.52 1.83-3.52 1.83s-1.13-.14-2.11-.56c-.84-.42-.13-.39-.13-.39zm-10.99 5.2s1.54-.42 3.24-1.26c1.69-.84 3.52-1.97 3.52-1.97s.14 1.4-1.55 2.96c-1.76 1.55-4.08 2.25-4.08 2.25s-1.12-.14-1.83-.56c-.7-.42-.3-.42-.3-.42zm-11.49 1.69s2.82-1.13 4.36-1.97c1.55-.84 3.52-1.69 3.52-1.69s.56 1.4-1.4 2.67c-2.11 1.13-4.71 1.55-4.71 1.55s-1.13-.28-1.83-.56c-.7-.42-.94-.09-.94-.09zm-14.36-8.74s2.11-1.26 3.66-2.39c1.55-1.13 3.52-2.96 3.52-2.96s.7 1.69-1.55 3.24c-2.11 1.55-4.57 2.11-4.57 2.11s-1.13-.14-2.11-.56c-.84-.42-.95-.44-.95-.44zm-5.51-4.64s1.97-.7 3.38-1.83c1.41-1.13 3.38-2.39 3.38-2.39s.14 1.55-1.83 3.38c-1.83 1.76-4.08 2.53-4.08 2.53s-.42-.14-.7-.3c-.42-.14-.28-.75-.28-.75zm-11.49 4.08s1.69-.84 3.1-1.55c1.4-.84 2.82-2.25 2.82-2.25s.42 1.13-1.83 2.67c-2.25 1.55-4.08 2.11-4.08 2.11s-.42-.14-.7-.42c-.42-.14-.31-.56-.31-.56zm-5.51-4.08s1.97-.84 3.52-1.55c1.55-.7 3.52-2.11 3.52-2.11s.56 1.4-1.4 2.96c-1.76 1.55-4.64 2.11-4.64 2.11s-1.13-.14-1.83-.56c-.7-.42-.17-.35-.17-.35zm-6.97-5.51s1.13-1.26 2.53-2.25c1.41-1.13 2.67-3.24 2.67-3.24s.56 1.4-1.55 3.1c-2.11 1.55-3.93 2.25-3.93 2.25s-1.13-.28-2.11-.7c-.84-.42-.61-.06-.61-.06zm-7.04 2.53s1.97-1.13 3.38-1.83c1.4-.56 3.24-1.83 3.24-1.83s.14 1.54-1.69 3.17c-1.83 1.55-4.08 2.53-4.08 2.53s-1.13-.14-1.83-.56c-.7-.42-.02-.48-.02-.48zm-9.71-4.93s1.83-.7 3.24-1.69c1.41-1.01 3.52-2.25 3.52-2.25s.7 1.4-.56 3.1c-1.26 1.55-2.67 2.11-2.67 2.11s-1.13-.28-1.83-.56c-.7-.42-.7-.61-.7-.61zm-10.14-3.24s1.54-.42 3.38-1.26c1.83-.84 4.08-1.83 4.08-1.83s.56 1.4-1.69 3.1c-2.11 1.55-4.22 2.25-4.22 2.25s-1.13-.14-1.83-.56c-.84-.42-.72-.5-.72-.5zm-11.49-1.4s1.55-.56 3.38-1.69c1.83-1.13 4.08-2.25 4.08-2.25s.56 1.13-1.97 2.82c-1.83 1.4-3.38 2.11-3.38 2.11s-1.13-.14-1.83-.56c-.7-.42-.28-.43-.28-.43zm-11.49-4.08s1.55-.56 3.38-1.69c1.83-1.13 4.08-2.25 4.08-2.25s.56 1.13-1.97 2.82c-1.83 1.4-3.38 2.11-3.38 2.11s-1.13-.14-1.83-.56c-.7-.42-.28-.43-.28-.43z"/>      
</svg>
</div>
</div>
        <div className="text-container">
        
          <h2>Meseret Gebrezgi</h2>
          <h3>A Bit About Me</h3>
          <p>I am a developer. I utilize my proficiency in crafting user-friendly interfaces <br/> and building resilient
          backend systems to deliver impactful and intuitive solutions for clients.
        </p>
</div>
        <div className="button-container">
          <button className="btn btn-1" onClick={navigateToProjects} type="button">Projects</button>
          <button className="btn btn-2" onClick={navigateToResume} type="button">Resume</button>
          <button className="btn btn-3" type="button" onClick={playDice}>Play Dice</button>
        </div>
    </section>
  );
};

export default About; 








