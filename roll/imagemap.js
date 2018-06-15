var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function immap() {
	rply = {
		"type": "imagemap",
		"baseUrl": "https://api.reh.tw/line/bot/example/assets/images/example",
		"altText": "新卡包整合貼【創作者：LM】"
		"baseSize": {
		"height": 1040,
		"width": 1040
	},
		"actions": [
			{
				"type": "uri",
				"linkUri": "https://m.gamer.com.tw/forum/C.php?bsn=29330&snA=14020&bpage=1&top=9&ltype=",
				"area": {
					"x": 0,
					"y": 0,
					"width": 520,
					"height": 1040
				}
			},
			{
				"type": "message",
				"text": "Hello",
				"area": {
					"x": 520,
					"y": 0,
					"width": 520,
					"height": 1040
				}
			}
		]
};
	return rply;
}



module.exports = {
	immap: immap
};
