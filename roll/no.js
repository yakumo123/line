var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function irno() {
	rply = {
				"type": "image",
				"originalContentUrl": "https://drive.google.com/uc?export=download&id=1yCsa-Z7VJ2isRO_h_r-Ke2jdbscjR8Tt",
				"previewImageUrl": "https://drive.google.com/uc?export=download&id=1yCsa-Z7VJ2isRO_h_r-Ke2jdbscjR8Tt"		
	};

	return rply; 

}



module.exports = {
	irno: irno
};
