import React from "react";
import { Piechart } from "../components/Piechart";
import '../stylesheets/style.css';
import '../stylesheets/dataVisualizer.css';

export default function DataVisualizer(props) {

    const data = props.data;

    // Matches the selected country to its average life expectancy
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

    // Latest data entry
    let latest = data[data.length - 1]

    // Life expectancy of the latest data entry
    let lifeExpectancy = matchLifeExpectancy(latest.country);
    let remainingLifeExpectancy = Math.max(0, lifeExpectancy - latest.age);
    let remainingLifeExpectancyInHours = (remainingLifeExpectancy * 365 * 24);
    let remainingLifeExpectancyYears = Math.floor(remainingLifeExpectancyInHours / (365 * 24));
    let remainingLifeExpectancyMonths = (((remainingLifeExpectancyInHours % (365 * 24)) / (365 * 24)) * 12).toFixed(0);

    // Estimated waking time of the latest data entry
    let remainingWakingTimeInHours = ((remainingLifeExpectancy * 365 * 24) - (remainingLifeExpectancy * 365 * 8));
    let remainingWakingTimeYears = Math.floor(remainingWakingTimeInHours / (365 * 24));
    let remainingWakingTimeMonths = (((remainingWakingTimeInHours % (365 * 24)) / (365 * 24)) * 12).toFixed(0);

    // Ideal social media usage of the latest data entry
    let idealProportionOnline = (latest.idealUseTime / (24 * 60));
    let idealOnlineYears = Math.floor((idealProportionOnline * remainingWakingTimeInHours) / (365 * 24));
    let idealOnlineMonths = ((((idealProportionOnline * remainingWakingTimeInHours) % (365 * 24)) / (365 * 24)) * 12).toFixed(0);
    
    // Selects whether to use the estimate or actual statistics for social media usage time based on whether the statistics have been filled or not
    let socialMediaTime;
    if (latest.realUseTime.every((num) => num > 0)) {
        socialMediaTime = (latest.realUseTime.reduce((i, j) => {return i + Number(j)}, 0) / 7);
    } else {
        socialMediaTime = Number(latest.estimateUseTime);
    }
    console.log(socialMediaTime);

    // Actual social media usage of the latest data entry
    let proportionOnline = (socialMediaTime / (24 * 60));
    let proportionOnlineYears = Math.floor((proportionOnline * remainingWakingTimeInHours) / (365 * 24));
    let proportionOnlineMonths = ((((proportionOnline * remainingWakingTimeInHours) % (365 * 24)) / (365 * 24)) * 12).toFixed(0);

    // Unwanted social media usage of the latest data entry
    let overtimeYears = Math.floor(((proportionOnline - idealProportionOnline) * remainingWakingTimeInHours) / (365 * 24));
    let overtimeMonths = (((((proportionOnline - idealProportionOnline) * remainingWakingTimeInHours) % (365 * 24)) / (365 * 24)) * 12).toFixed(0);

    // Information for all responses
    
    return (
        <div>
            <section className="visual">

                <div className="piechart">
                    <Piechart ideal={idealProportionOnline} actual={proportionOnline} className="piechart" />
                </div>

                <div className="statistics">

                    {/* Selects the sentence template to be used based on the numbers of years and months */}
                    {(overtimeYears > 0 || overtimeMonths > 0) ? 
                        (overtimeYears > 0 && overtimeMonths > 0) ? 
                            <p className="number">The algorithms are stealing {overtimeYears} years and {overtimeMonths} months of your life</p> 
                            : (overtimeYears > 0 && overtimeMonths <= 0) ? 
                                <p className="number">The algorithms are stealing {overtimeYears} years of your life</p> 
                                : <p className="number">The algorithms are stealing {overtimeMonths} months of your life</p>
                            : <p className="number">You are on top of your social media usage!</p>
                    }

                    <p>Remaining life expectancy in total*:</p>
                    <p className="number">{remainingLifeExpectancyYears} years {remainingLifeExpectancyMonths} months</p>

                    <p>Remaining waking time:</p>
                    <p className="number">{remainingWakingTimeYears} years {remainingWakingTimeMonths} months</p>

                    <p>Ideal proportion of waking time spent online:</p>
                    <p className="number">{(idealProportionOnline * 100).toFixed(1)}% <span className="yearsAndMonths"> ({idealOnlineYears} years {idealOnlineMonths} month)</span></p>

                    <p>Proportion of waking time actually spent online:</p>
                    <p className="number">{(proportionOnline * 100).toFixed(1)}% <span className="yearsAndMonths"> ({proportionOnlineYears} years {proportionOnlineMonths} month)</span></p>

                </div>

            </section>

            <p className="sources">*Source: <a href="https://www.who.int/data/gho/data/indicators/indicator-details/GHO/life-expectancy-at-birth-(years)">https://www.who.int/data/gho/data/indicators/indicator-details/GHO/life-expectancy-at-birth-(years)</a> (accessed 19.5.2023)</p>

        </div>
    )
    
}