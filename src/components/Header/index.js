import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ThemeContext from "../../context/ThemeContext";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="nav-head container align-items-center pt-2">
      <Link to="/">
        <h1 className="col-12">Christian Carmona</h1>
      </Link>
      <nav>
        <ul className="nav-link row ">
          <Link className="col-3" to="/aboutme">
            About Me
          </Link>
          <Link className="col-3" to="/portfolio">
            PortFolio
          </Link>
          <Link className="col-3" to="/contact">
            Contact
          </Link>
          <Link className="col-3" to="/resume">
            Resume
          </Link>
          <button class="bi bi-lightbulb mode-btn" onClick={toggleTheme}>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
