import React from "react";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h3>Hey there😃</h3>
        <h1>I'm Esteban Cossio</h1>
        <h3 className="text-light">Studying software engineering</h3>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
