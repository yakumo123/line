var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' };

function Security() {
	rply = {
		"type": "template",
		"altText": "【車圖整合清單】",
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
							"label": "整合清單3【伊莉雅】",
							"text": "list0003"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	Security: Security
};
