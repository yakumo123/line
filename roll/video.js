var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function mushroomcloud() {
	rply = {
    "type": "video",
    "originalContentUrl": "https://drive.google.com/uc?export=download&id=1HqrTGFbf-DLSHNi63jU72ugcmn0V-xJG",
    "previewImageUrl": "https://i.kinja-img.com/gawker-media/image/upload/s--2Ps5CmqS--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/1813aqov5wc2jjpg.jpg"
};
	return rply;
}



module.exports = {
	mushroomcloud: mushroomcloud
};
