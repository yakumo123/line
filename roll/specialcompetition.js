var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function SCList() {
	rply = {
		"type": "template",
		"altText": "特殊賽制",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "特殊賽制列表-指定模式",
					"text": "職業隨機限用或禁用虹卡/金卡/全卡",
					"actions": [
						{
							"type": "message",
							"label": "指定模式禁用虹卡(3張/5張/7張)",
							"text": "例子:血鬼指定3虹 \n使用方法:職業/中立+指定+3/5/7+虹 或 職業/中立+指定+3/5/7+虹卡+禁卡/限卡"
						},
						{
							"type": "message",
							"label": "指定模式禁用金卡(5張/7張/10張)(不包含中立)",
							"text": "例子:妖精指定5金 \n使用方法:職業+指定+5/7/10+金 或  職業+指定+3/5/7+金卡+禁卡/限卡"
						},
						{
							"type": "message",
							"label": "指定模式禁用全卡(25張)",
							"text": "例子:血鬼指定全禁卡 \n使用方法:職業+指定全禁卡/指定全限卡"
						}

					]
				},
				{
					"title": "無限制模式",
					"text": "職業隨機限用或禁用虹卡/金卡/全卡",
					"actions": [
						{
							"type": "message",
							"label": "無限制模式禁用虹卡(5張/7張/10張)",
							"text": "例子:巫師無限制7虹 \n使用方法:職業/中立+無限制+5/7/10+虹 或 職業/中立+無限制+5/7/10+虹卡+禁卡/限卡"
						},
						{
							"type": "message",
							"label": "無限制模式禁用金卡(7張/10張/15張/20張)(包含中立)",
							"text": "例子:主教無限制10金 \n使用方法:職業+無限制+7/10/15/20+金 或  職業+無限制+7/10/15/20+金卡+禁卡/限卡"
						},
						{
							"type": "message",
							"label": "N/A",
							"text": "N/A"
						}

					]
				},
				{
					"title": "隨機職業生產",
					"text": "隨機職業生產",
					"actions": [
						{
							"type": "message",
							"label": "隨機職業生產",
							"text": "例子:隨機職業"
						},
						{
							"type": "message",
							"label": "N/A",
							"text": "N/A"
						},
						{
							"type": "message",
							"label": "N/A",
							"text": "N/A"
						}

					]
				},
				{
					"title": "《指定模式特殊賽制生產及隨機職業系統》",
					"text": "指定模式特殊賽制生產及隨機職業",
					"actions": [
						{
							"type": "message",
							"label": "特殊賽制生產【指定模式】",
							"text": "復仇者3張虹卡限制 【範例】 \n虹卡限制(3/5/7張)： \n職業/中立 3/5/7張虹卡 禁卡/限卡/不加 \n例如：中立7張虹卡限制 / 血鬼3張虹卡 / 復仇者5張虹卡禁卡 \n金卡限制(5/7/10張)： \n職業 5/7/10張金卡 禁卡/限卡/不加 \n例如：主教7張金卡限制 / 血鬼3張金卡 / 復仇者5張金卡禁卡 \n全卡限制(25張)： \n職業禁卡/限卡 \n例如：主教限卡"
						},
						{
							"type": "message",
							"label": "隨機職業生產",
							"text": "隨機職業 【範例】"
						},
						{
							"type": "message",
							"label": "按我",
							"text": "我是大笨蛋 快來截我圖"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	SCList: SCList
};
