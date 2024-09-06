import "./projects.css";

const projects = [
  {
    title: "Recipe App",
    description:
      "An interactive, responsive recipe website with beautiful animations.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A bold and unique personal portfolio with interactive features and animations.",
    link: "#",
  },
  {
    title: "E-commerce Store",
    description:
      "An online store with seamless checkout and real-time product updates.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="reveal">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card reveal">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
