import React, { useState } from 'react';
import Header from "./components/header/Header";
import Bar from "./components/navbar/Bar";
import Landing from "./components/landing/Landing";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState('#home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
    <Header/>
      <Bar activeNav={activeSection} onNavClick={handleNavClick} />
      {activeSection === '#about' && <Landing />}
      {activeSection === '#skills' && <Skills />}
      {activeSection === '#projects' && <Projects />}
      {activeSection === '#contact' && <Contact />}
    </>
  );
};

export default App;
