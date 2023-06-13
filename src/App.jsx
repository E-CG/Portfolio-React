import React from "react";
import Header from "./components/header/Header";
import Bar from "./components/navbar/Bar";
import Landing from "./components/landing/Landing";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Bar />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
