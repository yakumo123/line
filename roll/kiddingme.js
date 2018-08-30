var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function joking() {
	rply = {
  "type": "template",
  "altText": "問號大集合",
  "template": {
      "type": "image_carousel",
      "columns": [
          {
            "imageUrl": "https://i.imgur.com/wODPWY8.jpg",
            "action": {
              "type": "message",
              "label": "黑人問號",
              "text": "0"
            }
          },
          {
            "imageUrl": "https://i.imgur.com/VIpVQRd.png",
            "action": {
              "type": "message",
              "label": "八雲問號",
              "text": "八雲問號"
            }
          },
          {
            "imageUrl": "https://i.imgur.com/EJf8CZ3.jpg",
            "action": {
              "type": "message",
              "label": "白人問號",
              "text": "我智障到醫生說無可救藥…"
	    }
	  }
      ]
  }
};
	return rply;
}



module.exports = {
	joking: joking
};
