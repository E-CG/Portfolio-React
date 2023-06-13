import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
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
      <Footer />
    </>
  );
};

export default App;
