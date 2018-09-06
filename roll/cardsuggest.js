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
							"label": "亞瑟基德皇【指定】",
							"text": "亞瑟（）"
						},
						{
							"type": "message",
							"label": "妖精龍妖精【指定】",
							"text": "妖精龍（）"
							
						},
						{
							"type": "message",
							"label": "星爆異形猴子妖【指定】",
							"text": "星爆猴（）"
						}
					]
				},
				{
					"title": "推薦牌組列表【接受投稿】",
					"text": "☆裡面包含夢想牌☆",
					"actions": [
						{
							"type": "message",
							"label": "護符主【指定】",
							"text": "護符（）"
						},
						{
							"type": "message",
							"label": "陽光主教【無限】",
							"text": "陽光（）"
							
						},
						{
							"type": "message",
							"label": "紅茶死1號【指定】",
							"text": "紅茶死1（）"
						}
					]
				},
				{
					"title": "推薦牌組列表【接受投稿】",
					"text": "☆裡面包含夢想牌☆",
					"actions": [
						{
							"type": "message",
							"label": "紅茶死2號【指定】",
							"text": "護符（）"
						},
						{
							"type": "message",
							"label": "null",
							"text": "null"
							
						},
						{
							"type": "message",
							"label": "null",
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
	Suggestion: Suggestion
};
