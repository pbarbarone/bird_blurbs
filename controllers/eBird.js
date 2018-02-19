require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
var router = express.Router();

var request = require('request');

var headers = {
    'X-eBirdApiToken': process.env.EBIRD_API_KEY
};

var options = {
    //query recent sightings based on location
    url: 'https://ebird.org/ws2.0/data/obs/US-WA-033/recent',

    // query all locations codes based on state
    // url: 'https://ebird.org/ws2.0/ref/region/list/subnational2/US-WA.json',

    headers: headers
};

router.get('/', function(req, res){
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        res.send(body);
    }
    else{
      console.log(error);
    }
  }
  request(options, callback);
});

module.exports = router;