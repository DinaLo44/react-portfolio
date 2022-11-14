import React from "react";
import "./ContactFormStyles.css";

import { useState } from "react";

const ContactForm = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    console.log(contactName, contactEmail);
    if (contactName === "") {
      alert("Name is a required field");
    } else if (contactEmail === "") {
      alert("An email address is a required field");
    }
    setContactName("");
    setContactEmail("");
  }
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label name="contactName">Name</label>
        <input
          type="text"
          placeholder="Type your name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />
        <label name="contactEmail">E-mail</label>
        <input
          type="email"
          placeholder="Type your email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea value= {contactMessage} onChange={(e) => setContactMessage(e.target.value)}
          rows="10"
          placeholder="Type your message inside this box"
        ></textarea>
        <button type="submit" className="submit-button" disabled={!contactMessage || !contactEmail || !contactEmail}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
