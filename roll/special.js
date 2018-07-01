var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function ComEit() {
	rply = {
		"type": "template",
		"altText": "【式神的特殊賽制列表】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "特殊賽制列表【指令模式】",
					"text": "職業隨機限用或禁用虹卡/金卡/全卡",
					"actions": [
						{
							"type": "message",
							"label": "指定模式禁用虹卡【3張／5張／7張】",
							"text": "例子：血鬼指定3虹 \n使用方法:職業／中立＋指定＋3／5／7＋虹 或 職業／中立＋指定+3／5／7＋虹卡＋禁卡／限卡"						},
						{
							"type": "message",
							"label": "指定模式禁用金卡【5張/7張/10張】【不包含中立】",
							"text": "例子：妖精指定5金 \n使用方法:職業+指定＋5／7／10＋金 或  職業+指定＋3／5／7＋金卡＋禁卡/限卡"
						},
						{
							"type": "message",
							"label": "指定模式禁用全卡【25張】",
							"text": "例子：血鬼指定全禁卡 \n使用方法:職業+指定全禁卡／指定全限卡"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	ComEit: ComEit
};
