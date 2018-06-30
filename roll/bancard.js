function MultiDrawBan(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) //時間之流
	{
	cards[0] = rollbase.FunnyDice(74); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(74);
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
		if (i == 0) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 1) returnStr += '現在: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 2) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);
	}

	} else if (type == 2) //塞爾特大十字
	{
	cards[0] = rollbase.FunnyDice(74); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 10; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(74);
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
		if (i == 0) returnStr += '1: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 1) {
		if (revs[i] == 0) //正位
			returnStr += '2: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '2: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 2) returnStr += '3: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 3) returnStr += '4: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 4) returnStr += '5: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 5) returnStr += '6: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 6) returnStr += '7: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 7) returnStr += '8: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 8) returnStr += '9: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 9) returnStr += '10: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 10) returnStr += '11: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 11) returnStr += '12: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 12) returnStr += '13: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 13) {
		if (revs[i] == 0) 
			returnStr += '14: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '14: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 14) returnStr += '15: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);

	}

	} else {

	if (text == null)
		returnStr = tarotCardReply(rollbase.FunnyDice(74)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
		returnStr = tarotCardReply(rollbase.FunnyDice(74)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	}


	rply.text = returnStr;
	return rply;
}

function NomalDrawBan(CardToCal, text) {
	let returnStr = '';

	if (text == null)
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	rply.text = returnStr;
	return rply;
}



function BanCardReply(count) {
	let returnStr = '';
	if (count == 0) returnStr = '白雪公主-虹';
	if (count == 1) returnStr = '白貞(323)-虹';
	if (count == 2) returnStr = '鹿-虹';
	if (count == 3) returnStr = '白翼守護神-虹';
	if (count == 4) returnStr = '圖坦卡門-虹';
	if (count == 5) returnStr = '七寶石之姫-虹';
	if (count == 6) returnStr = '邪教化身-虹';
	if (count == 7) returnStr = '天曜盾甲-虹';
	if (count == 8) returnStr = '白貞(855)-虹';
	if (count == 9) returnStr = '神盾(855)-虹';
	if (count == 10) returnStr = '黃金獅-虹';
	if (count == 11) returnStr = '烈風之翼神-虹';
	if (count == 12) returnStr = '星導天球儀-金';
	if (count == 13) returnStr = '峰頂的教會-金';
	if (count == 14) returnStr = '赤枝聖騎士‧諾榭-金';
	if (count == 15) returnStr = '安朵美達-金';
	if (count == 16) returnStr = '寶石巫女-金';
	if (count == 17) returnStr = '聖光牧師‧蘿蕾娜-金';
	if (count == 18) returnStr = '愛麗絲的冒險-金';
	if (count == 19) returnStr = '詠唱：白牙神殿-金';
	if (count == 20) returnStr = '天馬騎士杜拉漢-金';
	if (count == 21) returnStr = '詠唱：遠古守護者-金';
	if (count == 22) returnStr = '天狐之社-金';
	if (count == 23) returnStr = '白天鵝‧奧德蒂-金';
	if (count == 24) returnStr = '巨天金牛-金';
	if (count == 25) returnStr = '忒彌斯的肅清-金';
	if (count == 26) returnStr = '和平的推動者-銀';
	if (count == 27) returnStr = '星跡的朝聖者‧蘇菲雅-銀';
	if (count == 28) returnStr = '聖之光稜杖擊-銀';
	if (count == 29) returnStr = '星之奔流-銀';
	if (count == 30) returnStr = '持矛鎚的僧侶-銀';
	if (count == 31) returnStr = '相剋的雙翼像-銀';
	if (count == 32) returnStr = '高階牧師-銀';
	if (count == 33) returnStr = '天狐-銀';
	if (count == 34) returnStr = '聖潔的殲滅-銀';
	if (count == 35) returnStr = '神殿的狂鬼-銀';
	if (count == 36) returnStr = '大主教‧嘉德麗雅-銀';
	if (count == 37) returnStr = '詠唱：雙生之炎-銀';
	if (count == 38) returnStr = '三月兔的茶會-銀';
	if (count == 39) returnStr = '鷹身人-銀';
	if (count == 40) returnStr = '哈提-銀';
	if (count == 41) returnStr = '星辰女神官-銀';
	if (count == 42) returnStr = '埃癸娜-銀';
	if (count == 43) returnStr = '聖獅神殿-銀';
	if (count == 44) returnStr = '詠唱：蛇神之宴-銀';
	if (count == 45) returnStr = '天譴神父-銀';
	if (count == 46) returnStr = '偉大的女修士-銅';
	if (count == 47) returnStr = '信仰的天使像-銅-銅';
	if (count == 48) returnStr = '破邪聖光-銅';
	if (count == 49) returnStr = '聖潔的僧侶-銅';
	if (count == 50) returnStr = '追逐繁星的精靈-銅';
	if (count == 51) returnStr = '誓言之翼-銅';
	if (count == 52) returnStr = '戰士萊卡翁-銅';
	if (count == 53) returnStr = '育鳥的使徒-銅';
	if (count == 54) returnStr = '詠唱：白龍降臨-銅';
	if (count == 55) returnStr = '內向的月兔妖-銅';
	if (count == 56) returnStr = '愚神禮讚-銅';
	if (count == 57) returnStr = '聖獸白虎-銅';
	if (count == 58) returnStr = '懲戒的修女-銅';
	if (count == 59) returnStr = '詠唱：寶石之甲-銅';
	if (count == 60) returnStr = '炎熔鐵靴-銅';
	if (count == 61) returnStr = '肅清的聖堂-銅';
	if (count == 62) returnStr = '漆黑法典-銅';
	if (count == 63) returnStr = '聖獅結晶-銅';
	if (count == 64) returnStr = '風之僧侶‧海森-銅';
	if (count == 65) returnStr = '詠唱：聖獸之誓-銅';
	if (count == 66) returnStr = '崇高的教義-銅';
	if (count == 67) returnStr = '死鐮修女-銅';
	if (count == 68) returnStr = '蛇神女祭司-銅';
	if (count == 69) returnStr = '星辰主教-銅';
	if (count == 70) returnStr = '劍刃修女-銅';
	if (count == 71) returnStr = '被封印的法典-銅';
	if (count == 72) returnStr = '詠唱：召喚天馬-銅';
	if (count == 73) returnStr = '詠唱：真翼沙漏-銅';

	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
