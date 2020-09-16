
var express = require('express');
const fs = require('fs');
const validator = require('validator');
const notes = require('notes.js');

const message = notes();
console.log(message);

var app = express();

console.log(validator.isEmail("test@gmail.com"));
console.log(validator.isCreditCard('123456789'));

var log_text = "This is my second assignment in NoSQL.I am taking this class as an independent study.Independent studies are definitely different since you don't see a professor as often.I did have a little bit of confusion on this assignment sinceit was the first IT related assignment since last April.Since you last saw me, I have been working on different SQL statements and Python code.For my internship, I have been working on a Google Big Query project that recreates a Google Analytics report in BigQuery.I'm also working on an Exploratory Analysis project using Python to create a CDF (cumulative distribution function) using Google Analytics data.I saw you launched your wine company, and are building out a inventory app.I thought that was really interesting you were able to use your IT knowledge and passion for wine to make a business.Over the summer, I basically was busy at my internship and started a bunch of side hustles.I also added on a digital marketing minor at Point ParkBecause of covid, my internship at Highmark got cancelled over the summeAlthough, I re-applied for next summer the same position, so my application is streamlined to the hiring team - I'm hoping I am just reselected without having to interview againNevertheless, I have other options like at PNC and my current employer where I'm interning, or elsewhere.Basically, I just want to work with data in any way - my ideal job would be something with consulting, with consumer data and then making recommendations based on implementationThis is just due to how your able to help a client and tie other business areas to analaytics.Also, with this kind of role, your able to get exposed to data science, and then move into data science type positions.At my work, we refer to our roles as 'data plumbers', due to how we audit current implementation and data in order to clean/repair it to be working at full efficiency.I really like the company I'm at and trying to move into a full-time position, but due to not graduating until next December things are tricky - maybe I will co-op in August and then have a shorter gap time? Will keep you posted. . "

fs.writeFileSync('assignment_2.txt', log_text , (err) => {
    
    if (err) throw err;
    console.log('File Created');
});
