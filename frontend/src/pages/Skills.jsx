import { useState } from "react";
import "./Skills.css";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: "Front-End",
      icon: "💻",
      color: "blue",
      skills: [
        "HTML / CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Next.js",
        "Redux",
        "Responsive Design",
        "Web Accessibility",
        "SEO",
      ],
    },
    {
      title: "Back-End",
      icon: "🗄️",
      color: "green",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "Authentication",
        "WebSockets",
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      color: "purple",
      skills: [
        "Git / GitHub",
        "Docker",
        "CI / CD",
        "Vite",
        "Webpack",
        "AWS",
        "Linux",
      ],
    },
    {
      title: "Design & Soft Skills",
      icon: "✨",
      color: "pink",
      skills: [
        "Figma",
        "UI / UX",
        "Wireframing",
        "Agile",
        "Problem Solving",
        "Communication",
        "Mentoring",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        {/* HEADER */}
        <div className="skills-header">
          <h2>Skills & Expertise</h2>
          <p>
            A comprehensive toolkit of technologies and skills I use to build
            modern web experiences.
          </p>
        </div>

        {/* TABS */}
        <div className="skills-tabs">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? category.color : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="skills-content">
          <h3>
            <span className="content-icon">
              {skillCategories[activeTab].icon}
            </span>
            {skillCategories[activeTab].title}
          </h3>

          <div className="skills-grid">
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-chip ${skillCategories[activeTab].color}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="skills-stats">
          <div className="stat-card">
            <h4>5+</h4>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h4>50+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h4>30+</h4>
            <p>Technologies Used</p>
          </div>
        </div>

      </div>
    </section>
  );
}
