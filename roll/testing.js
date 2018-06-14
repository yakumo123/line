var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Test12() {
	rply = {
  "type": "bubble", // ①
  "body": { // ②
    "type": "box", // ③
    "layout": "horizontal",　// ④
    "contents": [ // ⑤
      {
        "type": "text", // ⑥
        "text": "Hello,"
      },
      {
        "type": "text", // ⑥
        "text": "World!"
      }
    ]
  }
	};
	return rply;
}



module.exports = {
	Test12: Test12
};
