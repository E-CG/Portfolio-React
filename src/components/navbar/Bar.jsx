import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";

import "./bar.css";

const Bar = () => {
  // Nav bar active or not
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><FaHome id="icon"/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaUser id="icon"/></a>
      <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}><FaBook id="icon"/></a>
      <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><FaBriefcase id="icon"/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><FaIdCard id="icon"/></a>
    </nav>
  );
};
export default Bar;
