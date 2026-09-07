const projects = [
  {
    title: "Real Estate Platform",
    description:
      "React + Flask chatbot with OpenAI integration.",
  },
  {
    title: "Task Manager Application",
    description:
      "Create and manage tasks using AI.",
  },
  {
    title: "Knowledge Base Application",
    description:
      "Search and retrieve company knowledge.",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title}>
            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <button>Demo</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;