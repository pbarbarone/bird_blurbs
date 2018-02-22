require('dotenv').config();
var Twit = require('twit');
var config = require('../twitconfig')
var request = require('request');
var fs = require('file-system');
var FileReader = require('filereader');
var db = require('../models');
var express = require('express');
var app = express();
var router = express.Router();
var download = require('image-downloader')




// console.log(config)

var T = new Twit(config);

// var b64content = fs.readFileSync('../bird.jpg', { encoding: 'base64' })
// console.log(b64content);
 
// // first we must post the media to Twitter 
// T.post('media/upload', { media_data: b64content }, function (err, data, response) {
//   // now we can assign alt text to the media, for use by screen readers and 
//   // other text-based presentations and interpreters 
//   var mediaIdStr = data.media_id_string
//   var altText = "Small flowers in a planter on a sunny balcony, blossoming."
//   var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
//   T.post('media/metadata/create', meta_params, function (err, data, response) {
//     if (!err) {
//       // now we can reference the media and post a tweet (media will attach to the tweet) 
//       var params = { status: 'col hates birds', media_ids: [mediaIdStr] }
 
//       T.post('statuses/update', params, function (err, data, response) {
//         console.log(data)
//       })
//     }
//   })
// })

router.get('/', function(req, res){    
    var randomId = Math.floor(238 + Math.random() * 243);
    db.bird.findOne({
      where: {id: randomId},
    }).then(function(bird){
      if(!bird.imgUrl){
        console.log(bird.imgUrl);
        console.log(bird.comName, bird.sciName, randomId);
        findBird();
      } else {
        console.log('success');
        console.log("What is my name?");
        console.log(bird.id)
        var b64content = fs.readFileSync('./birdImgs/'+ bird.id +'.jpg', { encoding: 'base64' })
        console.log(b64content);
        T.post('media/upload', { media_data: b64content }, function (err, data, response) {
          // now we can assign alt text to the media, for use by screen readers and 
          // other text-based presentations and interpreters 
          var mediaIdStr = data.media_id_string
          var altText = "Small flowers in a planter on a sunny balcony, blossoming."
          var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
         
          T.post('media/metadata/create', meta_params, function (err, data, response) {
            if (!err) {
              // now we can reference the media and post a tweet (media will attach to the tweet) 
              var params = { status: 'Common Name: '+ bird.sciName + ' Scientific Name: ' + bird.comName, media_ids: [mediaIdStr] }
         
              T.post('statuses/update', params, function(err, data, response) {
                console.log(data)
              });
            }
          });
        });
      };
    });
  res.send('you dun tweeted')
});

// function imgGet (){
//   for(let i = 238; i <= 481; i++){
//     db.bird.findOne({
//       where: {id: i }
//               // imgUrl: true}
//     }).then(function(bird){
//       console.log(bird.id);
//       options = {
//         url: bird.imgUrl,
//         dest: '../birdimgs/'+bird.id+'.jpg'        // Save to /path/to/dest/photo.jpg
//       }
//       download.image(options)
//         .then(({ filename, image }) => {
//           console.log('File saved to', filename)
//         }).catch((err) => {
//           throw err
//         });
//       console.log("iteration " + i + bird);
//     })
//   }
// }

// imgGet()



console.log('test');
// ../birdimgs/bird.jpg

module.exports = router;




