import "./Project.css";
import project from "../assets/project.png";
import project2 from "../assets/project2.png";
import image from "../assets/image.png";
export default function Projects() {
  const projects = [

    {
  title: "Link Saver",
  description:
    "A full-stack MERN application that allows users to securely save, organize, and manage important links with authentication, responsive UI, and containerized deployment using Docker.",
  image: project,
  technologies: [
    "React.js",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Tailwind CSS",
    "Docker"
  ],
  github: "https://github.com/therealkratika/Link_saver_mern",
  live: "https://link-saver-mern-914j.onrender.com/",
},
    {
      title: "Expense-tracker",
      description:
        "A website to see your expense of a month",
      image: project2,
      technologies: ["Reactjs", "PostgreSQL", "Nodejs", "Expressjs"],
      github: "https://github.com/therealkratika/expense-tracker",
      live: "https://expense-tracker-1-e7lf.onrender.com/",
    },
    {
 title: "Book Rental",
description:
  "A MERN stack based book rental platform where users can list books for rent or sale, browse available books, and connect directly with owners through messaging or phone calls for easy communication and transactions.",
image:
  image,
technologies: [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS"
],
github: "https://github.com/therealkratika/BookRental.git",
live: "https://book-rental-flame.vercel.app",
},
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>
            A showcase of my recent work, featuring diverse web applications
            built with modern technologies.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Code →
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live →
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
