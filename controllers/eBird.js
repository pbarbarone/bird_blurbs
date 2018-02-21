require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
var router = express.Router();
var db = require('../models');
var request = require('request');

var headers = {
    'X-eBirdApiToken': process.env.EBIRD_API_KEY
};

var options = {
    //query recent sightings based on location
    url: 'https://ebird.org/ws2.0/data/obs/US-WA-013/recent',
    headers: headers
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var results = JSON.parse(body)
      console.log(results.length + "  heyooo");
      console.log(results[0].comName)
      for (var i = 0; i < results.length; i++){
        console.log(results[i].comName);
        console.log(results[i].sciName);
        db.bird.findOrCreate({
          where: {sciName : results[i].sciName},
          defaults: {
            comName: results[i].comName,
            sciName: results[i].sciName
          }
        })
      }
  }
}

//UNCOMMENT this function call while server is running to seed DB with birds
// request(options, callback);



module.exports = router;