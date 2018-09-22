var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function CarPhoto3() {
	rply = {
		"type": "template",
		"altText": "【式神的車圖大整合】",
		"template": {
			"type": "carousel",
			"columns": [
			
				{
					"title": "伊莉雅",
					"text": "Fate",		
					"actions": [
						{
							"type": "message",
							"label": "伊莉雅1",
							"text": "FKL001"
						},
						{
							"type": "message",
							"label": "伊莉雅2",
							"text": "FKL002" 
						},
						{
							"type": "message",
							"label": "伊莉雅3",
							"text": "FKL003"
			
						}
					]
				},
				{
					"title": "伊莉雅",
					"text": "Fate",
					"actions": [
						{
							"type": "message",
							"label": "伊莉雅4",
							"text": "FKL00"
						},
						{
							"type": "message",
							"label": "伊莉雅5",
							"text": "FKL005"
						},
						{
							"type": "message",
							"label": "伊莉雅6",
							"text": "FKL006"
						}
					]
				},
				{
					"title": "伊莉雅",
					"text": "Fate",
					"actions": [
						{
							"type": "message",
							"label": "伊莉雅7",
							"text": "FKL007"
						},
						{
							"type": "message",
							"label": "伊莉雅8",
							"text": "FKL008"
						},
						{
							"type": "message",
							"label": "伊莉雅9",
							"text": "FKL009"
						}
					]
				},
				{
					"title": "伊莉雅",
					"text": "Fate",
					"actions": [
						{
							"type": "message",
							"label": "伊莉雅10",
							"text": "FKL010"
						},
						{
							"type": "message",
							"label": "伊莉雅11",
							"text": "FKL011"
						},
						{
							"type": "message",
							"label": "伊莉雅12",
							"text": "FKL012"
						}
					]
				},
				{
					"title": "伊莉雅",
					"text": "Fate",
					"actions": [
						{
							"type": "message",
							"label": "伊莉雅13",
							"text": "FKL013"
						},
						{
							"type": "message",
							"label": "伊莉雅14",
							"text": "FKL014"
						},
						{
							"type": "message",
							"label": "伊莉雅15",
							"text": "FKL015"
						}
					]
				},
				{
					"title": "伊莉雅",
					"text": "Fate",
					"actions": [
						{
							"type": "message",
							"label": "伊莉雅16",
							"text": "FKL016"
						},
						{
							"type": "message",
							"label": "伊莉雅17",
							"text": "FKL017"
						},
						{
							"type": "message",
							"label": "伊莉雅18",
							"text": "FKL018"
						}
					]
				},
				{
					"title": "伊莉雅",
					"text": "Fate",
					"actions": [
						{
							"type": "message",
							"label": "伊莉雅19",
							"text": "FKL019"
						},
						{
							"type": "message",
							"label": "伊莉雅20",
							"text": "FKL020"
						},
						{
							"type": "message",
							"label": "伊莉雅21",
							"text": "FKL021"
						}
					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	CarPhoto3: CarPhoto3
};

