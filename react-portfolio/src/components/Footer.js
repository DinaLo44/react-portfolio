import React from 'react'
import "./FooterStyles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className= "footer">
        <div className="footer-section">
        <FaGithub
        size= {30}
        style={{color:'black', margin: '10px'}} 
        />
        <FaLinkedin
        size= {30}
        style={{color:'black', margin: '10px'}}
        />
        </div>
    </div>
  )
}

export default Footer;