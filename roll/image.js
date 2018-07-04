var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function imsnow() {
	rply = (
		[
		{
		type: 'text', 
		text: 'Hello, world 1' 
	}, 
		{ 
		type: 'text', 
		text: 'Hello, world 2' 
	}
	]
	)
		;		
	return rply;
}



module.exports = {
	imsnow: imsnow
};
