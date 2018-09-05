var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'message' }; //type是必需的,但可以更改

function joke() {
	rply = 
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "First bubble"
          }
        ]
      }
    };
	return rply;
}



module.exports = {
	joke: joke
};
