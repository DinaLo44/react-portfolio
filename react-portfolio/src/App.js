import React from 'react';
import "./index.css";
import Home from "./nav-pages/Home";
import About from "./nav-pages/About";
import Portfolio from "./nav-pages/Project";
import Contact from "./nav-pages/Contact";
import Resume from "./nav-pages/Resume";

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
<>
<Routes>
  <Route path= "/" element ={<Home/>} />
  <Route path= "/about" element ={<About/>} />
  <Route path= "/portfolio" element ={<Portfolio />} />
  <Route path= "/contact" element ={<Contact/>} />
  <Route path= "/resume" element ={<Resume/>} />
</Routes>
</>
  ) 
}

export default App;
