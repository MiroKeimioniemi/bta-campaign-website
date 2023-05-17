import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './stylesheets/style.css'
import './stylesheets/footer.css';
import logo from './images/bad-logo.png'

function Footer() {

  return (
    <footer className="footer">
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
        <h1 className="footer-header">#BeatTheAlgorithm</h1>
        <p className="small-print">Copyright © 2022 Miro Keimiöniemi.</p>
        <p className="small-print">All rights reserved.</p>
    </footer>     
  );
}

export default Footer;