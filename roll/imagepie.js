var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function PieIm() {
	rply = {
    "type": "image",
    "originalContentUrl": "https://i.imgur.com/Oq79yBl.jpg",
    "previewImageUrl": "https://i.imgur.com/Oq79yBl.jpg"
};
	return rply;
}



module.exports = {
	PieIm: PieIm
};
