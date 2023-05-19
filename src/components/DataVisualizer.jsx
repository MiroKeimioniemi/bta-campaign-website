import React, { useRef, useState } from "react";
import { Piechart } from "../components/Piechart";

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
    let remainingLifeExpectancyMonths = (((remainingLifeExpectancyInHours % (365 * 24)) / (365 * 24)) * 12).toFixed(1);

    let remainingAwakingTimeInHours = ((remainingLifeExpectancy * 365 * 24) - (remainingLifeExpectancy * 365 * 8));
    let remainingAwakingTimeYears = Math.floor(remainingAwakingTimeInHours / (365 * 24));
    let remainingAwakingTimeMonths = (((remainingAwakingTimeInHours % (365 * 24)) / (365 * 24)) * 12).toFixed(1);

    let idealProportionOnline = (latest.idealUseTime / (24 * 60));
    let idealProportionOnlineYears = Math.floor((idealProportionOnline * remainingAwakingTimeInHours) / (365 * 24));
    let idealProportionOnlineMonths = ((((idealProportionOnline * remainingAwakingTimeInHours) % (365 * 24)) / (365 * 24)) * 12).toFixed(1);
    
    let socialMediaTime;
    if (latest.realUseTime.every((num) => num > 0)) {
        socialMediaTime = (latest.realUseTime.reduce((i, j) => {return i + Number(j)}, 0) / 7);
    } else {
        socialMediaTime = Number(latest.estimateUseTime);
    }
    console.log(socialMediaTime);

    let proportionOnline = (socialMediaTime / (24 * 60));
    let proportionOnlineYears = Math.floor((proportionOnline * remainingAwakingTimeInHours) / (365 * 24));
    let proportionOnlineMonths = ((((proportionOnline * remainingAwakingTimeInHours) % (365 * 24)) / (365 * 24)) * 12).toFixed(1);

    // Information for all responses
    
    return (
        <div>
            <section>
                <Piechart ideal={idealProportionOnline} actual={proportionOnline} />
                <p>Remaining life expectancy in total:</p>
                <p>{remainingLifeExpectancyYears}yr {remainingLifeExpectancyMonths}m</p>
                <p>Remaining awaking time:</p>
                <p>{remainingAwakingTimeYears}yr {remainingAwakingTimeMonths}m</p>
                <p>Ideal proportion of waking time spent online:</p>
                <p>{(idealProportionOnline * 100).toFixed(1)}%</p>
                <p>{idealProportionOnlineYears}yr {idealProportionOnlineMonths}m</p>
                <p>Proportion of waking time spent online:</p>
                <p>{(proportionOnline * 100).toFixed(1)}%</p>
                <p>{proportionOnlineYears}yr {proportionOnlineMonths}m</p>
            </section>
        </div>
    )
    
}