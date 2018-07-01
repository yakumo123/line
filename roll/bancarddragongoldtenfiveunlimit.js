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

	for (i = 1; i < 15; i++) {
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

	for (i = 0; i < 15; i++) {
		if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 1) returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 2) returnStr += '3: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 3) returnStr += '4: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 4) returnStr += '5: ' + BanCardReply(cards[i]) + ' ' + '\n';
if (i == 5) returnStr += '6: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 6) returnStr += '7: ' + BanCardReply(cards[i]) + ' ' + '\n';
if (i == 7) returnStr += '8: ' + BanCardReply(cards[i]) + ' ' + '\n';
if (i == 8) returnStr += '9: ' + BanCardReply(cards[i]) + ' ' + '\n';
if (i == 9) returnStr += '10: ' + BanCardReply(cards[i]) + ' ' + '\n';
if (i == 10) returnStr += '11: ' + BanCardReply(cards[i]) + ' ' + '\n';
if (i == 11) returnStr += '12: ' + BanCardReply(cards[i]) + ' ' + '\n';
if (i == 12) returnStr += '13: ' + BanCardReply(cards[i]) + ' ' + '\n';

		if (i == 13) {
		if (revs[i] == 0) 
			returnStr += '14: ' + BanCardReply(cards[i]) + ' ' + '\n';
		else
			returnStr += '14: ' + BanCardReply(cards[i]) + ' ' + '\n';
		}
		if (i == 14) returnStr += '15: ' + BanCardReply(cards[i]) + ' ' ;

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
if (count == 0) returnStr = '馭龍歌姬-金';
	if (count == 1) returnStr = '無謀之戰-金';
	if (count == 2) returnStr = '龍鎧戰士-金';
	if (count == 3) returnStr = '癲狂暴龍-金';
	if (count == 4) returnStr = '護國真龍‧斯卡塔赫-金';
	if (count == 5) returnStr = '破龍激震-金';
	if (count == 6) returnStr = '炎龍使役者-金';
	if (count == 7) returnStr = '龍人的威懾-金';
	if (count == 8) returnStr = '誓滅暴擊-金';
	if (count == 9) returnStr = '斬龍劍士‧羅伊-金';
	if (count == 10) returnStr = '星之不死鳥-金';
	if (count == 11) returnStr = '赤翼猛龍-金';
	if (count == 12) returnStr = '戲曲龍劍士-金';
	if (count == 13) returnStr = '龍劍少女‧艾拉-金';
if (count == 14) returnStr = '龍人織術師-金';
if (count == 15) returnStr = '半龍人魔法師-金';
if (count == 16) returnStr = '死霧魔龍-金';
if (count == 17) returnStr = '鳳凰庭園-金';
if (count == 18) returnStr = '緋天炎龍騎兵-金';
if (count == 19) returnStr = '龍化之塔-金';
if (count == 20) returnStr = '海德拉-金';
if (count == 21) returnStr = '寶石龍-金';
if (count == 22) returnStr = '創世龍-金';
if (count == 23) returnStr = '伊達政宗-金';
if (count == 24) returnStr = '沙拉曼達的吐息-金';
if (count == 25) returnStr = '馬納歷亞龍人‧古蕾婭-金';
if (count == 26) returnStr = '勒哈布-金';
if (count == 27) returnStr = '弒龍的代價-金';
if (count == 28) returnStr = '不死鳥騎手‧愛娜-金';
if (count == 29) returnStr = '龍巫女的儀式-金';
if (count == 30) returnStr = '尼普頓-金';
if (count == 31) returnStr = '不絕的龍吼-金';





	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
