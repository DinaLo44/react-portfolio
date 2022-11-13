import React from "react";
import "./NavStyles.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

/*In order to highlight the current page section my source was:
https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916
*/
const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <>
      <nav className="nav-section">
        <ul className="nav-menu-list">
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link to="/">About Me</Link>
          </li>
          <li className={splitLocation[1] === "portfolio" ? "active" : ""}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={splitLocation[1] === "contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={splitLocation[1] === "resume" ? "active" : ""}>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
