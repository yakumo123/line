var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function questionMark() {
	rply = {
    "type": "template",
    "altText": "this is a image carousel template",
    "template": {
      "type": "image_carousel", 
      "columns": [
        {
          "imageUrl": "http://imgur.com/gallery/fwhOc79",
          "action": {
            "type": "message",
            "label": "黑人問號",
            "text": "黑人問號"
          }
        },
        {   
          "imageUrl": "http://imgur.com/gallery/xBRN0dO",
          "action": {
              "type": "message",
              "label": "白人問號",
              "text": "白人問號"
	  }
	}
      ]
};
	return rply;
}



module.exports = {
	questionMark: questionMark
};
