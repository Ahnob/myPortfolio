function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-10 mr-4" />
          <h1 className="text-3xl font-bold">My Portfolio</h1>
        </div>
        <nav>
          <a href="#about" className="mr-6 hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="mr-6 hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
