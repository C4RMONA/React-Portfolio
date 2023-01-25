import React, { useRef, useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./index.css"
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const refForm = useRef();

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);

    emailjs.sendForm(
      "service_f14x77b",
      "template_z3v30np",
      refForm.current,
      "CoFlTZB-nkvoGjV2K"
    );
  }

  return (
    <div className="contact-container">
      <section className="contact">

        <div className="contact-info">
          <h1>Let's get in touch!</h1>
          <p className="text">Please feel free to contact me. I am looking foward to answering any questions!</p>
        </div>

        <form
          id="contact-form"
          ref={refForm}
          className="contactForm"
          onSubmit={handleSubmit}
          >
          <h1 className="title">Contact Me</h1>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              className="col-12 input"
              type="text"
              defaultValue={name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email address:</label> <br />
            <input
              className="col-12 input"
              type="email"
              defaultValue={email}
              onBlur={handleChange}
              name="email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              className="col-12 input"
              name="message"
              defaultValue={message}
              onChange={handleChange}
              rows="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="sub-btn">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
