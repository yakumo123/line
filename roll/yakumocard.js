var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function buttontest() {
	rply = {
  "type": "template",
  "altText": "比賽牌組",
  "template": {
    "type": "carousel",
    "imageAspectRatio": "rectangle",
    "imageSize": "cover",
    "columns": [
      {
        "thumbnailImageUrl": "https://i.ytimg.com/vi/G8O2TSRilkg/maxresdefault.jpg",
        "imageBackgroundColor": "#a8e8fb",
        "title": "八雲",
        "text": "八雲",
        "actions": [
          {
   "type": "uri",
                "label": "獅子",
                "uri": "https://goo.gl/qLKGCj"
            },
            {
                "type": "uri",
                "label": "大奇",
                "uri": "https://goo.gl/1RCeGT"
            },	      

		{
                "type": "uri",
                "label": "女鬼",
                "uri": "https://goo.gl/Ehs15y"
            }
        ]
      }
    ]
  }
};
	return rply;
}



module.exports = {
	buttontest: buttontest
};
