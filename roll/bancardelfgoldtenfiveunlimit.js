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
	if (count == 0) returnStr = '妖精劍士-金';
	if (count == 1) returnStr = '瞬速的巨狼-金';
	if (count == 2) returnStr = '維納斯-金';
	if (count == 3) returnStr = '天賦的射手‧梅提拉-金';
	if (count == 4) returnStr = '妖精使役者-金';
	if (count == 5) returnStr = '高貴的貓姊妹‧暹羅與暹瑪-金';
	if (count == 6) returnStr = '魔族少年‧翟恩-金';
	if (count == 7) returnStr = '妖精大魔導士‧莉拉-金';
	if (count == 8) returnStr = '愛之妖精‧寶菈-金';
	if (count == 9) returnStr = '歷戰的馴鷹師-金';
	if (count == 10) returnStr = '精靈的雙擊-金';
	if (count == 11) returnStr = '精靈鍛造師‧蕾妮-金';
	if (count == 12) returnStr = '新綠的加護-金';
	if (count == 13) returnStr = '妖精的奔流-金';
if (count == 14) returnStr = '破魔蟲-金';
if (count == 15) returnStr = '花仙劍士-金';
if (count == 16) returnStr = '妖精貴族-金';
if (count == 17) returnStr = '羅賓漢-金';
if (count == 18) returnStr = '森林的意志-金';
if (count == 19) returnStr = '提泰妮婭妖精鄉-金';
if (count == 20) returnStr = '回歸根源-金';
if (count == 21) returnStr = '遠古森林巨龍-金';
if (count == 22) returnStr = '白銀的箭擊-金';
if (count == 23) returnStr = '妖精牢籠-金';
if (count == 24) returnStr = '叢林守護者-金';
if (count == 25) returnStr = '冰晶光芒‧艾琳-金';
if (count == 26) returnStr = '塞爾文的號令-金';
if (count == 27) returnStr = '寶石精靈-金';
if (count == 28) returnStr = '馬赫斯-金';
if (count == 29) returnStr = '精靈少女‧莉莎-金';
if (count == 30) returnStr = '精靈騎士‧辛西亞-金';
if (count == 31) returnStr = '神箭手‧塞爾文-金';





	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
