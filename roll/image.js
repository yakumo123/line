var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function imsnow() {
	rply = {
    "type": "image",
    "originalContentUrl": "https://i.imgur.com/5zrj83B.png",
    "previewImageUrl": "https://i.imgur.com/5zrj83B.png"
};
	return rply;
}



module.exports = {
	imsnow: imsnow
};
