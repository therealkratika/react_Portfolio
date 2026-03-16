import { useState } from "react";
import "./Skills.css";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: "Front-End",
      color: "blue",
      skills: [
        "HTML / CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Redux",
        "Responsive Design",
        "Web Accessibility",
      ],
    },
    {
      title: "Back-End",
      color: "green",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      title: "Tools",
      color: "purple",
      skills: [
        "Git / GitHub",
        "Render",
        "Netlify",
        "Vite",
      ],
    },
    {
      title: "Design & Soft Skills",
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
        <div className="skills-header">
          <h2>Skills & Expertise</h2>
          <p>
            A comprehensive toolkit of technologies and skills I use to build
            modern web experiences.
          </p>
        </div>
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
            <h4>1+</h4>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h4>5+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h4>10+</h4>
            <p>Technologies Used</p>
          </div>
        </div>

      </div>
    </section>
  );
}
