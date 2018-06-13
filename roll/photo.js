var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function CarPhoto() {
	rply = {
		"type": "template",
		"altText": "【式神的車圖大整合】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "《SV角色1》",
					"text": "SV整合1",
					"actions": [
						{
							"type": "message",
							"label": "班比",
							"text": "C5gs6k9"
						},
						{
							"type": "message",
							"label": "桃樂絲",
							"text": "C2g7hds"
						},
						{
							"type": "message",
							"label": "露娜",
							"text": "Cl4hs8w"
						}

					]
				},
				{
					"title": "《SV角色2》",
					"text": "SV整合2",
					"actions": [
						{
							"type": "message",
							"label": "亞莉莎",
							"text": "C56b9er"
						},
						{
							"type": "message",
							"label": "奧契絲",
							"text": "Cg6uy0k"
						},
						{
							"type": "message",
							"label": "銀冰龍人",
							"text": "Cvr8w3j"
						}

					]
				},
				{
					"title": "【新】《SV角色3》",
					"text": "SV整合3",
					"actions": [
						{
							"type": "message",
							"label": "法露特",
							"text": "Cujb66d"
						},
						{
							"type": "message",
							"label": "菈米娜",
							"text": "C52ut2h"
						},
						{
							"type": "message",
							"label": "埃忒耳",
							"text": "Cl45fdw"
						}

					]
				},
				{
					"title": "《SV角色4》",
					"text": "SV整合4",
					"actions": [
						{
							"type": "message",
							"label": "‧阿麗雅",
							"text": "C8hs62h"
						},
						{
							"type": "message",
							"label": "班比2",
							"text": "Cjdo8jr"
						},
						{
							"type": "message",
							"label": "梅杜莎",
							"text": "Cij6hf4"
						}

					]
				},
				{
					"title": "《Fate》",
					"text": "Fate",
					"actions": [
						{
							"type": "message",
							"label": "伊莉雅",
							"text": "Csp65gn"
						},
						{
							"type": "message",
							"label": "雜圖1",
							"text": "C3pu0jd"
						},
						{
							"type": "message",
							"label": "雜圖2",
							"text": "Cpee8kt"
						}

					]
				},
				{
					"title": "《獸耳》",
					"text": "獸耳萬歲",
					"actions": [
						{
							"type": "message",
							"label": "獸耳1",
							"text": "Cs5hor"
						},
						{
							"type": "message",
							"label": "獸耳2",
							"text": "C21s5h9"
						},
						{
							"type": "message",
							"label": "獸耳3",
							"text": "C346pe7"
						}

					]
				},
				{
					"title": "《獸耳2》",
					"text": "獸耳最高",
					"actions": [
						{
							"type": "message",
							"label": "獸耳4",
							"text": "C4251fd"
						},
						{
							"type": "message",
							"label": "獸耳5",
							"text": "C97jcrd"
						},
						{
							"type": "message",
							"label": "獸耳6",
							"text": "C3ted86"
						}

					]
				},
				{
					"title": "《獸耳3》",
					"text": "獸耳最高",
					"actions": [
						{
							"type": "message",
							"label": "獸耳7",
							"text": "Cufrx5f"
						},
						{
							"type": "message",
							"label": "獸耳8",
							"text": "C8ngfd3"
						},
						{
							"type": "message",
							"label": "獸耳9",
							"text": "C3v5f3i"
						}

					]
				},
				{
					"title": "《萌萌2頭身》",
					"text": "萌爆",
					"actions": [
						{
							"type": "message",
							"label": "萌1",
							"text": "Crfd7b8"
						},
						{
							"type": "message",
							"label": "萌2",
							"text": "C5yv7ko"
						},
						{
							"type": "message",
							"label": "大爆萌",
							"text": "Cs6hr5j"
						}

					]
				},
				{
					"title": "【新】《蘿王的工作》",
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
					"title": "【新】《精選優質圖1》",
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
					"title": "【新】《精選優質圖2》",
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
					"title": "【新】《精選優質圖3》",
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
					"title": "【新】《精選優質圖4》",
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
					"title": "【新】《精選優質圖5》",
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
					"title": "【新】《精選優質圖》",
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
				},
				{
					"title": "《蘿莉》",
					"text": "小心FBI 社工跟麥當勞歡樂送",
					"actions": [
						{
							"type": "message",
							"label": "【禁止X】",
							"text": "CXX23XX"
						},
						{
							"type": "message",
							"label": "【禁止XX】",
							"text": "CXX45XX"
						},
						{
							"type": "message",
							"label": "【禁止XXX】",
							"text": "CXX78XX"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	CarPhoto: CarPhoto
};
