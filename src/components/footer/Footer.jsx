import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  let date = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <a href="#home" className="footer_icon">
        E-CG
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://github.com/E-CG" target="_blank" rel="noreferrer">
          <FaGithubAlt id="icon" />
        </a>
        <a
          href="https://instagram.com/cgesteban_"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram id="icon" />
        </a>
      </div>
      <div className="copyright">
        <small>&copy; ET {date()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
