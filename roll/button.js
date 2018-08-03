var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function buttontest() {
	rply = {
    "type": "template",
    "altText": "SV活動情報",
    "template": {
        "type": "buttons",
        "thumbnailImageUrl": "https://i.ytimg.com/vi/G8O2TSRilkg/maxresdefault.jpg",
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
    }
};
	return rply;
}



module.exports = {
	buttontest: buttontest
};
