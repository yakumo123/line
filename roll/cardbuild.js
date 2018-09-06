var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var message = {
	"type": "flex",
	"altText": "推薦",
	"contents": {
		"type": "bubble",
			"body": {
				"type": "box",
				"layout": "vertical",
				"spacing": "lg",
				"contents": [
					{
						"type": "text",
						"text": "亞瑟基德皇",
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
								"url": "https://shadowverse.com/assets/images/cardpack/brigadeofthesky/title.png?rel20180730_1",
								"size": "sm"
							},
							{
								"type": "text",
								"text": "指定模式",
								"flex": 5,
								"align": "start"
							},
							{
								"type": "text",
								"text": "職業：皇家",
								"flex": 5,
								"align": "end"
							},
							{
								"type": "icon",
								"url": "https://shadowverse.com/sp/cht/assets/images/gameguide/card-btn-02.png?rel20180718",
								"size": "sm"
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
										"text": "17",
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
										"text": "7",
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
								"spacing": "md",
								"contents": [
									{
										"type": "text",
										"text": "牌組起留手概念",
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
										"text": "先手起留手盡量留213老鼠跟323炎將，如果起手換牌有黑白也留。後手和先手差不多，但盡量留222白熊護衛和221及炎將。",
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
								"text": "67250",
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
								"text": "小學生八雲",
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
							"uri": "https://shadowverse-portal.com/deck/1.2.6SuKQ.6SuKQ.6HOkc.6HOkc.6HOkc.6SojM.6SojM.6SojM.6Sw1o.6Sw1o.6Sw1o.fsmhI.fsmhI.fsmhI.6LHlo.6LHlo.6LHlo.6P3SY.6P3SY.6Sr9c.6Sr9c.6Sr9c.6WfII.6WfII.6P10I.6P10I.6WiTQ.6WiTQ.6WiTQ.6WkAo.6WkAo.6WkB6.6WkB6.6P5uy.6P5uy.6P5uy.6Sw1y.6Sw1y.6WkAy.6WkAy?lang=zh-tw"
						}
					}
				]
			} 
	}
};

function build() {
	return message; 
	
}



module.exports = {
	build: build
};

