import React from 'react'
import "./ContactFormStyles.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>E-mail</label>
            <input type="email"></input>
            <label>Message</label>
            <textarea rows="10" placeholder="Please type your message inside this box"></textarea>
        <button className="submit-button">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm