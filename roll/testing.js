var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Test12() {
	rply = {
		"type": "bubble",
		"body": {
			"type": "box",
			"layout": "horizontal",
			"contents": [
      
				{
					"type": "text",
					"text": "Hello,"
				},
				{
					"type": "text",
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
