var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 占卜&其他
////////////////////////////////////////


function BStyleFlagSCRIPTS() {
let PersonalDescriptionArr = ['神族', '魔族', '妖精族', '人族', '巨人族', '森精族', '獸人族', '天翼族', '機凱族', '魚人族', '吸血鬼族', '龍族']
let IdeologyBeliefsArr = ['男性', '女性', '無性別'];
let SignificantPeopleArr = ['結實的', '英俊的', '粗鄙的', '機靈的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的', '青春洋溢的', '感覺疲憊的', '豐滿的', '粗壯的', '毛髮茂盛的', '苗條的', '優雅的', '邋遢的', '敦實的', '蒼白的', '陰沉的', '平庸的', '臉色紅潤的', '皮膚黝黑色', '滿臉皺紋的', '古板的', '有狐臭的', '狡猾的', '健壯的', '嬌俏的', '筋肉發達的', '魁梧的', '遲鈍的',  '虛弱的', '可愛的', '萌萌的', '帥氣的', '有獸耳的'];
let SignificantPeopleWhyArr = ['虔誠信仰著某個神祈', '覺得人類不需要依靠宗教也可以好好生活', '覺得科學可以解釋所有事，並對某種科學領域有獨特的興趣', '相信因果循環與命運', '是一個政黨、社群或秘密結社的成員','覺得這個社會已經病了，而其中某些病灶需要被剷除', '是神秘學的信徒', '是積極參與政治的人，有特定的政治立場', '覺得金錢至上，且為了金錢不擇手段', '是一個激進主義分子，活躍於社會運動']
let MeaningfulLocationsArr = ['他的父母', '他的祖父母', '他的兄弟姐妹', '他的孩子', '他的另一半','他的兒時好友', '他心目中的偶像或是英雄'];
let TreasuredPossessionsArr = ['一件他的在工作上需要用到的必需品', '一個從他童年時就保存至今的寶物', '一樣由最重要的人給予他的物品', '一件珍視的蒐藏品', '一件無意間發現，但不知道到底是什麼的東西，正努力尋找答案', '某種體育用品', '一把特別的武器', '他的寵物'];
	
rply.text = '【種族】:' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '/n【性別】:' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '/n【特徵】他是一個' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '的人。/n【信念】:他' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)] + '。/n【重要之人】：對他來說，最重要的人是' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + '/n【寶貴之物】：他最寶貴的東西就是'+ TreasuredPossessionsArr[Math.floor((Math.random() * (TreasuredPossessionsArr.length)) + 0)];
return rply;
}



