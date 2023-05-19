import React, { useRef, useState } from "react";
import { Piechart } from "../components/Piechart";
import '../stylesheets/style.css'
import '../stylesheets/dataVisualizer.css'

export default function DataVisualizer(props) {

    const data = props.data;

    function matchLifeExpectancy(country) {
        switch (country) {
            case "fi":
                return 81.61;
            case "swe":
                return 82.40;
            case "us":
                return 78.50;
            case "gb":
                return 81.40;
            case "ca":
                return 82.24;
            case "au":
                return 83.20;
            case "ot":
                return 73;
        }
    }

    // Latest response

    let latest = data[data.length - 1]
    let country = latest.country;

    let lifeExpectancy = matchLifeExpectancy(country);
    let remainingLifeExpectancy = Math.max(0, lifeExpectancy - latest.age);
    let remainingLifeExpectancyInHours = (remainingLifeExpectancy * 365 * 24);
    let remainingLifeExpectancyYears = Math.floor(remainingLifeExpectancyInHours / (365 * 24));
    let remainingLifeExpectancyMonths = (((remainingLifeExpectancyInHours % (365 * 24)) / (365 * 24)) * 12).toFixed(0);

    let remainingAwakingTimeInHours = ((remainingLifeExpectancy * 365 * 24) - (remainingLifeExpectancy * 365 * 8));
    let remainingAwakingTimeYears = Math.floor(remainingAwakingTimeInHours / (365 * 24));
    let remainingAwakingTimeMonths = (((remainingAwakingTimeInHours % (365 * 24)) / (365 * 24)) * 12).toFixed(0);

    let idealProportionOnline = (latest.idealUseTime / (24 * 60));
    let idealProportionOnlineYears = Math.floor((idealProportionOnline * remainingAwakingTimeInHours) / (365 * 24));
    let idealProportionOnlineMonths = ((((idealProportionOnline * remainingAwakingTimeInHours) % (365 * 24)) / (365 * 24)) * 12).toFixed(0);
    
    let socialMediaTime;
    if (latest.realUseTime.every((num) => num > 0)) {
        socialMediaTime = (latest.realUseTime.reduce((i, j) => {return i + Number(j)}, 0) / 7);
    } else {
        socialMediaTime = Number(latest.estimateUseTime);
    }
    console.log(socialMediaTime);

    let proportionOnline = (socialMediaTime / (24 * 60));
    let proportionOnlineYears = Math.floor((proportionOnline * remainingAwakingTimeInHours) / (365 * 24));
    let proportionOnlineMonths = ((((proportionOnline * remainingAwakingTimeInHours) % (365 * 24)) / (365 * 24)) * 12).toFixed(0);

    let overtimeYears = Math.floor(((proportionOnline - idealProportionOnline) * remainingAwakingTimeInHours) / (365 * 24));
    let overtimeMonths = (((((proportionOnline - idealProportionOnline) * remainingAwakingTimeInHours) % (365 * 24)) / (365 * 24)) * 12).toFixed(0);

    // Information for all responses
    
    return (
        <div>
            <section className="visual">

                <div className="piechart">
                    <Piechart ideal={idealProportionOnline} actual={proportionOnline} className="piechart" />
                </div>

                <div className="statistics">

                    {(overtimeYears > 0 || overtimeMonths > 0) ? 
                        (overtimeYears > 0 && overtimeMonths > 0) ? 
                            <p className="number">The algorithms are stealing {overtimeYears} years and {overtimeMonths} months of your life</p> 
                            : (overtimeYears > 0 && overtimeMonths <= 0) ? 
                                <p className="number">The algorithms are stealing {overtimeYears} years of your life</p> 
                                : <p className="number">The algorithms are stealing {overtimeMonths} months of your life</p>
                            : <p className="number">You are on top of your social media usage!</p>
                    }

                    <p>Remaining life expectancy in total:</p>
                    <p className="number">{remainingLifeExpectancyYears} years {remainingLifeExpectancyMonths} months</p>

                    <p>Remaining awaking time:</p>
                    <p className="number">{remainingAwakingTimeYears} years {remainingAwakingTimeMonths} months</p>

                    <p>Ideal proportion of waking time spent online:</p>
                    <p className="number">{(idealProportionOnline * 100).toFixed(1)}% <span className="yearsAndMonths"> ({idealProportionOnlineYears} years {idealProportionOnlineMonths} month)</span></p>

                    <p>Proportion of waking time spent online:</p>
                    <p className="number">{(proportionOnline * 100).toFixed(1)}% <span className="yearsAndMonths"> ({proportionOnlineYears} years {proportionOnlineMonths} month)</span></p>
                    
                </div>
            </section>
        </div>
    )
    
}