var rollbase = require('./rollbase.js');
var funny = require('./funny.js');										

//吹雪龍1
var snowdragon = {
	"type": "flex",
	"altText": "穩定型疾馳龍",
"contents": {
		 "type": "bubble",
			"body": {
				"type": "box",
				"layout": "vertical",
				"spacing": "lg",
				"contents": [
					{
						"type": "text",
						"text": "穩定型疾馳龍",
						"wrap": true,
						"weight": "bold",
						"gravity": "center",
						"size": "lg"
					},
					{
						"type": "box",
						"layout": "baseline",
						"spacing": "lg",
						"contents": [
							{
								"type": "icon",
								"url": "https://shadowverse.com/assets/images/cardpack/omenoftheten/title.png?rel20180928",
								"size": "xxl"
							},
							{
								"type": "text",
								"text": "指定模式",
								"gravity": "center",
								"flex": 5,
								"align": "start"
							},
							{
								"type": "text",
								"text": "職業：龍",
								"gravity": "center",
								"flex": 5,
								"align": "end"
							},
							{
								"type": "icon",
								"url": "https://shadowverse.com/sp/cht/assets/images/world/thumb-chara-04.jpg?rel20180928",
								"size": "lg"
							}
						]
					},
					{
						"type": "box",
						"layout": "vertical",
						"margin": "lg",
						"spacing": "sm",
						"contents": [
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "卡片稀有度分佈",
										"color": "#aaaaaa",
										"size": "sm",
										"weight": "bold"
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "虹卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "15",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "金卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "16",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}								]

							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "銀卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "3",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "銅卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{

										"type": "text",
										"text": "6",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "連勝：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{

										"type": "text",
										"text": "沒有資料",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "md",
								"contents": [
									{
										"type": "text",
										"text": "牌組概念",
										"color": "#aaaaaa",
										"size": "sm",
										"weight": "bold"
									}
								]
							},
							{
								"type": "box",
								"layout": "vertical",
								"spacing": "xxl",
								"contents": [
									{
										"type": "text",
										"text": "起手留跳費，遇快攻類型牌組則可留低費從者，但擁有配合類型的低費暫且不留，如果拿到節奏費用的卡也可以留著，以穩度解場配合高質量從者所製成的牌組",
										"color": "#000000",
										"wrap": true,
										"weight": "bold",
										"gravity": "center",
										"size": "sm"
									}
								]
							}
						]
					}
				]
			},
			"footer": {
				"type": "box",
				"layout": "vertical",
				"contents": [
					{
						"type": "separator",
						"margin": "xxl"
					},
					{
						"type": "box",
						"layout": "baseline",
						"margin": "md",
						"contents": [
							{
								"type": "text",
								"text": "製作價格：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "66050",
								"wrap": true,
								"color": "#666666",
								"size": "sm",
								"flex": 4
							}
						]
					},
					{
						"type": "box",
						"layout": "baseline",
						"spacing": "sm",
						"contents": [
							{
								"type": "text",
								"text": "製作者：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "吹雪",
								"wrap": true,
								"size": "sm",
								"color": "#666666",
								"flex": 4
							}
						]
					},
					{
						"type": "separator",
						"margin": "md"
					},
					{
						"type": "button",
						"style": "primary",
						"margin": "sm",
						"action": {
							"type": "uri",
							"label": "前往牌組製作",
							"uri": "https://shadowverse-portal.com/deck/1.4.6bEGc.6bEGc.6bEGc.6bHRQ.6bHRQ.6bHRQ.6PqHY.6PqHY.6PqHY.6Tgt6.6Tgt6.6Tgt6.6bBqM.6bBqM.6bBqM.5_38w.5_38w.5_38w.6TeQY.6TeQY.6TeQY.6Tf9Q.6Tf9Q.6bJ8o.6bJ8o.6bJ8o.6XV06.6XV06.6XV06.6XSZs.6XSZs.6XSZs.6PqHi.6PqHi.6Psjy.6Psjy.6Psjy.6XU_o.6XU_o.6XU_o?lang=zh-tw"
						}
					}
				]
			}
	 }
};

