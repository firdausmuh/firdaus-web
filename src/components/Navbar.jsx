import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="highlight">Firdaus</span>Dev
        </Link>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#portfolio" className="nav-link" onClick={() => setIsOpen(false)}>
            Portfolio
          </a>
          <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
