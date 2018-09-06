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
							"text": "亞瑟☆推薦"
						},
						{
							"type": "message",
							"label": "妖精龍妖精【指定】",
							"text": "妖精龍☆推薦"
							
						},
						{
							"type": "message",
							"label": "星爆異形猴子妖【指定】",
							"text": "星爆猴☆推薦"
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
							"text": "護符☆推薦"
						},
						{
							"type": "message",
							"label": "陽光主教【無限】",
							"text": "陽光☆推薦"
							
						},
						{
							"type": "message",
							"label": "幽靈死【指定】",
							"text": "幽靈☆推薦"
						}
					]
				},
				{
					"title": "推薦牌組列表【接受投稿】",
					"text": "☆裡面包含夢想牌☆",
					"actions": [
						{
							"type": "message",
							"label": "葬送死【指定】",
							"text": "葬送☆推薦"
						},
						{
							"type": "message",
							"label": "看來是控吸【指定】",
							"text": "騙水吸☆推薦"
							
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
