import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div classname="header_social">
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
