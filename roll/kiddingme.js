var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function joking() {
	rply = {
  "type": "template",
  "altText": "八雲抽不到月兔該退坑嗎?",
  "template": {
      "type": "confirm",
      "text": "八雲抽不到月兔該退坑嗎?",
      "actions": [
          {
            "type": "message",
            "label": "要",
            "text": "八雲快退坑吧"
          },
          {
            "type": "message",
            "label": "一定要",
            "text": "八雲快退坑吧"
          }
      ]
  }
};
	return rply;
}



module.exports = {
	joking: joking
};
