import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ThemeContext from "../../context/ThemeContext";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <div className="header-div">
      <header className="container align-items-center pt-2">
        <Link to="/React-Portfolio">
          <h1 className="col-12 header-name">Christian Carmona</h1>
        </Link>
        <nav ref={navRef}>
          <Link onClick={showNavbar} className="col-3" to="/aboutme">
            About Me
          </Link>
          <Link onClick={showNavbar} className="col-3" to="/portfolio">
            PortFolio
          </Link>
          <Link onClick={showNavbar} className="col-3" to="/contact">
            Contact
          </Link>
          <Link onClick={showNavbar} className="col-3" to="/resume">
            Resume
          </Link>
          <button
            className="bi bi-lightbulb mode-btn"
            onClick={toggleTheme}
          ></button>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            X
          </button>
        </nav>
        <button className="bi bi-list nav-btn" onClick={showNavbar}></button>
      </header>
    </div>
  );
}

export default Header;
