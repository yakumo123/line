var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

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
	let levelArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let level = levelArr[Math.floor((Math.random() * (levelArr.length)) + 0)];
	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]
	let BasicSkillOTArr = ['裝死【效果：沒屁用】','尖叫【效果：傷聲帶用】','爬行【效果：移動速度減慢】','賣萌【效果：單純賣萌】','道具合成【效果：可以用繩索把東西合成一起】']
	let BasicSkillOT = BasicSkillOTArr[Math.floor((Math.random() * (BasicSkillOTArr.length)) + 0)];
	let AdvSkillOTArr = ['原來如此【效果：每一次回應中只說“原來如此”來胡弄人，但不具備迴避仇恨功能】','簡訊迴避【效果：能在下班無視老闆一切的簡訊，但不能迴避老闆的怒火】','星期一振作【效果：於每個星期一也能去除不想上班的感情，社畜專用】','抽卡感情排解【效果：當抽卡大爆死時能對遊戲附上無法解除安裝功能】']
	let AdvSkillOT = AdvSkillOTArr[Math.floor((Math.random() * (AdvSkillOTArr.length)) + 0)];
	let BasicSkillTFArr = ['裝傻【效果：騙人】','吼叫【效果：給予敵人威嚇】','潛行【效果：移動速度減慢，但能隱藏其氣息】','賣萌【效果：萌死人】','道具調和【效果：能合成道具】']
	let BasicSkillTF = BasicSkillTFArr[Math.floor((Math.random() * (BasicSkillTFArr.length)) + 0)];
	let AdvSkillTFArr = ['對！是的！我明白了！【效果：每一次回應中只說“對！是的！我明白了！”來胡弄人，配合其臉部真誠的表情在對方心中留下好印象，但實際你完全不知道對方在說甚麼】','編寫簡訊秒讀及回應機器人【效果：能在下班以機器人回應老闆一切的簡訊】','星期一放假【效果：成功爭取4天工作周】','課金抽卡【效果：以財力去戰勝機率】']
	let AdvSkillTF = AdvSkillTFArr[Math.floor((Math.random() * (AdvSkillTFArr.length)) + 0)];
	let BasicSkillFEArr = ['索敵【效果：感知附近敵人】','潛行【效果：隱藏自己氣息】','背刺【效果：在未被敵人發現時，攻擊力上升500%】','衝鋒【效果：20秒內速度上升300%】','意志【效果10秒內攻擊力上升200%】']
	let BasicSkillFE = BasicSkillFEArr[Math.floor((Math.random() * (BasicSkillFEArr.length)) + 0)];
	let AdvSkillFEArr = ['箭雨風暴 【效果：高速連續射擊】','暗殺者之刃【效果：致命的攻擊並且使對手中毒】','火焰箭【效果：能射出火焰箭矢】','憤怒攻擊 【效果：有機率集暈對手】','龍鱗之甲【效果被動閃躲物理或法術攻擊】','沉默之刃【效果：有機率使對方沉默】','聖性光環【效果：使附近隊友獲得緩慢的回血回魔能力】','振氣之歌【效果：使附近隊友攻擊力上升】']
	let AdvSkillFE = AdvSkillFEArr[Math.floor((Math.random() * (AdvSkillFEArr.length)) + 0)];

	
	for ( i=0 ; level >= levelArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '\n==' + '\n【等級】：' + level ;
	if (level < 30) ReStr = ReStr + '\n【基本技能】' + BasicSkillOT + '\n【進階技能】' + AdvSkillOT ;
	if (level >= 30 && level <50)	ReStr = ReStr + '\n【基本技能】' + BasicSkillTF + '\n【進階技能】' + AdvSkillTF ;
	if (level >= 50 && level <80)	ReStr = ReStr + '\n【基本技能】' + BasicSkillFE + '\n【進階技能】' + AdvSkillFE ;
	if (level >= 80)	ReStr = ReStr + '\n【基本技能】' + BasicSkillFE + '\n【進階技能】' + AdvSkillFE + '\n【奧義】八雲Fly踢';

	ReStr = ReStr + '\n【力量】：';
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2+10') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d15*2+30') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2+40') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3+60') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3+90') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4+150') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*4+230') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5+300') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d65*6+380') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d75*7+490') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d100*8+700') ;
	ReStr = ReStr + '\n【敏捷】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2+5') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d7*2+7') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d10*2+15') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d12*2+19') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2+26') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*3+33') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*3+41') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*4+49') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4+50') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5+63') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d90*5+90') ;
	ReStr = ReStr + '\n【速度】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2+5') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2+10') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2+15') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2+30') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*2+50') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*3+70') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3+100') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4+140') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*4+180') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5+230') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*6+300') ;
	ReStr = ReStr + '\n【物攻】：' ;	
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10+10') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d20+20') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2+30') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*2+40') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*3+60') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3+80') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4+110') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*5+140') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d45*7+170') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*9+210') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*11+300') ;
	ReStr = ReStr + '\n【物防】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2+5') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2+10') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2+15') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2+25') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*2+35') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*3+50') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3+70') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4+100') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*4+140') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5+180') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*6+220') ;
	ReStr = ReStr + '\n【魔攻】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d10+10') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d20+20') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2+30') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*2+40') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*3+60') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*3+80') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4+110') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*5+140') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d45*7+170') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*9+210') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*11+300') ;
	ReStr = ReStr + '\n【魔防】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2+5') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2+10') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2+15') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2+25') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*2+35') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*3+50') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*3+70') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*4+100') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*4+140') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*5+180') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*6+220') ;
	ReStr = ReStr + '\n【幸運】：' ;
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d5*2+5') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('1d10*2+5') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('1d15*2+10') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('1d20*2+15') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('1d25*2+20') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('1d30*2+30') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('1d35*2+40') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('1d40*2+50') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('1d50*3+70') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('1d60*3+90') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('1d70*3+130') ;
	ReStr = ReStr + '\n【血量】：' ;	
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d100+100') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('2d100+200') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('2d100*2+200') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('3d100*2+300') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('3d300*3+300') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('4d100*3+400') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('4d100*4+500') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('4d100*5+600') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('4d150*7+700') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('5d150*9+900') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('7d100*11+1100') ;
	ReStr = ReStr + '\n【魔力】：' ;	
	if (level < 10) ReStr = ReStr + rollbase.BuildDiceCal('1d100+100') ;
	if (level >= 10 && level <20) ReStr = ReStr + rollbase.BuildDiceCal('2d100+200') ;
	if (level >= 20 && level <30)	ReStr = ReStr + rollbase.BuildDiceCal('2d100*2+200') ;
	if (level >= 30 && level <40)	ReStr = ReStr + rollbase.BuildDiceCal('3d100*2+300') ;
	if (level >= 40 && level <50)	ReStr = ReStr + rollbase.BuildDiceCal('3d300*3+300') ;
	if (level >= 50 && level <60)	ReStr = ReStr + rollbase.BuildDiceCal('4d100*3+400') ;
	if (level >= 60 && level <70)	ReStr = ReStr + rollbase.BuildDiceCal('4d100*4+500') ;
	if (level >= 70 && level <80)	ReStr = ReStr + rollbase.BuildDiceCal('4d100*5+600') ;
	if (level >= 80 && level <90)	ReStr = ReStr + rollbase.BuildDiceCal('4d150*7+700') ;
	if (level >= 90 && level <100)	ReStr = ReStr + rollbase.BuildDiceCal('5d150*9+900') ;
	if (level >= 100 ) ReStr = ReStr + rollbase.BuildDiceCal('7d100*11+1100') ;



	rply.text = ReStr;
	return rply;
	} 

