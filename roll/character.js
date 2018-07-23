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
	let BasicSkillOTArr = ['裝死【效果：沒屁用】','尖叫【效果：傷聲帶用】','爬行【效果：移動速度減慢】','賣萌【效果：單純賣萌】','道具合成【效果：可以用繩索把東西合成一起】']
	let AdvSkillOTArr = ['原來如此【效果：每一次回應中只說“原來如此”來胡弄人，但不具備迴避仇恨功能】','簡訊迴避【效果：能在下班無視老闆一切的簡訊，但不能迴避老闆的怒火】','星期一振作【效果：於每個星期一也能去除不想上班的感情，社畜專用】','抽卡感情排解【效果：當抽卡大爆死是能對遊戲附上無法解除安裝功能】']
	let BasicSkillTFArr = ['裝傻【效果：騙人】','吼叫【效果：給予敵人威嚇】','潛行【效果：移動速度減慢，但能隱藏其氣息】','賣萌【效果：萌死人】','道具調和【效果：能合成道具】']
	let AdvSkillTFArr = ['對！是的！我明白了！【效果：每一次回應中只說“對！是的！我明白了！”來胡弄人，配合其臉部真誠的表情在對方心中留下好印象，但實際你完全不知道對方在說甚麼】','編寫簡訊秒讀及回應機器人【效果：能在下班以機器人回應老闆一切的簡訊】','星期一放假【效果：成功爭取4天工作周】','課金抽卡【效果：以財力去戰勝機率】']
	let BasicSkillFEArr = ['索敵【效果：感知附近敵人】','潛行【效果：隱藏自己氣息】','背刺【效果：在未被敵人發現時，攻擊力上升500%】','衝鋒【效果：20秒內速度上升300%】','意志【效果10秒內攻擊力上升200%】']
	let AdvSkillFEArr = ['箭雨風暴 【效果：高速連續射擊】','暗殺者之刃【效果：致命的攻擊並且使對手中毒】','火焰箭【效果：能射出火焰箭矢】','憤怒攻擊 【效果：有機率集暈對手】','龍鱗之甲【效果被動閃躲物理或法術攻擊】','沉默之刃【效果：有機率使對方沉默】','聖性光環【效果：使附近隊友獲得緩慢的回血回魔能力】','振氣之歌【效果：使附近隊友攻擊力上升】']
	
	for ( i=0 ; level >= levelArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '\n==' + '\n【等級】：' + level + '\n【力量】：';
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



module.exports = {
	build7char: build7char,
};
