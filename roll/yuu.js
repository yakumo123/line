var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function questiontest() {
	rply = {
  "type": "template",
  "altText": "this is a image carousel template",
  "template": {
      "type": "image_carousel",
      "columns": [
          {
            "imageUrl": "https://i.imgur.com/EJf8CZ3.jpg",
            "action": {
              "type": "postback",
              "label": "Buy",
              "data": "action=buy&itemid=111"
            }
          },
          {
            "imageUrl": "https://i.imgur.com/EJf8CZ3.jpg",
            "action": {
              "type": "message",
              "label": "Yes",
              "text": "yes"
            }
          },
          {
            "imageUrl": "https://i.imgur.com/EJf8CZ3.jpg",
            "action": {
              "type": "uri",
              "label": "View detail",
              "uri": "http://example.com/page/222"
            }
          }
      ]
  }
};
	return rply;
}



module.exports = {
	questiontest: questiontest
};
