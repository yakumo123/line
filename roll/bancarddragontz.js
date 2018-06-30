
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
	cards[0] = rollbase.FunnyDice(73); 
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(73);
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
	cards[0] = rollbase.FunnyDice(73);
	revs[0] = rollbase.FunnyDice(2);

for (i = 1; i < 20; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(73);
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

	for (i = 0; i < 20; i++) {
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
		if (i == 13) returnStr += '14: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 14) returnStr += '15: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 15) returnStr += '16: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 16) returnStr += '17: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 17) returnStr += '18: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 18) returnStr += '19: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 19) returnStr += '20: ' + BanCardReply(cards[i]) + ' ' ;

	}

	} else {

	if (text == null)
		returnStr = BanCardReply(rollbase.FunnyDice(73)) + ' ' ;
	else
		returnStr = BanCardReply(rollbase.FunnyDice(73)) + ' ' + ' ; ' + text;
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
	if (count == 0) returnStr = '銀冰龍人‧菲琳-虹';
	if (count == 1) returnStr = '元祖馭龍使-虹';
	if (count == 2) returnStr = '龍之炎‧吉爾尼特拉-虹';
	if (count == 3) returnStr = '亞得米勒-虹';
	if (count == 4) returnStr = '賈巴沃克-虹';
	if (count == 5) returnStr = '天穹龍神-虹';
	if (count == 6) returnStr = '龍魂戰將‧吉爾沃-虹';
	if (count == 7) returnStr = '培冬-虹';
	if (count == 8) returnStr = '阿吉‧塔哈卡-虹';
	if (count == 9) returnStr = '林德沃姆-虹';
	if (count == 10) returnStr = '偉大的調停者‧佐伊-虹';
	if (count == 11) returnStr = '無謀之戰-金';
	if (count == 12) returnStr = '龍鎧戰士-金';
	if (count == 13) returnStr = '癲狂暴龍-金';
	if (count == 14) returnStr = '護國真龍‧斯卡塔赫-金';
	if (count == 15) returnStr = '馭龍歌姬-金';
	if (count == 16) returnStr = '破龍激震-金';
	if (count == 17) returnStr = '炎龍使役者-金';
	if (count == 18) returnStr = '龍人的威懾-金';
	if (count == 19) returnStr = '誓滅暴擊-金';
	if (count == 20) returnStr = '斬龍劍士‧羅伊-金';
	if (count == 21) returnStr = '星之不死鳥-金';
	if (count == 22) returnStr = '赤翼猛龍-金';
	if (count == 23) returnStr = '戲曲龍劍士-金';
	if (count == 24) returnStr = '龍劍少女‧艾拉-金';
	if (count == 25) returnStr = '灼熱風暴-銀';
	if (count == 26) returnStr = '塞特斯-銀';
	if (count == 27) returnStr = '城塞巨蟹-銀';
	if (count == 28) returnStr = '龍之峽谷-銀';
	if (count == 29) returnStr = '恐懼龍獸-銀';
	if (count == 30) returnStr = '龍群的集結-銀';
	if (count == 31) returnStr = '豔麗龍人‧瑪利翁-銀';
	if (count == 32) returnStr = '屠龍勇士-銀';
	if (count == 33) returnStr = '龍技達人-銀';
	if (count == 34) returnStr = '虎鯨巨渦-銀';
	if (count == 35) returnStr = '小小幼龍-銀';
	if (count == 36) returnStr = '貝奧武夫-銀';
	if (count == 37) returnStr = '炎足的麗姬‧艾莉紗-銀';
	if (count == 38) returnStr = '龍之祠堂-銀';
	if (count == 39) returnStr = '龍族勇士-銀';
	if (count == 40) returnStr = '鎮塔紅龍‧艾特爾-銀';
	if (count == 41) returnStr = '駿鷹獸騎手-銀';
	if (count == 42) returnStr = '魔獸騎手-銀';
	if (count == 43) returnStr = '異相之息‧迦魯亞-銀';
	if (count == 44) returnStr = '馭龍之槍-銀';
	if (count == 45) returnStr = '巨龜長老-銅';
	if (count == 46) returnStr = '巴西利斯克騎手-銅';
	if (count == 47) returnStr = '龍之怒-銅';
	if (count == 48) returnStr = '龍之石像-銅';
	if (count == 49) returnStr = '災禍之龍-銅';
	if (count == 50) returnStr = '龍翼暗殺者-銅';
	if (count == 51) returnStr = '擺尾強襲-銅';
	if (count == 52) returnStr = '龍騎士守護者-銅';
	if (count == 53) returnStr = '鐵鱗狂戰士-銅';
	if (count == 54) returnStr = '闇影龍騎士‧克妲-銅';
	if (count == 55) returnStr = '漆黑的獸人戰士-銅';
	if (count == 56) returnStr = '巨大長鰭鮪魚-銅';
	if (count == 57) returnStr = '冰炎龍-銅';
	if (count == 58) returnStr = '熾熱吐息-銅';
	if (count == 59) returnStr = '風暴之翼-銅';
	if (count == 60) returnStr = '龍騎兵-銅';
	if (count == 61) returnStr = '龍人召喚師-銅';
	if (count == 62) returnStr = '育龍者‧瑪蒂達-銅';
	if (count == 63) returnStr = '晝夢白龍-銅';
	if (count == 64) returnStr = '屠龍少女-銅';
	if (count == 65) returnStr = '龍之啟示-銅';
	if (count == 66) returnStr = '龍瞳的預視-銅';
	if (count == 67) returnStr = '遠古飛龍-銅';
	if (count == 68) returnStr = '星辰獸-銅';
	if (count == 69) returnStr = '遊龍少女-銅';
	if (count == 70) returnStr = '屍腐龍-銅';
	if (count == 71) returnStr = '毒尾巨龍-銅';
	if (count == 72) returnStr = '龍甲大劍師-銅';


	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
