import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './stylesheets/style.css'
import './stylesheets/navbar.css';
import logo from './images/bad-logo.png'

//TODO: Make the navbar respond to window size without need to refresh

function Navbar() {
  return (
    <div>
      <nav className="desktop-nav">
        <ul className="desktop-nav-links">
          <li className="desktop-nav-item">
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
          </li>
          <li className="desktop-nav-item">
            <Link to="/" className="desktop-nav-text">Home</Link>
          </li>
          <li className="desktop-nav-item">
            <Link to="/about" className="desktop-nav-text">About</Link>
          </li>
          <li className="desktop-nav-item">
            <Link to="/quiz" className="desktop-nav-text">Quiz</Link>
          </li>
        </ul>
      </nav>

      <nav className="mobile-nav">
        <Link to="/" className="mobile-logo"><img src={logo} alt="logo" className="logo" /></Link>
        <div class="hamburger">
            <svg viewBox="0 0 100 100" width="3.815rem" height="3.815rem" class="disable-pointer-effects">
                <rect width="100" height="100" rx="8" fill="#000000"></rect>
                <rect x ="25" y="30" width="50" height="6" rx="4" fill="#EEEEEE"></rect>
                <rect x ="25" y="46" width="50" height="6" rx="4" fill="#EEEEEE"></rect>
                <rect x ="25" y="62" width="50" height="6" rx="4" fill="#EEEEEE"></rect>
            </svg>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;