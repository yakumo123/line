var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// COC6
////////////////////////////////////////		
function coc6(chack,text){
	let temp = rollbase.Dice(100);
	if (text == null ) {
		if (temp == 100) rply.text = 'ccb<=' + chack	+ ' ' + temp + ' → 啊！大失敗！';
		if (temp <= chack) rply.text = 'ccb<=' + chack + ' '	+ temp + ' → 成功';
		else rply.text = 'ccb<=' + chack	+ ' ' + temp + ' → 失敗' ;
	}
	else
	{
		if (temp == 100) rply.text = 'ccb<=' + chack + ' ' + temp + ' → 啊！大失敗！；' + text;
		if (temp <= chack) rply.text = 'ccb<=' + chack +	' ' + temp + ' → 成功；' + text;
		else rply.text = 'ccb<=' + chack	+ ' ' +	temp + ' → 失敗；' + text;
	}
	return rply;
}	

////////////////////////////////////////
//////////////// COC7
////////////////////////////////////////		

	
function coc7(chack,text){
	let temp = rollbase.Dice(100);	
	if (text == null ) {
	if (temp > chack) rply.text = temp + ' → 失敗' ;
	if (temp <= chack) rply.text = temp + ' → 通常成功';
	if (temp <= chack/2) rply.text = temp + ' → 困難成功';
	if (temp <= chack/5) rply.text = temp + ' → 極限成功';
	if (temp == 1) rply.text = temp + ' → 恭喜！大成功！';
	if (temp == 100) rply.text = temp + ' → 啊！大失敗！';
	if (temp >= 96 && chack <= 49) rply.text = temp + ' → 啊！大失敗！';
	}
	else
	{
	if (temp > chack) rply.text = temp + ' → 失敗；' + text;
	if (temp <= chack) rply.text = temp + ' → 通常成功；' + text;
	if (temp <= chack/2) rply.text = temp + ' → 困難成功；' + text;
	if (temp <= chack/5) rply.text = temp + ' → 極限成功；' + text;
	if (temp == 1) rply.text = temp + ' → 恭喜！大成功！；' + text;
	if (temp == 100) rply.text = temp + ' → 啊！大失敗！；' + text;
	if (temp >= 96 && chack <= 49) rply.text = temp + ' → 啊！大失敗！；' + text;
	}
		return rply;
}
	
function coc7chack(temp,chack,text){
  if (text == null ) {
    if (temp == 1) return temp + ' → 恭喜！大成功！';
    if (temp == 100) return temp + ' → 啊！大失敗！';
    if (temp >= 96 && chack <= 49) return temp + ' → 啊！大失敗！';
    if (temp <= chack/5) return temp + ' → 極限成功';
    if (temp <= chack/2) return temp + ' → 困難成功';
    if (temp <= chack) return temp + ' → 通常成功';
    else return temp + ' → 失敗' ;
  }
else
  {
    if (temp == 1) return temp + ' → 恭喜！大成功！；' + text;
    if (temp == 100) return temp + ' → 啊！大失敗！；' + text;
    if (temp >= 96 && chack <= 49) return temp + ' → 啊！大失敗！；' + text;
    if (temp <= chack/5) return temp + ' → 極限成功；' + text;
    if (temp <= chack/2) return temp + ' → 困難成功；' + text;
    if (temp <= chack) return temp + ' → 通常成功；' + text;
    else return temp + ' → 失敗；' + text;
  }
}



function coc7bp (chack,bpdiceNum,text){
	let temp0 = rollbase.Dice(10) - 1;
	let countStr = '';
	if (bpdiceNum > 0){
	for (let i = 0; i <= bpdiceNum; i++ ){
	let temp = rollbase.Dice(10);
	let temp2 = temp.toString() + temp0.toString();
	if (temp2 > 100) temp2 = parseInt(temp2) - 100;	
	countStr = countStr + temp2 + '、';
	}
	countStr = countStr.substring(0, countStr.length - 1) 
	let countArr = countStr.split('、'); 
	countStr = countStr + ' → ' + coc7chack(Math.min(...countArr),chack,text);
	rply.text = countStr;
		return rply;
	}
	
	if (bpdiceNum < 0){
	bpdiceNum = Math.abs(bpdiceNum);
	for (let i = 0; i <= bpdiceNum; i++ ){
		let temp = rollbase.Dice(10);
		let temp2 = temp.toString() + temp0.toString();
		if (temp2 > 100) temp2 = parseInt(temp2) - 100;	
		countStr = countStr + temp2 + '、';
	}
	countStr = countStr.substring(0, countStr.length - 1) 
	let countArr = countStr.split('、'); 
	countStr = countStr + ' → ' + coc7chack(Math.max(...countArr),chack,text);
	rply.text = countStr;
		return rply;
	}
}
	
