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

	for (i = 1; i < 7; i++) {
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

	for (i = 0; i < 7; i++) {
		if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 1) returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 2) returnStr += '3: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 3) returnStr += '4: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 4) returnStr += '5: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 5) {
		if (revs[i] == 0) 
			returnStr += '6: ' + BanCardReply(cards[i]) + ' ' + '\n';
		else
			returnStr += '6: ' + BanCardReply(cards[i]) + ' ' + '\n';
		}
		if (i == 6) returnStr += '7: ' + BanCardReply(cards[i]) + ' ' ;

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
	if (count == 0) returnStr = '安德雷斐斯-金';
	if (count == 1) returnStr = '死龍使役者-金';
	if (count == 2) returnStr = '屍病之街-金';
	if (count == 3) returnStr = '骷髏王子-金';
	if (count == 4) returnStr = '反覆無常的復活師-金';
	if (count == 5) returnStr = '死滅之霧-金';
	if (count == 6) returnStr = '黑天鵝‧奧黛兒-金';
	if (count == 7) returnStr = '生死逆轉-金';
	if (count == 8) returnStr = '捷特‧馬洛斯-金';
	if (count == 9) returnStr = '恆闇之梟-金';
	if (count == 10) returnStr = '復甦的狂戰士-金';
	if (count == 11) returnStr = '闇夜千金‧賽蕾絲-金';
	if (count == 12) returnStr = '再生的毒蘋果-金';
	if (count == 13) returnStr = '死骸勛爵-金';
if (count == 14) returnStr = '惡靈的饗宴-金';
if (count == 15) returnStr = '巫妖女士-金';
if (count == 16) returnStr = '腐壞颶風-金';
if (count == 17) returnStr = '屍鬼之王-金';
if (count == 18) returnStr = '幻魔龍-金';
if (count == 19) returnStr = '幻影之嘯-金';
if (count == 20) returnStr = '死亡暴君-金';
if (count == 21) returnStr = '死亡祝福-金';
if (count == 22) returnStr = '不死鬥士‧莫迪凱-金';
if (count == 23) returnStr = '闇影收割者-金';
if (count == 24) returnStr = '冥府神的契約-金';
if (count == 25) returnStr = '巴羅爾-金';
if (count == 26) returnStr = '破魂少女-金';
if (count == 27) returnStr = '死神的記事本-金';
if (count == 28) returnStr = '不死大君-金';
if (count == 29) returnStr = '靈魂回收-金';
if (count == 30) returnStr = '死靈之宴-金';
if (count == 31) returnStr = '關德溫-金';


	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
