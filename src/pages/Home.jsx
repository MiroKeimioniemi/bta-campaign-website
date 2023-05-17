import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../stylesheets/style.css'
import '../stylesheets/home.css'
import backgroundImage from '../images/addicts.png'
import phone from '../images/cropped-phone.png'
import lookingAtPhone from '../images/person-looking-at-phone.jpg'

export default function Home() {
    return(
        <div>
            <main id='landing'>
                <img src={backgroundImage} alt="" className="backgroundImage"/>
                <div className="backgroundOverlay"></div>
                <img src={phone} alt="social media apps" className="phoneImage"/>
                <div className="heading-wrap">
                    <h1 className="mobile-main-heading">
                        #Beat
                        <br/>
                        &nbsp;&nbsp;The
                        <br/>
                        &nbsp;&nbsp;Algorithm
                    </h1>
                    <h1 className="desktop-main-heading">#BeatTheAlgorithm</h1>
                </div>
                <h2 className="landing-subheading">Challenge yourself to a month without social media</h2>
                <p className="landing-text">Re-evaluate your relationship with social media. Who is winning, you or the algorithms?</p>
                <Link to="/quiz"><button>
                    Take Quiz
                </button></Link>
            </main>
            
            <section className="stats-container">
                <div className="image-container"><img src={lookingAtPhone} alt="person looking at phone" className="stats-image"/></div>
                <p className="clarification">Global daily average screen time*</p>
                <p className="big-number">6h 58min</p>
            </section>
        </div>
    )
}