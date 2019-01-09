var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Suggestion() {
	rply = {
		"type": "template",
		"altText": "【式神的教學】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "推薦牌組列表【接受投稿】",
					"text": "推薦牌組列表",
					"actions": [
						{
							"type": "message",
							"label": "獅子皇-C佬【指定】",
							"text": "獅子☆推薦"
						},
						{
							"type": "postback",
							"label": "暫無",
							"data": "暫無"
							
						},
						{
							"type": "postback",
							"label": "暫無",
							"data": "暫無"
						}
					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	Suggestion: Suggestion
};
