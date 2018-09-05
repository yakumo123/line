var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'messages' }; //type是必需的,但可以更改

function joke() {
	rply = {
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
    "url": "https://example.com/flex/images/image.jpg",
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
};
	return rply;
}



module.exports = {
	joke: joke
};
