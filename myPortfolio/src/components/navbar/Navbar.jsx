import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="logo nav-link" to="/">
        ATHALYAH
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="active nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className=" nav-link contact-margin">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
