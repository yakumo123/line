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
					"title": "隨機生成",
					"text": "隨機生成",
					"actions": [
						{
							"type": "message",
							"label": "幸運顏色",
							"text": "幸運顏色"
						},
						{
							"type": "message",
							"label": "暫無",
							"text": "null"
						},
						{
							"type": "message",
							"label": "暫無",
							"text": "null"
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
