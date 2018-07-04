var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function imsnow() {
	event.rply = {  
   "message":"The request body has 2 error(s)",
   "details":[  
      {  
         "message":"May not be empty",
         "property":"messages[0].text"
      },
      {  
         "message":"Must be one of the following values: [text, image, video, audio, location, sticker, template, imagemap]",
         "property":"messages[1].type"
      }
   ]
};
	return.rply	
}



module.exports = {
	imsnow: imsnow
};
