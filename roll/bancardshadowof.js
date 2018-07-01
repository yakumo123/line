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
	if (count == 0) returnStr = '永遠的決鬥者‧莫迪凱-虹';
	if (count == 1) returnStr = '死界邊境的佇立者-虹';
	if (count == 2) returnStr = '幽靈支配者‧阿卡斯-虹';
	if (count == 3) returnStr = '終末之骸-虹';
	if (count == 4) returnStr = '滅殺之鎧-虹';
	if (count == 5) returnStr = '暗黑愛麗絲-虹';
	if (count == 6) returnStr = '永劫欲求者‧關德溫-虹';
	if (count == 7) returnStr = '冥守族長‧艾夏-虹';
	if (count == 8) returnStr = '暮光女皇-虹';
	if (count == 9) returnStr = '災厄的屍魔王-虹';
	if (count == 10) returnStr = '幽想的少女‧菲莉-虹';
	if (count == 11) returnStr = '死龍使役者-金';
	if (count == 12) returnStr = '屍病之街-金';
	if (count == 13) returnStr = '骷髏王子-金';
	if (count == 14) returnStr = '反覆無常的復活師-金';
	if (count == 15) returnStr = '死滅之霧-金';
	if (count == 16) returnStr = '黑天鵝‧奧黛兒-金';
	if (count == 17) returnStr = '生死逆轉-金';
	if (count == 18) returnStr = '捷特‧馬洛斯-金';
	if (count == 19) returnStr = '恆闇之梟-金';
	if (count == 20) returnStr = '復甦的狂戰士-金';
	if (count == 21) returnStr = '闇夜千金‧賽蕾絲-金';
	if (count == 22) returnStr = '再生的毒蘋果-金';
	if (count == 23) returnStr = '死骸勛爵-金';
	if (count == 24) returnStr = '安德雷斐斯-金';
	if (count == 25) returnStr = '地獄獻祭者-銀';
	if (count == 26) returnStr = '愛搗蛋的死靈法師-銀';
	if (count == 27) returnStr = '騷靈現象-銀';
	if (count == 28) returnStr = '怪物少女‧芙蘭-銀';
	if (count == 29) returnStr = '巨魂獵手-銀';
	if (count == 30) returnStr = '喚靈少女-銀';
	if (count == 31) returnStr = '惡魔拳法家‧索拉-銀';
	if (count == 32) returnStr = '賽蓮之淚-銀';
	if (count == 33) returnStr = '死咒之忠誠-銀';
	if (count == 34) returnStr = '心眼的雙葬女‧灰淑女-銀';
	if (count == 35) returnStr = '冥河引導者-銀';
	if (count == 36) returnStr = '墓場的勸誘-銀';
	if (count == 37) returnStr = '魯納爾的死靈術師‧琉特-銀';
	if (count == 38) returnStr = '阿努比斯-銀';
	if (count == 39) returnStr = '不死之王-銀';
	if (count == 40) returnStr = '赫拉斯瓦格爾-銀';
	if (count == 41) returnStr = '冥河引路人-銀';
	if (count == 42) returnStr = '巨腕骷髏-銀';
	if (count == 43) returnStr = '滿腹謎題的毛蟲-銀';
	if (count == 44) returnStr = '惡夢處刑人-銀';
	if (count == 45) returnStr = '見習死靈法師-銅';
	if (count == 46) returnStr = '黃金之棺-銅';
	if (count == 47) returnStr = '林立的墓地-銅';
	if (count == 48) returnStr = '靈魂再生-銅';
	if (count == 49) returnStr = '不滅的怨念-銅';
	if (count == 50) returnStr = '禁咒的戀人‧薩魯南-銅';
	if (count == 51) returnStr = '骸骨的代言者-銅';
	if (count == 52) returnStr = '骸骨蟲-銅';
	if (count == 53) returnStr = '陰鬱的死靈術師-銅';
	if (count == 54) returnStr = '骷髏巨魔-銅';
	if (count == 55) returnStr = '惡魔獵食者-銅';
	if (count == 56) returnStr = '幽魂-銅';
	if (count == 57) returnStr = '屍魂戰士-銅';
	if (count == 58) returnStr = '幽靈宅邸-銅';
	if (count == 59) returnStr = '靈魂轉移-銅';
	if (count == 60) returnStr = '惡趣之靈-銅';
	if (count == 61) returnStr = '帽子先生-銅';
	if (count == 62) returnStr = '死靈騎士-銅';
	if (count == 63) returnStr = '來自深淵的誘惑-銅';
	if (count == 64) returnStr = '憂鬱的靈媒師-銅';
	if (count == 65) returnStr = '厄夜死神-銅';
	if (count == 66) returnStr = '漆黑之劍鬼-銅';
	if (count == 67) returnStr = '喚屍掘墓人-銅';
	if (count == 68) returnStr = '木乃伊-銅';
	if (count == 69) returnStr = '卡斯托爾-銅';
	if (count == 70) returnStr = '腐朽的骷髏兵-銅';
	if (count == 71) returnStr = '頭骨戒指-銅';
	if (count == 72) returnStr = '百勒努斯-銅';


	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
