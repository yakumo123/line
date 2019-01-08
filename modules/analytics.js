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


	if (trigger.match(/霖|凜|安妮|妮幽|weichen/) != null) return exports.null.null() ;
	
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


	if (trigger.match(/感謝季|感謝八雲|感謝祭|快感謝他|快感覺她/) != null) return exports.funny.think() ;	
	
	
	if (trigger.match(/^trpghelp$/)!= null ) return exports.trpghelp.TRPG();

	if (trigger.match(/摸八雲|摸爆八雲/) != null) return exports.funny.randomYakumoKii() ;	
	
	if (trigger.match(/(的能力值$)/) != null && mainMsg[1] != NaN )	return exports.character.build7char(mainMsg[1]);
	
	if (trigger.match(/八雲的綜合分數$|八雲綜合分數$/) != null) return exports.funny.yakumomark() ;	

	if (trigger.match(/紅茶的綜合分數$|紅茶綜合分數$/) != null) return exports.teachar.ability(mainMsg) ;	
	
	if (trigger.match(/綜合分數$/) != null) return exports.character.ability(mainMsg) ;	

	if (trigger.match(/^生成卡片$|^卡片生成$|^生成卡牌$|^卡牌生成$/) != null && mainMsg[1] != NaN )	return exports.createcard.build7char(mainMsg[1]);
	
	if (trigger.match(/(^cc7版創角$|^cc七版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build7char(mainMsg[1]);
	
	if (trigger.match(/(^cc6版創角$|^cc六版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build6char(mainMsg[1]);
	
	if (trigger.match(/^coc7角色背景$/)!= null ) return exports.coc.PcBG();
	
	if (trigger.match(/^式神幫忙$|^幫助$|^幫忙$/)!= null ) return exports.fakeyakumobot.fakehelp();
	
	if (trigger.match(/^式神幫助2$/)!= null ) return exports.botyakumo2.BotHelpYy();
	
	if (trigger.match(/^式神幫助$/)!= null ) return exports.botyakumo.BotHelpYy();
	

	if (trigger.match(/^comfirmcards$/)!= null ) return exports.testing.Test13();
	
	if (trigger.match(/^sv推薦牌組10月$/)!= null ) return exports.cardsuggest.Suggestion();
	
	if (trigger.match(/☆推薦/) != null) {
		if (trigger.match(/^疾馳/)!= null ) return exports.cardbuild.dragon1();
		if (trigger.match(/^王座/)!= null ) return exports.cardbuild.vampire1();
		if (trigger.match(/^元氣彈/)!= null ) return exports.cardbuild.rune1();
		if (trigger.match(/^葬送/)!= null ) return exports.cardbuild.shadow1();
		if (trigger.match(/^絢爛/)!= null ) return exports.cardbuild.portal1();
		if (trigger.match(/^終末/)!= null ) return exports.cardbuild.shadow2();
		if (trigger.match(/^八雲唯我龍/)!= null ) return exports.cardbuild.dragon2();
		if (trigger.match(/^悔辱/)!= null ) return exports.cardbuild.dragon3();
		if (trigger.match(/^八雲唯我皇/)!= null ) return exports.cardbuild.royal1();
		if (trigger.match(/^阿卡/)!= null ) return exports.cardbuild.shadow3();
		if (trigger.match(/^寶藏/)!= null ) return exports.cardbuild.royal2();
		if (trigger.match(/^穩亞/)!= null ) return exports.cardbuild.royal3();	
		if (trigger.match(/^羈押/)!= null ) return exports.cardbuild.shadow3();
	}
	
	if (trigger.match(/^sv情報$/)!= null ) return exports.button.buttontest();
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
	
	if (trigger.match(/隨機顏色|幸運顏色/) != null) return exports.funny.randomColour(mainMsg) ;	
	
	if (trigger.match(/隨機職業/) != null) return exports.careerchoice.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		
	if (trigger.match(/ㄘ什麼|吃甚麼|吃什麼/) != null) return exports.funny.FoodChoices(mainMsg) ;	
	
	if (trigger.match(/喝甚麼|喝什麼/) != null) return exports.funny.randomDrink(mainMsg) ;	
	
	if (trigger.match(/(運勢$)/) != null) return exports.funny.randomLuck(mainMsg) ; 
	
	if (trigger.match(/(的機率$)/) != null) return exports.funny.randomChance(mainMsg) ; 
	
	if (trigger.match(/角色背景/) != null) return exports.funny.BStyleFlagSCRIPTS(mainMsg) ;	
	
	if (trigger.match(/八雲的黑歷史|八雲黑歷史/) != null) return exports.funny.ykh() ;	
	
	
	if (trigger.match(/的黑歷史/) != null) return exports.funny.BlackHistory(mainMsg) ;	
	
	if (trigger.match(/flag/) != null) return exports.funny.Flag() ;	
	
	if (trigger.match(/^八雲$/) != null) return exports.funny.randomYakumo() ;	
	if (trigger.match(/^吹雪$/) != null) return exports.funny.randomSnow() ;	
	if (trigger.match(/^安特$/) != null) return exports.funny.randomAnt() ;
	if (trigger.match(/^筱亞$|^洨亞$/) != null) return exports.funny.randomFrog() ;	
	if (trigger.match(/^兔子$/) != null) return exports.funny.randomRabbit() ;
	
	if (trigger.match(/鋪起來|鋪滿/) != null) return exports.funny.randomAOE() ;	
	
	if (trigger.match(/老實說/) != null) return exports.image.imsnow() ;	
	
	if (trigger.match(/會習慣/) != null) return exports.imagepie.PieIm() ;	
	
	if (trigger.match(/ㄎㄧㄤ|ㄎㄧㄠ/) != null) return exports.crazy.ircra() ;	
	
	if (trigger.match(/並沒有/) != null) return exports.nothing.irnothing() ;	

	if (trigger.match(/瞎掰|騙人|屁啦/) != null) return exports.no.irno() ;	
	
	if (trigger.match(/^嘴砲$|真的最後一次|買最後一次|最後一次買|戒貼圖|戒買貼圖/) != null) return exports.kidding.laugh() ;	

	if (trigger.match(/^基德$/) != null) return exports.kidding.inin() ;	

	if (trigger.match(/^生成名字$|^名字生成$|^生產名字$|^名字生產$/) != null && mainMsg[1] != NaN )	return exports.name.gename(mainMsg[1]);
	
	if (trigger.match(/雞雞|大ㄐㄐ/) != null) return exports.funny.randomChick() ;

}
module.exports = {
	parseInput:parseInput
};
