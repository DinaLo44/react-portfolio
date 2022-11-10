import React from 'react'
import "./FooterStyles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className= "footer">
        <div className="footer-section">
        <a href="https://github.com/DinaLo44">
        <FaGithub
        size= {30}
        style={{color:'black', margin: '10px'}} 
        /></a>
        <a href="https://www.linkedin.com/in/dina-brady-8694b423b/"> 
        <FaLinkedin
        size= {30}
        style={{color:'black', margin: '10px'}}
        />
        </a>
        </div>
    </div>
  )
}

export default Footer;