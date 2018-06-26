var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function PieImm() {
	rply = {
    "type": "image",
    "originalContentUrl": "https://i.imgur.com/piKDISn.jpg",
    "previewImageUrl": "https://i.imgur.com/piKDISn.jpg"
};
	return rply;
}



module.exports = {
	PieImm: PieImm
};
