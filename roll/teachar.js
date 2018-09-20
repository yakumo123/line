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
	let levelArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let level = levelArr[Math.floor((Math.random() * (levelArr.length)) + 0)];
	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]
	let BasicSkillOTArr = ['裝死【效果：沒屁用】','在非洲的一分鐘【效果：在非洲待了60秒引致世界上的人渡過了1/60小時】','尖叫【效果：傷聲帶用】','爬行【效果：移動速度減慢】','賣萌【效果：單純賣萌】','道具合成【效果：可以用繩索把東西合成一起】']
	let BasicSkillOT = BasicSkillOTArr[Math.floor((Math.random() * (BasicSkillOTArr.length)) + 0)];
	let AdvSkillOTArr = ['原來如此【效果：每一次回應中只說“原來如此”來胡弄人，但不具備迴避仇恨功能】','簡訊迴避【效果：能在下班無視老闆一切的簡訊，但不能迴避老闆的怒火】','星期一振作【效果：於每個星期一也能去除不想上班的感情，社畜專用】','抽卡感情排解【效果：當抽卡大爆死時能對遊戲附上無法解除安裝功能】']
	let AdvSkillOT = AdvSkillOTArr[Math.floor((Math.random() * (AdvSkillOTArr.length)) + 0)];
	let BasicSkillTFArr = ['裝傻【效果：騙人】','吼叫【效果：給予敵人威嚇】','潛行【效果：移動速度減慢，但能隱藏其氣息】','賣萌【效果：萌死人】','道具調和【效果：能合成道具】']
	let BasicSkillTF = BasicSkillTFArr[Math.floor((Math.random() * (BasicSkillTFArr.length)) + 0)];
	let AdvSkillTFArr = ['對！是的！我明白了！【效果：每一次回應中只說“對！是的！我明白了！”來胡弄人，配合其臉部真誠的表情在對方心中留下好印象，但實際你完全不知道對方在說甚麼】','編寫簡訊秒讀及回應機器人【效果：能在下班以機器人回應老闆一切的簡訊】','星期一放假【效果：成功爭取4天工作周】','課金抽卡【效果：以財力去戰勝機率】']
	let AdvSkillTF = AdvSkillTFArr[Math.floor((Math.random() * (AdvSkillTFArr.length)) + 0)];
	let BasicSkillFEArr = ['生病【效果：八雲又生病了…】','易容術【效果：讓自己變得跟偽娘笑臉一樣，征服全場男性對手】','融融的生財之道【效果：可以哄抬自己商品的價格，並且強制買家接受】','I very vegetable【效果：召喚露菈到場上煮飯】','水濺躍【效果：什麼事都沒發生】','聖誕老公公的禮物【效果：獲得禮物-馴鹿的蛋】','母湯的笑臉【效果：用母湯的笑臉笑到你心寒】']
	let BasicSkillFE = BasicSkillFEArr[Math.floor((Math.random() * (BasicSkillFEArr.length)) + 0)];
	let AdvSkillFEArr = ['Z水濺躍【效果：Z！Z！Z！然後，什麼事都沒發生】','命運抉擇-聖誕老公公的禮物【效果：若是發動時間在12/24當天晚上則可以將禮物轉化為『命運抉擇的禮物』，並擇一。命運抉擇禮物-黑色馴鹿的蛋、白色馴鹿的蛋】','仙人跳【效果：龍王級跳費】','八雲的喵喵叫【效果：(問號)】','上上下下左左右右AB【效果：發出按鈕的聲音(?)】']
	let AdvSkillFE = AdvSkillFEArr[Math.floor((Math.random() * (AdvSkillFEArr.length)) + 0)];
	let SuperSkillArr = ['八雲Fly踢~','火遁最高奧義-火炎焱燚','水遁最高奧義-水沝淼㵘','甲到爆拉','基德的按摩術','月光族的荷包']
	let SuperSkill = SuperSkillArr[Math.floor((Math.random() * (SuperSkillArr.length)) + 0)];
	
	
	for ( i=0 ; level >= levelArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '\n==' + '\n【等級】：' + level ;
	if (level < 30) ReStr = ReStr + '\n【基本技能】' + BasicSkillOT + '\n【進階技能】' + AdvSkillOT ;
	if (level >= 30 && level <50)	ReStr = ReStr + '\n【基本技能】' + BasicSkillTF + '\n【進階技能】' + AdvSkillTF ;
	if (level >= 50 && level <60)	ReStr = ReStr + '\n【基本技能】' + BasicSkillFE + '\n【進階技能】' + AdvSkillFE ;
	if (level >= 60)	ReStr = ReStr + '\n【基本技能】' + BasicSkillFE + '\n【進階技能】' + AdvSkillFE + '\n【奧義】：' + SuperSkill ;

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
  let fbiArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let fbi = fbiArr[Math.floor((Math.random() * (fbiArr.length)) + 0)];
  let lulaArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let lula = lulaArr[Math.floor((Math.random() * (lulaArr.length)) + 0)];
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
	ReStr = ReStr + '\n【萌力】：' + cute ;
	ReStr = ReStr + '\n【廚藝】：' + cook ;
	ReStr = ReStr + '\n【財力】：' + money ;	
	ReStr = ReStr + '\n【生命力】：' + life ;
  ReStr = ReStr + '\n【羈押度】：' + fbi ;
  ReStr = ReStr + '\n【露娜的愛】：' + lulla ;
	if (afc >= 50 && eu >= 50)	ReStr = ReStr + '\n【非洲之力】：' + '100' + '\n【歐皇之力】：' + '0' ; 
	else
	if (afc >= 60 && eu <= 40)	ReStr = ReStr + '\n【非洲之力】：' + afc + '\n【歐皇之力】：' + '0' ; 
	else
	if (afc <= 40 && eu >= 60)	ReStr = ReStr + '\n【非洲之力】：' + '0' + '\n【歐皇之力】：' + eu ; 
	else
	if (afc <= 50 && eu <= 50)	ReStr = ReStr + '\n【非洲之力】：' + '100' + '\n【歐皇之力】：' + '0' ; 
	else
	if (afc > 50 && eu < 50)	ReStr = ReStr + '\n【非洲之力】：' + afc + '\n【歐皇之力】：' + eu ; 
	else
	if (afc < 50 && eu > 50)	ReStr = ReStr + '\n【非洲之力】：' + afc + '\n【歐皇之力】：' + eu ; 
	ReStr = ReStr + '\n\n【八雲點評】：' ;
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
	else
	if (afc > 50 && eu < 50)	ReStr = ReStr + '你是一個非洲人呢~' ; 
	else
	if (afc < 50 && eu > 50)	ReStr = ReStr + '你這個歐洲人今天就會被我大八雲燒死！' ; 
  ReStr = ReStr + '當提及到露娜時，' ;
  if (lula >= 50 && fbi >= 25) ReStr = ReStr + '紅茶~你門口有FBI在按門鈴。' ;
  if (lula >= 50 && fbi < 25) ReStr = ReStr + '看來露娜是滿喜歡紅茶的嘛，但你別以為做一些過火的事不會被羈押。' ;
  if (lula < 50 && lula >= 25) ReStr = ReStr + '看來露娜也不是很喜歡你呢～' ;
  if (lula < 25) ReStr = ReStr + '紅茶，露娜在用厭惡的眼神看着你。' ；


	


	


	


	rply.text = ReStr;
	return rply;
	} 



module.exports = {
	build7char: build7char,
	ability: ability,
};
