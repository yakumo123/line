var rollbase = require('./rollbase.js');
var funny = require('./funny.js');

var tea = {
	"type": "flex",
	"altText": "紅茶個人資料",
"contents": {
		 "type": "bubble",
			"body": {
				"type": "box",
				"layout": "vertical",
				"spacing": "lg",
				"contents": [
					{
						"type": "text",
						"text": "紅茶",
						"wrap": true,
						"weight": "bold",
						"gravity": "center",
						"size": "lg"
					},
					{
						"type": "box",
						"layout": "baseline",
						"spacing": "sm",
						"contents": [
							{
								"type": "icon",
								"url": "https://cdn.discordapp.com/emojis/708598573964460073.png?v=1",
								"size": "lg"
							},
							{
								"type": "text",
								"text": "闇天人",
								"gravity": "center",
								"flex": 5,
								"align": "start"
							},
							{
								"type": "text",
								"text": "超路站位：光闇",
								"gravity": "center",
								"flex": 5
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
										"text": "資料",
										"color": "#000000",
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
										"text": "超路勝場：",
										"color": "#000000",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "999",
										"wrap": true,
										"color": "#000000",
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
										"text": "口頭禪：",
										"color": "#000000",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "笑死、爛、您、土天人解試煉",
										"wrap": true,
										"color": "#000000",
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
										"text": "雞雞長度：",
										"color": "#000000",
										"size": "sm",
										"flex": 1
									},
									{

										"type": "text",
										"text": "0（沒長）",
										"wrap": true,
										"color": "#000000",
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
										"text": "金句",
										"color": "#000000",
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
										"text": "我又沒長\n卻戰\n露娜我婆\n那裡有色圖",
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
								"text": "稱號：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "變態紅茶",
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
								"text": "距離FBI到達：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "2小時",
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
							"type": "postback",
							"label": "點擊羈押",
							"data": "A"
						}
					}
				]
			}
	 }
};

var dis = {
	"type": "flex",
	"altText": "言個人資料",
"contents": {
		 "type": "bubble",
			"body": {
				"type": "box",
				"layout": "vertical",
				"spacing": "lg",
				"contents": [

					{
						"type": "text",
						"text": "莊立言",
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
								"type": "text",
								"text": "土天人",
								"gravity": "center",
								"flex": 5,
								"align": "start"
							},
							{
								"type": "text",
								"text": "超路站位：土",
								"gravity": "center",
								"flex": 5,
								"align": "end"
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
										"text": "資料",
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
										"text": "超路勝場：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "？？？",
										"wrap": true,
										"color": "#FF0000",
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
										"text": "口頭禪：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{
										"type": "text",
										"text": "我很穩、畜生",
										"wrap": true,
										"color": "#000000",
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
										"text": "解試煉方法：",
										"color": "#aaaaaa",
										"size": "sm",
										"flex": 1
									},
									{

										"type": "text",
										"text": "奧義砸翅膀",
										"wrap": true,
										"color": "#000000",
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
										"text": "試煉擔當",
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
										"text": "闇幫忙解的8及打完還沒解的3",
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
						"type": "box",
						"layout": "baseline",
						"margin": "md",
						"contents": [
							
					{
						"type": "separator",
						"margin": "xl"
					},
							{
								"type": "text",
								"text": "平均超巴貢獻：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "2-30萬",
								"wrap": true,
								"color": "#000000",
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
								"text": "專長：",
								"color": "#aaaaaa",
								"size": "sm",
								"flex": 2
							},
							{
								"type": "text",
								"text": "FA到理超",
								"wrap": true,
								"size": "sm",
								"color": "#000000",
								"flex": 4
							}
						]
					}
				]
			}
	 }
};

function disprofile() {
return dis
}


function teaprofile() {
return tea
}



module.exports = {
disprofile: disprofile,
teaprofile: teaprofile,
};
