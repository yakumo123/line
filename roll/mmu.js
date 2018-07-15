var rollbase = require('./rollbase.js');

var funny = require('./funny.js');

var rply = { type: 'text' }; //type是必需的,但可以更改


function ummm() {

	rply = {

    "type": "image",

    "originalContentUrl": "https://i.imgur.com/p7c2LbE.png",

    "previewImageUrl": "https://i.imgur.com/p7c2LbE.png"

};

	return rply;

}




module.exports = {

	ummm: ummm

};

