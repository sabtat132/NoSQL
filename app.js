//fs.writeFileSync('assignment_2.txt');

var express = require('express');
const fs = require('fs');
const validator = require('validator');
const notes = require('./notes.js');

const message = notes();
console.log(message);

var app = express();

console.log(validator.isEmail("test@gmail.com"));

var log_text = "Test - Test - Test. "

fs.writeFileSync('assignment_2.txt', log_text , (err) => {

    if (err) throw err;
    console.log('File Created');
});

    app.listen(app.get('port'), function(){
 console.log( 'Express started on http://localhost:' +
 app.get('port') + '; press Ctrl-C to terminate.' );

});
