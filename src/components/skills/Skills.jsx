import React, { useEffect, useRef } from "react";
import { FaBalanceScaleRight } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
/*FaReact, FaJsSquare*/

import "./skills.css";

const Skills = () => {
  /* Script for the animations of tool items */
  const toolsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tools_show");
        } else {
          entry.target.classList.remove("tools_show");
        }
      });
    });

    /* When the component dismount and mount */
    const toolsElement = toolsRef.current;
    if (toolsElement) {
      observer.observe(toolsElement);
    }

    return () => {
      if (toolsElement) {
        observer.unobserve(toolsElement);
      }
    };
  }, []);

  return (
    <section id="skills">
      <h2 id="title-section">Skills and Tools</h2>
      <div className="container skills_container">
        <div className="soft_skills">
          <article className="soft_details">
            <FaBalanceScaleRight id="soft_icons" />
            <h3 id="description">
              I consider myself an empathetic person capable of understanding
              difficult situations.
            </h3>
          </article>
          <article className="soft_details">
            <FaComments id="soft_icons" />
            <h3 id="description">
              Engaging in conversations about ideas, concerns, and needs to
              ensure effective communication within the team.
            </h3>
          </article>
          <article className="soft_details">
            <FaCheck id="soft_icons" />
            <h3 id="description">
              Skills in proposing and implementing solutions to overcome
              obstacles.
            </h3>
          </article>
          <article className="soft_details">
            <FaAssistiveListeningSystems id="soft_icons" />
            <h3 id="description">
              Listening is important to clearly understand the obstacles in the
              work environment.
            </h3>
          </article>
        </div>
        <div className="tools_content">
          <div ref={toolsRef} className="tools_hidden">
            <div className="tools_details">
              <FaJava id="tool_icons" />
            </div>
            <div className="tools_details">
              <FaPython id="tool_icons" />
            </div>
            <div className="tools_details">
              <FaCss3 id="tool_icons" />
            </div>
            <div className="tools_details">
              <FaHtml5 id="tool_icons" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
