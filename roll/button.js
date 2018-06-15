var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function joke() {
	rply = {
    "type": "template",
    "altText": "Example buttons template",
    "template": {
        "type": "buttons",
        "thumbnailImageUrl": "https://api.reh.tw/line/bot/example/assets/images/example.jpg",
        "title": "Example Menu",
        "text": "Please select",
        "actions": [
            {
                "type": "postback",
                "label": "Postback example",
                "data": "action=buy&itemid=123"
            },
            {
                "type": "message",
                "label": "Message example",
                "text": "Message example"
            },
            {
                "type": "uri",
                "label": "Uri example",
                "uri": "https://github.com/GoneTone/line-example-bot-php"
            }
        ]
    }
};
	return rply;
}



module.exports = {
	joke: joke
};
