var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Help() {
	rply = {
		"type": "template",
		"altText": "【式神的教學】\
吹雪快點女裝啦",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "《女裝吹雪系統》",
					"text": "女裝",
					"actions": [
						{
							"type": "message",
							"label": "女裝示範",
							"text": "吹雪女裝"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "吹雪女裝"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "吹雪女裝"
						}

					]
				}, {
					"title": "《自創人物角色系統》",
					"text": "角色背景",
					"actions": [
						{
							"type": "message",
							"label": "角色背景示範",
							"text": "八雲的角色背景"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "萌萌八雲的角色背景"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "可愛八雲的角色背景"
						}

					]
				},
				{
					"title": "《隨機選擇系統》",
					"text": "NC死靈年代記之永遠的後日談, WoD黑暗世界",
					"actions": [
						{
							"type": "message",
							"label": "隨機功能示範",
							"text": "隨機抽中一個萌式神 A式神 B式神 C式神 D式神"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "隨機抽中一個萌式神 A式神 B式神 C式神 D式神"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "隨機抽中一個萌式神 A式神 B式神 C式神 D式神"
						}

					]
				},
				{
					"title": "《排序功能系統》",
					"text": "排序功能",
					"actions": [
						{
							"type": "message",
							"label": "排序功能示範",
							"text": "群中排名次序 A八雲 B八雲 C八雲 D八雲"
						},
						{
							"type": "message",
							"label": "按我",
							"text": "我是大笨蛋 快來截我圖"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "群中排名次序 A八雲 B八雲 C八雲 D八雲"
						}

					]
				},
				{
					"title": "《運勢占卜功能》",
					"text": "排序及隨機功能,D66, D66s",
					"actions": [
						{
							"type": "message",
							"label": "運勢占卜範例",
							"text": "求八雲運勢"
						},
						{
							"type": "message",
							"label": "機率占卜",
							"text": "求八雲遇到式神的機率"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "八雲運勢"
						}

					]
				},
				{
					"title": "《塔羅系統》",
					"text": "塔羅牌",
					"actions": [
						{
							"type": "message",
							"label": "塔羅占卜",
							"text": "單張塔羅/大十字塔羅/每日塔羅牌/時間tarot 單張,大十字,每日及時間必須放頭"
						},
						{
							"type": "message",
							"label": "不要按我",
							"text": "我想被轟成智障呢~~"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "單張塔羅/大十字塔羅/每日塔羅牌/時間tarot 單張,大十字,每日及時間必須放頭"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	Help: Help
};
