import React from "react";
import '../stylesheets/style.css'
import '../stylesheets/home.css'
import backgroundImage from '../images/addicts.png'
import phone from '../images/cropped-phone.png'

export default function Home() {
    return(
        <div>
            <main id='landing'>
                <img src={backgroundImage} alt="" className="backgroundImage"/>
                <div className="backgroundOverlay"></div>
                <img src={phone} alt="social media apps" className="phoneImage"/>
                <h1 className="heading">#BeatTheAlgorithm</h1>
            </main>
        </div>
    )
}