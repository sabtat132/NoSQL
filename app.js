//fs.writeFileSync('assignment_2.txt');

var express = require('express');
const fs = require('fs');
const validator = require('validator');

var modules = require('./lib/modules.js');

var app = express();

app.use(express.static(__dirname + "/style"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + '/public'));

console.log(validator.isEmail("test@gmail.com"));
console.log(validator.isCreditCard('123456789'));

var log_text = "Test - Test - Test. "

fs.writeFileSync('mylog.txt', log_text , (err) => {

    if (err) throw err;
    console.log('File Created');
});

app.set('port', process.env.PORT || 3001);

app.get('/', function(req, res) {
	res.render('home');
});

    app.listen(app.get('port'), function(){
 console.log( 'Express started on http://localhost:' +
 app.get('port') + '; press Ctrl-C to terminate.' );

});
