var rollbase = require('./rollbase.js');

var funny = require('./funny.js');

var rply = { type: 'text' }; //type是必需的,但可以更改

function RPhoto() {
	
let LinkIDArr = ['https://i.imgur.com/J8GLWvT.jpg','https://i.imgur.com/ccC24kA.jpg','https://i.imgur.com/7tsp2jz.jpg']
let LinkID = LinkIDArr[Math.floor((Math.random() * (LinkIDArr.length)) + 0)];

	rply = {

    "type": "image",

    "originalContentUrl": LinkID,

    "previewImageUrl": LinkID

};

	return rply;

}




module.exports = {

	RPhoto: RPhoto

};
