var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var message = {
    "type": "flex",
    "altText": "#",
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
                "text": "咕嚕靈波~~\n",
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

function joke() {
	return message;
}
	



module.exports = {
	joke: joke
};
