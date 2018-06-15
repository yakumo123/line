var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Cli() {
	rply = {
		"type": "template",
		"altText": "確定",
		"template": {
			"type": "confirm",
			"text": "【警告】本列表含有大量訊息 請勿在【群組】內使用 請使用【私訊】 \n \n本Bot作者因方便其使用者使用本Bot而設立本指令 其不當使用/不跟隨以上警告所使用 所有責任不應歸其作者身上 其所有責任均在其使用者身上 本Bot作者不會對其所發生的事情負上一切責任 \n \n確定使用?",
			"actions": [
				{
					"type": "message",
					"label": "Yes",
					"text": "commandlist:all"
				},
				{
					"type": "message",
					"label": "No",
					"text": "no"
				}
			]
		}
	};
	return rply;
}



module.exports = {
	Cli: Cli
};
