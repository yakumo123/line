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
							"label": "穩定型疾馳龍-吹雪【指定】",
							"text": "疾馳☆推薦"
						},
						{
							"type": "message",
							"label": "王座吸-紅茶【指定】",
							"text": "王座☆推薦"
							
						},
						{
							"type": "message",
							"label": "元氣彈馬納法-かひ【指定】",
							"text": "元氣彈☆推薦"
						}
					]
				},
				{
					"title": "推薦牌組列表【接受投稿】",
					"text": "推薦牌組列表",
					"actions": [
						{
							"type": "message",
							"label": "葬送死-紅茶【指定】",
							"text": "葬送☆推薦"
						},
						{
							"type": "message",
							"label": "絢爛仇-八雲【指定】",
							"text": "絢爛☆推薦"
							
						},
						{
							"type": "message",
							"label": "終末死-八雲【指定】",
							"text": "終末☆推薦"
						}
					]
				},
				{
					"title": "推薦牌組列表【接受投稿】",
					"text": "推薦牌組列表",
					"actions": [
						{
							"type": "message",
							"label": "八雲唯我龍-八雲【指定】",
							"text": "八雲唯我龍☆推薦"
						},
						{
							"type": "message",
							"label": "悔辱龍-八雲【指定】",
							"text": "悔辱☆推薦"
							
						},
						{
							"type": "message",
							"label": "唯我皇-八雲【指定】",
							"text": "八雲唯我皇☆推薦"
						}
					]
				},
				{
					"title": "推薦牌組列表【接受投稿】",
					"text": "推薦牌組列表",
					"actions": [
						{
							"type": "message",
							"label": "阿卡斯死-賤BB【指定】",
							"text": "阿卡☆推薦"
						},
						{
							"type": "message",
							"label": "寶藏亞瑟皇-sherman Lai【指定】",
							"text": "寶藏☆推薦"
							
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
