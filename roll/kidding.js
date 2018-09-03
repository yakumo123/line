var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function joke() {
	rply = {
  "type": "template",
  "altText": "test",
  "template": {
    "type": "buttons",
    "text": "test",
    "actions": [
          {
				      "type": "postback",
				      "label": "test1",
				      "data": "postback_test"
			      },
			      {
				      "type": "uri",
				      "label": "ShadowNews",
				      "uri": "https://shadowverse.com/sp/cht/news/"
			      },	
			      {
				      "type": "uri",				      
				      "label": "勝率分析",
				      "uri": "https://shadowlog.com/s/trend/"
			      }
        ]
      };
	return rply;
}



module.exports = {
	joke: joke
};
