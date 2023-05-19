import React from "react";
import '../stylesheets/style.css';
import '../stylesheets/about.css';

export default function About() {
    return(
        <section className="about-body">
            <div className="about-text">
                <h1 className="about-mobile-main-heading">About</h1>
                <p className="about-paragraph">
                    #BeatTheAlgorithm or is a demo campaign website made for CS-C1180 - Verkkojulkaisemisen perusteet 
                    (roughly translating to: basics of web publishing) course held in Aalto University in the spring of 2023.
                    The idea for it came from observing the increasing disconnect between people's behavior online versus in
                    real life and seeing the need to remind people of the latter. No matter how outrageously polarized the
                    world may look online, most people in the real world still share more or less the same goals, only 
                    differing in the particular nuances of the methods to get there. And even if this were not the case,
                    disagreements do not have to be let get in the way of positive interactions, which, most likely the vast
                    majority of real life encounters are.
                </p>
                <p className="about-paragraph">
                    This currently remains just as a final project for a university course but may eventually be repurposed as
                    an actual campaign website for a larger project trying to actually address the issue. In the meantime, you
                    can follow its developments or check out the rest of my portfolio 
                    <a href="https://users.aalto.fi/~keimiom1/index.html" className="about-link"> here</a>.
                </p>
            </div>
        </section>
    )
}