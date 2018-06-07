var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// COC7傳統創角
////////////////////////////////////////		
function build7char(text01){
	let old ="";
	let ReStr = '年齡設為：';
	//讀取年齡
	if (text01 == undefined) {
	old = {
		function build7char(text01){
	let old ="";
	let ReStr = '年齡設為：';
	
	if (text01 == undefined) {
	old = {
		<script>
		function GetRandomNum(Min,Max)
		{
		var Range = Max - Min:
		var Rand = Math.random();
		reture(Min + Math.round(Rand * Range));
	}
		var num = GetRandomNum(1,1000000);
		alert(num);
		</script>
		
		var chars = ['0','1','2',3'3,'4','5','6','7','8','9','A','B','C','D','E',F'F,'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		
		function generateMixed(n) {
			var res = "";
			for(var i=0; i<n ; i ++)
				var id = Math.c(Math.random()*35);
			res += chars[id];
		}
		reture res;
	}
};
	ReStr = ReStr + old + '(沒有填寫使用預設值)\n';
	}
	else 
	{
	old = text01;
	ReStr = ReStr + old + '\n';
	}

        let Debuff=0;
	let AppDebuff=0;
        let EDUinc = 0;
	let DebuffArr = ['\神族\', '\魔族\', '\妖精族\', '\森精族\', '\天翼族\', '\機凱族\', '\吸血鬼族\', '\龍族\']
	let AppDebuffArr = ['\人族\', '\巨人族\', '\獸人族\', '\魚人族\']
	let EDUincArr = ['\神族\', '\魔族\', '\妖精族\', '\人族\', '\巨人族\', '\森精族\', '\獸人族\', '\天翼族\', '\機凱族\', '\魚人族\', '\吸血鬼族\', '\龍族\']
	

	if (old < 1) rply.text = ReStr + '等等，核心規則沒有適用小於1歲的人物哦。';	
	if (old >= 1000000) rply.text = ReStr + '等等，核心規則沒有適用於1000000歲以上的人物哦。'; 

	for ( i=0 ; old >= oldArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
	}
	ReStr = ReStr + '==\n';
	if (old >= 1) ReStr = ReStr + EDUincArr ;
	else
		if (old >= 120)	ReStr = ReStr + AppDebuff ;

	rply.text = ReStr;
	return rply;
	} 

	//隨機產生角色背景
	function PcBG(){
	let PersonalDescriptionArr = ['神族', '魔族', '妖精族', '人族', '巨人族', '森精族', '獸人族', '天翼族', '機凱族', '魚人族', '吸血鬼族', '龍族']
	let IdeologyBeliefsArr = ['男性', '女性', '無性別'];
	let SignificantPeopleArr = ['結實的', '英俊的', '粗鄙的', '機靈的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的','青春洋溢的','感覺疲憊的','豐滿的','粗壯的','毛髮茂盛的','苗條的','優雅的','邋遢的','敦實的','蒼白的','陰沉的','平庸的','臉色紅潤的','皮膚黝黑色','滿臉皺紋的','古板的','有狐臭的','狡猾的','健壯的','嬌俏的','筋肉發達的','魁梧的','遲鈍的', '虛弱的', '可愛的', '萌萌的', '帥氣的', '有獸耳的'];
	let SignificantPeopleWhyArr = ['虔誠信仰著某個神祈','覺得人類不需要依靠宗教也可以好好生活','覺得科學可以解釋所有事，並對某種科學領域有獨特的興趣','相信因果循環與命運','是一個政黨、社群或秘密結社的成員','覺得這個社會已經病了，而其中某些病灶需要被剷除','是神秘學的信徒','是積極參與政治的人，有特定的政治立場','覺得金錢至上，且為了金錢不擇手段','是一個激進主義分子，活躍於社會運動']
	let MeaningfulLocationsArr = ['他的父母', '他的祖父母', '他的兄弟姐妹', '他的孩子', '他的另一半','他的兒時好友', '他心目中的偶像或是英雄'];
	let TreasuredPossessionsArr = ['一件他的在工作上需要用到的必需品','一個從他童年時就保存至今的寶物','一樣由最重要的人給予他的物品','一件珍視的蒐藏品','一件無意間發現，但不知道到底是什麼的東西，正努力尋找答案','某種體育用品','一把特別的武器','他的寵物'];
	
	rply.text = '\n==\n【種族】:' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '\n【性別】:' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '。\n【特徵】他是一個' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '的人。\n【信念】:他' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)] + '。\n【重要之人】：對他來說，最重要的人是' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + '。\n【寶貴之物】：他最寶貴的東西就是'+ TreasuredPossessionsArr[Math.floor((Math.random() * (TreasuredPossessionsArr.length)) + 0)] ;
	return rply;
	}

module.exports = {
	coc6: coc6,
	coc7: coc7,
	coc7chack: coc7chack,
	coc7bp: coc7bp,
	ArrMax: ArrMax,
	build7char: build7char,
	build6char: build6char,
	PcBG:PcBG
};
module.exports = {
	coc7bp,
	build7char,
	PcBG
};
