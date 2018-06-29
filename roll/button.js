var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function buttontest() {
	rply = {
    "type": "template",
    "altText": "你認為班比愛你嗎??",
    "template": {
        "type": "buttons",
        "thumbnailImageUrl": "https://drive.google.com/uc?export=download&id=1RXsvfEyhCamuHD2yEkWgNJ82KmHHlrWJ",
        "title": "你認為班比愛你嗎??",
        "text": "這選擇",
        "actions": [
            {
                "type": "message",
                "label": "班比愛你",
                "text": "沒有人會愛我這種臭酸肥宅"
            },
            {
                "type": "message",
                "label": "班比不愛你",
                "text": "我變態所以沒有人會愛上我"
            },
            {
                "type": "message",
                "label": "不知道",
                "text": "我只是一名被邊緣的變態臭酸肥宅"
            }
        ]
    }
};
	return rply;
}



module.exports = {
	buttontest: buttontest
};
