function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <nav className="flex justify-between items-center py-4 gap-3">
          <a href="#about">About</a>
          <a href="#projects" className="mr-6 hover:text-gray-400">
            Projects
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