function ArrMax (Arr){
	var max = this[0];
	this.forEach (function(ele,index,arr){
	if(ele > max) {
		max = ele;
	}
	})
	return max;
}
////////////////////////////////////////
//////////////// COC7傳統創角
////////////////////////////////////////		
function build7char(text01){
	let old ="";
	let ReStr = '調查員年齡設為：';
	//讀取年齡
	if (text01 == undefined) {
	old = 18;
	ReStr = ReStr + old + '(沒有填寫使用預設值)\n';
	}
	else 
	{
	old = text01;
	ReStr = ReStr + old + '\n';
	}
	//設定 因年齡減少的點數 和 EDU加骰次數
	let Debuff = 0;
	let AppDebuff = 0;
	let EDUinc = 0;
	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]

	if (old < 15) rply.text = ReStr + '等等，核心規則沒有適用小於15歲的人物哦。';	
	if (old >= 90) rply.text = ReStr + '等等，核心規則沒有適用於90歲以上的人物哦。'; 

	for ( i=0 ; old >= oldArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '==\n';
	if (old < 20) ReStr = ReStr + '年齡調整：從STR、SIZ擇一減去' + Debuff + '點\n（請自行手動選擇計算）。\n將EDU減去5點。LUK可擲兩次取高。' ;
	else
		if (old >= 40)	ReStr = ReStr + '年齡調整：從STR、CON或DEX中「總共」減去' + Debuff + '點\n（請自行手動選擇計算）。\n將APP減去' + AppDebuff +'點。可做' + EDUinc + '次EDU的成長擲骰。' ;
	else ReStr = ReStr + '年齡調整：可做' + EDUinc + '次EDU的成長擲骰。' ;
	ReStr = ReStr + '\n==';
	if (old>=40) ReStr = ReStr + '\n（以下箭號三項，自選共減' + Debuff + '點。）' ;
	if (old<20) ReStr = ReStr + '\n（以下箭號兩項，擇一減去' + Debuff + '點。）' ;
	ReStr = ReStr + '\nＳＴＲ：' + rollbase.BuildDiceCal('3d6*5');
	if (old>=40) ReStr = ReStr + ' ← 共減' + Debuff ;
	if (old<20) ReStr = ReStr + ' ←擇一減' + Debuff ;
	ReStr = ReStr + '\nＣＯＮ：' + rollbase.BuildDiceCal('3d6*5');
	if (old>=40) ReStr = ReStr + ' ← 共減' + Debuff;
	ReStr = ReStr + '\nＤＥＸ：' + rollbase.BuildDiceCal('3d6*5');
	if (old>=40) ReStr = ReStr + ' ← 共減' + Debuff ;
	if (old>=40) ReStr = ReStr + '\nＡＰＰ：' + rollbase.BuildDiceCal('3d6*5-' + AppDebuff);
	else ReStr = ReStr + '\nＡＰＰ：' + rollbase.BuildDiceCal('3d6*5');
	ReStr = ReStr + '\nＰＯＷ：' + rollbase.BuildDiceCal('3d6*5');
	ReStr = ReStr + '\nＳＩＺ：' + rollbase.BuildDiceCal('(2d6+6)*5');
	if (old<20) ReStr = ReStr + ' ←擇一減' + Debuff ;
	ReStr = ReStr + '\nＩＮＴ：' + rollbase.BuildDiceCal('(2d6+6)*5');	
	if (old<20) ReStr = ReStr + '\nＥＤＵ：' + rollbase.BuildDiceCal('3d6*5-5');
	else {
		let firstEDU = '(' + rollbase.BuildRollDice('2d6') + '+6)*5';
		ReStr = ReStr + '\n==';
		ReStr = ReStr + '\nＥＤＵ初始值：' + firstEDU + ' = ' + eval(firstEDU);
		
		let tempEDU = eval(firstEDU);

		for (i = 1 ; i <= EDUinc ; i++){
	let EDURoll = rollbase.Dice(100);
	ReStr = ReStr + '\n第' + i + '次EDU成長 → ' + EDURoll;
	if (EDURoll>tempEDU) {
	let EDUplus = rollbase.Dice(10);
	ReStr = ReStr + ' → 成長' + EDUplus +'點';
	tempEDU = tempEDU + EDUplus;
	}
	else{
	ReStr = ReStr + ' → 沒有成長';		
	}
		}
		ReStr = ReStr + '\n';
		ReStr = ReStr + '\nＥＤＵ最終值：' +tempEDU;
	}
	ReStr = ReStr + '\n==';

	ReStr = ReStr + '\nＬＵＫ：' + rollbase.BuildDiceCal('3d6*5');	
	if (old<20) ReStr = ReStr + '\nＬＵＫ加骰：' + rollbase.BuildDiceCal('3D6*5');


	rply.text = ReStr;
	return rply;
	} 

