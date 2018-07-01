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
	cards[0] = rollbase.FunnyDice(18); 
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(18);
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
	cards[0] = rollbase.FunnyDice(18);
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
		returnStr = BanCardReply(rollbase.FunnyDice(18)) + ' ' ;
	else
		returnStr = BanCardReply(rollbase.FunnyDice(18)) + ' ' + ' ; ' + text;
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
if (count == 0) returnStr = '烈風翼神‧迦樓羅-虹';
	if (count == 1) returnStr = '白雪公主-虹';
	if (count == 2) returnStr = '希望引導者‧聖女貞德-虹';
	if (count == 3) returnStr = '刻律涅-虹';
	if (count == 4) returnStr = '圖坦卡門-虹';
	if (count == 5) returnStr = '白翼守護神‧埃忒耳-虹';
	if (count == 6) returnStr = '邪教化身-虹';
	if (count == 7) returnStr = '七寶石公主‧蕾菲爾-虹';
	if (count == 8) returnStr = '天曜戰騎-虹';
	if (count == 9) returnStr = '神之盾‧布羅蒂雅-虹';
	if (count == 10) returnStr = '黃金鄉聖獅-虹';
if (count == 11) returnStr = '黑天月兔妖-虹';
if (count == 12) returnStr = '白骨聖堂教主-虹';
if (count == 13) returnStr = '聖女貞德-虹';
if (count == 14) returnStr = '黑暗貞德-虹';
if (count == 15) returnStr = '天曜盾甲-虹';
if (count == 16) returnStr = '瘋狂的魔神像-虹';
if (count == 17) returnStr = '封印的熾天使-虹';



	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