function ability(TEXT){
	let ReStr = TEXT[0] + '：';

	let Debuff = 0;
	let AppDebuff = 0;
	let EDUinc = 0;
	let manArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let man = manArr[Math.floor((Math.random() * (manArr.length)) + 0)];
	let girlArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let girl = girlArr[Math.floor((Math.random() * (girlArr.length)) + 0)];
	let cuteArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let cute = cuteArr[Math.floor((Math.random() * (cuteArr.length)) + 0)];
	let cookArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let cook = cookArr[Math.floor((Math.random() * (cookArr.length)) + 0)];
	let moneyArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let money = moneyArr[Math.floor((Math.random() * (moneyArr.length)) + 0)];	
	let lifeArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let life = lifeArr[Math.floor((Math.random() * (lifeArr.length)) + 0)];
	let afcArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let afc = afcArr[Math.floor((Math.random() * (afcArr.length)) + 0)];
	let euArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let eu = euArr[Math.floor((Math.random() * (euArr.length)) + 0)];
	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]
	
	
	for ( i=0 ; man >= manArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '\n【男子力】：' + man ;
	ReStr = ReStr + '\n【女子力】：' + girl ;
	ReStr = ReStr + '\n【萌力】：' + cute ;
	ReStr = ReStr + '\n【廚藝】：' + cook ;
	ReStr = ReStr + '\n【財力】：' + money ;	
	ReStr = ReStr + '\n【生命力】：' + life ;
	if (afc >= 50 && eu >= 50)	ReStr = ReStr + '\n【非洲之力】：' + '100' + '\n【歐皇之力】：' + '0' ; 
	else
		if (afc >= 60 && eu <= 40)	ReStr = ReStr + '\n【非洲之力】：' + afc + '\n【歐皇之力】：' + '0' ; 
else
	if (afc <= 40 && eu >= 60)	ReStr = ReStr + '\n【非洲之力】：' + '0' + '\n【歐皇之力】：' + eu ; 
	else
	if (afc <= 50 && eu <= 50)	ReStr = ReStr + '\n【非洲之力】：' + '100' + '\n【歐皇之力】：' + '0' ; 
	ReStr = ReStr + '\n\n【八雲點評】：' ;
	if (man >= 50 && girl >= 50)	ReStr = ReStr + '偽娘跟偽男你也很適合當喔~' ; 
	if (man >= 50 && girl < 50)	ReStr = ReStr + '你很適合當一個偽男喔~如果你是男的，我會推薦你去做變性手術變成女的再當偽男~~' ; 
	if (man < 50 && girl >= 50)	ReStr = ReStr + '你很適合當一個偽娘喔~如果你是女的，我會推薦你去做變性手術變成男的再當偽娘~~' ; 
	if (man < 50 && girl < 50)	ReStr = ReStr + '你很沒魅力呃…' ; 
	ReStr = ReStr + '在你的萌力方面，' ;
	if (cute >= 50)	ReStr = ReStr + '你很適合去賣萌喔~一定有人說你可愛的！' ; 
	if (cute < 50)	ReStr = ReStr + '我還是建議你別去做出賣萌的行為，會嚇到人的！' ; 
	ReStr = ReStr + '我' ;
	if (cook >= 50)	ReStr = ReStr + '看你的廚藝的分數滿高的~可以煮東西給八雲吃嗎？' ; 
	if (cook < 50)	ReStr = ReStr + '看你的廚藝分數…嗯…還可以啦……記得別進廚房喔……你很危… 不！廚房很危險的，我為了你安全着想你還是別進廚房吧！' ; 
	ReStr = ReStr + '然後，' ;
	if (money >= 50)	ReStr = ReStr + '你財力那麽高，你很有做課長的天賦喔！' ; 
	if (money < 50)	ReStr = ReStr + '財力不高也沒差啦~你還有信用卡可以課金嘛~~刷爆了你還有家人的卡可以刷嘛~~人生不課金，那這人生還有意義嗎？' ; 
	ReStr = ReStr + '嗯…' ;
	if (life >= 50 && money < 50)	ReStr = ReStr + '你的生命力還滿強的嘛~就算你沒財力，以你這生命力來說每餐都吃土也能活下去的。' ; 
	else
	if (life < 50 && money < 50)	ReStr = ReStr + '沒生命力又沒錢……好慘…(用同情的眼神吃着名貴的食物遠望中)。' ; 
	else
	if (life >= 50)	ReStr = ReStr + '你的生命力還滿強的嘛~' ; 
	else
	if (life < 50)	ReStr = ReStr + '你這樣的生命力…記得好好享受人生喔!' ; 
	ReStr = ReStr + '在你的運氣方面…' ;
	if (afc >= 50 && eu >= 50)	ReStr = ReStr + '頂級非洲人沒得救了…' ; 
	else
	if (afc >= 60 && eu <= 40)	ReStr = ReStr + '原來你是非洲大酋長喔…' ; 
	else
	if (afc <= 40 && eu >= 60)	ReStr = ReStr + '你這個歐洲人今天就會被我大八雲燒死！' ; 
	else
	if (afc <= 50 && eu <= 50)	ReStr = ReStr + '頂級非洲人沒得救了…' ; 

	


	


	


	rply.text = ReStr;
	return rply;
	} 



module.exports = {
	build7char: build7char,
	ability: ability,
};
