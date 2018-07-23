var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改




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
	let levelArr = [0','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
	let level = levelArr[Math.floor((Math.random() * (levelArr.length)) + 0)];
	let ReStr = '年齡設為：';
	if (text01 == undefined) {
	old = 18;
	ReStr = ReStr + old + '(沒有填寫使用預設值)\n';
	ReStr = ReStr + level;
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
	if (old < 20 && old >= 10) ReStr = ReStr + '年齡調整：從STR、SIZ擇一減去' + Debuff + '點\n（請自行手動選擇計算）。\n將EDU減去5點。LUK可擲兩次取高。' ;
	else
		if (old < 10) ReStr = ReStr + '年齡調整：從手動選擇計算）。\n將EDU減去5點。LUK可擲兩次取高。' ;
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



module.exports = {
	coc7bp: coc7bp,
	ArrMax: ArrMax,
	build7char: build7char,
};
