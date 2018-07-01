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
	if (count == 0) returnStr = '諾娃的炎彈-金';
	if (count == 1) returnStr = '暴虐的巨像-金';
	if (count == 2) returnStr = '馬納歷亞學生會長‧漢娜-金';
	if (count == 3) returnStr = '偉大的魔法師‧里維-金';
	if (count == 4) returnStr = '大召喚-金';
	if (count == 5) returnStr = '雪人大王-金';
	if (count == 6) returnStr = '洋蔥軍團長‧芭賽特-金';
	if (count == 7) returnStr = '神秘的魔法陣-金';
	if (count == 8) returnStr = '巨像突擊-金';
	if (count == 9) returnStr = '連鎖呼喚-金';
	if (count == 10) returnStr = '歐羅芭-金';
	if (count == 11) returnStr = '冰刺槍擊-金';
	if (count == 12) returnStr = '開闢的鍊金術師‧卡莉歐斯托蘿-金';
	if (count == 13) returnStr = '魯納爾的魔法師‧普麗絲-金';
if (count == 14) returnStr = '初級詛咒-金';
if (count == 15) returnStr = '火焰連鎖-金';
if (count == 16) returnStr = '遠古煉金術師-金';
if (count == 17) returnStr = '冬支女王的即興藝術-金';
if (count == 18) returnStr = '魔導力場-金';
if (count == 19) returnStr = '神秘的禮物-金';
if (count == 20) returnStr = '龍魂契約者-金';
if (count == 21) returnStr = '諾諾的秘密研究室-金';
if (count == 22) returnStr = '次元超越-金';
if (count == 23) returnStr = '伊拉斯莫斯的秘密儀式-金';
if (count == 24) returnStr = '禁忌的研究者-金';
if (count == 25) returnStr = '馬納歷亞公主‧安-金';
if (count == 26) returnStr = '魔導少女‧梅薇-金';
if (count == 27) returnStr = '變異的雷擊-金';
if (count == 28) returnStr = '老邁的龍法魔道士-金';
if (count == 29) returnStr = '年邁的魔法師‧里維-金';
if (count == 30) returnStr = '白霜之風-金';
if (count == 31) returnStr = '破滅的禁術-金';





	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
