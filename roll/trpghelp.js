var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function TRPG() {
	rply = {
		"type": "template",
		"altText": "【TRPGBOT】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "《基本擲骰系統》",
					"text": "指令包括1D100, 5B10 ,5U10 8 9 由RoboYabaso@HKTRPG V1.50提供",
					"actions": [
						{
							"type": "message",
							"label": "1d100擲骰範例",
							"text": "5 1d100 示範"
						},
						{
							"type": "message",
							"label": "5B10擲骰範例",
							"text": "5B10 9 不加總的擲骰,計算其中有多少粒大於9"
						},
						{
							"type": "message",
							"label": "5U10 8 9擲骰範例",
							"text": "5U10 8 9 每骰出一粒8會有一粒獎勵骰及計算有多少粒大於9"
						}

					]
				}, {
					"title": "《COC 6 7版 擲骰系統》",
					"text": "指令包括 6版ccb, 7版cc, cc(n)1~2, cc6版創角, cc7版創角, coc7角色背景",
					"actions": [
						{
							"type": "message",
							"label": "6版擲骰 技能80",
							"text": "ccb 80 擒抱!"
						},
						{
							"type": "message",
							"label": "7版擲骰 技能80 -2懲罰",
							"text": "ccn2 80 7版擲骰技能80 -2懲罰"
						},
						{
							"type": "message",
							"label": "cc7版創角 50歲",
							"text": "cc7版創角 50"
						}

					]
				},
				{
					"title": "《其他系統01》",
					"text": "NC死靈年代記之永遠的後日談, WoD黑暗世界",
					"actions": [
						{
							"type": "message",
							"label": "1NC 擲骰範例",
							"text": "2NC"
						},
						{
							"type": "message",
							"label": "NM 依戀擲骰範例",
							"text": "nm"
						},
						{
							"type": "message",
							"label": "WOD擲骰範例",
							"text": "5wd8 投擲5次D10 每有一粒大於8,得到一粒獎勵骰"
						}

					]
				},
				{
					"title": "《其他系統02》",
					"text": "DX3雙重十字 nDXc+m n=骰數 c=暴擊值 m=其他修正",
					"actions": [
						{
							"type": "message",
							"label": "DX3 擲骰範例",
							"text": "5DX8-1+8"
						},
						{
							"type": "message",
							"label": "DX3 擲骰範例",
							"text": "8DX+1"
						},
						{
							"type": "message",
							"label": "DX3 擲骰範例",
							"text": "2DX5-1"
						}

					]
				},
				{
					"title": "《瘋狂狀態》",
					"text": "ccrt, ccsu",
					"actions": [
						{
							"type": "message",
							"label": "瘋狂狀態",
							"text": "ccsu"
						},
						{
							"type": "message",
							"label": "恐懼下引致的症狀",
							"text": "ccrt"
						},
						{
							"type": "postback",
							"label": "N/A",
							"data": "N/A"
						}

					]
				},
				{
					"title": "《附加功能》",
					"text": "Flag, D66, D66s",
					"actions": [
						{
							"type": "message",
							"label": "死亡FLAG",
							"text": "死亡flag"
						},
						{
							"type": "message",
							"label": "立Flag",
							"text": "立flag"
						},
						{
							"type": "message",
							"label": "D66s 骰出D66 小至大",
							"text": "D66s 骰出D66 小至大"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	TRPG: TRPG
};
