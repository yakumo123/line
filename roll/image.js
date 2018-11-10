var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function imsnow() {
	rply = {
				"type": "image",
				"originalContentUrl": "https://i.imgur.com/hmaC9oM.jpg",
				"previewImageUrl": "https://i.imgur.com/hmaC9oM.jpg"		
	};
		
	return rply; 
	
}



module.exports = {
	imsnow: imsnow
};
