var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' };

function mapping() {
rply = {
"type": "imagemap",
  "baseUrl": "https://i.imgur.com/i5tqQ5n.png/1040",
  "altText": "點你最喜歡的",
  "baseSize": {
      "height": 1040,
      "width": 1040
  },
  "actions": [
      {
          "type": "uri",
          "linkUri": "https://serving.photos.photobox.com/94350983ac32a11b9bbd7895addf1c4378993ad6a72925655fe1761328fa312978d092f4.jpg",
          "area": {
              "x": 0,
              "y": 0,
              "width": 520,
              "height": 520
          }
      },
      {
          "type": "uri",
          "linkUri": "https://serving.photos.photobox.com/40538265dad66daeede3754f1bee886f090c327ccbabb7b0a3785270d80263539734d0d7.jpg",
          "area": {
              "x": 0,
              "y": 520,
              "width": 520,
              "height": 520
          }
      },
      {
          "type": "uri",
          "linkUri": "https://serving.photos.photobox.com/41177356e2a8a48170ac596281940c4847105549c3ac12028a00a81aafd53a9a6fc4a199.jpg",
          "area": {
              "x": 520,
              "y": 520,
              "width": 520,
              "height": 520
          }
      },
      {
          "type": "uri",
          "linkUri": "https://serving.photos.photobox.com/1116932353b86acd10814d527eab09cb7d0f429056fb992587f6d6f19d31949d6a1b73dd.jpg",
          "area": {
              "x": 520,
              "y": 0,
              "width": 520,
              "height": 520
          }
      }
  ]
  };
	return rply;
}



module.exports = {
	mapping: mapping
};
