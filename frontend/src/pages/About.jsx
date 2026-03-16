import "./About.css";

export default function About() {
  const features = [
    {
      
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code that follows best practices.",
    },
    {
     
      title: "Modern Design",
      description:
        "Creating beautiful, intuitive interfaces with attention to detail and user experience.",
    },
    {
      
      title: "Performance",
      description:
        "Building fast, optimized applications that deliver exceptional performance.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer dedicated to building innovative
            digital solutions that make a difference.
          </p>
        </div>
        <div className="features">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="journey">
          <div className="journey-text">
            <h3>My Journey</h3>
            <p>
              I started my journey in web development with curiosity about how
              websites work. Over time, I’ve developed strong skills in both
              front-end and back-end technologies.
            </p>
            <p>
              Today, I focus on building responsive, accessible, and performant
              web applications while constantly learning and improving.
            </p>
          </div>

          <div className="journey-image">
            <img
              src="https://images.unsplash.com/photo-1728598909887-2d983a8889b1"
              alt="Workspace"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
