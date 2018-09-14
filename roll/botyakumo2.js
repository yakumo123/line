var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function BotHelpYy() {
	rply = {
		"type": "template",
		"altText": "【式神的教學2】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "其他☆按鈕點一下就可以，一直點會洗頻的。",
					"text": "其他",
					"actions": [
						{
							"type": "message",
							"label": "生成隨機名字",
							"text": "生成名字"
						},
						{
							"type": "message",
							"label": "暫無",
							"text": "暫無"
						},
						{
							"type": "message",
							"label": "暫無",
							"text": "暫無"
						}				
					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	BotHelpYy: BotHelpYy
};