function PPCG() {
let rplyArr = ['\
九雲是你叫的嗎?', '\
幹 叫屁喔', '\
想被扔進焚化爐?', '\
來 跪下', '\
走開', '\
滾', '\
呀哈哈哈哈', '\
Get Out', '\
Fuck You'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}



function randomReply() {
let rplyArr = ['\
你們死定了呃呃呃不要糾結這些……所以是在糾結哪些？', '\
在澳洲，每過一分鐘就有一隻鴨嘴獸被拔嘴。 \n我到底在共三小。', '\
嗚噁噁噁噁噁噁，不要隨便叫我。', '\
幹，你這學不會的豬！', '\
嘎嘎嘎。', '\
wwwwwwwwwwwwwwwww', '\
為什麼你們每天都可以一直玩；玩就算了還玩我。', '\
好棒，整點了！咦？不是嗎？', '\
不要打擾我挖坑！', '好棒，誤點了！', '\
在南半球，一隻鴨嘴獸拍打他的鰭，他的嘴就會掉下來。 \n我到底在共三小。', '\
什麼東西你共三小。', '\
哈哈哈哈哈哈哈哈！', '\
一直叫，你4不4想拔嘴人家？', '\
一直叫，你想被淨灘嗎？', '\
幫主你也敢嘴？', '\
拔嘴的話，我的嘴巴會長出觸手，然後開花成四個花瓣哦 (´×`)', '\
看看我！！我體內的怪物已經這麼大了！！', '\
傳說中，凡是拔嘴過鴨嘴獸的人，有高機率在100年內死去。 \n我到底在共三小。', '\
人類每花60秒拔嘴，就減少一分鐘的壽命。 \n我到底在共三小。', '\
嘴被拔，就會掉。', '\
你在大聲什麼啦！！！！', '\
公道價，八萬一（伸手）。', '\
你的嘴裡有異音（指）', '\
幫主說，有人打你的左臉，你就要用肉食性猛擊咬斷他的小腿。'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}
	
function randomLuck(TEXT) {
let rplyArr = ['超吉','超級上吉','大吉','吉','中吉','小吉','吉','小吉','吉','吉','中吉','吉','中吉','吉','中吉','小吉','末吉','吉','中吉','小吉','末吉','中吉','小吉','小吉','吉','小吉','末吉','中吉','小吉','凶','小凶','沒凶','大凶','很凶','你不要知道比較好呢','命運在手中,何必問我'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}
	
	
////////////////////////////////////////
//////////////// Funny
////////////////////////////////////////
/* 猜拳功能 */
function RockPaperScissors(HandToCal, text) {
	let returnStr = '';
	if (HandToCal.match(/石頭|布|剪刀|1|2|3/) != null) {
	let aHand = ['石頭','布','剪刀'];
	HandToCal = aHand[Math.floor((Math.random() * (aHand.length)) + 0)];
	}
	var hand = rollbase.FunnyDice(3); // 0:石頭 1:布 2:剪刀

	switch (hand) {
	case 0: //石頭
		returnStr = '我出石頭！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '哼哼你輸惹';
		else if (HandToCal.match(/石頭|2/) != null) returnStr += '看來我們不相上下阿';
		else if (HandToCal.match(/布|3/) != null) returnStr += '你好像有點強！';
		else returnStr += '欸不對喔你亂出！';

		break;

	case 1: //布
		returnStr = '我出布！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '讓你一次而已啦！';
		else if (HandToCal.match(/布|2/) != null) returnStr += '原來平手...沒什麼嘛！';
		else if (HandToCal.match(/石頭|3/) != null) returnStr += '哈哈你看看你！';
		else returnStr += '別亂出阿會壞掉的';

		break;

	case 2: //剪刀
		returnStr = '我出剪刀！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '平手 (  艸)';
		else if (HandToCal.match(/布|2/) != null) returnStr += '贏了 (｀・ω・´)b';
		else if (HandToCal.match(/石頭|3/) != null) returnStr += '輸惹 ゜。。゜(ノД‵)ノ・゜';
		else returnStr += '亂出打你喔 (｀・ω・´)凸';

		break;

	default:
		returnStr = '我出的是...欸不對你沒出喔！\n';
		break;
	}

	rply.text = returnStr;
	return rply;
}



////////////////////////////////////////
//////////////// Tarot塔羅牌
////////////////////////////////////////
function MultiDrawTarot(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) //時間之流
	{
	cards[0] = rollbase.FunnyDice(79); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(79);
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
	cards[0] = rollbase.FunnyDice(79); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 10; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(79);
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
		if (i == 0) returnStr += '現況: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 1) {
		if (revs[i] == 0) //正位
			returnStr += '助力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '阻力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 2) returnStr += '目標: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 3) returnStr += '基礎: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 4) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 5) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 6) returnStr += '自我: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 7) returnStr += '環境: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 8) {
		if (revs[i] == 0) //正位
			returnStr += '希望: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '恐懼: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 9) returnStr += '結論: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);

	}

	} else {

	if (text == null)
		returnStr = tarotCardReply(rollbase.FunnyDice(79)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
		returnStr = tarotCardReply(rollbase.FunnyDice(79)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	}


	rply.text = returnStr;
	return rply;
}

function NomalDrawTarot(CardToCal, text) {
	let returnStr = '';

	if (text == null)
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	rply.text = returnStr;
	return rply;
}


function tarotRevReply(count) {
	let returnStr = '';

	if (count == 0) returnStr = '＋';
	if (count == 1) returnStr = '－';

	return returnStr;
	//return rply;
}


function tarotCardReply(count) {
	let returnStr = '';
	// returnStr = count + '愚者';
	if (count == 0) returnStr = '愚者';
	if (count == 1) returnStr = '魔術師';
	if (count == 2) returnStr = '女祭司';
	if (count == 3) returnStr = '女皇';
	if (count == 4) returnStr = '皇帝';
	if (count == 5) returnStr = '教皇';
	if (count == 6) returnStr = '戀人';
	if (count == 7) returnStr = '戰車';
	if (count == 8) returnStr = '力量';
	if (count == 9) returnStr = '隱者';
	if (count == 10) returnStr = '命運之輪';
	if (count == 11) returnStr = '正義';
	if (count == 12) returnStr = '吊人';
	if (count == 13) returnStr = '死神';
	if (count == 14) returnStr = '節制';
	if (count == 15) returnStr = '惡魔';
	if (count == 16) returnStr = '高塔';
	if (count == 17) returnStr = '星星';
	if (count == 18) returnStr = '月亮';
	if (count == 19) returnStr = '太陽';
	if (count == 20) returnStr = '審判';
	if (count == 21) returnStr = '世界';
	if (count == 22) returnStr = '權杖一';
	if (count == 23) returnStr = '權杖二';
	if (count == 24) returnStr = '權杖三';
	if (count == 25) returnStr = '權杖四';
	if (count == 26) returnStr = '權杖五';
	if (count == 27) returnStr = '權杖六';
	if (count == 28) returnStr = '權杖七';
	if (count == 29) returnStr = '權杖八';
	if (count == 30) returnStr = '權杖九';
	if (count == 31) returnStr = '權杖十';
	if (count == 32) returnStr = '權杖侍者';
	if (count == 33) returnStr = '權杖騎士';
	if (count == 34) returnStr = '權杖皇后';
	if (count == 35) returnStr = '權杖國王';
	if (count == 36) returnStr = '聖杯一';
	if (count == 37) returnStr = '聖杯二';
	if (count == 38) returnStr = '聖杯三';
	if (count == 39) returnStr = '聖杯四';
	if (count == 40) returnStr = '聖杯五';
	if (count == 41) returnStr = '聖杯六';
	if (count == 42) returnStr = '聖杯七';
	if (count == 43) returnStr = '聖杯八';
	if (count == 44) returnStr = '聖杯九';
	if (count == 45) returnStr = '聖杯十';
	if (count == 46) returnStr = '聖杯侍者';
	if (count == 47) returnStr = '聖杯騎士';
	if (count == 48) returnStr = '聖杯皇后';
	if (count == 49) returnStr = '聖杯國王';
	if (count == 50) returnStr = '寶劍一';
	if (count == 51) returnStr = '寶劍二';
	if (count == 52) returnStr = '寶劍三';
	if (count == 53) returnStr = '寶劍四';
	if (count == 54) returnStr = '寶劍五';
	if (count == 55) returnStr = '寶劍六';
	if (count == 56) returnStr = '寶劍七';
	if (count == 57) returnStr = '寶劍八';
	if (count == 58) returnStr = '寶劍九';
	if (count == 59) returnStr = '寶劍十';
	if (count == 60) returnStr = '寶劍侍者';
	if (count == 61) returnStr = '寶劍騎士';
	if (count == 62) returnStr = '寶劍皇后';
	if (count == 63) returnStr = '寶劍國王';
	if (count == 64) returnStr = '錢幣一';
	if (count == 65) returnStr = '錢幣二';
	if (count == 66) returnStr = '錢幣三';
	if (count == 67) returnStr = '錢幣四';
	if (count == 68) returnStr = '錢幣五';
	if (count == 69) returnStr = '錢幣六';
	if (count == 70) returnStr = '錢幣七';
	if (count == 71) returnStr = '錢幣八';
	if (count == 72) returnStr = '錢幣九';
	if (count == 73) returnStr = '錢幣十';
	if (count == 74) returnStr = '錢幣侍者';
	if (count == 75) returnStr = '錢幣騎士';
	if (count == 76) returnStr = '錢幣皇后';
	if (count == 77) returnStr = '錢幣國王';
	if (count == 78) returnStr = '空白牌';
	return returnStr;
	//return rply;

}
////////////////////////////////////////
//////////////// choice 及SORT
////////////////////////////////////////
function choice(input,str) {
	let a = input.replace(str[0], '').match(/\S+/ig);
	rply.text = str[0] + '['+ a + '] → ' + a[rollbase.Dice(a.length)-1];
	return rply;
}

 function SortIt(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + ' → ['+ a + ']' ;
	return rply;
 }

module.exports = {
	BStyleFlagSCRIPTS,
	randomReply,
	randomLuck,
	RockPaperScissors,
	MultiDrawTarot,
	NomalDrawTarot,
	SortIt,
	tarotRevReply,
	choice,
	tarotCardReply	
};
