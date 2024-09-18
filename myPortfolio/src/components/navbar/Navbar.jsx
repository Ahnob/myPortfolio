import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link className="logo nav-link" to="/">
        Tirzah
      </Link>

      <div className="menu-icon" onClick={toggleMenu}>
        <div id="top-bar" className={isOpen ? "bar open" : "bar"}></div>
        <div id="middle-bar" className={isOpen ? "bar open" : "bar"}></div>
        <div id="bottom-bar" className={isOpen ? "bar open" : "bar"}></div>
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
