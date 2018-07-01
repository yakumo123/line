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
		if (count == 0) returnStr = '撲克騎士召集令-金';
	if (count == 1) returnStr = '帕爾修斯-金';
	if (count == 2) returnStr = '白與黑的激鬥-金';
	if (count == 3) returnStr = '小紅帽‧梅西-金';
	if (count == 4) returnStr = '無邪公主‧普莉姆-金';
	if (count == 5) returnStr = '清廉忠臣-金';
	if (count == 6) returnStr = '太陽之槍‧璐-金';
	if (count == 7) returnStr = '惡魔伯爵‧達利歐-金';
	if (count == 8) returnStr = '狂嵐長槍手-金';
	if (count == 9) returnStr = '神祕特務‧蒂伊-金';
	if (count == 10) returnStr = '圓桌會議-金';
	if (count == 11) returnStr = '逆境處理-金';
	if (count == 12) returnStr = '銀嶺的秘劍士-金';
	if (count == 13) returnStr = '龍騎士的集結-金';
if (count == 14) returnStr = '	白銀聖騎士-金';
if (count == 15) returnStr = '	盜賊的奧義-金';
if (count == 16) returnStr = '	列奧尼達-金';
if (count == 17) returnStr = '	戰場最前線-金';
if (count == 18) returnStr = '	執寶杖的司令官-金';
if (count == 19) returnStr = '	影夜暗殺者-金';
if (count == 20) returnStr = '	無懼的先鋒‧雷瑟姆-金';
if (count == 21) returnStr = '	軍師的妙計-金';
if (count == 22) returnStr = '	騎士王的威望-金';
if (count == 23) returnStr = '	亞爾麗妲的號令-金';
if (count == 24) returnStr = '	鐵衛戰將-金';
if (count == 25) returnStr = '	龍人少女‧夏洛特-金';
if (count == 26) returnStr = '	天空城-金';
if (count == 27) returnStr = '	白銀騎士‧艾蜜莉亞-金';
if (count == 28) returnStr = '	獵龍殺手-金';
if (count == 29) returnStr = '	船團長‧莉夏-金';
if (count == 30) returnStr = '	砲擊支援-金';
if (count == 31) returnStr = '	騎空團總長‧瓦佛利特-金';





	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
