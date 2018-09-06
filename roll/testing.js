var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Test12() {
	rply = {
  "type": "template",
"altText": "【警告】",
  "template": {
      "type": "confirm",
      "text": "【警告】本列表含有大量訊息 請勿在【群組】內使用 請使用【私訊】 \n \n本Bot作者因方便其使用者使用本Bot而設立本指令 其不當使用/不跟隨以上警告所使用 所有責任不應歸其作者身上 其所有責任均在其使用者身上 本Bot作者不會對其所發生的事情負上一切責任 \n \n確定使用?",
      "actions": [
          {
            "type": "message",
            "label": "Yes",
            "text": "photolist"
          },
          {
            "type": "message",
            "label": "No",
            "text": "no"
          }
      ]
  }
};
	return rply;
}

function Test13() {
	rply = {
  "type": "template",
		"altText": "【警告】",
  "template": {
      "type": "confirm",
      "text": "【警告】本列表含有大量訊息 請盡量不要在【群組】內使用 請使用【私訊】 \n \n本Bot作者因方便其使用者使用本Bot而設立本指令 其不當使用/不跟隨以上警告所使用 所有責任不應歸其作者身上 其所有責任均在其使用者身上 本Bot作者不會對其所發生的事情負上一切責任 \n \n確定使用?",
      "actions": [
          {
            "type": "message",
            "label": "Yes",
            "text": "suggest_card"
          },
          {
            "type": "message",
            "label": "No",
            "text": "no"
          }
      ]
  }
};
	return rply;
}



module.exports = {
	Test12: Test12,
	Test13: Test13
};

