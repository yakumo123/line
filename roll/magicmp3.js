var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function magic() {
	rply = {
				"type": "audio",
				"originalContentUrl": "https://drive.google.com/uc?export=download&id=1JfROwdLdaK-3FqjyNYw2b6WBSx71475M",
				"duration": "23000"		
	};
		
	return rply; 
	
}



module.exports = {
	magic: magic
};
