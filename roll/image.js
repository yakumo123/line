var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' };
var rplymuti = [{type : 'text'}, {type : 'text'}];


function imsnow() {
	rplymuti = {
		[
		"messages": [
		{
    "type": "image",
    "originalContentUrl": "https://i.imgur.com/5zrj83B.png",
    "previewImageUrl": "https://i.imgur.com/5zrj83B.png"
},
		{
    "type": "image",
    "originalContentUrl": "https://i.imgur.com/5zrj83B.png",
    "previewImageUrl": "https://i.imgur.com/5zrj83B.png"
		}
		]
	]
	};

	return rplymuti; 
	
}



module.exports = {
	imsnow: imsnow
};
