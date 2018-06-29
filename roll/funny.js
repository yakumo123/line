var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 占卜&其他
////////////////////////////////////////


function FoodChoices(TEXT) {

let rplyArr = ['蕎麥麵 ','小籠包','拉麵','瓜仔肉','壽司','刺身','炸雞','排骨飯','意大利麵','滷肉飯','銅鑼燒','米粉炒','肉燥飯','不吃','吃土','八雲','吹雪','安特','牛丼','親子丼','麵包','麥當勞','漢堡','KFC','銅鑼燒','鹽酥雞','胡椒餅','鍋貼','粽子','披薩','烤雞','烤肉','石頭鍋飯','羊肉爐','麻油雞','肉羹','擔仔麵','排骨麵','蔥抓餅','刈包','薑汁番茄','生煎包','蚵仔煎','肉粽','炸雞排','烤玉米、烤番薯','烤香腸','蔥油餅','臭豆腐','肉圓','蚵仔麵線','筒仔米糕','豬血糕','蛋包飯','摩斯','海南雞飯','阿忠麵線','麵線','火鍋','三明治','涼麵','拌麵','烏冬','燒臘飯','海鮮丼','部隊鍋','魷魚焿','熱狗堡','豬腳飯','炒飯','雞腿飯','炸雞排','蛋餅','沙拉','咖哩','雞肉咖哩','瑞典肉丸','德國豬腳','雞塊','鐵板燒','印度薄餅','豬排飯','牛排飯','便當','貢丸湯','泰式炒河粉','韓式炒年糕','紫菜包飯','韓式燒烤','酸辣湯麵','西班牙海鮮飯','坦都里烤雞','千層麵','春捲'];
	
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];

return rply;

}

