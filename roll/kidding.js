var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function joke() {
	rply = {
		"type": "text",
		"text": "選一張撲克牌",
		"quickReply": {
			"items": [
				{
					"type": "action",
					"action": {
						"type": "message",
						"label": "♡A",
						"text": "我是智障"  
				},
					{
					"type": "action",
					"action": {
					"type": "message",
					"label": "♧3",
					"text": "我是變態"
				}
				},
				{
				"type": "action",
				"action": {
				"type": "message",
				"label": "◇K",
				"text": "我是紅茶"
				}
				},
				{
				"type": "action",
				"action": {
				"type": "message",
				"label": "♡Q",
				"text": "我想被踩"
				}
				}
			]
		}
	};
	return rply;
}



module.exports = {
	joke: joke
};
