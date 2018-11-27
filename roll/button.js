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
				      "label": "追加卡包情報 【感謝LM.緯提供】",
				      "uri": "https://m.gamer.com.tw/forum/C.php?bsn=29330&snA=15691&bpage=1&top=9&ltype="
			      },	
			      {
				      "type": "uri",				      
				      "label": "勝率分析",
				      "uri": "https://shadowlog.com/s/trend/"
			      }
        ]
      },
      {
        "thumbnailImageUrl": "https://i.ytimg.com/vi/iYRO-R_fRq4/maxresdefault.jpg",
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
        "thumbnailImageUrl": "https://shadowverse.gamepress.gg/sites/shadowverse/files/2018-09/Omen-of-the-Ten_2.png",
        "imageBackgroundColor": "#a8e8fb",
        "title": "投稿推薦牌組",
        "text": "內容較多，群組內慎用以免做成洗頻。",
        "actions": [
          {
   "type": "message",
                "label": "投稿推薦牌組10月版",
                "text": "sv推薦牌組10月"
            },
            {
                "type": "postback",
                "label": "投稿推薦牌組11月版【待更】",
                "data": "待更新"
            },	      

		{
                "type": "postback",
                "label": "投稿推薦牌組12月版【待更】",
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
