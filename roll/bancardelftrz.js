
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

for (i = 1; i < 30; i++) {
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

	for (i = 0; i < 30; i++) {
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
    if (i == 19) returnStr += '20: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 20) returnStr += '21: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 21) returnStr += '22: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 22) returnStr += '23: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 23) returnStr += '24: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 24) returnStr += '25: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 26) returnStr += '27: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 27) returnStr += '28: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 28) returnStr += '29: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 29) returnStr += '30: ' + BanCardReply(cards[i]) + ' ' ;

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
	if (count == 0) returnStr = '王者巨象-虹';
	if (count == 1) returnStr = '翠嵐的大斧手-虹';
	if (count == 2) returnStr = '世界樹-虹';
	if (count == 3) returnStr = '白鬃聖猿-虹';
	if (count == 4) returnStr = '卡西歐佩亞-虹';
	if (count == 5) returnStr = '美女與野獸-虹';
	if (count == 6) returnStr = '弒神獵人‧塞爾文-虹';
	if (count == 7) returnStr = '絢麗的紡織者‧歌露瓦-虹';
	if (count == 8) returnStr = '先導者妖精公主‧阿麗雅-虹';
	if (count == 9) returnStr = '昆蟲王-虹';
	if (count == 10) returnStr = '妖精龍-虹';
	if (count == 11) returnStr = '妖精劍士-金';
	if (count == 12) returnStr = '瞬速的巨狼-金';
	if (count == 13) returnStr = '維納斯-金';
	if (count == 14) returnStr = '天賦的射手‧梅提拉-金';
	if (count == 15) returnStr = '妖精使役者-金';
	if (count == 16) returnStr = '高貴的貓姊妹‧暹羅與暹瑪-金';
	if (count == 17) returnStr = '魔族少年‧翟恩-金';
	if (count == 18) returnStr = '妖精大魔導士‧莉拉-金';
	if (count == 19) returnStr = '愛之妖精‧寶菈-金';
	if (count == 20) returnStr = '歷戰的馴鷹師-金';
	if (count == 21) returnStr = '精靈的雙擊-金';
	if (count == 22) returnStr = '精靈鍛造師‧蕾妮-金';
	if (count == 23) returnStr = '新綠的加護-金';
	if (count == 24) returnStr = '妖精的奔流-金';
	if (count == 25) returnStr = '森之細語-銀';
	if (count == 26) returnStr = '神箭的射手‧蘇提拉-銀';
	if (count == 27) returnStr = '時尚女王‧奈爾香-銀';
	if (count == 28) returnStr = '玫瑰花園守衛者-銀';
	if (count == 29) returnStr = '雪原戰士-銀';
	if (count == 30) returnStr = '大自然的教師‧阿蕾雅-銀';
	if (count == 31) returnStr = '本能解放-銀';
	if (count == 32) returnStr = '夜鷹人-銀';
	if (count == 33) returnStr = '赤弓精靈-銀';
	if (count == 34) returnStr = '憤怒的草人長老-銀';
	if (count == 35) returnStr = '妖精的旋律-銀';
	if (count == 36) returnStr = '荊棘之森-銀';
	if (count == 37) returnStr = '精靈歌手‧柏爾嘉-銀';
	if (count == 38) returnStr = '戰斧少女‧艾比-銀';
	if (count == 39) returnStr = '金屬精靈法師-銀';
	if (count == 40) returnStr = '忌刃鬼-銀';
	if (count == 41) returnStr = '梟面巨熊-銀';
	if (count == 42) returnStr = '長老之樹-銀';
	if (count == 43) returnStr = '偉大的藥劑師-銀';
	if (count == 44) returnStr = '枯木守衛-銀';
	if (count == 45) returnStr = '水之妖精-銅';
	if (count == 46) returnStr = '惡魔之花-銅';
	if (count == 47) returnStr = '魔界樹的僕從-銅';
	if (count == 48) returnStr = '小葉人-銅';
	if (count == 49) returnStr = '和善的精靈‧斐特-銅';
	if (count == 50) returnStr = '仙境雙子‧迪與丹-銅';
	if (count == 51) returnStr = '精靈守衛-銅';
	if (count == 52) returnStr = '妖精語森林使者-銅';
	if (count == 53) returnStr = '沉眠的妖精之森-銅';
	if (count == 54) returnStr = '炎精之森-銅';
	if (count == 55) returnStr = '對空射擊-銅';
	if (count == 56) returnStr = '蚱蜢指揮家-銅';
	if (count == 57) returnStr = '百鍊的弓箭手-銅';
	if (count == 58) returnStr = '星光精靈-銅';
	if (count == 59) returnStr = '和善的樹人-銅';
	if (count == 60) returnStr = '黑暗精靈‧芙蕾-銅';
	if (count == 61) returnStr = '妖精之花-銅';
	if (count == 62) returnStr = '森林的反撲-銅';
	if (count == 63) returnStr = '香格里拉妖精-銅';
	if (count == 64) returnStr = '精靈驅逐者-銅';
	if (count == 65) returnStr = '虹靈巨蜥-銅';
	if (count == 66) returnStr = '樹精-銅';
	if (count == 67) returnStr = '精靈戰將-銅';
	if (count == 68) returnStr = '森林哲學者-銅';
	if (count == 69) returnStr = '花漾公主-銅';
	if (count == 70) returnStr = '巨狼-銅';
	if (count == 71) returnStr = '森之樂隊-銅';
	if (count == 72) returnStr = '真菌人-銅';


	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
