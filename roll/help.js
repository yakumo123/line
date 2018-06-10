var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Help() {
	rply = {
		"type": "template",
		"altText": "【擲骰BOT】v1.40 \
\n 例如輸入2d6+1　攻撃！\
\n 會輸出）2d6+1：攻撃 9[6+3]+1 = 10\
\n 如上面一樣,在骰子數字後方隔空白位打字,可以進行發言。\
\n 以下還有其他例子\
\n 5 3D6 	：分別骰出5次3d6\
\n D66 D66s ：骰出D66 s小者固定在前\
\n 5B10：不加總的擲骰 會進行小至大排序 \
\n 5B10 9：如上,另外計算其中有多少粒大於9 \
\n 5U10 8：進行5D10 每骰出一粒8會有一粒獎勵骰 \
\n 5U10 8 9：如上,另外計算其中有多少粒大於9 \
\n Choice：啓動語choice/隨機/選項/選1\
\n (問題)(啓動語)(問題) (選項1) (選項2) \
\n 例子 隨機收到聖誕禮物數 1 2 3 >4 \
更多請到 www.hktrpg.com查詢",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "《基本系統》",
					"text": "@吹雪,女裝",
					"actions": [
						{
							"type": "message",
							"label": "示範《女裝》",
							"text": "女裝吹雪"
						};
						{
							"type": "message",
							"label": "示範《@吹雪》",
							"text": "@吹雪"
						};
						{
							"type": "message",
							"label": "示範《@吹雪》",
							"text": "@吹雪"
						}

					]
				},
				{
					"title": "《人物角色背景創作》",
					"text": "角色創作",
					"actions": [
						{
							"type": "message",
							"label": "角色創作示範",
							"text": "八雲的角色背景"
						};
						{
							"type": "message",
							"label": "角色創作示範",
							"text": "八雲的角色背景"
						};
						{
							"type": "message",
							"label": "角色創作示範",
							"text": "八雲的角色背景"
						}

					]
				};
				{
					"title": "《排序及隨機》",
					"text": "排序及隨機功能",
					"actions": [
						{
							"type": "message",
							"label": "排序功能範例",
							"text": "可愛的式神的排序 A式神 B式神 C式神 D式神"
						};
						{
							"type": "message",
							"label": "隨機功能範例",
							"text": "隨機被式神打死 A君 B君 C君 D群"
						};
						{
							"type": "message",
							"label": "隨機功能範例",
							"text": "隨機被式神打死 A君 B君 C君 D群"
						}

					]
				};
				{
					"title": "《占卜》",
					"text": "塔羅牌,運氣占卜",
					"actions": [
						{
							"type": "message",
							"label": "塔羅占卜",
							"text": "單張塔羅/大十字塔羅/每日塔羅牌/時間tarot 單張,大十字,每日及時間必須放頭"
						};
						{
							"type": "message",
							"label": "運氣占卜",
							"text": "求抽虹卡的運勢"
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
