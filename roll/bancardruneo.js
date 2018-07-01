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

for (i = 1; i < 10; i++) {
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

	for (i = 0; i < 10; i++) {
		if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 1) returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 2) returnStr += '3: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 3) returnStr += '4: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 4) returnStr += '5: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 5) returnStr += '6: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 6) returnStr += '7: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 7) returnStr += '8: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 8) returnStr += '9: ' + BanCardReply(cards[i]) + ' ' + '\n';
	if (i == 9) returnStr += '10: ' + BanCardReply(cards[i]) + ' ' ;

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
	if (count == 0) returnStr = '觀星魔女‧絲特拉-虹';
	if (count == 1) returnStr = '被喚醒的禁忌-虹';
	if (count == 2) returnStr = '宿命宣讀者‧露妮-虹';
	if (count == 3) returnStr = '奧茲國的大魔女-虹';
	if (count == 4) returnStr = '魔法始祖‧馬納歷亞-虹';
	if (count == 5) returnStr = '真實考究者‧浮士德-虹';
	if (count == 6) returnStr = '神託的妖童‧阿魯魯麥雅-虹';
	if (count == 7) returnStr = '絕望奇美拉-虹';
	if (count == 8) returnStr = '白銀劍巨像-虹';
	if (count == 9) returnStr = '巨獸奇美拉-虹';
	if (count == 10) returnStr = '無面魔女-虹';
	if (count == 11) returnStr = '暴虐的巨像-金';
	if (count == 12) returnStr = '馬納歷亞學生會長‧漢娜-金';
	if (count == 13) returnStr = '偉大的魔法師‧里維-金';
	if (count == 14) returnStr = '大召喚-金';
	if (count == 15) returnStr = '雪人大王-金';
	if (count == 16) returnStr = '洋蔥軍團長‧芭賽特-金';
	if (count == 17) returnStr = '神秘的魔法陣-金';
	if (count == 18) returnStr = '巨像突擊-金';
	if (count == 19) returnStr = '連鎖呼喚-金';
	if (count == 20) returnStr = '歐羅芭-金';
	if (count == 21) returnStr = '冰刺槍擊-金';
	if (count == 22) returnStr = '開闢的鍊金術師‧卡莉歐斯托蘿-金';
	if (count == 23) returnStr = '魯納爾的魔法師‧普麗絲-金';
	if (count == 24) returnStr = '諾娃的炎彈-金';
	if (count == 25) returnStr = '召喚之環-銀';
	if (count == 26) returnStr = '雷光射手-銀';
	if (count == 27) returnStr = '幻影術師-銀';
	if (count == 28) returnStr = '闇魔法教師‧海萊恩-銀';
	if (count == 29) returnStr = '暗黑召喚師-銀';
	if (count == 30) returnStr = '魔炎毀滅者-銀';
	if (count == 31) returnStr = '精神統一-銀';
	if (count == 32) returnStr = '糖果屋-銀';
	if (count == 33) returnStr = '惡魔炎術師-銀';
	if (count == 34) returnStr = '太陽舞者‧蘿莉亞-銀';
	if (count == 35) returnStr = '笑瞇瞇的奇術師‧薩米-銀';
	if (count == 36) returnStr = '才能開花-銀';
	if (count == 37) returnStr = '馬納歷亞的知識-銀';
	if (count == 38) returnStr = '馬納歷亞龍術師-銀';
	if (count == 39) returnStr = '寂靜的實驗室-銀';
	if (count == 40) returnStr = '馬納歷亞魔法書-銀';
	if (count == 41) returnStr = '魔槍狩獵者-銀';
	if (count == 42) returnStr = '聖魔法教師‧費洛-銀';
	if (count == 43) returnStr = '天才魔法師‧艾爾莎-銀';
	if (count == 44) returnStr = '未完的鍊金術師‧克拉莉絲-銀';
	if (count == 45) returnStr = '雷光長槍手-銅';
	if (count == 46) returnStr = '月影魔法師-銅';
	if (count == 47) returnStr = '二重煉成術-銅';
	if (count == 48) returnStr = '魔女的大鍋爐-銅';
	if (count == 49) returnStr = '智慧之光-銅';
	if (count == 50) returnStr = '愛好和平的召喚師-銅';
	if (count == 51) returnStr = '命運的指引-銅';
	if (count == 52) returnStr = '連鎖雷擊-銅';
	if (count == 53) returnStr = '風怒之術-銅';
	if (count == 54) returnStr = '神祕占星者-銅';
	if (count == 55) returnStr = '火炎粉碎術-銅';
	if (count == 56) returnStr = '精神剝離-銅';
	if (count == 57) returnStr = '觀星望遠鏡-銅';
	if (count == 58) returnStr = '新星魔術師‧薩米-銅';
	if (count == 59) returnStr = '馬納歷亞寶石獸-銅';
	if (count == 60) returnStr = '魔法貓頭鷹-銅';
	if (count == 61) returnStr = '甜點巫師-銅';
	if (count == 62) returnStr = '預知魔女-銅';
	if (count == 63) returnStr = '獸面魔法師-銅';
	if (count == 64) returnStr = '術式的教師‧吉爾-銅';
	if (count == 65) returnStr = '魔導飛彈-銅';
	if (count == 66) returnStr = '雄偉之槍-銅';
	if (count == 67) returnStr = '黑魔女‧安娜-銅';
	if (count == 68) returnStr = '巨像煉成術-銅';
	if (count == 69) returnStr = '馬納歷亞召喚師‧貝莉魯-銅';
	if (count == 70) returnStr = '疾風噴射-銅';
	if (count == 71) returnStr = '雪人召喚術-銅';
	if (count == 72) returnStr = '見習魔法劍士-銅';


	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
