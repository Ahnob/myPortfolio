const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-700 mb-4">
              A brief description of the project, highlighting its features and
              technologies used.
            </p>
            <a href="#" className="text-blue-500">
              View Project
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 2"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-700 mb-4">
              A brief description of the project, highlighting its features and
              technologies used.
            </p>
            <a href="#" className="text-blue-500">
              View Project
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 3"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-700 mb-4">
              A brief description of the project, highlighting its features and
              technologies used.
            </p>
            <a href="#" className="text-blue-500">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
