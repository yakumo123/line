
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
	if (count == 11) returnStr = '巨大惡魔掌-金';
	if (count == 12) returnStr = '惡魔巡查官‧亞梅拉達-金';
	if (count == 13) returnStr = '斯忒諾-金';
if (count == 14) returnStr = '惡魔司令‧蘿拉-金';
if (count == 15) returnStr = '漆黑之契-金';
if (count == 16) returnStr = '惡魔審判官-金';
if (count == 17) returnStr = '厄里倪厄斯-金';
if (count == 18) returnStr = '破壞神的氣息-金';
if (count == 19) returnStr = '梅杜莎-金';
if (count == 20) returnStr = '孚里埃-金';
if (count == 21) returnStr = '啟示錄-金';
if (count == 22) returnStr = '妖艷的吸血鬼-金';
if (count == 23) returnStr = '嗜虐之夜-金';
if (count == 24) returnStr = '莫斯提馬-金';
if (count == 25) returnStr = '冰劍的戰鬼-金';
if (count == 26) returnStr = '愛之惡魔‧加列德-金';
if (count == 27) returnStr = '血紅之月-金';
if (count == 28) returnStr = '靈魂終結者-金';
if (count == 29) returnStr = '吸血鬼公主‧班比-金';
if (count == 30) returnStr = '吸血鬼古城-金';
if (count == 31) returnStr = '阿撒塞勒-金';





	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
