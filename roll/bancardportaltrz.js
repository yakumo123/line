
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
	cards[0] = rollbase.FunnyDice(77); 
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(77);
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
	cards[0] = rollbase.FunnyDice(77);
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
		returnStr = BanCardReply(rollbase.FunnyDice(77)) + ' ' ;
	else
		returnStr = BanCardReply(rollbase.FunnyDice(77)) + ' ' + ' ; ' + text;
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
	if (count == 0) returnStr = '抹滅之物-虹';
	if (count == 1) returnStr = '機械降神-虹';
	if (count == 2) returnStr = '神祕守門人‧絲碧涅-虹';
	if (count == 3) returnStr = '小小布偶師‧洛可可-虹';
	if (count == 4) returnStr = '天威劍士-金';
	if (count == 5) returnStr = '殺戮人偶‧枷薇-金';
	if (count == 6) returnStr = '神彈巨像-金';
	if (count == 7) returnStr = '被賦生的獸人‧紗妃拉-金';
	if (count == 8) returnStr = '創造物激光炮-金';
	if (count == 9) returnStr = '生命量產-金';
	if (count == 10) returnStr = '虛數物體-金';
	if (count == 11) returnStr = '帕拉塞爾蘇斯-金';
	if (count == 12) returnStr = '境界線的惡魔-金';
	if (count == 13) returnStr = '銀輪的迴旋者-金';
	if (count == 14) returnStr = '心神統治者‧莫頓-金';
	if (count == 15) returnStr = '哈克菈比-金';
	if (count == 16) returnStr = '異界傳送-金';
	if (count == 17) returnStr = '無心之鬥-金';
	if (count == 18) returnStr = '白黑雙翼‧涅克絲-銀';
	if (count == 19) returnStr = '堅立的鋼之戰士‧四郎-銀';
	if (count == 20) returnStr = '機械工匠‧吉諾-銀';
	if (count == 21) returnStr = '被賦生者‧米莉亞姆-銀';
	if (count == 22) returnStr = '狂熱的機械兵-銀';
	if (count == 23) returnStr = '機動翼少女‧蘿夏-銀';
	if (count == 24) returnStr = '花漾玩偶-銀';
	if (count == 25) returnStr = '伊卡洛斯-銀';
	if (count == 26) returnStr = '創造術-銀';
	if (count == 27) returnStr = '古代增幅器-銀';
	if (count == 28) returnStr = '魔鋼傀儡-銀';
	if (count == 29) returnStr = '紫晶巨兵-銀';
	if (count == 30) returnStr = '異界入侵者‧巴吉里斯-銀';
	if (count == 31) returnStr = '被賦生的巨像-銀';
	if (count == 32) returnStr = '復仇的人偶師‧諾亞-銀';
	if (count == 33) returnStr = '蠻奪的指揮-銀';
	if (count == 34) returnStr = '豪腕鬥士‧迪爾克-銀';
	if (count == 35) returnStr = '機偶戰士-銀';
	if (count == 36) returnStr = '人偶師的線-銀';
	if (count == 37) returnStr = '魔晶加農炮-銀';
	if (count == 38) returnStr = '不穩定的實驗體-銀';
	if (count == 39) returnStr = '畫皮-銀';
	if (count == 40) returnStr = '機械弓兵-銅';
	if (count == 41) returnStr = '重力戰士-銅';
	if (count == 42) returnStr = '冷酷的人偶師-銅';
	if (count == 43) returnStr = '魔槍傭兵-銀';
	if (count == 44) returnStr = '假面人偶-銀';
	if (count == 45) returnStr = '恩奇杜-銅';
	if (count == 46) returnStr = '黑鐵士兵-銅';
	if (count == 47) returnStr = '船長‧梅帝歐-銅';
	if (count == 48) returnStr = '巨鯨飛船-銅';
	if (count == 49) returnStr = '火箭噴射拳-銅';
	if (count == 50) returnStr = '玩具士兵-銅';
	if (count == 51) returnStr = '機偶騎士-銅';
	if (count == 52) returnStr = '肉球砲擊手-銅';
	if (count == 53) returnStr = '鋼鐵破壞者-銅';
	if (count == 54) returnStr = '鐵杖機械士-銅';
	if (count == 55) returnStr = '被詛咒的石像-銅';
	if (count == 56) returnStr = '廢棄物-銅';
	if (count == 57) returnStr = '清新的銃士‧潔西卡-銅';
	if (count == 58) returnStr = '靜謐的齒輪-銅';
	if (count == 59) returnStr = '人偶房-銅';
	if (count == 60) returnStr = '鋼鐵拳鬥士-銅';
	if (count == 61) returnStr = '加速裝置-銅';
	if (count == 62) returnStr = '操偶師-銅';
	if (count == 63) returnStr = '機械女僕-銅';
	if (count == 64) returnStr = '古代自動機械-銅';
	if (count == 65) returnStr = '熊偶少女-銅';
	if (count == 66) returnStr = '漢姆林-銅';
	if (count == 67) returnStr = '魔鐵狂獅-銅';
	if (count == 68) returnStr = '惡魔的祭文-銅';
	if (count == 69) returnStr = '博識的史學家-銅';
	if (count == 70) returnStr = '機動翼劍士-銅';
	if (count == 71) returnStr = '古代機械兵-銅';
	if (count == 72) returnStr = '次元斷-銅';
	if (count == 73) returnStr = '人偶少女‧奧契絲-虹';
	if (count == 74) returnStr = '神偉的遺物-虹';
	if (count == 75) returnStr = '奮勉的俊秀‧席爾瓦-虹';
	if (count == 76) returnStr = '魔導電磁巨犀-虹';

	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
