var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function joking() {
	rply = {
  "type": "template",
  "altText": "吹雪",
  "template": {
      "type": "confirm",
      "text": "你要愛護吹雪嗎？",
      "actions": [
          {
            "type": "message",
            "label": "要",
            "text": "我要愛護吹雪"
          },
          {
            "type": "message",
            "label": "要",
            "text": "我要愛護吹雪"
          }
      ]
  }
};
	return rply;
}



module.exports = {
	joking: joking
};
