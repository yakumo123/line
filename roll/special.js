var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function ComEit() {
	rply = {
		"type": "template",
		"altText": "【式神的教學】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "《更新詳情》",
					"text": "新增特殊賽制功能",
					"actions": [
						{
							"type": "message",
							"label": "空白訊息",
							"text": "我是變態"
						},
						{
							"type": "message",
							"label": "空白訊息",
							"text": "我不只是變態 我還是一個白痴"
						},
						{
							"type": "message",
							"label": "空白訊息",
							"text": "我不當人類啦!!!"
						}

					]
				},
				{
					"title": "《自創人物角色系統/TRPG功能》",
					"text": "角色背景/TRPG功能",
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
							"label": "TRPG功能",
							"text": "trpghelp"
						}

					]
				},
				{
					"title": "《隨機選擇/生產亂數及排序系統》",
					"text": "隨機選擇功能",
					"actions": [
						{
							"type": "message",
							"label": "隨機功能示範",
							"text": "隨機抽中一個萌式神 A式神 B式神 C式神 D式神"
						},
						{
							"type": "message",
							"label": "亂數生產",
							"text": "3D6"
						},
						{
							"type": "message",
							"label": "排序功能",
							"text": "群中排名次序 A八雲 B八雲 C八雲 D八雲"
						}

					]
				},
				{
					"title": "特殊賽制",
					"text": "特殊賽制列表",
					"actions": [
						{
							"type": "message",
							"label": "特殊賽制列表",
							"text": "specialcompetitionlist982"
						},
						{
							"type": "message",
							"label": "N/A",
							"text": "N/A"
						},
						{
							"type": "message",
							"label": "N/A",
							"text": "Hloy Shittttttttttt"
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
							"text": "求八雲遇到式神的機率是多少"
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
							"text": "comfirmcommand"
						}

					]
				},
				{
					"title": "《其他功能》",
					"text": "其他功能",
					"actions": [
						{
							"type": "message",
							"label": "女裝示範",
							"text": "你來女裝"
						},
						{
							"type": "message",
							"label": "《新卡包資訊查詢》",
							"text": "情報整合"
						},
						{
							"type": "message",
							"label": "【車圖整合(慎用)】",
							"text": "comfirephoto"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	ComEit: ComEit
};
