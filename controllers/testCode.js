// // T.post('statuses/update', { status: 'tweet tweet yall' }, function(err, data, response) {
// //   console.log(data)
// // })

// // function getBase64Image(img) {
// //   var canvas = document.createElement("canvas");
// //   canvas.width = img.width;
// //   canvas.height = img.height;
// //   var ctx = canvas.getContext("2d");
// //   ctx.drawImage(img, 0, 0);
// //   var dataURL = canvas.toDataURL("image/png");
// //   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// // }
// // var base64 = getBase64Image('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg/220px-Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg');


// // console.log(base53);
// // module.exports = router;

// // var imgPath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg/220px-Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg'

// // request.get('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg/220px-Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg', function (error, response, body) {
// //     if (!error && response.statusCode == 200) {
// //         // console.log('daataaaa' + body.data)
// //         let dataTwo =  "";
// //         var reader = new FileReader();
// //         reader.readAsDataURL(imgPath);
// //         reader.onload = function (e){
// //         dataTwo = new Buffer(e.target.result, "base64");
// //         console.log(dataTwo);

// //         }
// //         T.post('media/upload',{ 
// //           media_data: dataTwo
// //         }, function (err, data, response) {
// //           // now we can assign alt text to the media, for use by screen readers and 
// //           // other text-based presentations and interpreters 
// //           var mediaIdStr = data.media_id_string;
// //           console.log('response ' + response.statusCode)
// //           console.log('media ' + mediaIdStr);
// //           var altText = "Small flowers in a planter on a sunny balcony, blossoming."
// //           var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
// //           console.log("initial post " + mediaIdStr);
// //           if (err){
// //             console.log('error, yo ' + err)
// //           }
          
// //           T.post('media/metadata/create', meta_params, function (err, data, response) {
// //             if (!err) {
// //               // now we can reference the media and post a tweet (media will attach to the tweet) 
// //               var params = { status: 'birds, man', media_ids: [mediaIdStr] }
         
// //              T.post('statuses/update', params, function (err, data, response) {
// //                 console.log(data)
// //               }) 
// //             }
// //        })
// //     })
// //   }
// // });

// // function getBase64Image(img) {
// //   var canvas = document.createElement("canvas");
// //   canvas.width = img.width;
// //   canvas.height = img.height;
// //   var ctx = canvas.getContext("2d");
// //   ctx.drawImage(img, 0, 0);
// //   var dataURL = canvas.toDataURL("image/png");
// //   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// //  }
 
// //  var base64 = getBase64Image(imgPath);
// //  console.log(base64);


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


[
  243,
  238,
  242,
  245,
  239,
  241,
  246,
  261,
  275,
  251,
  256,
  266,
  280,
  313,
  292,
  286,
  306,
  322,
  326,
  332,
  337,
  342,
  352,
  369,
  374,
  393,
  409,
  404,
  414,
  418,
  424,
  429,
  258,
  264,
  268,
  248,
  252,
  272,
  277,
  282,
  290,
  285,
  296,
  304,
  309,
  300,
  323,
  328,
  333,
  339,
  344,
  355,
  351,
  348,
  370,
  360,
  375,
  387,
  398,
  413,
  408,
  419,
  430,
  247,
  263,
  259,
  253,
  273,
  270,
  312,
  288,
  293,
  302,
  307,
  321,
  331,
  336,
  359,
  368,
  349,
  379,
  391,
  389,
  402,
  407,
  417,
  422,
  427,
  254,
  276,
  267,
  271,
  260,
  249,
  262,
  281,
  287,
  308,
  298,
  291,
  295,
  303,
  316,
  320,
  329,
  325,
  335,
  340,
  345,
  361,
  366,
  385,
  395,
  416,
  433,
  423,
  274,
  269,
  255,
  257,
  265,
  279,
  314,
  311,
  294,
  299,
  305,
  284,
  318,
  289,
  324,
  334,
  330,
  338,
  343,
  347,
  353,
  362,
  357,
  392,
  401,
  406,
  415,
  397,
  426,
  421,
  434,
  436,
  440,
  445,
  442,
  444,
  446,
  453,
  449,
  447,
  456,
  451,
  458,
  452,
  457,
  455,
  460,
  462,
  459,
  465,
  470,
  466,
  469,
  467,
  468,
  473,
  475,
  476,
  478,
  479,
  480,
  244,
  240
  ]
var db = require('../models');

var goodBirds = [];
function getGoodBirds (){
    db.bird.findAll({
    }).then(function(bird){
      console.log('bird length' + bird.length)
      for(var i = 0; i<=bird.length -1; i++){
        if(!bird[i].imgUrl){
          console.log(bird[i] + ' has no img');
        } else if(bird[i].imgUrl){
          goodBirds.push(bird[i].id);
        } else {
          console.log('something wrong');
        }
      }
      console.log(goodBirds);
    });
    return goodBirds;
}

getGoodBirds();