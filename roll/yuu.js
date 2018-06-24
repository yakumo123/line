var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function randomQuest() {
	rply = {
  "type": "template",
  "altText": "this is a image carousel template",
  "template": {
      "type": "image_carousel",
      "columns": [
          {
            "imageUrl": "https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg",
            "action": {
              "type": "datetimepicker",
              "label": "選日期",
              "data": "q1",
              "mode": "date"
            }
          },
          {
            "imageUrl": "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg",
            "action": {
              "type": "datetimepicker",
              "label": "選時間",
              "data": "q2",
              "mode": "time"
            }
          },
          {
            "imageUrl": "https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg",
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
	randomQuest: randomQuest
};
