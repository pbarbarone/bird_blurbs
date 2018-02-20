// var cheerio = require('cheerio');
const $ = require('cheerio');
var request = require('request');
var express = require('express');
var app = express();
var router = express.Router();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var interval = 10 * 1000;
// attemtping to use AllAboutBirds to grab image, experience issue reaching path.
router.get('/', function(req, res){
        request('https://www.allaboutbirds.org/guide/Dark-eyed_Junco/id', function(error, response, data) {
           // var $ = cheerio.load(response.body);
            //var imageUrl = $('#show-share > section.carousel.wide.id-carousel > div > div > div > div:nth-child(1) > a > img').attr('src');
            // var x = $.getElementsByClassName("slick-slide");
            //var htmlDoc = parser.parseFromString(response.body);
            // var x = htmlDoc.getElementsByClassName("slick-slide")[0];
            //var x = $("slick-slide");
            //console.log("x",x);
            const dom = new JSDOM(response.body);
            const document = dom.window.document.querySelector(".slick-3");
            
            var birdImages = [];
            res.send(document.innerHTML);
            console.log("images:",birdImages);
            console.log('scraped url new ' + response);
        });
    //res.send('scrape url reached, check terminal');
});


//Defaulting to wikipedia to grab image url
//  


module.exports = router;