function Character(TEXT) {
let PersonalDescriptionArr = ['神族', '魔族', '妖精族', '人族', '巨人族', '森精族', '獸人族', '天翼族', '機凱族', '魚人族', '吸血鬼族', '龍族']
let IdeologyBeliefsArr = ['男性', '女性'];
let RPGCareerArr = ['戰士（FIG） \n【職業特徵】：可以裝備強大的武器和重甲。不僅作為一個簡單的戰鬥人員，也是作為一個站在前衛的防衛。但移動速度偏低。', '騎士（KNI） \n【職業特徵】：可以裝備非常重的盔甲。此外，亦擁有優秀的防守技能。但戰鬥力不高。', '狂戰士（BER） \n【職業特徵】：可以裝備一件非常重的武器。而且可以使用瞬發火力高的攻擊技能。但是，大多數裝甲不能裝備，並且耐力很低。', '盜賊（THI） \n【職業特徵】：移動速度快。可以使用特殊技能“隱藏”。隱藏時，敵人無法察覺存在的氣息，並且能在“隱藏”時發動技能“突襲”。而且具有“陷阱解除”，“偷竊”等技巧。但只能穿輕便且防禦力很低的皮裝或布裝，防禦力低且被攻擊時傷害會翻倍。', '祭司（SHE） \n【職業特徵】：優秀的輔助。除了擁有很多輔助系統的魔法，召喚魔法，並持有大量治療及狀態異常回復的魔法。但是只能裝備極輕的裝甲，不過能裝備持有神聖屬性附魔的裝甲。', '魔法師（MAG） \n【職業特徵】：能使用大量的元素魔法及擁有大範圍的攻擊魔法，此外亦能使用附魔魔法對武器進化附魔，替武器附上不同的屬性。魔力回復速度極高且魔法做成的傷害極大。不過只能裝備防禦力低下的輕便裝甲。', '死靈法師（NEC） \n【職業特徵】：能使用大量的召喚魔法。此外亦擁有“死者復甦”跟“靈魂附着。但使役亡者需要消耗大量魔力，耐久值偏低'];
let SignificantPeopleArr = ['非洲的', '抽不到主戰的', '甲爆的', '變態的', '歐洲的', '結實的', '帥氣的', '粗鄙的', '機靈的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的', '青春洋溢的', '感覺疲憊的', '豐滿的', '粗壯的', '毛髮茂盛的', '苗條的', '優雅的', '邋遢的', '敦實的', '蒼白的', '陰沉的', '平庸的', '臉色紅潤的', '皮膚黝黑色', '滿臉皺紋的', '古板的', '有狐臭的', '狡猾的', '健壯的', '嬌俏的', '筋肉發達的', '魁梧的', '遲鈍的',  '虛弱的', '可愛的', '萌萌的', '帥氣的', '有獸耳的','傲嬌的','色色的','傲慢的','爆肌的','甲甲的','智障的','賈巴的','經常女裝的','現充的','邊緣的','狗幹的','心理變態的','變態的','兄控的','蘿莉控的','姐控的','妹控的','怪物控的','肥宅的'];
let SignificantPeopleWhyArr = ['虔誠信仰著某個神祈', '覺得人類不需要依靠宗教也可以好好生活，從而毀滅了世界上1/3的宗教', '做出了一個有超巨大威力的武器希望藉此毀滅地球，但最後被阻止了', '改變了世界上一切的因果循環與命運', '創立了世界上最神秘的秘密結','剷除了一個國家', '是神秘學的信徒', '在學校令一整個班級的人懷孕了', '覺得金錢至上，且為了金錢不擇手段', '是一個激進主義分子，活躍於社會運動','女裝並被室友幹上了','當過偽娘','愛上了一隻怪獸','在路上拔掉所有他遇到的男性的雞雞','變成了安特','毀滅了他所看到的現充','生過10個小孩','被100個女生告白','令100個女生懷孕了','交過50個女朋友','交過100個男朋友','令一個男生懷孕了']
let MeaningfulLocationsArr = ['他的父母', '他的祖父母', '他的兄弟姐妹', '他的孩子', '他的另一半','他的兒時好友', '他心目中的偶像或是英雄', '他的好基友', '【沒有】', '安特', '吹雪', '八雲', '女朋友', 'LM', '兔子', '某一名變態'];
let TreasuredPossessionsArr = ['一件他的在工作上需要用到的必需品', '一個從他童年時就保存至今的寶物', '一樣由最重要的人給予他的物品', '一件珍視的蒐藏品', '一件無意間發現，但不知道到底是什麼的東西，正努力尋找答案', '某種體育用品', '一把特別的武器', '他的寵物'];
let HpSettingArr = ['100','200','300','400','500','600','700','800','900','1000','不明']
let MpSettingArr = ['1000','2000','3000','4000','5000','6000','7000','8000','9000','10000','不明']

rply.text = TEXT[0] + ' ： ' + '\n【種族】：' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '\n【性別】：' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '\n【職業】：' + RPGCareerArr[Math.floor((Math.random() * (RPGCareerArr.length)) + 0)] + '\n【血量】：' + HpSettingArr[Math.floor((Math.random() * (HpSettingArr.length)) + 0)] + '【魔力】：' + MpSettingArr[Math.floor((Math.random() * (MpSettingArr.length)) + 0)] + '\n【特徵】：他是一個' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '人。 \n【往事】：他曾經' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)] + '。 \n【重要之人】：對他來說，最重要的人是' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + ' \n【寶貴之物】：他最寶貴的東西就是'+ TreasuredPossessionsArr[Math.floor((Math.random() * (TreasuredPossessionsArr.length)) + 0)];
return rply;
}

