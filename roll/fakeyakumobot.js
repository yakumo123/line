var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; 

function fakehelp() {
	rply = {
		"type": "template",
		"altText": "【式神的教學】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "☆情報專區☆",
					"text": "情～報～專～區～☆拉到右邊還有更多內容☆",
					"actions": [
						{
							"type": "message",
							"label": "SV超強牌組情報",
							"text": "我珍珍大爆射！！突破宇宙藻屑"
						},
						{
							"type": "message",
							"label": "SV最新資料",
							"text": "我明明就是垃圾"
						},
						{
							"type": "message",
							"label": "公主連結推薦",
							"text": "萌萌的我要讓你的心靈~Unlock~♡"
						}

					]
				},
				{
					"title": "隨機生成",
					"text": "隨機生成功能",
					"actions": [
						{
							"type": "message",
							"label": "隨機生成個人頭像",
							"text": "我是魔法少女☆莉莉醬~~"
						},
						{
							"type": "message",
							"label": "配對隨機",
							"text": "我是超級抖S"
						},
						{
							"type": "message",
							"label": "必殺技生成",
							"text": "我是變態"
						}

					]
				},
				{
					"title": "隨機生成",
					"text": "隨機生成",
					"actions": [
						{
							"type": "message",
							"label": "心理測驗生成",
							"text": "我是Gay~~~~Der~~~"
						},
						{
							"type": "message",
							"label": "隨機生成寵物"
							"text": "我想狂歡阿伯"
						},
						{
							"type": "message",
							"label": "特殊牌組生成",
							"text": "有大雞雞的妹子才是最棒"
						}

					]
				},
				{
					"title": "特殊賽制列表-無限制模式",
					"text": "隨機生成",
					"actions": [
						{
							"type": "message",
							"label": "隨機點歌",
							"text": "我要代替月亮來懲罰你~☆"
						},
						{
							"type": "message",
							"label": "隨機美圖",
							"text": "我最喜歡大叔跟老伯了"
						},
						{
							"type": "message",
							"label": "隨機職業生產",
							"text": "我叫月亮枯枝安妮幽"
						}

					]
				},
				{
					"title": "自創人物角色系統",
					"text": "角色背景",
					"actions": [
						{
							"type": "message",
							"label": "角色背景生成",
							"text": "我是內褲超人~胖次Man！"
						},
						{
							"type": "message",
							"label": "角色人設生成",
							"text": "我想被轟成智障呢~~"
						},
						{
							"type": "message",
							"label": "角色圖片生成",
							"text": "我想被你們踩"
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
							"text": "我少女心要爆炸了"
						},
						{
							"type": "message",
							"label": "機率占卜",
							"text": "我覺得我很母湯"
						},
						{
							"type": "message",
							"label": "塔羅占卜",
							"text": "我是笨蛋"
						}

					]
				},
				{
					"title": "隨機生成",
					"text": "隨機生成",
					"actions": [
						{
							"type": "message",
							"label": "能力值生成(可不加歲數)",
							"text": "我是白痴"
						},
						{
							"type": "message",
							"label": "綜合分數生成",
							"text": "我等等要衝進小學裡做正事"
						},
						{
							"type": "message",
							"label": "黑歷史隨機生產",
							"text": "誰可以來吃掉我？"
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
							"text": "我這個人除了人妻都不要"
						},
						{
							"type": "message",
							"label": "喝甚麼",
							"text": "我愛上了一個大叔"
						},
						{
							"type": "message",
							"label": "生成卡片",
							"text": "蘿莉最棒了啦！FBI要抓就抓啊！"
						}

					]
				},
				{
					"title": "《其他功能》",
					"text": "其他功能",
					"actions": [
						{
							"type": "message",
							"label": "女裝建議",
							"text": "我有千千萬萬根…"
						},
						{
							"type": "message",
							"label": "個性生成",
							"text": "Only you~~Can 令我變娘泡~~~"
						},
						{
							"type": "message",
							"label": "有趣的秘密功能",
							"text": "叭啦叭叭叭…I Love 扶他"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	fakehelp: fakehelp
};
