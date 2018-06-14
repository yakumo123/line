var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function TestFlex() {
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
    "url": "https://1.bp.blogspot.com/-1mZFw01b99M/WyHcAmrVaiI/AAAAAAAAKqk/ryiMMs5Geag5oZfwAV8Tnby5A2udbUESgCLcBGAs/s200/005.png",
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
	TestFlex: TestFlex
};
