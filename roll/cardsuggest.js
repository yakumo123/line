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
					"text": "☆裡面包含夢想牌☆",
					"actions": [
						{
							"type": "message",
							"label": "亞瑟基德皇",
							"text": "亞瑟（CR）"
						},
						{
							"type": "message",
							"label": "妖精龍妖精",
              "text": "妖精龍（CR）"
							
						},
						{
							"type": "message",
							"label": "星爆異形猴子妖",
							"text": "星爆猴（CR）"
						}
					]
				},
        {
					"title": "推薦牌組列表【接受投稿】",
					"text": "☆裡面包含夢想牌☆",
					"actions": [
						{
							"type": "message",
							"label": "護符主",
							"text": "護符（CR）"
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
	Suggestion: Suggestion
};
