import React, { useRef, useState } from "react";
import { validateEmail } from "../../utils/helpers";
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
        <h1>Contact me</h1>
        <form
          id="contact-form"
          ref={refForm}
          className="contactForm"
          onSubmit={handleSubmit}
        >
          <div>
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
          <div>
            <label htmlFor="email">Email address:</label> <br />
            <input
              className="col-12 input"
              type="email"
              defaultValue={email}
              onBlur={handleChange}
              name="email"
            />
          </div>
          <div>
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
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
