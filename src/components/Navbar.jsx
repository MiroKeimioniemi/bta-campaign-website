import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../stylesheets/style.css'
import '../stylesheets/navbar.css';
import logo from '../images/bad-logo.png'

function Navbar() {

  const [menuVisible, setMenuVisisble] = useState(false);

  function toggleMenu() {
    setMenuVisisble(!menuVisible);
  }

  return (
    <div className="sticky">
      <nav className="desktop-nav">
        <ul className="desktop-nav-links">
          <li className="desktop-nav-item">
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
          </li>
          <li className="desktop-nav-item">
            <Link to="/" className="nav-text">Home</Link>
          </li>
          <li className="desktop-nav-item">
            <Link to="/about" className="nav-text">About</Link>
          </li>
          <li className="desktop-nav-item">
            <Link to="/quiz" className="nav-text">Quiz</Link>
          </li>
        </ul>
      </nav>

      <nav className="mobile-nav">
        <Link to="/" className="mobile-logo"><img src={logo} alt="logo" className="logo" /></Link>
        <div class="hamburger" onClick={toggleMenu}>
            <svg viewBox="0 0 100 100" width="3.815rem" height="3.815rem" class="disable-pointer-effects">
                <rect width="100" height="100" rx="8" fill="#000000"></rect>
                <rect x ="25" y="30" width="50" height="6" rx="4" fill="#EEEEEE"></rect>
                <rect x ="25" y="46" width="50" height="6" rx="4" fill="#EEEEEE"></rect>
                <rect x ="25" y="62" width="50" height="6" rx="4" fill="#EEEEEE"></rect>
            </svg>
        </div>
      </nav>

      {menuVisible && (
        <div className="menu">
          <ul className="mobile-menu-links">
            <li className="mobile-menu-item">
              <Link to="/" className="nav-text" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/about" className="nav-text" onClick={toggleMenu}>About</Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/quiz" className="nav-text" onClick={toggleMenu}>Quiz</Link>
            </li>
          </ul>
        </div>
      )}

    </div>
  );
}

export default Navbar;