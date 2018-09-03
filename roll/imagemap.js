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
          "linkUri": "https://drive.google.com/uc?export=download&id=1lE4NvE76BKZ9mOCA4Q0Fichjn-gD2U1V",
          "area": {
              "x": 0,
              "y": 0,
              "width": 520,
              "height": 520
          }
      },
      {
          "type": "uri",
          "linkUri": "https://drive.google.com/uc?export=download&id=169Fu5cZJQMLl0BfVvPxChpEoSoPRt7Bg",
          "area": {
              "x": 0,
              "y": 520,
              "width": 520,
              "height": 520
          }
      },
      {
          "type": "uri",
          "linkUri": "https://drive.google.com/uc?export=download&id=1vuiIlRYcuPuKLEi0R67VexebECF",
          "area": {
              "x": 520,
              "y": 520,
              "width": 520,
              "height": 520
          }
      },
      {
          "type": "uri",
          "linkUri": "https://drive.google.com/file/d/15WAZyE7DJ5Tu268I4oshrXBv-n00NGz4/view?usp=drivesdk",
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
