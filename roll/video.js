var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function mushroomcloud() {
	rply = {
    "type": "video",
    "originalContentUrl": "https://drive.google.com/uc?export=download&id=1B9Y2W_vsG_bh3byblJcqx4t5sSIoS8Y5",
    "previewImageUrl": "https://blogimg.goo.ne.jp/user_image/3c/df/069e3d399fefba1ab270f69ddcb204a6.jpg"
};
	return rply;
}



module.exports = {
	mushroomcloud: mushroomcloud
};
