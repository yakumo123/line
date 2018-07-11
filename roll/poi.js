var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function irpoi() {
	rply = {
				"type": "image",
				"originalContentUrl": "https://drive.google.com/uc?export=download&id=109nXlY17vUM0NZMDSPrNTdaI53wqYvq-",
				"previewImageUrl": "https://drive.google.com/uc?export=download&id=109nXlY17vUM0NZMDSPrNTdaI53wqYvq-"		
	};

	return rply; 

}



module.exports = {
	irpoi: irpoi
};
