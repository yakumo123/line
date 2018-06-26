var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function immsnow() {
	rply = {
    "type": "image",
    "originalContentUrl": "https://i.imgur.com/Q4JrEWq.jpg",
    "previewImageUrl": "https://i.imgur.com/Q4JrEWq.jpg"
},
{
    "type": "image",
    "originalContentUrl": "https://i.imgur.com/h6sJiS9.jpg",
    "previewImageUrl": "https://i.imgur.com/h6sJiS9.jpg"
};
	return rply;
}



module.exports = {
	immsnow: immsnow
};
