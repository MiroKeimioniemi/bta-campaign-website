# #BeatTheAlgorithm - Campaign website

#BeatTheAlgorithm is a demo campaign website made for CS-C1180 - Verkkojulkaisemisen perusteet
(roughly translating to: basics of web publishing) course held in Aalto University in the spring of 2023.

Its purpose is to serve as a wake up call about one's social media habits, framing these in a new, larger,
life-wide perspective that hopefully gives the visitor some new insight about what they actually value
about social media and what is just noise and procrastination. 

The website is deployed here: [https://mirokeimioniemi.github.io/bta-campaign-website/](https://mirokeimioniemi.github.io/bta-campaign-website/)

## Structure

The website consists of three pages:

### Home

Home contains the landing page, that always adapts to fully cover the viewport, a few paragraphs trying to
persuade the visitor to take part in the challenge, the campaign video and links to further reading.

### About

About explains the purpose and rationale of the site and contains social media links.

### Quiz

Quiz has 2 questions about the visitor's demographics to determine their remaining life expectancy and 3
questions about their social media usage designed to make them reflect on the positives and negatives of
social media and seeing how they are doing with respect to the time they consider healthy and productive.

Submitting the form visualizes the daily average social media usage in a pie chart with sleep being in blue,
productive and healthy social media usage in orange with the actual usage time exceeding it in red and the
remaining waking time in green.

If the visitor's social media usage does not exceed their ideal for healthy and productive social media time,
they get a message congratulating them for being on top of their social media usage, whereas if they fail to
stay within the goal, they get a message warning them about the months and years that the red slice compounds
to if they live up to their life expectancy. For example, for a 20-year-old Finn, an hour a day of social media
time exceeding their goal compounds to 1 year and 9 months of unwanted social media usage during their remaining
life expectancy. This is supported by the numbers for remaining life expectancy in total as well as the portion
of that actually spent awake, which is approximately only two thirds. Additionally, to help in evaluating the
goal selected, percentages and their corresponding years and months for the goal and actual usage are displayed
in the results as well. 

## Running the website locally

To run the website on your local machine, you must have Node.js installed. After that, simply clone it onto
your computer, install the dependencies by running `npm install` in the project directory and run it using 
`npm start`, which will start the localhost and display the website usually at `http://localhost:3000/` by
default, which can be opened using any browser of your choice. 
