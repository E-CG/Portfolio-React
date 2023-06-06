import { Component } from "react";
import { Card } from "./components/Card";
import { Intro } from "./components/Intro";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <body>
        <Intro></Intro>
        <div className="about">
          <Card title="I am">
            a software engineer student that like coding, and learn about new
            technologys
          </Card>
        </div>
        <Skills></Skills>
        <div className="projects">
          <h1>My projects are:</h1>
        </div>
        <div className="contact">
          <h1>Social Networks</h1>
        </div>
      </body>
    </>
  );
}

export default App;
