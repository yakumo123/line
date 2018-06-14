var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' };

function BlackHistory() {
	rply = {
		"type": "template",
		"altText": "【黑歷史清單(非常高能)】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "《整合清單》",
					"text": "清單為選取面版",
					"actions": [
						{
							"type": "message",
							"label": "整合清單1",
							"text": "list0001"
						},
						{
							"type": "message",
							"label": "整合清單2",
							"text": "list0002"
						},
						{
							"type": "message",
							"label": "整合清單3",
							"text": "【待更新】"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	BlackHistory: BlackHistory
};
