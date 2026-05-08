import "./Project.css";

export default function Projects() {
  const projects = [

    {
  title: "Link Saver",
  description:
    "A full-stack MERN application that allows users to securely save, organize, and manage important links with authentication, responsive UI, and containerized deployment using Docker.",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  technologies: [
    "React.js",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Tailwind CSS",
    "Docker"
  ],
  github: "https://github.com/therealkratika/Link_saver_mern",
  live: "",
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
    {
  title: "Coding Battle Arena",
  description:
    "A real-time multiplayer coding battle platform where users can compete in live coding duels with room-based gameplay, timers, and collaborative coding features.",
  image:
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "Socket.io",
    "MongoDB",
    "Docker",
    "Tailwind CSS"
  ],
  github: "https://github.com/therealkratika/coding_BattleArena",
  live: "",
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
