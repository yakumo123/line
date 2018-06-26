var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function mushroomcloud() {
	rply = {
    "type": "video",
    "originalContentUrl": "https://drive.google.com/uc?export=download&id=1HqrTGFbf-DLSHNi63jU72ugcmn0V-xJG",
    "previewImageUrl": "https://i.imgur.com/5zrj83B.png"
};
	return rply;
}



module.exports = {
	mushroomcloud: mushroomcloud
};
