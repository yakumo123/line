
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

for (i = 1; i < 15; i++) {
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
		if (i == 13) returnStr += '14: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 14) returnStr += '15: ' + BanCardReply(cards[i]) + ' ' ;

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
	if (count == 0) returnStr = '夢魔-銅';
	if (count == 1) returnStr = '狂戀的華鎧‧薇拉-虹';
	if (count == 2) returnStr = '狼人之王‧華茲-虹';
	if (count == 3) returnStr = '毒牙公主‧梅杜莎-虹';
	if (count == 4) returnStr = '沃普爾吉斯-虹';
	if (count == 5) returnStr = '邪惡妖精‧卡拉波斯-虹';
	if (count == 6) returnStr = '耶夢加得-虹';
	if (count == 7) returnStr = '闇夜公主‧班比-虹';
	if (count == 8) returnStr = '噬闇巨蝠-虹';
	if (count == 9) returnStr = '深淵的來訪者-虹';
	if (count == 10) returnStr = '狄亞波羅斯‧偽語-虹';
	if (count == 11) returnStr = '普爾森-虹';
	if (count == 12) returnStr = '給僕從的禮物-金';
	if (count == 13) returnStr = '宵之吸血鬼‧瓦妮亞-金';
	if (count == 14) returnStr = '迷人魅魔‧莉莉姆-金';
	if (count == 15) returnStr = '基塔布利魯-金';
	if (count == 16) returnStr = '致命之刃-金';
	if (count == 17) returnStr = '戈爾貢的試煉-金';
	if (count == 18) returnStr = '駭人的惡魔-金';
	if (count == 19) returnStr = '幻形的斬姬‧娜魯梅亞-金';
	if (count == 20) returnStr = '轟雷的惡魔-金';
	if (count == 21) returnStr = '血脈之王-金';
	if (count == 22) returnStr = '幻影貓-金';
	if (count == 23) returnStr = '巨大惡魔掌-金';
	if (count == 24) returnStr = '惡魔巡查官‧亞梅拉達-金';
	if (count == 25) returnStr = '斯忒諾-金';
	if (count == 26) returnStr = '帕祖祖-銀';
	if (count == 27) returnStr = '血祭侵略者-銀';
	if (count == 28) returnStr = '尤芮艾莉-銀';
	if (count == 29) returnStr = '魔神之劍-銀';
	if (count == 30) returnStr = '緋色劍士-銀';
	if (count == 31) returnStr = '潘達斯奈基-銀';
	if (count == 32) returnStr = '芬里爾-銀';
	if (count == 33) returnStr = '魔晶上尉‧伯梅倫-銀';
	if (count == 34) returnStr = '惡魔暴風-銀';
	if (count == 35) returnStr = '深淵巨獸-銀';
	if (count == 36) returnStr = '詭譎的幽暗街道-銀';
	if (count == 37) returnStr = '血罪少女‧布菈-銀';
	if (count == 38) returnStr = '變裝的狼牙-銀';
	if (count == 39) returnStr = '惡夜魔羊-銀';
	if (count == 40) returnStr = '狼少年-銀';
	if (count == 41) returnStr = '血源探索-銀';
	if (count == 42) returnStr = '銀鎖的使徒-銀';
	if (count == 43) returnStr = '雙石惡魔-銀';
	if (count == 44) returnStr = '縛命之鎖-銀';
	if (count == 45) returnStr = '瓦沙克-銀';
	if (count == 46) returnStr = '格蘿德-銅';
	if (count == 47) returnStr = '惡魔追獵者-銅';
	if (count == 48) returnStr = '激憤的惡魔-銅';
	if (count == 49) returnStr = '災厄的魔神-銅';
	if (count == 50) returnStr = '豪拳保鑣-銅';
	if (count == 51) returnStr = '血紅淨化-銅';
	if (count == 52) returnStr = '惡魔之手-銅';
	if (count == 53) returnStr = '暗魔女將-銅';
	if (count == 54) returnStr = '惡魔之鑰-銅';
	if (count == 55) returnStr = '血紅渴望-銅';
	if (count == 56) returnStr = '吸血的刻印-銅';
	if (count == 57) returnStr = '劇毒蛇吻-銅';
	if (count == 58) returnStr = '試驗品‧澤赫克-銅';
	if (count == 59) returnStr = '夢魘惡魔-銅';
	if (count == 60) returnStr = '殘暴魔狼-銅';
	if (count == 61) returnStr = '狂牙巨蛇-銅';
	if (count == 62) returnStr = '彆扭的惡魔-銅';
	if (count == 63) returnStr = '瘋狂的劊子手-銅';
	if (count == 64) returnStr = '從魔召喚-銅';
	if (count == 65) returnStr = '利爪的一擊-銅';
	if (count == 66) returnStr = '血之契約-銅';
	if (count == 67) returnStr = '艷麗的魅魔-銅';
	if (count == 68) returnStr = '咒怨稻草人-銅';
	if (count == 69) returnStr = '玻璃刃的惡魔-銅';
	if (count == 70) returnStr = '邪毒天蠍-銅';
	if (count == 71) returnStr = '托卜狸-銅';
	if (count == 72) returnStr = '魅惑的吸血鬼-銅';


	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
