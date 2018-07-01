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
	cards[0] = rollbase.FunnyDice(30); 
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(30);
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
	cards[0] = rollbase.FunnyDice(30);
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
		returnStr = BanCardReply(rollbase.FunnyDice(30)) + ' ' ;
	else
		returnStr = BanCardReply(rollbase.FunnyDice(30)) + ' ' + ' ; ' + text;
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
if (count == 0) returnStr = '禁忌魔像-金';
if (count == 1) returnStr = '天界的尖兵-金';
if (count == 2) returnStr = '蒼藍少女‧露莉亞-金';
if (count == 3) returnStr = '嶄新的命運-金';
if (count == 4) returnStr = '熾天使之劍-金';
if (count == 5) returnStr = '天國的階梯-金';
if (count == 6) returnStr = '被封印的雙子‧烈焰-金';
if (count == 7) returnStr = '被封印的雙子‧琉璃-金';
if (count == 8) returnStr = '風之軍神‧格里姆尼爾-金';
if (count == 9) returnStr = '拉潘索-金';
if (count == 10) returnStr = '哥布林帝王-金';
if (count == 11) returnStr = '烏爾德-金';
if (count == 12) returnStr = '烏列爾-金';
if (count == 13) returnStr = '哥布林殺手‧汀娜-金';
if (count == 14) returnStr = '閃耀之鐘‧叮噹天使-金';
if (count == 15) returnStr = '俄刻阿諾斯-金';
if (count == 16) returnStr = '墮天-金';
if (count == 17) returnStr = '冥府之路-金';
if (count == 18) returnStr = '風神';
if (count == 19) returnStr = '哥布林屠殺者‧路西烏斯-金';
if (count == 20) returnStr = '白貓賢者‧絲諾-金';
if (count == 21) returnStr = '赫特爾-金';
if (count == 22) returnStr = '芙琳蒂-金';
if (count == 23) returnStr = '麒麟-金';
if (count == 24) returnStr = '天翼吞噬者-金';
if (count == 25) returnStr = '雅典娜-金';
if (count == 26) returnStr = '蘇圖恩-金';
if (count == 27) returnStr = '癒音奏者‧亨莉雅妲-金';
if (count == 28) returnStr = '大天使‧蕾娜-金';
if (count == 29) returnStr = '威震的半獸人-金';




	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
