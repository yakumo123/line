// Load `*.js` under roll directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync('./roll/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
	  var name = file.replace('.js', '');
	  exports[name] = require('../roll/' + file);
	}
  });

//用來呼叫骰組,新增骰組的話,要寫條件式到下面呼叫 
//格式是 exports.骰組檔案名字.function名
function parseInput(rplyToken, inputStr) {
	//console.log('InputStr: ' + inputStr);
	_isNaN = function(obj) 	{
	return isNaN(parseInt(obj));  
	}

	let msgSplitor = (/\S+/ig);	
	let mainMsg = inputStr.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階


	if (trigger.match(/霖|凜|安妮|妮幽|趙翰|weichen/) != null) return exports.null.null() ;
	
	//普通ROLL擲骰判定在此	
	if (inputStr.match(/\w/)!=null && inputStr.toLowerCase().match(/\d+d+\d/)!=null) return exports.rollbase.nomalDiceRoller(inputStr,mainMsg[0],mainMsg[1],mainMsg[2]);

	//xBy>A 指令開始於此
	if (trigger.match(/^(\d+)(b)(\d+)$/i)!= null) return exports.advroll.xBy(trigger,mainMsg[1],mainMsg[2]);
	//xUy 指令開始於此	
	if (trigger.match(/^(\d+)(u)(\d+)$/i)!= null && isNaN(mainMsg[1])== false) return exports.advroll.xUy(trigger,mainMsg[1],mainMsg[2],mainMsg[3]);
	
	if (trigger.match(/^ccb$|^cc$|^ccn[1-2]$|^cc[1-2]$/)!= null && mainMsg[1]<=1000 )
	{		
	//ccb指令開始於此
	if (trigger == 'ccb'&& mainMsg[1]<=99) return exports.coc.coc6(mainMsg[1],mainMsg[2]);
	
	//cc指令開始於此
	if (trigger == 'cc'&& mainMsg[1]<=1000) return exports.coc.coc7(mainMsg[1],mainMsg[2]);
	//獎懲骰設定於此	
	if (trigger == 'cc1'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'1',mainMsg[2]); 
	if (trigger == 'cc2'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'2',mainMsg[2]);	
	if (trigger == 'ccn1'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'-1',mainMsg[2]);	
	if (trigger == 'ccn2'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'-2',mainMsg[2]);	
	}
	if (trigger.match(/(^ccrt$)/) != null) return exports.coc.ccrt();
	if (trigger.match(/(^ccsu$)/) != null) return exports.coc.ccsu();

	
	
	if (trigger.match(/^trpghelp$/)!= null ) return exports.trpghelp.TRPG();

	
	if (trigger.match(/(的能力值$)/) != null && mainMsg[1] != NaN )	return exports.character.build7char(mainMsg[1]);
	
	if (trigger.match(/八雲的綜合分數$|八雲綜合分數$/) != null) return exports.funny.yakumomark() ;	

	if (trigger.match(/紅茶的綜合分數$|紅茶綜合分數$/) != null) return exports.teachar.ability(mainMsg) ;	
	
	if (trigger.match(/言的綜合分數$/) != null) return exports.funny.dis(mainMsg) ;	

	
	if (trigger.match(/綜合分數$/) != null) return exports.character.ability(mainMsg) ;	

	if (trigger.match(/^生成卡片$|^卡片生成$|^生成卡牌$|^卡牌生成$/) != null && mainMsg[1] != NaN )	return exports.createcard.build7char(mainMsg[1]);

	if (trigger.match(/^式神幫忙$|^幫助$|^幫忙$/)!= null ) return exports.fakeyakumobot.fakehelp();
	
	if (trigger.match(/^式神幫助2$/)!= null ) return exports.botyakumo2.BotHelpYy();
	
	if (trigger.match(/^式神幫助$/)!= null ) return exports.botyakumo.BotHelpYy();
	

	if (trigger.match(/^comfirmcards$/)!= null ) return exports.testing.Test13();
	
	if (trigger.match(/^公主情報$/)!= null ) return exports.redive.princesses();
	
	//nc指令開始於此 來自Rainsting/TarotLineBot 
	if (trigger.match(/^[1-4]n[c|a][+|-][1-99]$|^[1-4]n[c|a]$/)!= null ) return exports.nc.nechronica(trigger,mainMsg[1]);

	//依戀
	if (trigger.match(/(^nm$)/) != null)	return exports.nc.nechronica_mirenn(mainMsg[1]);

	
	//wod 指令開始於此
	if (trigger.match(/^(\d+)(wd|wod)(\d|)((\+|-)(\d+)|)$/i)!= null)return exports.wod.wod(trigger,mainMsg[1]);

	//Dx3 指令開始於此
	if (trigger.match(/^(\d+)(dx)(\d|)(((\+|-)(\d+)|)((\+|-)(\d+)|))$/i)!= null)return exports.dx3.dx(trigger);

	//Fisher–Yates shuffle
 	//SortIt 指令開始於此
 	if (trigger.match(/排序|次序/)!= null && mainMsg.length >= 3) return exports.funny.SortIt(inputStr,mainMsg);
 	if (trigger.match(/^d66$/)!= null ) return exports.advroll.d66(mainMsg[1]);
	if (trigger.match(/^d66s$/)!= null ) return exports.advroll.d66s(mainMsg[1]);

		
	if (trigger.match(/(^cc7版創角$|^cc七版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build7char(mainMsg[1]);
	
	if (trigger.match(/(^cc6版創角$|^cc六版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build6char(mainMsg[1]);
	
	if (trigger.match(/^coc7角色背景$/)!= null ) return exports.coc.PcBG();
	


	if (trigger.match(/選10/)!= null && mainMsg.length >= 3) return exports.funny.tenchoice(inputStr,mainMsg);
	if (trigger.match(/選1/)!= null && mainMsg.length >= 3) return exports.funny.choice(inputStr,mainMsg);
	if (trigger.match(/選2/)!= null && mainMsg.length >= 3) return exports.funny.twochoice(inputStr,mainMsg);
	if (trigger.match(/選3/)!= null && mainMsg.length >= 3) return exports.funny.threechoice(inputStr,mainMsg);
	if (trigger.match(/選4/)!= null && mainMsg.length >= 3) return exports.funny.fourchoice(inputStr,mainMsg);
	if (trigger.match(/選5/)!= null && mainMsg.length >= 3) return exports.funny.fivechoice(inputStr,mainMsg);
	if (trigger.match(/選6/)!= null && mainMsg.length >= 3) return exports.funny.sixchoice(inputStr,mainMsg);
	if (trigger.match(/選7/)!= null && mainMsg.length >= 3) return exports.funny.sevenchoice(inputStr,mainMsg);
	if (trigger.match(/選8/)!= null && mainMsg.length >= 3) return exports.funny.eightchoice(inputStr,mainMsg);
	if (trigger.match(/選9/)!= null && mainMsg.length >= 3) return exports.funny.ninechoice(inputStr,mainMsg);
	
	if (trigger.match(/^撲克大老二$/)!= null ) return exports.funny.PokerAll();	
	if (trigger.match(/^撲克11$/)!= null ) return exports.funny.Poker11();	
	if (trigger.match(/^撲克12$/)!= null ) return exports.funny.Poker12();
	if (trigger.match(/^撲克13$/)!= null ) return exports.funny.Poker13();	
	if (trigger.match(/^撲克14$/)!= null ) return exports.funny.Poker14();	
	if (trigger.match(/^撲克1$/)!= null ) return exports.funny.Poker1();	
	if (trigger.match(/^撲克2$/)!= null ) return exports.funny.Poker2();	
	if (trigger.match(/^撲克3$/)!= null ) return exports.funny.Poker3();	
	if (trigger.match(/^撲克4$/)!= null ) return exports.funny.Poker4();	
	if (trigger.match(/^撲克5$/)!= null ) return exports.funny.Poker5();	
	if (trigger.match(/^撲克6$/)!= null ) return exports.funny.Poker6();	
	if (trigger.match(/^撲克7$/)!= null ) return exports.funny.Poker7();	
	if (trigger.match(/^撲克8$/)!= null ) return exports.funny.Poker8();	
	if (trigger.match(/^撲克9$/)!= null ) return exports.funny.Poker9();	
	if (trigger.match(/^撲克10$/)!= null ) return exports.funny.Poker10();
	
	//tarot 指令
	if (trigger.match(/tarot|塔羅牌|塔羅/) != null) {
		if (trigger.match(/^單張|^每日|^daily/)!= null) return exports.funny.NomalDrawTarot(mainMsg[1], mainMsg[2]);//預設抽 79 張
		if (trigger.match(/^時間|^time/)!= null) 	return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 1);
		if (trigger.match(/^大十字|^cross/)!= null) return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 2);
	}
	
	
	if (trigger.match(/^gbf情報$/)!= null ) return exports.button.buttontest();
	
	if (trigger.match(/^gbf情報電腦$/)!= null ) return exports.funny.gbf();
	
	if (trigger.match(/^gbf箱掘$/)!= null ) return exports.box.gbfbox();
	
	if (trigger.match(/(要打多少$|要打多少肉$)/) != null) return exports.funny.meat(mainMsg) ; 
	
	if (trigger.match(/就爛|就是爛|你就爛|你就是爛/)!= null ) return exports.funny.suck(mainMsg);

	if (trigger.match(/他就爛|他就是爛|她就是爛|她就爛/)!= null ) return exports.funny.suck(mainMsg);

	if (trigger.match(/隨機顏色|幸運顏色/) != null) return exports.funny.randomColour(mainMsg) ;	
	
	if (trigger.match(/隨機職業/) != null) return exports.careerchoice.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		
	if (trigger.match(/ㄘ什麼|吃甚麼|吃什麼/) != null) return exports.funny.FoodChoices(mainMsg) ;	
	
	if (trigger.match(/喝甚麼|喝什麼/) != null) return exports.funny.randomDrink(mainMsg) ;	
	
	if (trigger.match(/(運勢$)/) != null) return exports.funny.randomLuck(mainMsg) ; 
	
	if (trigger.match(/(的機率$)/) != null) return exports.funny.randomChance(mainMsg) ; 
	
	if (trigger.match(/角色背景/) != null) return exports.funny.BStyleFlagSCRIPTS(mainMsg) ;	
	
	if (trigger.match(/八雲的黑歷史|八雲黑歷史/) != null) return exports.funny.ykh() ;	
	
	
	if (trigger.match(/的黑歷史/) != null) return exports.funny.BlackHistory(mainMsg) ;	
	
	if (trigger.match(/^紅茶個人資料$/) != null) return exports.teapro.teaprofile() ;	

	if (trigger.match(/flag/) != null) return exports.funny.Flag() ;	
	
	if (trigger.match(/^八雲$/) != null) return exports.funny.randomYakumo() ;	

	if (trigger.match(/^生成名字$|^名字生成$|^生產名字$|^名字生產$/) != null && mainMsg[1] != NaN )	return exports.name.gename(mainMsg[1]);

}
module.exports = {
	parseInput:parseInput
};
