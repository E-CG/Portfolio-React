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
    emailjs.sendForm("ServiceID", "TemplateID", formRef.current, "KEY").then(
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
    </section>
  );
};

export default Contact;
