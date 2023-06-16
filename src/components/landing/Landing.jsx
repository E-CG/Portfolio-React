import React from "react";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";

import "./landing.css";

const Landing = () => {
  return (
    <section id="home">
      <div className="container container_landing">
        <div className="landing_card">
          <article>
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
          <img src="" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
