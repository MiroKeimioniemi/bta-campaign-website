import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../stylesheets/style.css';
import '../stylesheets/home.css';

import backgroundImage from '../images/addicts.webp';
import phone from '../images/cropped-phone.webp';
import lookingAtPhone from '../images/person-looking-at-phone.webp';
import socialDilemma from '../images/the-social-dilemma.webp';
import digitalMinimalism from '../images/digital-minimalism.webp';

export default function Home() {
    return(
        <div>

            {/* Landing page - that portion of the home page that covers the viewport upon opening the page */}
            <main id='landing'>
                <img src={backgroundImage} alt="" className="backgroundImage"/>
                {/* Black, high-opacity overlay over the background image */}
                <div className="backgroundOverlay"></div>
                <img src={phone} alt="social media apps" className="phoneImage"/>
                {/* Mobile and desktop variants of the main heading for different aspect ratios */}
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
                <Link to="/quiz">
                    <button>
                        Take Quiz
                    </button>
                </Link>
            </main>
            
            {/* Global daily average screen time statistic */}
            <section className="stats-container">
                <div className="image-container"><img src={lookingAtPhone} alt="person looking at phone" className="stats-image"/></div>
                <p className="clarification">Global daily average screen time*</p>
                <p className="big-number">6h 58min</p>
            </section>

            {/* Body */}
            <section className="body-container">
                <article className="why-article">
                    <h2>Why take a break?</h2>
                    <p>
                        Social media is, in many ways, a very positive invention that connects you to all of humanity
                        in a click of a button. However, therein lies its negative side as well. It spreads the good,
                        the bad and the ugly ideas with unprecedented speed and volume, making it very easy to get
                        entirely overwhelmed with all of the often negative content that usually is not really even
                        relevant to you in any way. This makes many forget to pay attention to their local community
                        and environment.
                    </p>
                    <p>
                        Ideally, we can harness social media for all the good it brings by only using it intentionally
                        and with moderation. However, this may be exceedingly difficult to do with predatory algorithms, 
                        without reframing one's perspective first.
                    </p>
                    <p>
                        Therefore, we invite you to re-evaluate your relationship with social media by taking a break and 
                        only engaging with your local community for a month, after which you can carefully start re-introducing 
                        the truly life-enhancing features of social media that you found yourself missing. Try the quiz and see
                        if your perspective on social media changes upon seeing how major of a part it really plays in your life.
                    </p>
                </article>
                {/* Campaign video */}
                <div className="video-container">
                    <iframe width="1024" height="576" src="https://www.youtube-nocookie.com/embed/zKkjvkg37Jg" title="Social media survivor challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="highlight-video"></iframe>
                </div>
                <h2>Further reading</h2>
                <div className="further-reading">
                    <a href="https://www.thesocialdilemma.com/"><img src={socialDilemma} alt="the social dilemma documentary" className="further-reading-image"/></a>
                    <a href="https://calnewport.com/writing/"><img src={digitalMinimalism} alt="Cal Newport - Digital Minimalism book" className="further-reading-image"/></a>
                </div>
                <p className="sources">*Source: <a href="https://explodingtopics.com/blog/screen-time-stats">https://explodingtopics.com/blog/screen-time-stats</a> (accessed 18.5.2023)</p>
            </section>

        </div>
    )
}