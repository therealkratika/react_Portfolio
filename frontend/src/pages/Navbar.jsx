import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <button
          className="logo"
          onClick={() => scrollToSection("hero")}
        >
          Kratika
        </button>
        <div className="menu desktop-menu">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button
            className="contact-btn"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button
            className="contact-btn"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
