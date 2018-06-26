var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function mushroomcloud() {
	rply = {
    "type": "video",
    "originalContentUrl": "",
    "previewImageUrl": ""
};
	return rply;
}



module.exports = {
	mushroomcloud: mushroomcloud
};
