var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function BStyleFlagSCRIPTS() {
let PersonalDescriptionArr = ['神族', '魔族', '妖精族', '人族', '巨人族', '森精族', '獸人族', '天翼族', '機凱族', '魚人族', '吸血鬼族', '龍族']
let IdeologyBeliefsArr = ['男性', '女性'];
let SignificantPeopleArr = ['結實的', '帥氣的', '粗鄙的', '機靈的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的', '青春洋溢的', '感覺疲憊的', '豐滿的', '粗壯的', '毛髮茂盛的', '苗條的', '優雅的', '邋遢的', '敦實的', '蒼白的', '陰沉的', '平庸的', '臉色紅潤的', '皮膚黝黑色', '滿臉皺紋的', '古板的', '有狐臭的', '狡猾的', '健壯的', '嬌俏的', '筋肉發達的', '魁梧的', '遲鈍的',  '虛弱的', '可愛的', '萌萌的', '帥氣的', '有獸耳的','傲嬌的','色色的','傲慢的','爆肌的','甲甲的','智障的','賈巴的','經常女裝的','現充的','邊緣的','狗幹的','心理變態的','變態的','兄控的','蘿莉控的','姐控的','妹控的','怪物控的','肥宅的'];
let SignificantPeopleWhyArr = ['虔誠信仰著某個神祈', '覺得人類不需要依靠宗教也可以好好生活，從而毀滅了世界上1/3的宗教', '做出了一個有超巨大威力的武器希望藉此毀滅地球，但最後被阻止了', '改變了世界上一切的因果循環與命運', '創立了世界上最神秘的秘密結','剷除了一個國家', '是神秘學的信徒', '在學校令一整個班級的人懷孕了', '覺得金錢至上，且為了金錢不擇手段', '是一個激進主義分子，活躍於社會運動','女裝並被室友幹上了','當過偽娘','愛上了一隻怪獸','在路上拔掉所有他遇到的男性的雞雞','變成了安特','毀滅了他所看到的現充','生過10個小孩','被100個女生告白','令100個女生懷孕了','交過50個女朋友','交過100個男朋友','令一個男生懷孕了']
let MeaningfulLocationsArr = ['他的父母', '他的祖父母', '他的兄弟姐妹', '他的孩子', '他的另一半','他的兒時好友', '他心目中的偶像或是英雄'];
let TreasuredPossessionsArr = ['一件他的在工作上需要用到的必需品', '一個從他童年時就保存至今的寶物', '一樣由最重要的人給予他的物品', '一件珍視的蒐藏品', '一件無意間發現，但不知道到底是什麼的東西，正努力尋找答案', '某種體育用品', '一把特別的武器', '他的寵物'];
let HpSettingArr = ['100','200','300','400','500','600','700','800','900','1000','不明']
let MpSettingArr = ['1000','2000','3000','4000','5000','6000','7000','8000','9000','10000','不明']

rply.text = '【種族】:' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '【性別】:' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '【血量】：' + HpSettingArr[Math.floor((Math.random() * (HpSettingArr.length)) + 0)] + '【魔力】' + MpSettingArr[Math.floor((Math.random() * (MpSettingArr.length)) + 0)] + '【特徵】他是一個' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '人。【往事】:他曾經' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)] + '。【重要之人】：對他來說，最重要的人是' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + '【寶貴之物】：他最寶貴的東西就是'+ TreasuredPossessionsArr[Math.floor((Math.random() * (TreasuredPossessionsArr.length)) + 0)];
return rply;
}

