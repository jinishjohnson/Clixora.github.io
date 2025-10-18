
import React from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    image: "/sr1.jpg",
    title: "Project 1",
    desc: "A brief description of Project 1.",
  },
  {
    id: 2,
    image: "/sr2.jpg",
    title: "Project 2",
    desc: "A brief description of Project 2.",
  },
  {
    id: 3,
    image: "/sr3.jpg",
    title: "Project 3",
    desc: "A brief description of Project 3.",
  },
  {
    id: 4,
    image: "/sr4.jpg",
    title: "Project 4",
    desc: "A brief description of Project 4.",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>Recent Work Section</h2>
      <p>
       Recently Clients have Impressed on the work done by Our Team
      </p>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img src={project.image} alt={project.title} />
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button>View All Projects</button>
      </div>
    </section>
  );
}
