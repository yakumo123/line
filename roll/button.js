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
        "thumbnailImageUrl": "https://i2.wp.com/sequentialplanet.com/wp-content/uploads/2018/12/ogp.png?fit=646%2C269&ssl=1",
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
				      "label": "Shadowverse News",
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
        "thumbnailImageUrl": "https://i2.wp.com/sequentialplanet.com/wp-content/uploads/2018/12/ogp.png?fit=646%2C269&ssl=1",
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
                "label": "情報社牌組參考",
                "uri": "https://sv-knower.blogspot.com"
            }
        ]
      },
      {
        "thumbnailImageUrl": "https://i2.wp.com/sequentialplanet.com/wp-content/uploads/2018/12/ogp.png?fit=646%2C269&ssl=1",
        "imageBackgroundColor": "#a8e8fb",
        "title": "投稿推薦牌組",
        "text": "內容較多，群組內慎用以免做成洗頻。",
        "actions": [
          {
   "type": "postback",
                "label": "投稿推薦牌組1月版【待更】",
                "data": "sv推薦牌組1月"
            },
            {
                "type": "postback",
                "label": "投稿推薦牌組2月版【待更】",
                "data": "待更新"
            },	      

		{
                "type": "postback",
                "label": "投稿推薦牌組3月版【待更】",
                "data": "待更新"
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
