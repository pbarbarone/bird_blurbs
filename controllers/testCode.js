// T.post('statuses/update', { status: 'tweet tweet yall' }, function(err, data, response) {
//   console.log(data)
// })

// function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;
//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);
//   var dataURL = canvas.toDataURL("image/png");
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }
// var base64 = getBase64Image('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg/220px-Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg');


// console.log(base53);
// module.exports = router;

// var imgPath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg/220px-Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg'

// request.get('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg/220px-Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         // console.log('daataaaa' + body.data)
//         let dataTwo =  "";
//         var reader = new FileReader();
//         reader.readAsDataURL(imgPath);
//         reader.onload = function (e){
//         dataTwo = new Buffer(e.target.result, "base64");
//         console.log(dataTwo);

//         }
//         T.post('media/upload',{ 
//           media_data: dataTwo
//         }, function (err, data, response) {
//           // now we can assign alt text to the media, for use by screen readers and 
//           // other text-based presentations and interpreters 
//           var mediaIdStr = data.media_id_string;
//           console.log('response ' + response.statusCode)
//           console.log('media ' + mediaIdStr);
//           var altText = "Small flowers in a planter on a sunny balcony, blossoming."
//           var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
//           console.log("initial post " + mediaIdStr);
//           if (err){
//             console.log('error, yo ' + err)
//           }
          
//           T.post('media/metadata/create', meta_params, function (err, data, response) {
//             if (!err) {
//               // now we can reference the media and post a tweet (media will attach to the tweet) 
//               var params = { status: 'birds, man', media_ids: [mediaIdStr] }
         
//              T.post('statuses/update', params, function (err, data, response) {
//                 console.log(data)
//               }) 
//             }
//        })
//     })
//   }
// });

// function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;
//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);
//   var dataURL = canvas.toDataURL("image/png");
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
//  }
 
//  var base64 = getBase64Image(imgPath);
//  console.log(base64);


var b64content = fs.readFileSync('../bird.jpg', { encoding: 'base64' })
console.log(b64content);
 
// first we must post the media to Twitter 
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and 
  // other text-based presentations and interpreters 
  var mediaIdStr = data.media_id_string
  var altText = "Small flowers in a planter on a sunny balcony, blossoming."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet) 
      var params = { status: 'col hates birds', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})
