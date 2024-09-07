import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="logo nav-link" to="/">
        Logo
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="active nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className=" nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact nav-link" className=" nav-link">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
