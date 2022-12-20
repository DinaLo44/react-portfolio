import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <div class="container mb-3 ">
      <h1>Contact Me</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/dinalo.brady@gmail.com"
        method="POST"
      >
        <div class="form-group w-50 mx-auto">
          <div class="form-row">
            <div class="col mb-3 ">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div class="col mb-3">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-group mb-3 w-50 mx-auto">
          <textarea
            placeholder="Your Message"
            class="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-lg btn-success btn-block text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
