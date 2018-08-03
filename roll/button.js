var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function buttontest() {
	rply = {
  "type": "template",
  "altText": "SV情報",
  "template": {
      "type": "carousel",
      "columns": [			
	      {
		      "type": "buttons",
		      "thumbnailImageUrl": "https://shadowverse.jp/news/wp-content/uploads/e0b558ba389c34594d109581059d77f1.png",
		      "title": "SV活動情報",        
		      "text": "活動情報",
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
        "type": "buttons",
        "thumbnailImageUrl": "https://i.ytimg.com/vi/G8O2TSRilkg/maxresdefault.jpg",
        "title": "牌組參考",
        "text": "牌組參考",
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
            }
        ]
    }
};
	return rply;
}



module.exports = {
	buttontest: buttontest
};
