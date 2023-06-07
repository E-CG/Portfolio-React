import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
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
  );
};

export default HeaderSocials;
