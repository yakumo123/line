var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function CarPhoto2() {
	rply = {
		"type": "template",
		"altText": "【式神的車圖大整合】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "《蘿王的工作》",
					"text": "小心FBI 社工跟麥當勞歡樂送",
					"actions": [
						{
							"type": "message",
							"label": "整合1",
							"text": "Cy6f4c3"
						},
						{
							"type": "message",
							"label": "整合2",
							"text": "Cykv5d3"
						},
						{
							"type": "message",
							"label": "整合3",
							"text": "C96grfh"
						}

					]
				},
				{
					"title": "《精選優質圖1》",
					"text": "真的都滿讚滿可愛的",
					"actions": [
						{
							"type": "message",
							"label": "精選整合1",
							"text": "CJRT001"
						},
						{
							"type": "message",
							"label": "精選整合2",
							"text": "CJRT002"
						},
						{
							"type": "message",
							"label": "精選整合3",
							"text": "CJRT003"
						}

					]
				},
				{
					"title": "《精選優質圖2》",
					"text": "真的都滿讚滿可愛的",
					"actions": [
						{
							"type": "message",
							"label": "精選整合4",
							"text": "CJRT004"
						},
						{
							"type": "message",
							"label": "精選整合5",
							"text": "CJRT005"
						},
						{
							"type": "message",
							"label": "精選整合6",
							"text": "CJRT006"
						}

					]
				},
				{
					"title": "《精選優質圖3》",
					"text": "真的都滿讚滿可愛的",
					"actions": [
						{
							"type": "message",
							"label": "精選整合7",
							"text": "CJRT007"
						},
						{
							"type": "message",
							"label": "精選整合8",
							"text": "CJRT008"
						},
						{
							"type": "message",
							"label": "精選整合9",
							"text": "CJRT009"
						}

					]
				},
				{
					"title": "《精選優質圖4》",
					"text": "真的都滿讚滿可愛的",
					"actions": [
						{
							"type": "message",
							"label": "精選整合10",
							"text": "CJRT010"
						},
						{
							"type": "message",
							"label": "精選整合11",
							"text": "CJRT011"
						},
						{
							"type": "message",
							"label": "精選整合12",
							"text": "CJRT012"
						}

					]
				},
				{
					"title": "《精選優質圖5》",
					"text": "真的都滿讚滿可愛的",
					"actions": [
						{
							"type": "message",
							"label": "精選整合13",
							"text": "CJRT013"
						},
						{
							"type": "message",
							"label": "精選整合14",
							"text": "CJRT014"
						},
						{
							"type": "message",
							"label": "精選整合15",
							"text": "CJRT015"
						}

					]
				},
				{
					"title": "《精選優質圖》",
					"text": "真的都滿讚滿可愛的",
					"actions": [
						{
							"type": "message",
							"label": "精選整合16",
							"text": "CJRT016"
						},
						{
							"type": "message",
							"label": "精選整合17",
							"text": "CJRT017"
						},
						{
							"type": "message",
							"label": "精選整合18",
							"text": "CJRT018"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	CarPhoto2: CarPhoto2
};
