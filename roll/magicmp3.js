var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function magic() {
	rply = {
				"type": "text",
				"text": "＿人人人人人人人人＿\n＞　　咕嚕靈波♡ 　＜\n￣^Y^Y^Y^Y^Y^Y^Y￣\n／ イ  　　　(((ヽ\n(　 ﾉ　　　　 ￣Ｙ＼\n|　(＼　(\      /)   ｜    )\nヽ　ヽ` ( ﾟ∀ﾟ ) _ノ    /\n　＼ |　⌒Ｙ⌒　/  /\n　 ｜ヽ　 ｜　 ﾉ ／"	
	};
		
	return rply; 
	
}



module.exports = {
	magic: magic
};
