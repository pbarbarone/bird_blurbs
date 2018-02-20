require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//set up middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);

app.use(express.static(__dirname + "/public/"));

// home page route
app.get('/', function(req,res){
	res.send('home');
});

//controllers
app.use('/eBird', require('./controllers/eBird.js'));
app.use('/scrape', require('./controllers/wikiscrape.js'));


app.listen(process.env.PORT || 3000);