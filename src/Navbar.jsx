import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './stylesheets/style.css'
import './stylesheets/navbar.css';
import logo from './images/bad-logo.png'

function Navbar() {
  return (
    <nav className="desktop-nav">
      <ul className="desktop-nav-links">
      <li className="desktop-nav-item">
          <Link to="/"><img src={logo} alt="logo" id="logo" /></Link>
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
  );
}

export default Navbar;