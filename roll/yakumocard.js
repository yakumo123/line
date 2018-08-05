var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function buttontest() {
	rply = {
  "type": "template",
  "altText": "SV情報",
  "template": {
    "type": "carousel",
    "imageAspectRatio": "rectangle",
    "imageSize": "cover",
    "columns": [
      {
        "thumbnailImageUrl": "https://shadowverse.jp/news/wp-content/uploads/e0b558ba389c34594d109581059d77f1.png",
        "imageBackgroundColor": "#a8e8fb",
        "title": "SV活動情報及ShadowLogs",
        "text": "SV活動情報及ShadowLogs",
               "defaultAction": {
          "type": "message",
          "label": "SV活動情報及ShadowLogs",
          "text": "這只是一張圖片而已～"
        },
        "actions": [
          {
				      "type": "uri",
				      "label": "Event Support情報",
				      "uri": "https://event.shadowverse.com/cht/eventsupport/"
			      },
			      {
