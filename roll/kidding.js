var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'message', type: 'message' }; //type是必需的,但可以更改

function joke() {
	rply = {
  "type": "carousel",
  "contents": [
  "type": "bubble",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Header text"
      }
    ]
  },
  "hero": {
    "type": "image",
    "url": "https://drive.google.com/uc?export=download&id=1KNgmkrvog0OnUHRil9seI8CfyVAWtn3j",
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Body text",
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Footer text",
      }
    ]
  },
  "styles": {
    "comment": "See the example of a bubble style object"
  }
	  ]
};
	return rply;
}



module.exports = {
	joke: joke
};
