var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function joke() {
	rply = {
  "type": "text",
  "text": "function test",
		"quickReply": {
  "items": [
    {
      "type": "action",
      "action": {
        "type": "cameraRoll",
        "label": "Send photo"
      }
    },
	  {
      "type": "action",
      "action": {
        "type": "message",
        "label": "Say Hi",
	      "text": "Hi"
      }
    },
	{
      "type": "action",
      "action": {
        "type": "postback",
        "label": "Postback Data",
	      "data": "Hi",
	      "text": "Hi"
      }
    },  
    {
      "type": "action",
      "action": {
        "type": "camera",
        "label": "Open camera"
      }
    }
]
		}
	};
	return rply;
}



module.exports = {
	joke: joke
};
