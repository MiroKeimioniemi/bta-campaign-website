import React, { useRef, useState } from "react";
import DataEntry from '../DataEntry';
import DataVisualizer from "../components/DataVisualizer";
import '../stylesheets/style.css';
import '../stylesheets/quiz.css';

import bitrain from '../images/bitrain.webp';

const countries = [
    { code: "fi", name: "Finland" },
    { code: "swe", name: "Sweden" },
    { code: "us", name: "United States" },
    { code: "gb", name: "United Kingdom" },
    { code: "ca", name: "Canada" },
    { code: "au", name: "Australia" },
    { code: "ot", name: "Other" },
  ];

export default function Quiz() {

    // React component states
    const [quizValues, setQuizValues] = useState({
        age: '',
        country: 'fi',
        idealUsage: '',
        estimatedUsage: '',
        day1: '',
        day2: '',
        day3: '',
        day4: '',
        day5: '',
        day6: '',
        day7: ''
    });
    const targetRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const [dataEntries, setDataEntries] = useState([]);

    // Updates current selection to quiz state
    const logInput = (input) => {
        const { name, value } = input.target;
        setQuizValues((prevQuizValues) => ({
            ...prevQuizValues,
            [name]: value,
        }));
    };

    // Creates a data entry object based on quiz selections and stores it in the component state. Additionally, changes the component state to indicate that the quiz has been submitted and scrolls to the results.
    function submitQuiz() {
        const data = new DataEntry(quizValues.age, quizValues.country, quizValues.idealUsage, quizValues.estimatedUsage, [ quizValues.day1, quizValues.day2, quizValues.day3, quizValues.day4, quizValues.day5, quizValues.day6, quizValues.day7 ]);
        setDataEntries((prevDataEntries) => [...prevDataEntries, data]);
        setSubmitted(true);
        if (targetRef != null) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <div className="quiz-body">

            {/* Quiz form */}
            <img src={bitrain} className="bitrain" alt="" />
            <h1 className="quiz-heading">Calculate who is winning, you or the algorithms</h1>

            {/* Demographics questions to determine remaining life expectacy */}
            <div className="demographics">

                <div className="question">
                    <p>How old are you?</p>
                    <input type="number" name="age" placeholder="Enter your age" className="input-field" min="0" onChange={logInput}></input>
                </div>

                <div className="question">
                    <p>Where do you live?</p>
                    <select name="country" className="select-country" onBeforeInput={logInput} onChange={logInput}>
                        {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            {/* Social media usage questions */}
            <div className="question">
                <p>How many minutes of daily social media time on average do you think would be genuinely healthy, productive and helpful for your goals and relationships?</p>
                <input type="number" name="idealUsage" placeholder="Minutes" className="input-field" min="0" max="1440" onChange={logInput}></input>
            </div>

            <div className="question">
                <p>Estimate honestly how many minutes of social media you use per day</p>
                <input type="number" name="estimatedUsage" placeholder="Minutes" className="input-field" min="0" max="1440" onChange={logInput}></input>
            </div>

            <div className="question">
                <p>Fill out your social media usage statistics for the past week in minutes from the wellness section of your phone</p>
                <div className="week-input">
                    <input type="number" name="day1" placeholder="" className="weekday" min="0" max="1440" onChange={logInput}></input>
                    <input type="number" name="day2" placeholder="" className="weekday" min="0" max="1440" onChange={logInput}></input>
                    <input type="number" name="day3" placeholder="" className="weekday" min="0" max="1440" onChange={logInput}></input>
                    <input type="number" name="day4" placeholder="" className="weekday" min="0" max="1440" onChange={logInput}></input>
                    <input type="number" name="day5" placeholder="" className="weekday" min="0" max="1440" onChange={logInput}></input>
                    <input type="number" name="day6" placeholder="" className="weekday" min="0" max="1440" onChange={logInput}></input>
                    <input type="number" name="day7" placeholder="" className="weekday" min="0" max="1440" onChange={logInput}></input>
                </div>
            </div>
            
            {/* Submit button */}
            <button type="submit" className="submit-button" onClick={submitQuiz} ref={targetRef}>{submitted ? "Update" : "See Results"}</button>
            
            {/* Displays the quiz results upon submission */}
            {submitted && (
                <div id="results">
                    <DataVisualizer data={dataEntries} />
                </div>
            )}

        </div>
    )
}