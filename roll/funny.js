var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function BStyleFlagSCRIPTS() {
let PersonalDescriptionArr = ['神族', '魔族', '妖精族', '人族', '巨人族', '森精族', '獸人族', '天翼族', '機凱族', '魚人族', '吸血鬼族', '龍族']
let IdeologyBeliefsArr = ['男性', '女性'];
let SignificantPeopleArr = ['結實的', '英俊的', '粗鄙的', '機靈的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的', '青春洋溢的', '感覺疲憊的', '豐滿的', '粗壯的', '毛髮茂盛的', '苗條的', '優雅的', '邋遢的', '敦實的', '蒼白的', '陰沉的', '平庸的', '臉色紅潤的', '皮膚黝黑色', '滿臉皺紋的', '古板的', '有狐臭的', '狡猾的', '健壯的', '嬌俏的', '筋肉發達的', '魁梧的', '遲鈍的',  '虛弱的', '可愛的', '萌萌的', '帥氣的', '有獸耳的'];
let SignificantPeopleWhyArr = ['虔誠信仰著某個神祈', '覺得人類不需要依靠宗教也可以好好生活', '覺得科學可以解釋所有事，並對某種科學領域有獨特的興趣', '相信因果循環與命運', '是一個政黨、社群或秘密結社的成員','覺得這個社會已經病了，而其中某些病灶需要被剷除', '是神秘學的信徒', '是積極參與政治的人，有特定的政治立場', '覺得金錢至上，且為了金錢不擇手段', '是一個激進主義分子，活躍於社會運動']
let MeaningfulLocationsArr = ['他的父母', '他的祖父母', '他的兄弟姐妹', '他的孩子', '他的另一半','他的兒時好友', '他心目中的偶像或是英雄'];
let TreasuredPossessionsArr = ['一件他的在工作上需要用到的必需品', '一個從他童年時就保存至今的寶物', '一樣由最重要的人給予他的物品', '一件珍視的蒐藏品', '一件無意間發現，但不知道到底是什麼的東西，正努力尋找答案', '某種體育用品', '一把特別的武器', '他的寵物'];
let HpSettingArr = ['100','200','300','400','500','600','700','800','900','1000','不明']
let MpSettingArr = ['1000','2000','3000','4000','5000','6000','7000','8000','9000','10000','不明']

rply.text = '【種族】:' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '【性別】:' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '【血量】：' + HpSettingArr[Math.floor((Math.random() * (HpSettingArr.length)) + 0)] + '【魔力】' + MpSettingArr[Math.floor((Math.random() * (MpSettingArr.length)) + 0)] + '【特徵】他是一個' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '人。【信念】:他' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)] + '。【重要之人】：對他來說，最重要的人是' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + '【寶貴之物】：他最寶貴的東西就是'+ TreasuredPossessionsArr[Math.floor((Math.random() * (TreasuredPossessionsArr.length)) + 0)];
return rply;
}

function randomLuck(TEXT) {
let rplyArr = ['吉爆','爆吉','大爆吉','大吉吉','你大吉吉','這我一定吉','你真的凶爆呃','請選擇：凶爆 爆凶','吉到爆啦','別吉啦','超吉','超級上吉','大吉','吉','中吉','小吉','末吉','中吉','凶','小凶','沒凶','大凶','很凶','你不要知道比較好呢','命運在手中,何必問我','凶爆','你好凶','凶屁凶','乖 你不會想知道的','嗯…殘念','有吉也沒用 唉…','你猜猜看','嗯咦 嗯… 嗯','這是世界的真理','你不能看透這世界','我勸你 不要追問下去'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomIIK() {
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
	randomLuck,
	randomIIK,
	SortIt,
	choice,
};
