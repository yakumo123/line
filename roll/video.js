var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function mushroomcloud() {
	rply = {
    "type": "video",
    "originalContentUrl": "https://drive.google.com/uc?export=download&id=1h7GhClMfoCxXCXdjVV8wiFylaMz-_IIk",
    "previewImageUrl": "https://pic.dmyy.cc/Uploads/vod/2014-08-17/sxdd.jpg"
};
	return rply;
}



module.exports = {
	mushroomcloud: mushroomcloud
};
