var express = require('express'); // chamando framework express
var consign = require('consign'); // chamando framework consign
var bodyParser = require('body-parser'); // unir backend ao front end
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs'); // Setamos que nossa engine será o ejs
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true})); // permitir url codificada através de jason (middleware)
app.use(expressValidator());


consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/model')
.then('app/controllers')
.into(app);

module.exports = app;