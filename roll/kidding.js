var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var message = {
    "type": "flex",
    "altText": "咕嚕靈波（●´∀｀）ノ♡",
    "contents": {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://drive.google.com/uc?export=download&id=1KNgmkrvog0OnUHRil9seI8CfyVAWtn3j",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
            {
                "type": "text",
                "text": "這是真步真步王國的宣傳單張\n",
		    "color": "#3c09f4",
                "wrap": true,
                "weight": "bold",
                "gravity": "center",
                "size": "lg"
	    },
		    {
        "type": "button",
        "style": "link",
        "action": {
          "type": "uri",
          "label": "點擊觀看真步真步教聖歌",
          "uri": "https://youtu.be/78BdGjqnaIg"
        }
			    },
			    {
                "type": "box",
                "layout": "vertical",
                "margin": "xl",
                "contents": [
                {
                    "type": "spacer",
                    "size": "lg"
                },
                {
                  "type": "text",
                "text": "咕嚕靈波（●´∀｀）ノ♡\n",
                "wrap": true,
                "weight": "bold",
                "gravity": "center",
                "size": "xl"
                },
                {
                    "type": "text",
                    "text": "請快點加入我們真步真步教！",
                    "color": "#ff1616",
                    "wrap": true,
                    "margin": "xxl",
                    "size": "lg"
                },
			{
                "type": "button",
                "style": "primary",
                "color": "#f40909",
                "action": {
                    "type": "message",
                    "label": "按此立即加入",
                    "text": "我本人在此起誓 真步真步教是我的唯一教義！咕嚕靈波！"
                }
            }
                ]
            }
            ]
        }
    }
};

var rply = {
      "type": "flex",
      "altText": "基德",
      "contents": { 
	"type": "bubble",
	"body": { 
		"type": "box", 
		"layout": "horizontal", 
		"contents": [
			{ "type": "image",
			 "url": "https://serving.photos.photobox.com/66620889a888146fb10452ba17ad46df33b0cc613c43a83f606c896260591e20616edf3d.jpg",
			 "size": "full",
			 "aspectRatio": "9:16",
			 "aspectMode": "cover"
			}
		]
	} 

      }
};

var yakumo = {
	"type": "flex",
	"altText": "八雲教（？",
	"contents": {
		"type": "bubble",
		"hero": {
			"type": "image",
			"url": "https://serving.photos.photobox.com/24338828b376fc023c84bf22c990cd65cc86da893a8ee1fd139e1b8a44219fc9b574cec1.jpg",
			"size": "full",
			"aspectRatio": "1:1",
			"aspectMode": "cover"
		},
		"body": {
			"type": "box",
			"layout": "vertical",
			"spacing": "md",
			"contents": [
				{
					"type": "text",
					"text": "你要加入八雲喵喵教嗎？",
					"color": "#3c09f4",
					"wrap": true,
					"weight": "bold",
					"gravity": "center",
					"size": "lg"
				},
				{
					"type": "box",
					"layout": "vertical",
					"margin": "xl",
					"contents": [
						{
							"type": "spacer",
							"size": "lg"
						},
						{
							"type": "text",
							"text": "神奇八雲魔法靈 八雲靈波~",
							"wrap": true,
							"weight": "bold",
							"gravity": "center",
							"size": "xl"
						},
						{
							"type": "text",
							"text": "請快點加入我們，信仰着八雲（大誤",
							"color": "#ff1616",
							"wrap": true,
							"margin": "xxl",
							"size": "lg"
						}
					]
				}
			]
		}
	}
};

function joke() {
	return message;
}
	
function inin() {
	return rply;
}

function yakumagic() {
	return yakumo
}
	

module.exports = {
	joke: joke,
	inin: inin,
	yakumagic: yakumagic
};
