var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function TestFlex() {
	rply = {
  "type": "box",
  "layout": "vertical",
  "contents": [
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
	TestFlex: TestFlex
};
