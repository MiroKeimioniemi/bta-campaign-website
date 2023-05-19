import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/style.css';
import '../stylesheets/footer.css';

import logo from '../images/bad-logo.webp'

function Footer() {

  return (
    <footer className="footer">
        <Link to="/"><img src={logo} alt="logo" className="footer-logo" /></Link>
        <h1 className="footer-header">#BeatTheAlgorithm</h1>
        <p className="small-print">Copyright © 2023 Miro Keimiöniemi.</p>
        <p className="small-print">All rights reserved.</p>
    </footer>     
  );
}

export default Footer;