function randomLuck(TEXT) {
let rplyArr = ['吉爆','爆吉','大爆吉','大吉吉','你大吉吉','這我一定吉','你真的凶爆呃','請選擇：凶爆 爆凶','吉到爆啦','別吉啦','超吉','超級上吉','大吉','吉','中吉','小吉','末吉','中吉','凶','小凶','沒凶','大凶','很凶','你不要知道比較好呢','命運在手中,何必問我','凶爆','你好凶','凶屁凶','乖 你不會想知道的','嗯…殘念','有吉也沒用 唉…','你猜猜看','嗯咦 嗯… 嗯','這是世界的真理','你不能看透這世界','我勸你 不要追問下去'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomYuki() {
let rplyArr = ['\
真的', '\
他都喜歡欺負人', '\
壞壞', '\
超過分'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomAOE() {
let rplyArr = ['\
里維：俺の名はレヴィ，覚えとけ！', '\
葛利姆：さぁ！その胸に刻むがよい！我こそは軍神！踊り狂う暴風！グリイイイイイイイムニル！', '\
社長：全身全霊で貴様を穿つ', '\
社長：この一槍に魂を賭す', '\
法夫納：天地を焦がす', '\
癲狂暴龍：吼!!', '\
巴哈姆特：吼!!!!!!(打嗝', '\
白貞：我が力は、神のみわざなり！', '\
黑貞：この戦場に神などいない', '\
秘銀石像：噹噹', '\
默示錄：(Boom)', '\
蛋蛋大爆炸：ピカっと光ったるぞぉ！', '\
鮮血女帝：アハハハ！嗤える死に様だ！'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function CommandRequire() {
let Requirement = ['【免責聲明】 \n【警告】本列表含有大量訊息 請勿在【群組】內使用 請使用【私訊】對本Bot使用以了解所有的指令 \n本Bot作者因方便其使用者使用本Bot而設立本指令列表 其不當使用/不跟隨以上警告所使用 所有責任不應歸其作者身上 其所有責任均在其使用者身上 本Bot作者不會對其所發生的事情負上一切責任 \n請在了解以上免責聲明後 回答以下問題以取得指令列表：5x2x10+3×21 並在答案的前方加上：CommandRequirementAns \n示範：CommandRequirementAns1234']
rply.text = Requirement ;
return rply;
}

function CommandList() {
let CList = ['【娜娜奇/變態】【可以/我覺得可以】 \n【不要/no/我不要/我才不要】【打牌/不打牌/這月/這個月】 \n【狗幹】【wry/wryy/wryyy/wryyyy】【我想想/我想想../我想想.../恩......】 \n【ㄎㄧㄤ/ㄎㄧㄠ爆/ㄎㄧㄤ爆】【…/……/………/無言】 \n【我不玩了/QQ/不玩了/我不玩了啦/不玩了啦】 \n【怕/怕爆】【幹】【斷/断る/断る！/断る!/斷!/斷！】 \n【不行/我覺得不行】【抽吧/想抽卡/想抽卡包/抽卡吧/去抽卡】 \n【吃/手手/吃手手】【good/讚/好/great/grateful】 \n【噁心】【沒錢/沒有錢】【吉良吉影】【黎明/幹你黎明/淦你黎明/黎明卿】 \n【不好說/真的不好說】【內褲/胖次】【ola/喔啦】【媽媽/大ㄐㄐ媽媽】 \n【腦袋在顫抖啊啊啊/腦袋在顫抖rrr】【哈/哈哈/哈哈哈/哈哈哈哈】 \n【露娜】【我們懷念他/RIP/懷念】【哥哥/大哥哥】【蜜雪兒】 \n【沒辦法了/莓辦法了/沒辦法/莓辦法】【要抽那包?/要抽那包？/要抽那個卡包？】 \n【(望/（望/望/（盯/(盯/盯】【正直】【Star Platinum Zawarudo/Star Platinun】 \n【被喚醒的禁忌/解放/解放】【我的大爆解】【大爆射/爆射/射爆】 \n【fbi/羈押/蘿莉/蘿莉控】【奧森】【冷】 \n【不要停下來啊/停下/偷馬魯甲內走/不要停下來呀】【升降機/升降梯/米蒂】【普魯修卡】【嗚嗚】 \n【安特衛星砲/衞星砲/衛星砲/安特衞星砲/大砲】【喵多囉拉達！！！/喵多囉拉達！！/喵多囉拉達！】 \n【ZA WARUDO】【阿拉達/真怠惰呢~】【看開/看開點/看開點吧/已看開了】 \n【北七/幹北七/幹/北七/北七?/北七喔】【九雲 我要幫助】【不明白】【露娜輸了】【秘技 第一式】 \n【天選】【你看看你/那人又課金/你看看】【莓良心】【逆轉/反殺】【叭叭/上車/開車】【Explosion】【社工】 \n【黑人問號/到底/???/????】【喔喔喔~/喔喔喔/喔 原來如此/喔~/喔喔~】 \n【甲爆/甲甲/甲男/甲】【摸/摸摸/狂摸/摸樓上/摸摸樓上】【彈藥包】【替身攻擊】 \n【桃樂絲/桃桃】【奧義/必殺/絕技】【棒/很棒/這很棒/太棒了/超棒】 \n【kappa】【( ´•௰•`)】【疾走教/放審判/要不要放審判】【送你課金優惠卷/課金卷/送你課金優惠券】 \n【紫色奶頭/拯救世界/殘酷/主教/伊莉絲】【伊莎貝爾】【壓力】【騷/硬/in/In/Inbow】【碰/衝撞】【課金/課長】 \n【qliphot rhizome/qliphot/rhizome】【擁有】【莉嘉】【蟲蟲】【呆】【騙我/幹/騙我/幹!騙我!/幹!!騙我!!】 \n【深淵】【復仇者/加速裝置/大爆解】【恭喜】【自拍/自拍教學/如何自拍】【鐵拳】 \n【祝福】【萌】【滾】【夏莉歐/閃光夏莉歐/閃光的夏莉歐】【上Buff/buff】【世界/超越】【@我】 \n【笑	(笑,（笑】【斑比/班比】【我能怎麽辦/絕望/絕望了】【爆死】【吃土】【幹你娘】【巴哈】【路西法】【叮噹/叮噹叮噹/叮咚/叮咚叮咚】 \n【爸爸棒】【送分】【眼睛】【鋪起來】【傷心/悲傷/哭/哭爆/淚/淚流滿面】 \n【畫皮】【沒珠/沒鑽/沒石/沒有珠/沒有鑽/沒有石頭】【送你課金兌換券	】【屁啦/屁啦w/屁啦ww/別瞎掰/瞎掰】 \n【天照/烤肉】【燒/燒他/歐洲/歐洲人/燒她/真歐】【好騷/想幹/高清/無碼】【muda/無馱/無駄/むだ】 \n【抓到/判決/最終裁決/抓到 死刑/死刑】【真怠惰呢】【我又非洲了/抽不到/非洲人/非洲了】【湯圓】 \n【魔鬥凱/莫迪凱/決鬥者魔鬥凱/決鬥者莫迪凱】【最高】【幫我撐10秒/幫我撐十秒】【星爆】 \n【~/~~/嘟嘟嚕嘟/嘟嘟嚕嘟】【謝謝】【叛徒】【我叫你上車!!/我叫你上車】【葬送/宙斯/埋】【魔法少女】 \n【被喚醒的禁忌禁忌 召喚/禁忌召喚/召喚】【大雞雞/禁忌】']
rply.text = CList ;
return rply;
}

function randomReply() {
let rplyArr = ['\
笨蛋吹雪！！', '\
幹 走開', '\
想被扔進焚化爐?', '\
來 跪下', '\
走開', '\
噁心', '\
Get Out', '\
滾', '\
你們死定了呃呃呃不要糾結這些……所以是在糾結哪些？', '\
嗚噁噁噁噁噁噁，不要隨便叫我。', '\
幹，你這學不會的豬！', '\
嘎嘎嘎。', '\
你壞掉了，50元收', '\
你打到虛脫了', '\
wwwwwwwwwwwwwwwww', '\
為什麼你們每天都可以一直玩；玩就算了還玩我。', '\
在南半球，一隻海豹在拍打吹雪。', '\
什麼東西你共三小。', '\
我甚麼也不知道', '\
一直叫，你4不4想嘴人家？', '\
八雲你也敢嘴？', '\
我的嘴巴會長出觸手，然後開花成四個花瓣哦 (´×`)', '\
看看我！！我體內的怪物已經這麼大了！！', '\
傳說中，凡是喝過水的人，有高機率在100年內死去。', '\
人類每花60秒在工作，就減少一分鐘的壽命。', '\
你在大聲什麼啦！！！！', '\
公道價，八萬一（伸手）。', '\
你的嘴裡有異音（指）', '\
有人打你的左臉，你就要用肉食性猛擊咬斷他的小腿。', '\
喵?', '\
嗯?', '\
安安', '\
死掉了 好像', '\
在那邊 (指', '\
(指', '\
私は魔法少女です！！', '\
止まるんじゃねぇぞ…', '\
私はあなたと友達をすることができるか？', '\
希望のはな 繋いだ絆が', '\
變態！！', '\
怎了??', '\
Wryyyyy', '\
替身攻擊！！', '\
JoJo我不當人類啦！！', '\
母湯喔', '\
誰叫我??', '\
(望 ', '\
( ´•௰•`)( ´•௰•`)( ´•௰•`)( ´•௰•`)', '\
MudaMudaMudaMuda', '\
不要', '\
走開'];
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
	BStyleFlagSCRIPTS,
	CommandRequire,
	CommandList,
	randomReply,
	randomYuki,
	randomLuck,
	randomAOE,
	RockPaperScissors,
	MultiDrawTarot,
	NomalDrawTarot,
	SortIt,
	tarotRevReply,
	choice,
	tarotCardReply	
};
