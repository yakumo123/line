var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function ircra() {
	rply = {
				"type": "image",
				"originalContentUrl": "https://drive.google.com/uc?export=download&id=1bA9WvLVRTxKHqh38dsgWBAMsebgoKwPz",
				"previewImageUrl": "https://drive.google.com/uc?export=download&id=1bA9WvLVRTxKHqh38dsgWBAMsebgoKwPz"		
	};

	return rply; 

}



module.exports = {
	ircra: ircra
};
