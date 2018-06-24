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
              "type": "datetimepicker",
              "label": "選日期",
              "data": "q1",
              "mode": "date"
            }
          },
          {
            "imageUrl": "https://i.imgur.com/EJf8CZ3.jpg",
            "action": {
              "type": "datetimepicker",
              "label": "選時間",
              "data": "q2",
              "mode": "time"
            }
          },
          {
            "imageUrl": "https://i.imgur.com/EJf8CZ3.jpg",
            "action": {
              "type": "datetimepicker",
              "label": "選日期時間",
              "data": "q3",
              "mode": "datetime"
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
