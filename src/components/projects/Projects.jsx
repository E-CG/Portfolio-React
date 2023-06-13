import React from "react";
import IMG1 from '../../assets/favicon.png'

import "./projects.css";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "Autonomous Car 🚗",
      date: '2023📅',
      img: IMG1,
      description:
        "autonomous car that is capable of identifying obstacles as it moves",
      technologies: "Python | Raspberry Pi4",
      link: "#",
      github: "https://github.com/E-CG/CarroObstaculos",
    },{
      id: 2,
      title: "Autonomous Car 🚗",
      date: '2023📅',
      img: IMG1,
      description:
        "autonomous car that is capable of identifying obstacles as it moves",
      technologies: "Python | Raspberry Pi4",
      link: "#",
      github: "https://github.com/E-CG/CarroObstaculos",
    }
  ];
  return (
    <section id="projects">
      <h2 id="title-section">Recent Projects</h2>
      <div className="container portfolio_container">
        {myProjects.map((pro) => (
          <article className="portfolio_item" key={pro.id}>
            <div className="portfolio_item-img">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio_item-content">
              <h3>{pro.title} | {pro.date}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio_item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
