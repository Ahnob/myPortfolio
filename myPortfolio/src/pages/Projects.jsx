const projects = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    link: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
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
