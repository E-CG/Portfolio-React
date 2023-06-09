import React from "react";
import { FaRegIdBadge } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import ME from "../../assets/me.png";
import "./landing.css";

const Landing = () => {
  return (
    <section id="about">
      <h2 id="title-section">About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaRegIdBadge id="about_icon" />
              <h5>Laboral Experience</h5>
              <small>None</small>
            </article>
            <article className="about_card">
              <FaUniversity id="about_icon" />
              <h5>Studying</h5>
              <small>Universidad de Antioquia</small>
            </article>
          </div>
          <p>
            Motivated to improve my skills and knowledge about the development
            of ideas through programming. I have worked on several projects
            where I've learned what teamwork is
          </p>
          <a href="#contact" className="btn btn-primary">
            Talk with me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
