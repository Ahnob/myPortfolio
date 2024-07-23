function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/path/to/your-picture.jpg"
            alt="About Me"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hello! I'm a passionate developer with experience in building web
            applications using modern technologies. My goal is to create
            impactful solutions and contribute to innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
