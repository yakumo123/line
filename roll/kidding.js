var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function joke() {
	rply = {
  "type": "template",
  "altText": "笨蛋",
  "template": {
      "type": "confirm",
      "text": "你是不是一個大笨蛋",
      "actions": [
          {
            "type": "message",
            "label": "不是",
            "text": "甚麼不是??!!我就是大笨蛋呀"
          },
          {
            "type": "message",
            "label": "真的不是",
            "text": "好吧…我其實是一個變態"
          },
	  {
            "type": "message",
            "label": "我很聰明",
            "text": "我只是一個笨蛋跟變態的混合物"
          }
      ]
  }
};
	return rply;
}



module.exports = {
	joke: joke
};
