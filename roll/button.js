var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function buttontest() {
	rply = {
    "type": "template",
    "altText": "情報整合",
    "template": {
        "type": "buttons",
        "thumbnailImageUrl": "https://i.ytimg.com/vi/G8O2TSRilkg/maxresdefault.jpg",
        "title": "Example Menu",
        "text": "所有情報",
        "actions": [
            {
                "type": "uri",
                "label": "新卡包整合貼【創作者：LM】",
                "uri": "https://m.gamer.com.tw/forum/C.php?bsn=29330&snA=14020&bpage=1&top=9&ltype="
            },
            {
                "type": "uri",
                "label": "官方宣傳片",
                "uri": "https://youtu.be/G8O2TSRilkg"
            },
            {
                "type": "uri",
                "label": "官網",
                "uri": "https://shadowverse.com/sp/cht/cardpack/brigadeofthesky/"
            }
        ]
    }
};
	return rply;
}



module.exports = {
	buttontest: buttontest
};
