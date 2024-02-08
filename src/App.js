// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import DiceGame from './component/Dicegame/DiceGame';
import About from './component/About/About';
import Contact from './component/Contacts/Contact';
import ProjectComponent from './component/Projects/ParentComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
     <Router>
     <Header />
     <main className="main-content">
       <Routes>
         {/* <Route path="/" element={<Home />} /> */}
         <Route path="/about" element={<About />} />
         <Route path="/projects" element={<ProjectComponent />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/dice-game" component={<DiceGame/>} /> 
       </Routes>
      
     </main>
   </Router>
  );
};




export default App;
