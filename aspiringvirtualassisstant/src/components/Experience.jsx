import {
  FaPython,
  FaReact,
  FaServer,
  FaRobot,
} from "react-icons/fa";

function Experience() {
  const journey = [
    {
      icon: <FaPython />,
      year: "2024",
      title: "Started Learning Python",
      description:
        "Built a strong foundation in programming, problem solving, and backend development concepts."
    },
    {
      icon: <FaServer />,
      year: "2024",
      title: "Built My First Flask API",
      description:
        "Learned REST APIs, routing, JSON responses, and backend architecture using Flask."
    },
    {
      icon: <FaReact />,
      year: "2025",
      title: "Frontend Development with React",
      description:
        "Created responsive user interfaces, reusable components, and integrated APIs."
    },
    {
      icon: <FaRobot />,
      year: "2025",
      title: "Virtual Assistant Development",
      description:
        "Building AI-powered assistants, productivity tools, and automation solutions."
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <span>MY JOURNEY</span>

        <h2>Learning & Growth Timeline</h2>

        <p>
          Every project has helped me grow as a developer,
          moving closer to building intelligent websites and applications.
        </p>
      </div>

      <div className="timeline">
        {journey.map((item, index) => (
          <div
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={item.title}
          >
            <div className="timeline-icon">
              {item.icon}
            </div>

            <div className="timeline-content">
              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;