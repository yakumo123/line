var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function imsnow() {
	event.reply([
  { type: 'text', text: 'Hello, world 1' },
  { type: 'text', text: 'Hello, world 2' }
])
}



module.exports = {
	imsnow: imsnow
};
