import React from "react";
import "./ContactFormStyles.css";
// import "./HandleContactForm";
import { useState } from "react";

const ContactForm = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const handleInputField = (e) => {
    const { name, value } = e.target;
    return name === "contactName"
      ? setContactName(value)
      : setContactEmail(value);
  };

  const handleContactFormSubmission = (e) => {
    e.preventDefault();
    if (contactName === "") {
      alert("Name is a required field");
    } else if (contactEmail === "") {
      alert("An email address is a required field");
    }
    setContactName("");
    setContactEmail("");
  };
  return (
    <div className="contact-form">
      <form>
        <label
          value={contactName}
          name="contactName"
          onChange={handleInputField}
        >
          Name
        </label>
        <input type="text" placeholder="Type your name"></input>
        <label
          value={contactEmail}
          name="contactEmail"
          onChange={handleInputField}
        >
          E-mail
        </label>
        <input type="email" placeholder="Type your email"></input>
        <label>Message</label>
        <textarea
          rows="10"
          placeholder="Type your message inside this box"
        ></textarea>
        {/* <a href="mailto:dinalo.brady@gmail.com"> */}
        <button
          type="submit"
          onClick={handleContactFormSubmission}
          className="submit-button"
        >
          Submit
        </button>
        {/* </a> */}
      </form>
    </div>
  );
};

export default ContactForm;
