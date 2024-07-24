function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-3xl font-bold">Ahnob</h1>

        <nav>
          <a href="#about" className="mr-11 text-gray-100 hover:text-gray-400">
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
