var rollbase = require('./rollbase.js');

var funny = require('./funny.js');

var rply = { type: 'text' }; //type是必需的,但可以更改

let LinkIDArr = ['J8GLWvT.jpg','ccC24kA.jpg','7tsp2jz.jpg'];
let LinkID = LinkIDArr[Math.floor((Math.random() * (LinkIDArr.length)) + 0)];
let Link = 'https://i.imgur.com/' + LinkID ;


function RPhoto() {

	rply = {

    "type": "image",

    "originalContentUrl": "Link",

    "previewImageUrl": "Link"

};

	return rply;

}




module.exports = {

	RPhoto: RPhoto

};
