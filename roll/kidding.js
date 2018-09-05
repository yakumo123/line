var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var message = {
    "type": "flex",
    "altText": "#",
    "contents": {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://s3-ap-northeast-1.amazonaws.com/xxxxxxx/hamburger.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "action": {
                "type": "uri",
                "label": "#",
                "uri": "https://classmethod.jp/"
            }
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
            {
                "type": "text",
                "text": "Hamburger",
                "wrap": true,
                "weight": "bold",
                "gravity": "center",
                "size": "xl"
            },
            {
                "type": "box",
                "layout": "vertical",
                "margin": "xxl",
                "contents": [
                {
                    "type": "spacer",
                    "size": "lg"
                },
                {
                    "type": "image",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png",
                    "aspectMode": "cover",
                    "size": "xl"
                },
                {
                    "type": "text",
                    "text": "You can pick up your order by using this code instead of a ticket.",
                    "color": "#aaaaaa",
                    "wrap": true,
                    "margin": "xxl",
                    "size": "xs"
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
