var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function build7char(text01){
	let old ="";
	let ReStr = '【';
	if (text01 == undefined) {
	old = '八雲的未知卡片＜沒有預設＞';
	ReStr = ReStr + old + '】\n';
	}
	else 
	{
	old = text01;
	ReStr = ReStr + old + '】\n';
	}
	
	let Debuff = 0;
	let AppDebuff = 0;
	let EDUinc = 0;
	let ShadowArr = [1,2,3,4,5,6,7,8,9,10,11,12]
	let DependArr = [1,2,3]	
	let Depend = DependArr[Math.floor((Math.random() * (DependArr.length)) + 0)];
	let abiltyArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]	
	let abilty = abiltyArr[Math.floor((Math.random() * (abiltyArr.length)) + 0)];
	let levelArr = [0,1,2,3,4,5,6,7,8,9,10]
	let level = levelArr[Math.floor((Math.random() * (levelArr.length)) + 0)];
	let ATOneArr = [0,1]
	let ATOne = ATOneArr[Math.floor((Math.random() * (ATOneArr.length)) + 0)];
	let ATTwoArr = [0,1,2]
	let ATTwo = ATTwoArr[Math.floor((Math.random() * (ATTwoArr.length)) + 0)];
	let ATThreeArr = [1,2,3]
	let ATThree = ATThreeArr[Math.floor((Math.random() * (ATThreeArr.length)) + 0)];
	let ATFourArr = [2,3,4]
	let ATFour = ATFourArr[Math.floor((Math.random() * (ATFourArr.length)) + 0)];
	let ATFiveArr = [2,3,4,5]
	let ATFive = ATFiveArr[Math.floor((Math.random() * (ATFiveArr.length)) + 0)];
	let ATSixArr = [2,3,4,5,6]
	let ATSix = ATSixArr[Math.floor((Math.random() * (ATSixArr.length)) + 0)];
	let ATSevenArr = [3,4,5,6,7]
	let ATSeven= ATSevenArr[Math.floor((Math.random() * (ATSevenArr.length)) + 0)];
	let ATEightArr = [4,5,6,7,8]
	let ATEight= ATEightArr[Math.floor((Math.random() * (ATEightArr.length)) + 0)];
	let ATNineArr = [5,6,7,8,9]
	let ATNine= ATNineArr[Math.floor((Math.random() * (ATNineArr.length)) + 0)];
	let ATTenArr = [7,8,9,10,11,12,13]
	let ATTen= ATTenArr[Math.floor((Math.random() * (ATTenArr.length)) + 0)];
	let HEOneArr = [0,1]
	let HEOne = HEOneArr[Math.floor((Math.random() * (HEOneArr.length)) + 0)];
	let HETwoArr = [0,1,2]
	let HETwo = HETwoArr[Math.floor((Math.random() * (HETwoArr.length)) + 0)];
	let HEThreeArr = [1,2,3]
	let HEThree = HEThreeArr[Math.floor((Math.random() * (HEThreeArr.length)) + 0)];
	let HEFourArr = [2,3,4]
	let HEFour = HEFourArr[Math.floor((Math.random() * (HEFourArr.length)) + 0)];
	let HEFiveArr = [2,3,4,5]
	let HEFive = HEFiveArr[Math.floor((Math.random() * (HEFiveArr.length)) + 0)];
	let HESixArr = [2,3,4,5,6]
	let HESix = HESixArr[Math.floor((Math.random() * (HESixArr.length)) + 0)];
	let HESevenArr = [3,4,5,6,7]
	let HESeven= HESevenArr[Math.floor((Math.random() * (HESevenArr.length)) + 0)];
	let HEEightArr = [4,5,6,7,8]
	let HEEight= HEEightArr[Math.floor((Math.random() * (HEEightArr.length)) + 0)];
	let HENineArr = [5,6,7,8,9]
	let HENine= HENineArr[Math.floor((Math.random() * (HENineArr.length)) + 0)];
	let HETenArr = [7,8,9,10,11,12,13]
	let HETen= HETenArr[Math.floor((Math.random() * (HETenArr.length)) + 0)];
	let RTThreeArr = [1,2]
	let RTThree = RTThreeArr[Math.floor((Math.random() * (RTThreeArr.length)) + 0)];
	let RTFourArr = [1,2,3]
	let RTFour = RTFourArr[Math.floor((Math.random() * (RTFourArr.length)) + 0)];
	let RTFiveArr = [1,2,3,4]
	let RTFive = RTFiveArr[Math.floor((Math.random() * (RTFiveArr.length)) + 0)];
	let RTSixArr = [1,2,3,4,5]
	let RTSix = RTSixArr[Math.floor((Math.random() * (RTSixArr.length)) + 0)];
	let RTSevenArr = [1,2,3,4,5,6]
	let RTSeven= RTSevenArr[Math.floor((Math.random() * (RTSevenArr.length)) + 0)];
	let RTEightArr = [1,2,3,4,5,6,7]
	let RTEight= RTEightArr[Math.floor((Math.random() * (RTEightArr.length)) + 0)];
	let RTNineArr = [1,2,3,4,5,6,7,8]
	let RTNine= RTNineArr[Math.floor((Math.random() * (RTNineArr.length)) + 0)];
	let RTTenArr = [1,2,3,4,5,6,7,8,9]
	let RTTen= RTTenArr[Math.floor((Math.random() * (RTTenArr.length)) + 0)];







	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]
	
	
	
	for ( i=0 ; level >= levelArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '\n==' + '\n【等級】：' + level ;
	if (Depend = 1) ReStr = ReStr + '【從者】' ;
	ReStr = ReStr + 'SIZ:';
	if (level = 1) ReStr = ReStr + '基本 入場' ;
	if (level = 2) ReStr = ReStr + '基本 謝幕' ;
	if (level = 3) ReStr = ReStr + '基本 激奏' ;
	if (level = 4) ReStr = ReStr + '基本 回合結束' ;
	if (level = 5) ReStr = ReStr + '基本 入場死靈' ;
	if (level = 6) ReStr = ReStr + '基本 謝幕死靈' ;
	if (level = 7) ReStr = ReStr + '入場 謝幕' ;
	if (level = 8) ReStr = ReStr + '入場激奏' ;
	if (level = 9) ReStr = ReStr + '入場 回合結束' ;
	if (level = 10) ReStr = ReStr + '入場 謝幕死靈' ;
	ReStr = ReStr + '\n' ;
	if (abilty = 1) ReStr = ReStr + '基本 入場' ;
	if (abilty = 2) ReStr = ReStr + '基本 謝幕' ;
	if (abilty = 3) ReStr = ReStr + '基本 激奏' ;
	if (abilty = 4) ReStr = ReStr + '基本 回合結束' ;
	if (abilty = 5) ReStr = ReStr + '基本 入場死靈' ;
	if (abilty = 6) ReStr = ReStr + '基本 謝幕死靈' ;
	if (abilty = 7) ReStr = ReStr + '入場 謝幕' ;
	if (abilty = 8) ReStr = ReStr + '入場激奏' ;
	if (abilty = 9) ReStr = ReStr + '入場 回合結束' ;
	if (abilty = 10) ReStr = ReStr + '入場 謝幕死靈' ;
	if (abilty = 11) ReStr = ReStr + '謝幕 激奏' ;
	if (abilty = 12) ReStr = ReStr + '謝幕 回合結束' ;	
	if (abilty = 13) ReStr = ReStr + '謝幕入場死靈' ;
	if (abilty = 14) ReStr = ReStr + '激奏 回合結束' ;
	if (abilty = 15) ReStr = ReStr + '激奏 入場死靈' ;
	if (abilty = 16) ReStr = ReStr + '激奏 謝幕死靈' ;
	if (abilty = 17) ReStr = ReStr + '回合結束 入場死靈' ;
	if (abilty = 18) ReStr = ReStr + '回合結束 謝幕死靈' ;
	if (abilty = 19) ReStr = ReStr + '入場死靈 謝幕死靈' ;
	if (abilty = 20) ReStr = ReStr + '天盾only' ;
	if (abilty = 21) ReStr = ReStr + '交戰時 入場' ;	
	if (abilty = 22) ReStr = ReStr + '交戰 謝幕' ;
	if (abilty = 23) ReStr = ReStr + '交戰 激奏' ;
	if (abilty = 24) ReStr = ReStr + '交戰 回合' ;
	if (abilty = 25) ReStr = ReStr + '交戰 入場死靈' ;
	if (abilty = 26) ReStr = ReStr + '交戰 謝幕死靈' ;
	if (abilty = 27) ReStr = ReStr + '攻擊 入場' ;
	if (abilty = 28) ReStr = ReStr + '攻擊 謝幕' ;
	if (abilty = 29) ReStr = ReStr + '攻擊 激奏' ;
	if (abilty = 30) ReStr = ReStr + '攻擊 回合' ;
	if (abilty = 31) ReStr = ReStr + '攻擊 入場死靈' ;
	if (abilty = 32) ReStr = ReStr + '攻擊 謝幕死靈' ;
	if (abilty = 33) ReStr = ReStr + '交戰 基本' ;
	if (abilty = 34) ReStr = ReStr + '攻擊 基本' ;
	if (abilty = 35) ReStr = ReStr + '基本' ;
	if (abilty = 36) ReStr = ReStr + '入場' ;
	if (abilty = 37) ReStr = ReStr + '謝幕' ;
	if (abilty = 38) ReStr = ReStr + '回合結束' ;
	if (abilty = 39) ReStr = ReStr + '入場死' ;
	if (abilty = 40) ReStr = ReStr + '謝幕死' ;
	if (abilty = 41) ReStr = ReStr + '攻擊時' ;
	if (abilty = 42) ReStr = ReStr + '交戰' ;
	if (abilty = 43) ReStr = ReStr + '激奏' ;
	if (abilty = 44) ReStr = ReStr + '進化 基本' ;
	if (abilty = 45) ReStr = ReStr + '進化 入場' ;
	if (abilty = 46) ReStr = ReStr + '進化 謝幕' ;
	if (abilty = 47) ReStr = ReStr + '進化 回合結束' ;
	if (abilty = 48) ReStr = ReStr + '進化 入場死' ;
	if (abilty = 49) ReStr = ReStr + '進化 謝幕死' ;
	if (abilty = 50) ReStr = ReStr + '進化 交戰' ;
	if (abilty = 51) ReStr = ReStr + '進化 攻擊時' ;
	if (abilty = 52) ReStr = ReStr + '進 激' ;
	if (abilty = 53) ReStr = ReStr + '進化' ;
	if (abilty = 54) ReStr = ReStr + '白板' ;


	
	else
	if (Depend = 2)	ReStr = ReStr + '【法術】'  ;
	else
	if (Depend = 3)	ReStr = ReStr + '\n【護符】' ;
	
	ReStr = ReStr + '\n【力量】：';
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;
	ReStr = ReStr + '\n【敏捷】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;
	ReStr = ReStr + '\n【速度】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;
	ReStr = ReStr + '\n【物攻】：' ;	
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;
	ReStr = ReStr + '\n【物防】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;
	ReStr = ReStr + '\n【魔攻】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;
	ReStr = ReStr + '\n【魔防】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;
	ReStr = ReStr + '\n【幸運】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;
	ReStr = ReStr + '\n【血量】：' ;	
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;
	ReStr = ReStr + '\n【魔力】：' ;	
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*4') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*4') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*5') ;



	rply.text = ReStr;
	return rply;
	} 




module.exports = {
	build7char: build7char,
};
