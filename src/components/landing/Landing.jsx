import React from "react";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import IMGCurrent from '../../assets/current.png'

import "./landing.css";

const Landing = () => {
  return (
    <section id="home">
      <div className="container container_landing">
        <div className="landing_content">
          <article className="landing_card">
            <h3>Currently working on..</h3>
            <p>
              A trivia game with different type of questions. This with the
              porpuse of improve my english and make fun programing and playing
              it. Making the game with:
            </p>
            <ul className="icons_landing">
              <FaReact id="icon" />
              <FaJsSquare id="icon" />
            </ul>
          </article>
        </div>

        <div className="landing_img">
          <div className="logo_img">
            <img src={IMGCurrent} alt="current" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
