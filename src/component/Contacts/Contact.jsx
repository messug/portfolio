import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section className='contact-section'>
    <div> 
      <h1
      className='h2'>Contact Me</h1>
      <div className="box-section">
      <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" color='goldenrod' viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
      <a href="mailto:messgeb@smith.com">messgeb@smith.com</a>
      </div>
      <div className="box-section">
      <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
      <a href="tel:+(403) 321 098">+(403) 690 1549</a>
      </div>
      <div className="box-section">
      <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
      <a href="https://www.google.com/maps/place/Calgary,+AB+T3B+5X4/@51.0920809,-114.2922564,13z/data=!3m1!4b1!4m6!3m5!1s0x53716eada36f1f99:0xca182c7610547141!8m2!3d51.0949683!4d-114.2297122!16s%2Fg%2F1tf47v00?entry=ttu">Calgary, Canada</a>
      </div>
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
<footer>
          <div className="social">
            <div className="line"></div>
            <div className="links">
              <a href="https://www.linkedin.com/in/meseret-gebrezgi-fsd739663229/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
              </a>
              <a href="https://www.instagram.com/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a href="https://github.com/messug">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
             </a>
             <a href="https://web.whatsapp.com/" >
             <svg xmlns="http://www.w3.org/2000/svg" color='black' viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
             </a>
            </div>
            <div className="line"></div>
          </div>
          <h2>Copyright @messi</h2>
        </footer>
  </section>
  )
}

export default Contact






