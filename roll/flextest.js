var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function TestFlex() {
	rply = {
  "type": "button",
  "action": {
    "type": "uri",
    "label": "Tap me",
    "uri": "https://example.com"
  }
  "style": "primary",
  "color": "#0000ff"
};
	return rply;
}



module.exports = {
	TestFlex: TestFlex
};
