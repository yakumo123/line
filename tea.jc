var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Test12() {
	rply = {
  "type": "template",
  "altText": "紅茶",
  "template": {
      "type": "confirm",
      "text": "【提問】紅茶是否蘿莉控?",
      "actions": [
          {
            "type": "message",
            "label": "是",
            "text": "紅茶是一個蘿莉控 欠羈押"
          },
          {
            "type": "message",
            "label": "不是",
            "text": "紅茶家門都有5個社工(fbi)在叩門了 紅茶超級蘿莉控"
          }
      ]
  }
};
	return rply;
}



module.exports = {
	Test12: Test12
};
