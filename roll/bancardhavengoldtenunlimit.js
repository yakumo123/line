var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改


function MultiDrawBan(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) 
	{
	cards[0] = rollbase.FunnyDice(32); 
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(32);
		if (cards.indexOf(tmpcard) === -1) 
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 3; i++) {
		if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + BanRevReply(revs[i]) + '\n';
		if (i == 1) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + BanRevReply(revs[i]) + '\n';
		if (i == 2) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + BanRevReply(revs[i]);
	}

	} else if (type == 2) 
	{
	cards[0] = rollbase.FunnyDice(32);
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 10; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(10);
		if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 10; i++) {
		if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 1) returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 2) returnStr += '3: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 3) returnStr += '4: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 4) returnStr += '5: ' + BanCardReply(cards[i]) + ' ' + '\n';
if (i == 5) returnStr += '6: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 6) returnStr += '7: ' + BanCardReply(cards[i]) + ' ' + '\n';
if (i == 7) returnStr += '8: ' + BanCardReply(cards[i]) + ' ' + '\n';

		if (i == 8) {
		if (revs[i] == 0) 
			returnStr += '9: ' + BanCardReply(cards[i]) + ' ' + '\n';
		else
			returnStr += '9: ' + BanCardReply(cards[i]) + ' ' + '\n';
		}
		if (i == 9) returnStr += '10: ' + BanCardReply(cards[i]) + ' ' ;

	}

	} else {

	if (text == null)
		returnStr = BanCardReply(rollbase.FunnyDice(32)) + ' ' ;
	else
		returnStr = BanCardReply(rollbase.FunnyDice(32)) + ' ' + ' ; ' + text;
	}


	rply.text = returnStr;
	return rply;
}


function NomalDrawBan(CardToCal, text) {
	let returnStr = '';

	if (text == null)
	returnStr = BanCardReply(rollbase.FunnyDice(22)) + ' ' ;
	else
	returnStr = BanCardReply(rollbase.FunnyDice(22)) + ' ' + ' ; ' + text;
	rply.text = returnStr;
	return rply;
}

function BanCardReply(count) {
	let returnStr = '';
if (count == 0) returnStr = '巨天金牛-金';
	if (count == 1) returnStr = '忒彌斯的肅清-金';
	if (count == 2) returnStr = '星導天球儀-金';
	if (count == 3) returnStr = '峰頂的教會-金';
	if (count == 4) returnStr = '赤枝聖騎士‧諾榭-金';
	if (count == 5) returnStr = '安朵美達-金';
	if (count == 6) returnStr = '寶石巫女-金';
	if (count == 7) returnStr = '聖光牧師‧蘿蕾娜-金';
	if (count == 8) returnStr = '愛麗絲的冒險-金';
	if (count == 9) returnStr = '詠唱：白牙神殿-金';
	if (count == 10) returnStr = '天馬騎士杜拉漢-金';
	if (count == 11) returnStr = '詠唱：遠古守護者-金';
	if (count == 12) returnStr = '天狐之社-金';
	if (count == 13) returnStr = '白天鵝‧奧德蒂-金';
if (count == 14) returnStr = '詠唱：幻想白兔-金';
if (count == 15) returnStr = '慈愛福音-金';
if (count == 16) returnStr = '詠唱：神域守護者-金';
if (count == 17) returnStr = '詠唱：噬天聖龍-金';
if (count == 18) returnStr = '黑暗供奉-金';
if (count == 19) returnStr = '大主教‧雷莉亞-金';
if (count == 20) returnStr = '忒彌斯的審判-金';
if (count == 21) returnStr = '詠唱：祈願者的號召-金';
if (count == 22) returnStr = '神聖光明龍-金';
if (count == 23) returnStr = '神魔審判所-金';
if (count == 24) returnStr = '英靈神殿上將-金';
if (count == 25) returnStr = '煌角戰士‧薩莉沙-金';
if (count == 26) returnStr = '黃金都市公主‧莉迪耶爾-金';
if (count == 27) returnStr = '酷刑審判者-金';
if (count == 28) returnStr = '不潔的聖杯-金';
if (count == 29) returnStr = '耶菈的祈禱-金';
if (count == 30) returnStr = '輝夜姬-金';
if (count == 31) returnStr = '天空守護者‧迦樓羅-金';





	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
