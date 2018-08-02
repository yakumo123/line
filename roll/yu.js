var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function yuoo() {
	rply = {
    "type": "video",
    "originalContentUrl": "https://drive.google.com/uc?export=download&id=1heFLoUiXxJNedaanfy8DutHjdYDJ7dDe",
    "previewImageUrl": "https://s.yimg.com/xd/api/res/1.2/BUZuAKHzLsWQtKQttUgXYQ--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD01MDA7cT04NTtyb3RhdGU9YXV0bzt3PTUwMA--/https://s.yimg.com/ob/image/0098e1b8-b969-48f4-88dc-d08dd0f48df5.jpg"
};
	return rply;
}



module.exports = {
	yuoo: yuoo
};
