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
    url: 'https://ebird.org/ws2.0/data/obs/US-WA-067/recent',
    headers: headers
};

// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var results = JSON.parse(body)
//       console.log(results.length + "  heyooo");
//       console.log(results[0].comName)
//       // for (var i = 0; i < results.length; i++){
//       //   // console.log(results[i].comName);
//       //   // console.log(results[i].sciName);
//       //   db.bird.findOrCreate({
//       //     where: {sciName : results[i].sciName},
//       //     defaults: {
//       //       comName: results[i].comName,
//       //       sciName: results[i].sciName
//       //     }
//       //   })
//       // }
//   }
// }

// request(options, callback);

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var results = JSON.parse(body);
//       console.log(results);
//         // console.log(body[0].comName);
//         // console.log(body[0].sciName);
//     //     for (var i =0; i <= body.length; i++){
//     //       // db.bird.findOrCreate({
//     //         // where: {sciName: results[i].sciName},
//     //         // defaults: {comName: results[i].comName,
//     //                   //  sciName: results[i].sciName}
//     //                   console.log(i)
//     //       // })
//     //     // }
//     // } 
// }

// request(options, callback);

// router.get('/', function(req, res){
//   function callback(error, response, data) {
  //   if (!error && response.statusCode == 200) {
  //     // var results = JSON.parse(data);
  //       // console.log(results[0].comName);
  //       // console.log(results[0].sciName);
  //       // for (var i =0; i <= results.length; i++){
  //       //   db.bird.findOrCreate({
  //       //     where: {sciName: results[i].sciName},
  //       //     defaults: {comName: results[i].comName,
  //       //                sciName: results[i].sciName}
  //       //   })
  //       // }
  //     console.log('blarg');
  //     request(options, callback);
  //   }
//     res.send('hello');

//   } 
// });

// function callback(error, response, data) {
//   console.log('hello');
//   if (!error && response.statusCode == 200) {
//     var results = JSON.parse(data);
//       res.send(data);
//       console.log(results[0].comName);
//       console.log(results[0].sciName);
//       for (var i =0; i <= results.length; i++){
//         db.bird.findOrCreate({
//           where: {sciName: results[i].sciName},
//           defaults: {comName: results[i].comName,
//                      sciName: results[i].sciName}
//         })
//       }
//     request(options, callback);
//   }
// } 

module.exports = router;