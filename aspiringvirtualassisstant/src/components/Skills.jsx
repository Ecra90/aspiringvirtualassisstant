import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiFlask,
  SiSqlite,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DBFB",
  },
  {
    name: "Flask",
    icon: <SiFlask />,
    color: "#ffffff",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "#FFD43B",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "#F7DF1E",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F1502F",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#ffffff",
  },
  {
    name: "SQLite",
    icon: <SiSqlite />,
    color: "#0F80CC",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "#FF6C37",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span>MY TOOLKIT</span>

        <h2>Technologies I Work With</h2>

        <p>
          Building modern web applications and
          intelligent tech solutions using
          industry-standard technologies.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div
              className="skill-icon"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;