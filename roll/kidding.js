var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var message = {
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
  }
};

function joke() {
	return message;
}
	



module.exports = {
	joke: joke
};
