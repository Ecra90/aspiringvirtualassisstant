function Services() {
  const services = [
    {
      title: "Chatbot Development",
      desc: "Custom AI assistants."
    },
    {
      title: "Task Automation",
      desc: "Workflow automation tools."
    },
  {
    title: "Data Analysis",
    desc: "Insights from data."
  },
  {
    title: "Content Generation",
    desc: "AI-generated content."
  },
  {
    title: "Virtual Assistance",
    desc: "Remote support services."
  },
  {
    title: "API Integration",
    desc: "Third-party integrations."
  }
  ];

  return (
    <section id="services">
      <h2>Services</h2>

      <div className="cards">
        {services.map((service) => (
          <div key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;