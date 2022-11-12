import React from 'react';
import "./index.css";
import About from "./nav-pages/About";
import Portfolio from "./nav-pages/Project";
import Contact from "./nav-pages/Contact";
import Resume from "./nav-pages/Resume";
import {Routes, Route} from 'react-router-dom';
//Added lines 9 to 13 from the REACT documentation website
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); 
// root.render(<App tab="home" />);

function App() {
  return (
<>
<Routes>
  <Route path= "/" element ={<About/>} />
  <Route path= "/portfolio" element ={<Portfolio/>} />
  <Route path= "/contact" element ={<Contact/>} />
  <Route path= "/resume" element ={<Resume/>} />
</Routes>
</>
) 
}

export default App;
