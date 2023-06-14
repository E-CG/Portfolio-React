import React from "react";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";


import "./bar.css";

const Bar = ({ activeNav, onNavClick }) => {
  return (
    <nav>
      <a href="#home" onClick={() => onNavClick("#home")} className={activeNav === "#home" ? "active" : ""}><FaHome id="icon"/></a>
      <a href="#about" onClick={() => onNavClick("#about")} className={activeNav === "#about" ? "active" : ""}><FaUser id="icon"/></a>
      <a href="#skills" onClick={() => onNavClick("#skills")} className={activeNav === "#skills" ? "active" : ""}><FaBook id="icon"/></a>
      <a href="#projects" onClick={() => onNavClick("#projects")} className={activeNav === "#projects" ? "active" : ""}><FaBriefcase id="icon"/></a>
      <a href="#contact" onClick={() => onNavClick("#contact")} className={activeNav === "#contact" ? "active" : ""}><FaIdCard id="icon"/></a>
    </nav>
  );
};

export default Bar;
