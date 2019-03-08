var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function BotHelpYy() {
	rply = {
		"type": "template",
		"altText": "【式神的教學】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "情報專區☆按鈕點一下就可以，一直點會洗頻的。",
					"text": "情～報～專～區～☆拉到右邊還有更多內容☆",
					"actions": [
						{
							"type": "message",
							"label": "sv情報",
							"text": "sv情報"
						},
						{
							"type": "message",
							"label": "公主連結情報",
							"text": "公主情報"
						},
						{
							"type": "message",
							"label": "～式神幫助2～",
							"text": "式神幫助2"
						}

					]
				},
				{
					"title": "《隨機選擇/生產亂數及排序系統》",
					"text": "隨機選擇功能",
					"actions": [
						{
							"type": "message",
							"label": "☆隨機功能示範☆",
							"text": "隨機選項數量範圍為1～10\n使用方法：【文字+選1～10】＋空格＋選項\n\n例子1：八雲晚餐選1 白飯 拉麵 麵包\n例子2：小說選3 A小說 B小說 C小說 D小說 E小說\n\n■注意：句子君A（例如：八雲晚餐選5）和句子君B（你所決定的選項 例如：A B C）之間必須要有空格 且 選項和選項之間必須有空格■"
						},
						{
							"type": "message",
							"label": "亂數生產",
							"text": "3D6 \nD為你骰子的縮寫 10d6 d前面的數字10為你想骰的骰子數目 6為骰子你想要的面數"
						},
						{
							"type": "message",
							"label": "排序功能",
							"text": "群中排名次序 六雲 七雲 八雲 九八雲 \n使用方法為 XXXX次序 A B C D 選項和選項及 XXX次序 之間必須相隔一個空格"
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
							"text": "八雲的角色背景 \n使用方法為 XXX的角色背景"
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
					"title": "《運勢及塔羅占卜功能》",
					"text": "占卜功能",
					"actions": [
						{
							"type": "message",
							"label": "運勢占卜範例",
							"text": "求八雲式神運勢 \n使用方法為 XXX運勢"
						},
						{
							"type": "message",
							"label": "機率占卜",
							"text": "求八雲遇到式神的機率 \n使用方法為 XXX的機率"
						},
						{
							"type": "message",
							"label": "塔羅占卜",
							"text": "單張塔羅/大十字塔羅/每日塔羅牌/時間tarot 單張,大十字,每日及時間必須放頭"
						}

					]
				},
				{
					"title": "《隨機生成》",
					"text": "隨機生成",
					"actions": [
						{
							"type": "message",
							"label": "能力值生成(可不加歲數)",
							"text": "式神的能力值 18歲 \n使用方法為 XXX的能力值 你希望的歲數"
						},
						{
							"type": "message",
							"label": "綜合分數生成",
							"text": "式神的綜合分數 \n使用方法為 XXX的綜合分數"
						},
						{
							"type": "message",
							"label": "黑歷史隨機生產",
							"text": "萌式神的黑歷史 \n使用方法為 XXX的黑歷史"
						}

					]
				},
				{
					"title": "《隨機建議生成》",
					"text": "隨機生成",
					"actions": [
						{
							"type": "message",
							"label": "吃甚麼",
							"text": "式神晚餐吃甚麼 \n使用方法為 XXX吃甚麼"
						},
						{
							"type": "message",
							"label": "喝甚麼",
							"text": "式神待會喝甚麼 \n使用方法為 XXX喝甚麼"
						},
						{
							"type": "message",
							"label": "生成卡片",
							"text": "生成卡片 八雲 \n教學：生成卡片 名字"
						}

					]
				},
				{
					"title": "其他",
					"text": "其他",
					"actions": [
						{
							"type": "message",
							"label": "幸運顏色",
							"text": "幸運顏色"
						},
						{
							"type": "message",
							"label": "撲克",
							"text": "撲克1-14/撲克大老二\n\n用法自行發掘，最高抽撲克功能只支援到14張。\n\n【例子1】撲克12\n\n【例子2】撲克大老二"
						},
						{
							"type": "message",
							"label": "偽式神幫助【毀其他人形象用】",
							"text": "式神幫忙"
						}
					]
				},
				{
					"title": "其他功能",
					"text": "其他",
					"actions": [
						{
							"type": "postback",
							"label": "暫無",
							"data": "暫無"
						},
						{
							"type": "message",
							"label": "機率提供",
							"text": "八雲運氣變好的機率 ■XXX+的機率"
						},
						{
							"type": "message",
							"label": "【新】立Flag功能",
							"text": "flag \n使用方法為XXXflag"
						}				
					]
				},
				{
					"title": "《其他功能》",
					"text": "其他功能",
					"actions": [
						{
							"type": "postback",
							"label": "暫無",
							"data": "暫無"
						},
						{
							"type": "postback",
							"label": "暫無",
							"data": "暫無"
						},
						{
							"type": "postback",
							"label": "暫無",
							"data": "暫無"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	BotHelpYy: BotHelpYy
};
