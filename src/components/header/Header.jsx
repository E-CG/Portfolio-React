import React from "react";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h3>Hey there😃</h3>
        <h2>I'm Esteban Cossio</h2>
        <h3 id="text-light">Studying software engineering</h3>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
