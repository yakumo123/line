
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






	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
