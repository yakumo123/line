var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Help() {
	rply = {
		"type": "template",
		"altText": "【我的地平線沒有那個盃-比賽資料查詢及整合】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "《比賽基本資訊》",
					"text": "圖片整合增加, 部分功能整合, 增加部份功能警告防止洗頻, 部分功能修正",
					"actions": [
						{
							"type": "message",
							"label": "宗旨",
							"text": "本比賽希望以特殊賽制使每輪比賽使用的卡從而提升牌組多元化程度，並非只有數種主流牌組，提升新鮮感。亦希望能讓玩家於此比賽中思考並提升牌組的牌組基本建構方法，建構方向，組合效果，不同特化手段，作出新嘗試，發掘不同的牌組思考方法。"
						},
						{
							"type": "message",
							"label": "比賽特殊賽制",
							"text": "參賽者的卡組必須由以下的元素組成： \n1費或以下：5張 \n2費：5張且每種牌不得超過1張 \n3費：5張 \n4費：5張 \n5費：5張且每種牌不得超過1張 \n6費：5張且每種牌不得超過1張 \n7費：5張且每種牌不得超過1張 \n8費或以上：5張且每種牌不得超過1張"
						},
						{
							"type": "message",
							"label": "空白訊息",
							"text": "我不當人類啦!!!"
						}

					]
				},
				{
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
							"label": "不要按我",
							"text": "我想被轟成智障呢~~"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "八雲的角色背景"
						}

					]
				},
				{
					"title": "《隨機選擇系統》",
					"text": "隨機選擇功能",
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
					"title": "《運勢及塔羅占卜功能》",
					"text": "占卜功能",
					"actions": [
						{
							"type": "message",
							"label": "運勢占卜範例",
							"text": "求八雲式神運勢"
						},
						{
							"type": "message",
							"label": "機率占卜",
							"text": "求八雲遇到式神的機率"
						},
						{
							"type": "message",
							"label": "塔羅占卜",
							"text": "單張塔羅/大十字塔羅/每日塔羅牌/時間tarot 單張,大十字,每日及時間必須放頭"
						}

					]
				},
				{
					"title": "《關鍵字回應系統》",
					"text": "關鍵字例如 鋪起來, 幹, 怕, 怕爆, 大爆解, 決鬥, 衞星砲, 略過200條",
					"actions": [
						{
							"type": "message",
							"label": "怕",
							"text": "怕"
						},
						{
							"type": "message",
							"label": "鋪起來",
							"text": "鋪起來"
						},
						{
							"type": "message",
							"label": "【關鍵字列表】",
							"text": "CodeCommand5itv4ci42"
						}

					]
				},
				{
					"title": "《女裝系統》",
					"text": "女裝",
					"actions": [
						{
							"type": "message",
							"label": "女裝示範",
							"text": "你來女裝"
						},
						{
							"type": "message",
							"label": "待更新",
							"text": "女裝"
						},
						{
							"type": "message",
							"label": "【車圖整合(慎用)】",
							"text": "js666yte"
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
