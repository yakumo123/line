var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改


////////////////////////////////////////
//////////////// COC7傳統創角
////////////////////////////////////////		
function build7char(text01){
	let old ="";
	let ReStr = '年齡設為：';
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
	let levelArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let level = levelArr[Math.floor((Math.random() * (levelArr.length)) + 0)];
	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]
	
	for ( i=0 ; level >= levelArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '==\n';
	if (level < 10) ReStr = ReStr + 'test1' ;
	else
		if (level >= 10 && level <20) ReStr = ReStr + 'test2' ;
	else
		if (level >= 20 && level <30)	ReStr = ReStr + 'test3' ;
	else
		if (level >= 30 && level <40)	ReStr = ReStr + 'test4' ;
	else
		if (level >= 40 && level <50)	ReStr = ReStr + 'test5' ;
	else
		if (level >= 50 && level <60)	ReStr = ReStr + 'test6' ;
	else
		if (level >= 60 && level <70)	ReStr = ReStr + 'test7' ;
	else
		if (level >= 70 && level <80)	ReStr = ReStr + 'test8' ;
	else
		if (level >= 80 && level <90)	ReStr = ReStr + 'test9' ;
	else
		if (level >= 90 && level <100)	ReStr = ReStr + 'test4' ;
	else ReStr = ReStr + 'test11' ;
	ReStr = ReStr + '\n== \n【力量】：';
	if (level>=40) ReStr = ReStr + '\n（以下箭號三項，自選共減' + Debuff + '點。）' ;
	if (level<20) ReStr = ReStr + '\n（以下箭號兩項，擇一減去' + Debuff + '點。）' ;
	ReStr = ReStr + '\nＳＴＲ：' + rollbase.BuildDiceCal('3d6*5') ;
	if (level>=40) ReStr = ReStr + ' ← 共減' + Debuff ;
	if (level<20) ReStr = ReStr + ' ←擇一減' + Debuff ;
	ReStr = ReStr + '\nＣＯＮ：' + rollbase.BuildDiceCal('3d6*5') + level;
	if (level>=40) ReStr = ReStr + ' ← 共減' + Debuff;
	ReStr = ReStr + '\nＤＥＸ：' + rollbase.BuildDiceCal('3d6*5');
	if (level>=40) ReStr = ReStr + ' ← 共減' + Debuff ;
	if (level>=40) ReStr = ReStr + '\nＡＰＰ：' + rollbase.BuildDiceCal('3d6*5-' + AppDebuff);
	else ReStr = ReStr + '\nＡＰＰ：' + rollbase.BuildDiceCal('3d6*5');
	ReStr = ReStr + '\nＰＯＷ：' + rollbase.BuildDiceCal('3d6*5');
	ReStr = ReStr + '\nＳＩＺ：' + rollbase.BuildDiceCal('(2d6+6)*5');
	if (level<20) ReStr = ReStr + ' ←擇一減' + Debuff ;
	ReStr = ReStr + '\nＩＮＴ：' + rollbase.BuildDiceCal('(2d6+6)*5');	
	if (level<20) ReStr = ReStr + '\nＥＤＵ：' + rollbase.BuildDiceCal('3d6*5-5');
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

	ReStr = ReStr + '\nＬＵＫ：' + rollbase.BuildDiceCal('3d6*5') + level;	
	if (level<20) ReStr = ReStr + '\nＬＵＫ加骰：' + rollbase.BuildDiceCal('3D6*5') + level;


	rply.text = ReStr;
	return rply;
	} 



module.exports = {
	build7char: build7char,
};
