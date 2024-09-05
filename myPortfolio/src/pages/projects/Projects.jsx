// const projects = [
//   {
//     title: "The Recipe APP",
//     description:
//       "A responsive recipe website that allows users to browse, view, and manage various recipes.",
//     link: "#",
//   },
//   {
//     title: "Project Two",
//     description: "A brief description of project two.",
//     link: "#",
//   },
//   {
//     title: "Project Three",
//     description: "A brief description of project three.",
//     link: "#",
//   },
//   // Add more projects as needed
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="projects">
//       <h2>My Projects</h2>
//       <div className="project-list">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <a href={project.link} className="project-link">
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import "../projects/projects.css";

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
