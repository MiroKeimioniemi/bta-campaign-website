import React from "react";
import '../stylesheets/style.css'
import '../stylesheets/quiz.css'
import bitrain from '../images/bitrain.png'

const countries = [
    { code: "fi", name: "Finland" },
    { code: "swe", name: "Sweden" },
    { code: "us", name: "United States" },
    { code: "gb", name: "United Kingdom" },
    { code: "ca", name: "Canada" },
    { code: "au", name: "Australia" }
  ];

export default function Quiz() {
    return(
        <div className="quiz-body">
            <img src={bitrain} className="bitrain" />
            <h1 className="quiz-heading">Calculate who is winning, you or the algorithms</h1>
            <div className="demographics">
                <div className="question">
                    <p>How old are you?</p>
                    <input type="number" name="age" placeholder="Enter your age" className="input-field" min="0"></input>
                </div>
                <div className="question">
                    <p>Where do you live?</p>
                    <select name="country" className="select-country">
                        {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                            {country.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="question">
                <p>How much daily social media time on average do you think would be genuinely healthy, productive and helpful for your goals and relationships?</p>
                <input type="number" name="healthy-usage" placeholder="Minutes" className="input-field" min="0" max="24"></input>
            </div>
            <div className="question">
                <p>Estimate honestly how many minutes of social media you use per day</p>
                <input type="number" name="usage-estimate" placeholder="Minutes" className="input-field" min="0" max="24"></input>
            </div>
            <div className="question">
                <p>Fill out your social media usage statistics for the past week from the wellness section of your phone</p>
                <div className="week-input">
                    <input type="number" name="day1" placeholder="" className="weekday" min="0" max="24"></input>
                    <input type="number" name="day2" placeholder="" className="weekday" min="0" max="24"></input>
                    <input type="number" name="day3" placeholder="" className="weekday" min="0" max="24"></input>
                    <input type="number" name="day4" placeholder="" className="weekday" min="0" max="24"></input>
                    <input type="number" name="day5" placeholder="" className="weekday" min="0" max="24"></input>
                    <input type="number" name="day6" placeholder="" className="weekday" min="0" max="24"></input>
                    <input type="number" name="day7" placeholder="" className="weekday" min="0" max="24"></input>
                </div>
            </div>
            <button type="submit" className="submit-button">See Results</button>
        </div>
    )
}