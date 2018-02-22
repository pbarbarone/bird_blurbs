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
var goodBirds = require('../public/goodBirds.js');

// config file contains my twitter verification items
var T = new Twit(config);

router.get('/', function(req, res){
    //importing array from goodBirds.js that contains only clean db data ie birds with imgs  
    // array contains their id, grabs one at random index of said array  
    var randomId =  goodBirds[Math.floor(goodBirds.length * Math.random())];

    //query DB via random good bird id
    db.bird.findOne({
      where: {id: randomId},
    }).then(function(bird){
        //img file name corresponds with bird's id, this is converted to base64 below, which twitter requires
        var b64content = fs.readFileSync('./birdImgs/'+ bird.id +'.jpg', { encoding: 'base64' })

        //this is is all the info my front end needs to render how i would like, but more is needed to functionally tweet
        res.render('home',{bird: bird});
        //initial submit of photo file to twitter to get "approved"
        T.post('media/upload', { media_data: b64content }, function (err, data, response) {
          // now we can assign alt text to the media, for use by screen readers and 
          // other text-based presentations and interpreters 
          var mediaIdStr = data.media_id_string
          var altText = "Small flowers in a planter on a sunny balcony, blossoming."
          var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
         
          T.post('media/metadata/create', meta_params, function (err, data, response) {
            if (!err) {
              // now we can reference the media and post a tweet (media will attach to the tweet) 
              // final step of tweeting, where the post finally happens. 
              var params = { status: 'Common Name: '+ bird.comName + ' Scientific Name: ' + bird.sciName, media_ids: [mediaIdStr] }
              T.post('statuses/update', params, function(err, data, response) {
              });
            }
          });
        });
    });
});

//imgGet is the "seeding" function that combs my DB for birds with actual imgUrls
// using the module image-downloader, it then downloads succesful url gets and saves them locally with the file name of the bird id 

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



module.exports = router;




