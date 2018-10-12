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
				}
			]
		}
	};
	return rply;
}



module.exports = {
	Suggestion: Suggestion
};
