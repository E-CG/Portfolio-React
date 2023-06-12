import React from "react";

import "./project.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "autonomous car",
      description:
        "autonomous car that is capable of identifying obstacles as it moves",
      technologies: "Python | Raspberry Pi4",
      link: "#",
      github: "https://github.com/E-CG/CarroObstaculos",
    },
  ];
  return (
    <section id="projects">
      <h2>Recent projects</h2>
      <div className="container portfolio_container">
        {projects.map((pro) => (
          <article className="portfolio_item" key={pro.id}>
            <div className="portfolio_item-img">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio_item-content">
              <h3>{pro.title}</h3>
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
