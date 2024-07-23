const Header = () => {
    return (
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <nav>
            <a href="#about" className="px-4">About</a>
            <a href="#projects" className="px-4">Projects</a>
            <a href="#contact" className="px-4">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;