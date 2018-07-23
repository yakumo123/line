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
	ReStr = ReStr + '\n==' + '\n【等級】：' + level + '\n【力量】：';
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*6') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*7') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*8') ;
	ReStr = ReStr + '\n【敏捷】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d7*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d12*2') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d90*5') ;
	ReStr = ReStr + '\n【速度】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*2') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*6') ;
	ReStr = ReStr + '\n【物攻】：' ;	
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d20') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*2') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*5') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d45*7') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*9') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*11') ;
	ReStr = ReStr + '\n【物防】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*2') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*6') ;
	ReStr = ReStr + '\n【魔攻】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d20') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*2') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*2') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d45*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d55*5') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*7') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d80*9') ;
	ReStr = ReStr + '\n【魔防】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*2') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*6') ;
	ReStr = ReStr + '\n【幸運】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*2') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*2') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*2') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*2') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*3') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*3') ;
	ReStr = ReStr + '\n【血量】：' ;	
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d100') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d200') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d200*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d300*2') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d300*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d400*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d400*4') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d400*5') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d450*7') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d500*9') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d700*11') ;
	ReStr = ReStr + '\n【魔力】：' ;	
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d100') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d200') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d200*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d300*2') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d300*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d400*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d400*4') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d400*5') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d450*7') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d500*9') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d700*11') ;



	rply.text = ReStr;
	return rply;
	} 



module.exports = {
	build7char: build7char,
};
