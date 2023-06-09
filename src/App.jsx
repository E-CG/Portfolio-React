import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Bar from "./components/navbar/Bar";
import Landing from "./components/landing/Landing";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Bar />
      <Landing/>
      <Skills/>
      <Footer />
    </>
  );
};

export default App;
