import "./Project.css";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with shopping cart, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1577333715735-8fcb0359d906",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task manager with real-time updates, team features, and analytics.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      technologies: ["React", "Firebase", "TypeScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio template with animations and responsive design.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      technologies: ["React", "CSS", "Animations"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with forecasts and location search.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      technologies: ["React", "API", "Charts"],
      github: "#",
      live: "#",
    },
    {
      title: "Blog Platform",
      description:
        "Content management system with authentication and markdown support.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Next.js", "Database", "Auth"],
      github: "#",
      live: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media performance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["Dashboard", "APIs", "Charts"],
      github: "#",
      live: "#",
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
