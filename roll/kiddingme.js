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
              "text": "！！！∑(°Д°ノ)ノ"
            }
          },
          {
            "imageUrl": "https://i.imgur.com/VIpVQRd.png",
            "action": {
              "type": "message",
              "label": "八雲問號",
              "text": "Σ( ° △ °|||)︴"
            }
          },
          {
            "imageUrl": "https://i.imgur.com/EJf8CZ3.jpg",
            "action": {
              "type": "message",
              "label": "白人問號",
              "text": "我智障到醫生說無可救藥…"
	    }
	  },
          {
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Achtung.svg",
            "action": {
              "type": "message",
              "label": "感嘆號",
              "text": "我智障到醫生說無可救藥…"
	    }
	  },
	      {
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/59/Triangle_warning_sign_%28red_and_white%29.svg",
            "action": {
              "type": "message",
              "label": "感嘆號沒感嘆",
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
