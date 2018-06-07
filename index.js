def webhook

    reply_image = get_weather(received_text)

    unless reply_image.nil?
	    
      response = reply_image_to_line(reply_image)

      head :ok

      return 
    end

def get_weather(received_text)
    return nil unless received_text.include? '天氣'
    upload_to_imgur(get_weather_from_cwb)
  end

    def get_weather_from_cwb
    uri = URI('http://www.cwb.gov.tw/V7/js/HDRadar_1000_n_val.js')
    response = Net::HTTP.get(uri)
    start_index = response.index('","') + 3
    end_index = response.index('"),') - 1
    "http://www.cwb.gov.tw" + response[start_index..end_index]
  end
  
def upload_to_imgur(image_url)
    url = URI("https://api.imgur.com/3/image")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    request = Net::HTTP::Post.new(url)
    request["authorization"] = 'Client-ID be2d83405627ab8'

    request.set_form_data({"image" => image_url})
    response = http.request(request)
    json = JSON.parse(response.read_body)
    begin
      json['data']['link'].gsub("http:","https:")
    rescue
      nil
    end
  end
  
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
// Load `*.js` under modules directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync(__dirname + '/modules/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./modules/' + file);
  }
});

var options = {
	host: 'api.line.me',
	port: 443,
	path: '/v2/bot/message/reply',
	method: 'POST',
	headers: {
	'Content-Type': 'application/json',
	'Authorization':'Bearer ' + channelAccessToken
	}
}
app.set('port', (process.env.PORT || 5000));
// views is directory for all template files
app.get('/', function(req, res) {
//	res.send(parseInput(req.query.input));
	res.send('Hello');
});
app.post('/', jsonParser, function(req, res) {
	let event = req.body.events[0];
	let type = event.type;
	let msgType = event.message.type;
	let msg = event.message.text;
	let rplyToken = event.replyToken;
	let rplyVal = {};
	console.log(msg);
	//訊息來到後, 會自動呼叫handleEvent 分類,然後跳到analytics.js進行骰組分析
	//如希望增加修改骰組,只要修改analytics.js的條件式 和ROLL內的骰組檔案即可,然後在HELP.JS 增加說明.
	try {
	rplyVal = handleEvent(event);
	} 
	catch(e) {
		console.log('catch error');
		console.log('Request error: ' + e.message);
	}
	//把回應的內容,掉到replyMsgToLine.js傳出去
	if (rplyVal) {
	exports.replyMsgToLine.replyMsgToLine(rplyToken, rplyVal, options); 
	} else {
	//console.log('Do not trigger'); 
	}
	res.send('ok');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

function handleEvent(event) {
  switch (event.type) {
    case 'message':
      const message = event.message;
      switch (message.type) {
        case 'text':
          return exports.analytics.parseInput(event.rplyToken, event.message.text); 
        default:
           break;
      }
    case 'follow':
		break;
    case 'unfollow':
       break;
    case 'join':
break;
    case 'leave':
       break;
    case 'postback':
       break;
    case 'beacon':
      break;
    default:
       break;
  }
}
