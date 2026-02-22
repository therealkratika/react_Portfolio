import "./Home.css";

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="intro">Hello, I'm</p>
          <h1>Kratika</h1>
          <h2>Web Developer</h2>

          <p className="description">
            I craft beautiful, responsive websites and web applications with
            modern technologies. Passionate about creating seamless user
            experiences and clean code.
          </p>

          <div className="buttons">
            <button
              className="primary-btn"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </button>
            <button
              className="secondary-btn"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>
          </div>

          {/* SOCIAL LINKS (NO ICON LIBRARY) */}
          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:kratika@example.com">
              Email
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1740663173325-c3000e33c830"
            alt="Kratika"
          />
          <div className="image-bg"></div>
        </div>

      </div>

      {/* SCROLL DOWN */}
      <button
        className="scroll-down"
        onClick={() => scrollToSection("about")}
      >
        ↓
      </button>
    </section>
  );
}
