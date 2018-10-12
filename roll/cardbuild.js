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
								"size": "lg"
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
								"size": "lg"
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

function dragon1() {
	return snowdragon
}

function vampire1() {
	return teavampire
}

module.exports = {
	dragon1: dragon1,
	vampire1: vampire1
};

