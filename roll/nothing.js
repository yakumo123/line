var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function irnothing() {
	rply = {
				"type": "image",
				"originalContentUrl": "https://drive.google.com/uc?export=download&id=1rsaj_wS3VnMoesbaSJOadEAaJ8Gu3Cjb",
				"previewImageUrl": "https://drive.google.com/uc?export=download&id=1rsaj_wS3VnMoesbaSJOadEAaJ8Gu3Cjb"		
	};

	return rply; 

}



module.exports = {
	irnothing: irnothing
};
