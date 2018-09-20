var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function buttontest() {
	rply = {
  "type": "template",
  "altText": "SV情報",
  "template": {
    "type": "carousel",
    "imageAspectRatio": "rectangle",
    "imageSize": "cover",
    "columns": [
	  {
        "thumbnailImageUrl": "https://i.ytimg.com/vi/iYRO-R_fRq4/maxresdefault.jpg",
        "imageBackgroundColor": "#a8e8fb",
        "title": "新卡包情報",
        "text": "新卡包情報",
        "actions": [
          {
				      "type": "uri",
				      "label": "最新卡片情報",
				      "uri": "https://sv-knower.blogspot.com/2018/09/10omen-of-ten-297.html?m=1"
			      },
			      {
				      "type": "uri",
				      "label": "官方新卡包特設網站",
				      "uri": "https://shadowverse.com/sp/cht/cardpack/omenoftheten/"
			      },	
			      {
				      "type": "uri",				      
				      "label": "新卡包宣傳影片",
				      "uri": "https://youtu.be/Ihpa3KwruFY"
			      }
        ]
      },
      {
        "thumbnailImageUrl": "https://shadowverse.jp/news/wp-content/uploads/e0b558ba389c34594d109581059d77f1.png",
        "imageBackgroundColor": "#a8e8fb",
        "title": "SV活動情報及ShadowLogs",
        "text": "SV活動情報及ShadowLogs",
        "actions": [
          {
				      "type": "uri",
				      "label": "Event Support情報",
				      "uri": "https://event.shadowverse.com/cht/eventsupport/"
			      },
			      {
				      "type": "uri",
				      "label": "ShadowNews",
				      "uri": "https://shadowverse.com/sp/cht/news/"
			      },	
			      {
				      "type": "uri",				      
				      "label": "勝率分析",
				      "uri": "https://shadowlog.com/s/trend/"
			      }
        ]
      },
      {
        "thumbnailImageUrl": "https://i.ytimg.com/vi/G8O2TSRilkg/maxresdefault.jpg",
        "imageBackgroundColor": "#a8e8fb",
        "title": "競技場牌組",
        "text": "競技場牌組",
        "actions": [
          {
   "type": "uri",
                "label": "指定牌組參考",
                "uri": "https://altema.jp/shadowverse/saikyodeck"
            },
            {
                "type": "uri",
                "label": "無限制牌組參考",
                "uri": "https://altema.jp/shadowverse/anrimisaikyou"
            },	      

		{
                "type": "uri",
                "label": "其他",
                "uri": "https://sv-knower.blogspot.com/2018/08/9.html?m=1"
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
