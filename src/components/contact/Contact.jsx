import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaRegEnvelope } from "react-icons/fa";

import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    /* Promise */
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_TEMPLATEID,
        formRef.current,
        process.env.REACT_APP_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 id="title-section">Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
            <div className="contact_option">
                <FaRegEnvelope id="icon"/>
                <h4>E-mail</h4>
                <h3>estebancogo47@gmail.com</h3>
                <a href="mailto:estebancogo47@gmail.com">Send a message</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
