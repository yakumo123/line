var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Test12() {
	rply = {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "image",
      "url": "https://example.com/flex/images/image.jpg",
    },
    {
      "type": "separator",
    },
    {
      "type": "text",
      "text": "Text in the box"
    }
  ]
};
	return rply;
}



module.exports = {
	Test12: Test12
};
