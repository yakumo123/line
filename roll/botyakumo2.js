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
					"title": "隨機生成/其他",
					"text": "隨機生成/其他",
					"actions": [
						{
							"type": "message",
							"label": "幸運顏色",
							"text": "幸運顏色"
						},
						{
							"type": "message",
							"label": "撲克",
							"text": "撲克1-14/撲克大老二\n\n用法自行發掘，最高抽撲克功能只支援到14張。\n\n【例子1】撲克12\n\n【例子2】撲克大老二"
						},
						{
							"type": "message",
							"label": "偽式神幫助【毀其他人形象用】",
							"text": "式神幫忙"
						}

					],
					"title": "其他功能",
					"text": "其他",
					"actions": [
						{
							"type": "message",
							"label": "推薦牌組列表",
							"text": "comfirmcards"
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
