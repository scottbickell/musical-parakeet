const inquirer = require("inquirer");
const weather = require("weather-js");
const moment = require("moment");
const fs = require("fs");

inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What location do you want weather for?",
        name: "location"
    },
    {
        type: "list",
        message: "C or F?",
        name: "degreeType,",
        choices: ["farenheit", "celcius"]
    }
]).then(({
    name,
    location,
    degreeType
}) => {
    console.log(location);

    weather.find({
        search: location,
        degreeType: degreeType === "fahrenheit" ? "F" : "C"}, (err, result) => {
        if (err) console.log(err);

        console.log(JSON.stringify(result, null, 2));
    });
});