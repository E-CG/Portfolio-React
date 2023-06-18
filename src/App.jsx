import React, { useState, useEffect} from "react";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Bar from "./components/navbar/Bar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  useEffect(() => {
    // URL cleaner
    var url = window.location.href;

    if (url.indexOf("#") !== -1) {
      var cleanUrl = url.substring(0, url.indexOf("#"));

      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  /* Nav Bar */
  const [activeSection, setActiveSection] = useState("#home");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  /* Splash screen */
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1800);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="splash">
          <div className="splash-dot first"></div>
          <div className="splash-dot second"></div>
          <div className="splash-dot third"></div>
        </div>
      ) : (
        <div className="app">
          <Header />
          <Bar activeNav={activeSection} onNavClick={handleNavClick} />
          {activeSection === "#home" && <Landing />}
          {activeSection === "#about" && <About />}
          {activeSection === "#skills" && <Skills />}
          {activeSection === "#projects" && <Projects />}
          {activeSection === "#contact" && <Contact />}
        </div>
      )}
    </>
  );
};

export default App;
