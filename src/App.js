// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Skill from './component/Skills/Skill';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Contact from './component/Contacts/Contact';
import ProjectComponent from './component/Projects/ParentComponent';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';

import './App.css';

function App() {
  
  return (

    
     <Router>
     <Header />
     <main className="main-content">
       <Routes>
         <Route path="/" element ={<Home/>}/>
         <Route path="/about" element={<About />} />
         <Route path="/projects" element={<ProjectComponent />} />
         <Route path="/skill" element={<Skill />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/footer" element={<Footer />} />
       </Routes>
     </main>
     <ScrollToTop />
   </Router>

  );
};




export default App;
