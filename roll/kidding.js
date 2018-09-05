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
                  "uri": "https://classmethod.jp/"
                }
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "md",
                "action": {
                  "type": "uri",
                  "uri": "https://classmethod.jp/"
                },
                "contents": [
                  {
                    "type": "text",
                    "text": "Hamburger",
                    "size": "xl",
                    "weight": "bold"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                          {
                            "type": "icon",
                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png"
                          },
                          {
                            "type": "text",
                            "text": "$10.5",
                            "weight": "bold",
                            "margin": "sm",
                            "flex": 0
                          },
                          {
                            "type": "text",
                            "text": "400kcl",
                            "size": "sm",
                            "align": "end",
                            "color": "#aaaaaa"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "Sauce, Onions, Pickles, Lettuce & Cheese",
                    "wrap": true,
                    "color": "#aaaaaa",
                    "size": "xxs"
                  }
                ]
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "xxl"
                  },
                  {
                    "type": "button",
                    "style": "primary",
                    "color": "#905c44",
                    "action": {
                      "type": "message",
                      "label": "Order",
                      "text": "CM01_001"
                    }
                  }
                ]
              }
            }
        }
      };

function joke() {
	return message;
}
	



module.exports = {
	joke: joke
};
