import "./NavStyles.css";

import { Link } from "react-router-dom";
import React from 'react';

const Nav = () => {
  return (
    <div className= "header">
        <ul className="nav-menu-list">
        <h1>Dina Brady</h1>
            <li>
                <Link to="/">About Me</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
        </ul>
    </div>
);
};

export default Nav;