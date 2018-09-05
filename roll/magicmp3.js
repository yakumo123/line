var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function magic() {
	rply = {
    "type": "video",
    "originalContentUrl": "https://drive.google.com/uc?export=download&id=12Yw8oX1DILiAovQkr2j1ykZ-AQ9cNe9c",
    "previewImageUrl": "https://drive.google.com/uc?export=download&id=1KNgmkrvog0OnUHRil9seI8CfyVAWtn3j"
};
		
	return rply; 
	
}



module.exports = {
	magic: magic
};
