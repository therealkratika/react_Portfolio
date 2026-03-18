import "./Home.css";
import Navbar from "./Navbar";
import faceImg from "../assets/face.jpeg";
export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
       <Navbar />
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
          <div className="socials">
            <a href="https://github.com/therealkratika" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:therealkratika@gmail.com">
              Email
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={faceImg}
            alt="Kratika"
          />
          <div className="image-bg"></div>
        </div>

      </div>
      <button
        className="scroll-down"
        onClick={() => scrollToSection("about")}
      >
        ↓
      </button>
    </section>
  );
}
