const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        Ahnob
      </a>
      <ul className="nav-links">
        <li>
          <a className="active" href="#about">
            About
          </a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
