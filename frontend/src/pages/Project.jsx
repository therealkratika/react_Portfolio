import "./Project.css";

export default function Projects() {
  const projects = [

    {
      title: "BetweenUs - A website for Couple",
      description:
        "Secure place for memories and a place only two people can share.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Reactjs", "MongoDB", "firebase", "Nodejs", "Expressjs"],
      github: "https://github.com/therealkratika/Mern_betweenUs",
      live: "https://betweenuss.netlify.app/",
    },
    {
      title: "Expense-tracker",
      description:
        "A website to see your expense of a month",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["Reactjs", "PostgreSQL", "Nodejs", "Expressjs"],
      github: "https://github.com/therealkratika/expense-tracker",
      live: "https://expense-tracker-1-e7lf.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>
            A showcase of my recent work, featuring diverse web applications
            built with modern technologies.
          </p>
        </div>

        {/* PROJECT GRID */}
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
