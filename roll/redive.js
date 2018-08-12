var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function princesses() {
	rply = {
"type": "template",
"altText": "公主情報",
"template": {
"type": "carousel",
"imageAspectRatio": "rectangle",
"imageSize": "cover",
"columns": [
	 {
"thumbnailImageUrl": "https://gamewith.akamaized.net/img/e338a851d954741b305e7fc9a4db06a0.jpg",
"imageBackgroundColor": "#a8e8fb",
"title": "評價情報☆拉到右邊還有更多內容☆",
"text": "評價",
"actions": [
{
				 "type": "uri",
				 "label": "推圖角色排行",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93068#kue"
			 },
			 {
				 "type": "uri",
				 "label": "競技場角色排行",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93068#ari"
			 },	
			 {
				 "type": "uri",				 
				 "label": "公主競技場角色排行",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93068#kuran"
			 }
]
},
	 {
"thumbnailImageUrl": "https://gamewith.akamaized.net/img/70a0a75f2bcfbd063f8834bfc63393e5.jpg",
"imageBackgroundColor": "#a8e8fb",
"title": "評價情報",
"text": "評價",
"actions": [
{
				 "type": "uri",
				 "label": "攻擊力角色排行",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93068#attacker"
			 },
			 {
				 "type": "uri",
				 "label": "防禦坦角角色排行",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93068#tank"
			 },	
			 {
				 "type": "uri",				 
				 "label": "支援角色排行",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93068#supporter"
			 }
]
},
	 {
"thumbnailImageUrl": "https://gamewith.akamaized.net/article_tools/pricone-re/gacha/92882_main.jpg",
"imageBackgroundColor": "#a8e8fb",
"title": "評價情報",
"text": "評價",
"actions": [
{
				 "type": "uri",
				 "label": "綜合角色評價",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93068#osusume"
			 },
			 {
				 "type": "uri",
				 "label": "2星角色評價",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93041"
			 },	
			 {
				 "type": "uri",				 
				 "label": "值得培育的1星角色評價",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93065"
			 }
]
},
	 {
"thumbnailImageUrl": "https://gamewith.akamaized.net/img/aea3287f2a870d0c574f56f4f79cd46f.jpg",
"imageBackgroundColor": "#a8e8fb",
"title": "才能開花",
"text": "才能開花",
"actions": [
{
				 "type": "uri",
				 "label": "才能開花優先度建議",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93180#mato"
			 },
			 {
				 "type": "uri",
				 "label": "升5星所需女神石參考表",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93180#hitu"
			 },	
			 {
				 "type": "uri",				 
				 "label": "記憶碎片取得方法列表",
				 "uri": "https://gamewith.jp/pricone-re/article/show/93166#hayami"
			 }
]
},
	 {
"thumbnailImageUrl": "https://gamewith.akamaized.net/img/1c07ffab9b72070a868edaa4b5f3fe86.jpg",
"imageBackgroundColor": "#a8e8fb",
"title": "編隊參考",
"text": "編隊參考",
"actions": [
{
				 "type": "uri",
				 "label": "競技場防禦形隊伍編成參考",
				 "uri": "https://gamewith.jp/pricone-re/article/show/94606#ari1"
			 },
			 {
				 "type": "uri",
				 "label": "競技場攻擊形隊伍編成參考",
				 "uri": "https://gamewith.jp/pricone-re/article/show/94606#ari"
			 },	
			 {
				 "type": "uri",				 
				 "label": "推圖隊伍編成參考",
				 "uri": "https://gamewith.jp/pricone-re/article/show/94606#kue"
			 }
]
},

]
}
};
	return rply;
}



module.exports = {
	princesses: princesses
};
