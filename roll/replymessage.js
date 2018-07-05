var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' };

function Remessage() {
rply = {
"message": [
{
"type": "text",
"text": "Test1"
},
{
"type": "text",
"text": "Text2"
}
]
};
reture rply;
}

module.exports = {
Remessage: Remessage
}