//紅茶吸1
var teavampire = {
	"type": "flex",
	"altText": "王座吸",
"contents": {
		 "type": "bubble",
			"body": {
				"type": "box",
				"layout": "vertical",
				"spacing": "lg",
				"contents": [
					{
						"type": "text",
						"text": "王座吸",
						"wrap": true,
						"weight": "bold",
						"gravity": "center",
						"size": "lg"
					},
					{
						"type": "box",
						"layout": "baseline",
						"spacing": "lg",
						"contents": [
							{
								"type": "icon",
								"url": "https://shadowverse.com/assets/images/cardpack/omenoftheten/title.png?rel20180928",
								"size": "xxl"
							},
							{
								"type": "text",
								"text": "指定模式",
								"gravity": "center",
								"flex": 5,
								"align": "start"
							},
							{
								"type": "text",
								"text": "職業：血鬼",
								"gravity": "center",
								"flex": 5,
								"align": "end"
							},
							{
								"type": "icon",
								"url": "https://shadowverse.com/sp/cht/assets/images/world/thumb-chara-06.jpg?rel20180928",
								"size": "lg"
							}
						]
					},
					{
						"type": "box",
						"layout": "vertical",
						"margin": "lg",
						"spacing": "sm",
						"contents": [
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "卡片稀有度分佈",
										"color": "#aaaaaa",
										"size": "sm",
										"weight": "bold"
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "虹卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "13",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "金卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "3",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}								]

							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "銀卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "13",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "銅卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{

										"type": "text",
										"text": "11",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "連勝：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{

										"type": "text",
										"text": "沒有資料",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "md",
								"contents": [
									{
										"type": "text",
										"text": "牌組概念",
										"color": "#aaaaaa",
										"size": "sm",
										"weight": "bold"
									}
								]
							},
							{
								"type": "box",
								"layout": "vertical",
								"spacing": "xxl",
								"contents": [
									{
										"type": "text",
										"text": "注意換血",
										"color": "#000000",
										"wrap": true,
										"weight": "bold",
										"gravity": "center",
										"size": "sm"
									}
								]
							}
						]
					}
				]
			},
			"footer": {
				"type": "box",
				"layout": "vertical",
				"contents": [
					{
						"type": "separator",
						"margin": "xxl"
					},
					{
						"type": "box",
						"layout": "baseline",
						"margin": "md",
						"contents": [
							{
								"type": "text",
								"text": "製作價格：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "50150",
								"wrap": true,
								"color": "#666666",
								"size": "sm",
								"flex": 4
							}
						]
					},
					{
						"type": "box",
						"layout": "baseline",
						"spacing": "sm",
						"contents": [
							{
								"type": "text",
								"text": "製作者：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "母湯紅茶",
								"wrap": true,
								"size": "sm",
								"color": "#666666",
								"flex": 4
							}
						]
					},
					{
						"type": "separator",
						"margin": "md"
					},
					{
						"type": "button",
						"style": "primary",
						"margin": "sm",
						"action": {
							"type": "uri",
							"label": "前往牌組製作",
							"uri": "https://shadowverse-portal.com/deck/3.6.6MpPy.6MpPy.6MpPy.6c3zy.6c3zy.6QdYy.6QdYy.6YFr6.6YFr6.6YFr6.6YAyI.6YAyI.6YAyI.5_p-4.5_p-4.fuJ4A.fuJ4A.6bz8I.6bz8I.6bz8I.6KS2S.6KS2S.6YBRY.6YBRY.6YBRY.6YFqo.6YFqo.6YFqo.5_pzw.5_pzw.5_pzw.6YDOY.6YDOY.6YDOY.6byfM.6byfM.6b_qA.6b_qA.5_rhS.5_p-4?lang=zh-tw"
						}
					}
				]
			}
	 }
};

