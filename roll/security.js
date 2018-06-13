var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function CarPhoto2() {
	rply = {
		"type": "template",
		"altText": "【車圖整合清單】",
		"template": {
			"type": "carousel",
			"columns": [
