var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function song() {
	rply = {
    "type": "video",
    "originalContentUrl": "https://drive.google.com/uc?export=download&id=1h7GhClMfoCxXCXdjVV8wiFylaMz-_IIk",
    "previewImageUrl": "http://i.imgur.com/Y1w9t.jpg"
};
	return rply;
}


module.exports = {
	song: song
};