//C佬元氣彈
var bomb = {
	"type": "flex",
	"altText": "元氣彈",
"contents": {
		 "type": "bubble",
			"body": {
				"type": "box",
				"layout": "vertical",
				"spacing": "lg",
				"contents": [
					{
						"type": "text",
						"text": "元氣彈馬納法",
						"wrap": true,
						"weight": "bold",
						"gravity": "center",
						"size": "lg"
					},
					{
						"type": "box",
						"layout": "baseline",
						"spacing": "lg",
						"contents": [
							{
								"type": "icon",
								"url": "https://shadowverse.com/assets/images/cardpack/omenoftheten/title.png?rel20180928",
								"size": "xxl"
							},
							{
								"type": "text",
								"text": "指定模式",
								"gravity": "center",
								"flex": 5,
								"align": "start"
							},
							{
								"type": "text",
								"text": "職業：巫師",
								"gravity": "center",
								"flex": 5,
								"align": "end"
							},
							{
								"type": "icon",
								"url": "https://shadowverse.com/sp/cht/assets/images/world/thumb-chara-03.jpg?rel20180928",
								"size": "lg"
							}
						]
					},
					{
						"type": "box",
						"layout": "vertical",
						"margin": "lg",
						"spacing": "sm",
						"contents": [
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "卡片稀有度分佈",
										"color": "#aaaaaa",
										"size": "sm",
										"weight": "bold"
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "虹卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "6",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "金卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "11",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}								]

							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "銀卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "5",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "銅卡：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{

										"type": "text",
										"text": "18",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "連勝：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{

										"type": "text",
										"text": "Master天梯6&7連勝各一次",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"flex": 1
									}
								]
							},
							{
								"type": "box",
								"layout": "baseline",
								"spacing": "md",
								"contents": [
									{
										"type": "text",
										"text": "牌組概念",
										"color": "#aaaaaa",
										"size": "sm",
										"weight": "bold"
									}
								]
							},
							{
								"type": "box",
								"layout": "vertical",
								"spacing": "xxl",
								"contents": [
									{
										"type": "text",
										"text": "起手 找1費知識 2費歐文 9費安或校長，後手找卡叔。\n1費知識有充能才開，沒有就先放著。\n2費歐文，可以抽老人 龍人 322 校長 安 始祖，有安或校長是，最好是抽到322或老人。\n起手有校長最快4費可以下。\n4費先手要解場或用兩費的去鋪，後手一定是卡叔雙解。\n5費是強一定是始祖，但要看情況，對面3隻以上就要解場。\n6費我喜歡下校長，校長每一場都是用一個進化點才有價值。\n7費就用校長帶來的盾或魔炮解場，下秘術，把費用打滿。\n8費黑龍、魔炮。\n9費能解就解 可以9費才下安。\n10費 有零費安請這時才下，放對手一個措手不及，元氣彈丟下去就完。\n\n妖精要找炎彈或風怒，把場解好，要拖到後期。\n皇家，算好打，小心黑女皇跟范恩。\n巫師，馬納內戰先手贏80%，大奇比你快，沒有怪給你直傷，會劣開。\n吸血鬼：自殘要找歐文 2費打2 2費打1，要盡全力去解場。\n龍，主教就正常打吧，主教要防安息跟神之盾。\n死靈28開，7費準時阿卡斯就不好說，要把你所有盾都扣好，22盾 秘術盾 英靈 真實，好運可以擋兩回合。\n復仇者：偶像仇很難打，人家斬殺線就是比你快，創造我還未贏過w",
										"color": "#000000",
										"wrap": true,
										"weight": "bold",
										"gravity": "center",
										"size": "sm"
									}
								]
							}
						]
					}
				]
			},
			"footer": {
				"type": "box",
				"layout": "vertical",
				"contents": [
					{
						"type": "separator",
						"margin": "xxl"
					},
					{
						"type": "box",
						"layout": "baseline",
						"margin": "md",
						"contents": [
							{
								"type": "text",
								"text": "製作價格：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "32000",
								"wrap": true,
								"color": "#666666",
								"size": "sm",
								"flex": 4
							}
						]
					},
					{
						"type": "box",
						"layout": "baseline",
						"spacing": "sm",
						"contents": [
							{
								"type": "text",
								"text": "製作者：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "かひ",
								"wrap": true,
								"size": "sm",
								"color": "#666666",
								"flex": 4
							}
						]
					},
					{
						"type": "separator",
						"margin": "md"
					},
					{
						"type": "button",
						"style": "primary",
						"margin": "sm",
						"action": {
							"type": "uri",
							"label": "前往牌組製作",
							"uri": "https://shadowverse-portal.com/deck/3.3.6PQ9g.6PQ9g.6PQ9g.6PM-i.6PM-i.6TDZy.6TDZy.6TDZy.6apPY.6apPY.6apPY.5-gka.5-gka.5-gka.6W__Q.6W__Q.6PM-Y.6PM-Y.6PM-Y.6X49C.6X49C.6X49C.6X6bc.6X6bc.6X6bc.6PSbw.6PSbw.6PUJI.6PUJI.6PUJI.6TBsQ.6TBsQ.6X492.6X492.6X492.6asag.6asag.6auI2.6auI2.6auI2?lang=zh-tw"
						}
					}
				]
			}
	 }
};

function dragon1() {
	return snowdragon
}

function vampire1() {
	return teavampire
}


function rune1() {
return bomb
}

module.exports = {
	dragon1: dragon1,
	vampire1: vampire1,
	rune1: rune1
};

