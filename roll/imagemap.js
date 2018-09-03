var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' };

function mapping() {
rply = {
"type": "imagemap",
  "baseUrl": "https://i.imgur.com/thA8GS6.png",
  "altText": "點你最喜歡的",
  "baseSize": {
      "height": 1040,
      "width": 1040
  },
  "actions": [
      {
          "type": "message",
          "text": "我是紅茶",
          "area": {
              "x": 0,
              "y": 0,
              "width": 520,
              "height": 520
          }
      },
      {
          "type": "message",
          "text": "我是紅茶",
          "area": {
              "x": 0,
              "y": 520,
              "width": 520,
              "height": 520
          }
      },
      {
          "type": "message",
          "text": "這是八雲的婆",
          "area": {
              "x": 520,
              "y": 520,
              "width": 520,
              "height": 520
          }
      },
      {
          "type": "message",
          "text": "這是八雲的婆",
          "area": {
              "x": 520,
              "y": 0,
              "width": 520,
              "height": 520
          }
      }
  ]
  };
	return rply;
}



module.exports = {
	mapping: mapping
};
