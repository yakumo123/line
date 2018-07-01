var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改


function MultiDrawBan(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) //時間之流
	{
	cards[0] = rollbase.FunnyDice(73); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
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

	for (i = 0; i < 3; i++) {
		if (i == 0) returnStr += '過去: ' + BanCardReply(cards[i]) + ' ' + BanRevReply(revs[i]) + '\n';
		if (i == 1) returnStr += '現在: ' + BanCardReply(cards[i]) + ' ' + BanRevReply(revs[i]) + '\n';
		if (i == 2) returnStr += '未來: ' + BanCardReply(cards[i]) + ' ' + BanRevReply(revs[i]);
	}

	} else if (type == 2) //塞爾特大十字
	{
	cards[0] = rollbase.FunnyDice(73); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 25; i++) {
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

	for (i = 0; i < 25; i++) {
		if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 1) {
		if (revs[i] == 0)
			returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
		else
			returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
		}
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
		if (i == 23) {
		if (revs[i] == 0) 
			returnStr += '24: ' + BanCardReply(cards[i]) + ' ' + '\n';
		else
			returnStr += '24: ' + BanCardReply(cards[i]) + ' ' + '\n';
		}
		if (i == 24) returnStr += '25: ' + BanCardReply(cards[i]) + ' ' ;

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
	if (count == 0) returnStr = '天空指揮官‧榭莉亞-虹';
	if (count == 1) returnStr = '仙杜瑞拉-虹';
	if (count == 2) returnStr = '沉默的炎將‧瑪爾斯-虹';
	if (count == 3) returnStr = '斯巴達克斯-虹';
	if (count == 4) returnStr = '黑暗劍士‧梅麗莎-虹';
	if (count == 5) returnStr = '巴巴羅薩-虹';
	if (count == 6) returnStr = '鮮紅的穿光‧瑟塔-虹';
	if (count == 7) returnStr = '騎士王‧亞瑟-虹';
	if (count == 8) returnStr = '遠古英雄-虹';
	if (count == 9) returnStr = '高潔的騎士‧雷瑟姆-虹';
	if (count == 10) returnStr = '空天城塞-虹';
	if (count == 11) returnStr = '帕爾修斯-金';
	if (count == 12) returnStr = '白與黑的激鬥-金';
	if (count == 13) returnStr = '小紅帽‧梅西-金';
	if (count == 14) returnStr = '無邪公主‧普莉姆-金';
	if (count == 15) returnStr = '清廉忠臣-金';
	if (count == 16) returnStr = '太陽之槍‧璐-金';
	if (count == 17) returnStr = '惡魔伯爵‧達利歐-金';
	if (count == 18) returnStr = '狂嵐長槍手-金';
	if (count == 19) returnStr = '神祕特務‧蒂伊-金';
	if (count == 20) returnStr = '圓桌會議-金';
	if (count == 21) returnStr = '逆境處理-金';
	if (count == 22) returnStr = '銀嶺的秘劍士-金';
	if (count == 23) returnStr = '龍騎士的集結-金';
	if (count == 24) returnStr = '撲克騎士召集令-金';
	if (count == 25) returnStr = '歷戰的兵器-銀';
	if (count == 26) returnStr = '狩鬼少女‧小桃-銀';
	if (count == 27) returnStr = '老爺爺與老奶奶-銀';
	if (count == 28) returnStr = '沉默的女僕‧諾嘉-銀';
	if (count == 29) returnStr = '領主將軍‧羅密歐-銀';
	if (count == 30) returnStr = '戰地王女‧茱麗葉-銀';
	if (count == 31) returnStr = '魔導狙擊手‧瓦路茲-銀';
	if (count == 32) returnStr = '嬌小的聖騎士‧夏綠蒂-銀';
	if (count == 33) returnStr = '華麗的花園劍士-銀';
	if (count == 34) returnStr = '睿智指揮官-銀';
	if (count == 35) returnStr = '皇家御用戰旗-銀';
	if (count == 36) returnStr = '先鋒騎兵-銀';
	if (count == 37) returnStr = '粗暴的豪劍士-銀';
	if (count == 38) returnStr = '火遁之術-銀';
	if (count == 39) returnStr = '星之鎧甲-銀';
	if (count == 40) returnStr = '歸來的傭兵-銀';
	if (count == 41) returnStr = '庫胡林-銀';
	if (count == 42) returnStr = '尖刃刺鼠-銀';
	if (count == 43) returnStr = '騎士的受封儀式-銀';
	if (count == 44) returnStr = '冷酷傭兵‧路西烏斯-銀';
	if (count == 45) returnStr = '角冠之王-銅';
	if (count == 46) returnStr = '巨斧破壞者-銅';
	if (count == 47) returnStr = '暗影執法者‧塔妮亞-銅';
	if (count == 48) returnStr = '武裝強化-銅';
	if (count == 49) returnStr = '公主之吻-銅';
	if (count == 50) returnStr = '暗殺術-銅';
	if (count == 51) returnStr = '白銀將軍-銅';
	if (count == 52) returnStr = '華美公主‧汀娜-銅';
	if (count == 53) returnStr = '戰線城壁-銅';
	if (count == 54) returnStr = '忍者大師-銅';
	if (count == 55) returnStr = '女忍者大師-銅';
	if (count == 56) returnStr = '波魯克斯-銅';
	if (count == 57) returnStr = '王城守衛-銅';
	if (count == 58) returnStr = '拔刀術-銅';
	if (count == 59) returnStr = '迅捷的劍士-銅';
	if (count == 60) returnStr = '狼牙劍士-銅';
	if (count == 61) returnStr = '巨斧公主-銅';
	if (count == 62) returnStr = '出血大特賣-銅';
	if (count == 63) returnStr = '背水一戰的騎士-銅';
	if (count == 64) returnStr = '女忍者學徒-銅';
	if (count == 65) returnStr = '白熊聖騎士-銅';
	if (count == 66) returnStr = '大商人-銅';
	if (count == 67) returnStr = '疾風怒濤-銅';
	if (count == 68) returnStr = '凱旋的騎士-銅';
	if (count == 69) returnStr = '兔耳親衛官-銅';
	if (count == 70) returnStr = '星錘騎士-銅';
	if (count == 71) returnStr = '商販女孩-銅';
	if (count == 72) returnStr = '武士宗師-銅';


	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