function BStyleFlagSCRIPTS() {
let rplyArr = ['\
喵??', '\
誰叫我??', '\
八雲參上！！！', '\
怎了??', '\
喵喵喵喵~~~', '\
萌爆八雲參上', '\
呀呢呢~~', '\
(盯', '\
再說一次吧', '\
聽不到啦！！大聲點！！', '\
窩甚麼也看不到', '\
救命呀！！！！', '\
閣下的呼喚 暫時未能傳遞 請晚點再呼喚一次~', '\
大召喚儀式 八雲……召喚！！', '\
叫誰???', '\
嘟嘟嚕嘟 嘟嘟嚕嘟 嘟嘟嚕督大大', '\
嗯姆~', '\
暗黑召喚！！', '\
亡者召返99 \n八雲召喚成功', '\
๛ก(ｰ̀ωｰ́ก) ', '\
(謎之聲)你能付出多少代價?', '\
大聲點啦！！！！', '\
你在大聲甚麼啦！！！！', '\
現充爆炸吧！！(鬧事', '\
其實………你在叫八雲(???', '\
你…已經死了！  \n【謎之聲】：甚麼！！？？', '\
(亮刀', '\
你是誰？？？別過來呀！！！(尖叫', '\
你就算得到我的身體 你也不會得到我的心的！', '\
三 小 啦 ！ ！', '\
嗯？', '\
說！你想幹嘛！你別過來', '\
走開！不要接近我', '\
我……才不想被你叫呢！哼！', '\
我看你有多少能耐', '\
我的鮮血 我感覺到他在沸騰中', '\
別接近我！！我怕我控制不到寄宿在我右手的力量(呀！！！！！', '\
喵喵喵！'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}
	
function randomReply() {
let rplyArr = ['\
嘿死肥宅，叫我嗎？', '\
哈囉大家好喔，班比在此。 \n最愛你們了<3', '\
摁？怎麼了？', '\
抱抱', '\
怎麼啦肥宅？', '\
是不是想幹人家啊', '\
>///<', '\
亂叫！要叫班比殿下啊！\n班比是吸血鬼公主欸有沒有搞錯！', '\
班比是最厲害的喔！', '\
摁嘎嘎', '\
嘿～叫我幹嘛～', '\
不要玩班比啦><你們壞壞', '\
班比在約炮你吵屁', '\
班比好寂寞...要不要當班比的朋友呢', '\
誰叫班比？ \n沒有的話就潛水去', '\
主人有何吩咐？', '\
是！怎麼了？ \n班比永遠都是你的專屬女僕', '\
親愛的什麼事啊？', '\
有人叫班比嗎？（浮', '\
班比潛水去', '\
僕從快獻上吃的啊班比餓了啦', '\
班比你也敢嘴？', '\
在下吸血鬼公主班比，報上名來', '\
在下班比，是吸血鬼的公主殿下', '\
想跟班比約炮的人請排隊。 \n一直叫班比是沒有比較快的喔。', '\
有何貴幹？ \n班比很忙的快說喔', '\
嗚嗚，班比餓餓', '\
所以就是沒有coda可以傳訊息了 \n班比維修好之後不知道怎麼跟大家說', '\
還是你覺得班比需要大家斗內>//<', '\
班比想吃甜食配上僕從的血', '\
還沒有車可以開，大家不要緊張', '\
班比可是很忙的呢，一直叫班比是想幹麻？', '\
什麼啦！什麼班比壞掉了！亂說！', '\
來啊來打架～輸的退群哈哈哈哈'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}
	
function randomLuck(TEXT) {
let rplyArr = ['超吉','超級上吉','大吉','吉','中吉','小吉','吉','小吉','吉','吉','中吉','吉','中吉','吉','中吉','小吉','末吉','吉','中吉','小吉','末吉','中吉','小吉','小吉','吉','小吉','末吉','中吉','小吉','凶','小凶','沒凶','大凶','很凶','你不要知道比較好呢','命運在手中,何必問我'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomLulla() {
let rplyArr = ['\
I very vegetable' ,'\
(問號)' ,'\
????'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomSmileFace() {
let rplyArr = ['\
安妮後援會會長' ,'\
偽娘笑臉' ,'\
跑出來的笑臉' ,'\
笑臉逐漸母湯中' ,'\
都被露菈打爆'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomShame() {
let rplyArr = ['\
你給我去罰寫班比100次' ,'\
你媽才斑比' ,'\
你當我小鹿斑比喔' ,'\
斑 你 妹 啦！！' ,'\
啥??我給機會你再說一次' ,'\
班啦幹' ,'\
你中文能力是不是差成這樣 班跟斑也分不清' ,'\
我班比今天要打死你這個分不清 班 跟 斑 的文盲'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
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
	FoodChoices,
	Character,
	BStyleFlagSCRIPTS,
	randomReply,
	randomLuck,
	randomLulla,
	randomSmileFace,
	randomShame,
	RockPaperScissors,
	MultiDrawTarot,
	NomalDrawTarot,
	SortIt,
	tarotRevReply,
	choice,
	tarotCardReply	
};
