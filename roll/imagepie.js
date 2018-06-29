var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function PieIm() {
	rply = {
    "type": "image",
    "originalContentUrl": "https://drive.google.com/uc?export=download&id=1NXC7gY9CMKp5UbduwhPvFlkry7mYMQq2",
    "previewImageUrl": "https://drive.google.com/uc?export=download&id=1NXC7gY9CMKp5UbduwhPvFlkry7mYMQq2"
};
	return rply;
}



module.exports = {
	PieIm: PieIm
};
