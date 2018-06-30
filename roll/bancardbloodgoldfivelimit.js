
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
	cards[0] = rollbase.FunnyDice(14); 
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(14);
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
	cards[0] = rollbase.FunnyDice(14);
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 5; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(14);
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

	for (i = 0; i < 5; i++) {
		if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 1) {
		if (revs[i] == 0)
			returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
		else
			returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
		}
		if (i == 2) returnStr += '3: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 3) {
		if (revs[i] == 0) 
			returnStr += '4: ' + BanCardReply(cards[i]) + ' ' + '\n';
		else
			returnStr += '4: ' + BanCardReply(cards[i]) + ' ' + '\n';
		}
		if (i == 4) returnStr += '5: ' + BanCardReply(cards[i]) + ' ' ;

	}

	} else {

	if (text == null)
		returnStr = BanCardReply(rollbase.FunnyDice(14)) + ' ' ;
	else
		returnStr = BanCardReply(rollbase.FunnyDice(14)) + ' ' + ' ; ' + text;
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
if (count == 0) returnStr = '給僕從的禮物-金';
	if (count == 1) returnStr = '宵之吸血鬼‧瓦妮亞-金';
	if (count == 2) returnStr = '迷人魅魔‧莉莉姆-金';
	if (count == 3) returnStr = '基塔布利魯-金';
	if (count == 4) returnStr = '致命之刃-金';
	if (count == 5) returnStr = '戈爾貢的試煉-金';
	if (count == 6) returnStr = '駭人的惡魔-金';
	if (count == 7) returnStr = '幻形的斬姬‧娜魯梅亞-金';
	if (count == 8) returnStr = '轟雷的惡魔-金';
	if (count == 9) returnStr = '血脈之王-金';
	if (count == 10) returnStr = '幻影貓-金';
	if (count == 14) returnStr = '巨大惡魔掌-金';
	if (count == 12) returnStr = '惡魔巡查官‧亞梅拉達-金';
	if (count == 13) returnStr = '斯忒諾-金';






	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