////////////////////////////////////////
//////////////// COC7傳統創角
////////////////////////////////////////		


	
function build6char(){
/*	//讀取年齡
	if (text01 == undefined) text01 = 18;
	let old = text01;
	let ReStr = '調查員年齡設為：' + old + '\n';
	//設定 因年齡減少的點數 和 EDU加骰次數
	let Debuff = 0;
	let AppDebuff = 0;
	let EDUinc = 0;
	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]

	if (old < 15) rply.text = ReStr + '等等，核心規則不允許小於15歲的人物哦。';	
	if (old >= 90) rply.text = ReStr + '等等，核心規則不允許90歲以上的人物哦。'; 

	for ( i=0 ; old >= oldArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '==\n';
	if (old < 20) ReStr = ReStr + '年齡調整：從STR、SIZ擇一減去' + Debuff + '點\n（請自行手動選擇計算）。\n將EDU減去5點。LUK可擲兩次取高。' ;
	else
		if (old >= 40)	ReStr = ReStr + '年齡調整：從STR、CON或DEX中「總共」減去' + Debuff + '點\n（請自行手動選擇計算）。\n將APP減去' + AppDebuff +'點。可做' + EDUinc + '次EDU的成長擲骰。' ;
	else ReStr = ReStr + '年齡調整：可做' + EDUinc + '次EDU的成長擲骰。' ;
	ReStr = ReStr + '\n=='; 
 if (old>=40) ReStr = ReStr + '\n（以下箭號三項，自選共減' + Debuff + '點。）' ;
	if (old<20) ReStr = ReStr + '\n（以下箭號兩項，擇一減去' + Debuff + '點。）' ;
 */
	let ReStr = '六版核心創角：';
	ReStr = ReStr + '\nＳＴＲ：' + rollbase.BuildDiceCal('3d6');
	ReStr = ReStr + '\nＤＥＸ：' + rollbase.BuildDiceCal('3d6');
	ReStr = ReStr + '\nＣＯＮ：' + rollbase.BuildDiceCal('3d6');
	ReStr = ReStr + '\nＰＯＷ：' + rollbase.BuildDiceCal('3d6');
	ReStr = ReStr + '\nＡＰＰ：' + rollbase.BuildDiceCal('3d6');
	ReStr = ReStr + '\nＩＮＴ：' + rollbase.BuildDiceCal('(2d6+6)');
	ReStr = ReStr + '\nＳＩＺ：' + rollbase.BuildDiceCal('(2d6+6)');	
	ReStr = ReStr + '\nＥＤＵ：' + rollbase.BuildDiceCal('(3d6+3)');	
	ReStr = ReStr + '\n年收入：' + rollbase.BuildDiceCal('(1d10)'); 	
	ReStr = ReStr + '\n調查員的最小起始年齡等於EDU+6，每比起始年齡年老十年，\n調查員增加一點EDU並且加20點職業技能點數。\n當超過40歲後，每老十年，\n從STR,CON,DEX,APP中選擇一個減少一點。';
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
