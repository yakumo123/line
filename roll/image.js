var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = [{ type: 'text'},{ type: 'text' }
]


function imsnow() {
	rply = [
  {
	  type: 'text',
	  text: 'Hello, world 1'
  },
  { 
	  type: 'text',
	  text: 'Hello, world 2'
  }
];

	return rply; 
	
}



module.exports = {
	imsnow: imsnow
};
