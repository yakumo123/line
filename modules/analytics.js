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

	//在下面位置開始分析trigger

	if (trigger.match(/妮|幽|annie/) != null) return exports.null.null() ;
	
	if (trigger.match(/霖|凜/) != null) return exports.null.null() ;
	
	if (trigger.match(/test/) != null) return exports.kidding.joke() ;

	

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

	if (trigger.match(/^trpghelp$/)!= null ) return exports.trpghelp.TRPG();

	if (trigger.match(/摸八雲|摸爆八雲/) != null) return exports.funny.randomYakumoKii() ;	
	
	if (trigger.match(/(能力值$)/) != null && mainMsg[1] != NaN )	return exports.character.build7char(mainMsg[1]);
	
	if (trigger.match(/綜合分數$/) != null) return exports.character.ability(mainMsg) ;	

	if (trigger.match(/^生成卡片$|^卡片生成$|^生成卡牌$|^卡牌生成$/) != null && mainMsg[1] != NaN )	return exports.createcard.build7char(mainMsg[1]);
	
	
	if (trigger.match(/(^cc7版創角$|^cc七版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build7char(mainMsg[1]);
	
	if (trigger.match(/(^cc6版創角$|^cc六版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build6char(mainMsg[1]);
	
	if (trigger.match(/^coc7角色背景$/)!= null ) return exports.coc.PcBG();
		
	if (trigger.match(/^式神幫助2$/)!= null ) return exports.botyakumo2.BotHelpYy();
	
	if (trigger.match(/^式神幫助$/)!= null ) return exports.botyakumo.BotHelpYy();
	
	if (trigger.match(/^comfirephoto$/)!= null ) return exports.testing.Test12();
	
	if (trigger.match(/^comfirmcommand$/)!= null ) return exports.commandlist.Cili();

	if (trigger.match(/笨蛋測試/)!= null ) return exports.kidding.joke();
	
	if (trigger.match(/^問號$/)!= null ) return exports.kiddingme.joking();
	
	if (trigger.match(/^sv情報$/)!= null ) return exports.button.buttontest();
	if (trigger.match(/^公主情報$/)!= null ) return exports.redive.princesses();
	
	if (trigger.match(/^八雲比賽牌組$/)!= null ) return exports.yakumocard.buttontest();
	
	
	if (trigger.match(/^photolist$/)!= null ) return exports.security.Security();
	
	if (trigger.match(/^list0001$/)!= null ) return exports.photo.CarPhoto();
	
	if (trigger.match(/^list0002$/)!= null ) return exports.photo2.CarPhoto2();

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
	
	//tarot 指令
	if (trigger.match(/tarot|塔羅牌|塔羅/) != null) {
		if (trigger.match(/^單張|^每日|^daily/)!= null) return exports.funny.NomalDrawTarot(mainMsg[1], mainMsg[2]);//預設抽 79 張
		if (trigger.match(/^時間|^time/)!= null) 	return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 1);
		if (trigger.match(/^大十字|^cross/)!= null) return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 2);
	}
		if (trigger.match(/指定7張金卡禁卡|指定7張金卡限卡|指定7金/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodgoldsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfgoldsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalgoldsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunegoldsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragongoldsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowgoldsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalgoldsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavengoldsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}
	
	if (trigger.match(/指定5張金卡禁卡|指定5張金卡限卡|5金/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodgoldfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfgoldfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalgoldfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunegoldfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragongoldfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowgoldfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalgoldfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavengoldfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}
	
	if (trigger.match(/指定10張金卡禁卡|指定10張金卡限卡|指定10金/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodgoldtenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfgoldtenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalgoldtenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunegoldtenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragongoldtenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowgoldtenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalgoldtenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavengoldtenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}
	
	
	
	if (trigger.match(/指定7張虹卡禁卡|指定7張虹卡限卡|指定7虹/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodrainbowsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfrainbowsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalrainbowsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^中立/)!= null) return exports.bancardbalancerainbowsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunerainbowsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragonrainbowsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowrainbowsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalrainbowsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavenrainbowsevenlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}
	
	if (trigger.match(/指定5張虹卡禁卡|指定5張虹卡限卡|指定5虹/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodrainbowfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfrainbowfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalrainbowfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^中立/)!= null) return exports.bancardbalancefivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunerainbowfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragonrainbowfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowrainbowfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalrainbowfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavenrainbowfivelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}
	
	if (trigger.match(/指定3張虹卡禁卡|指定3張虹卡限卡|指定3虹/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodrainbowthreelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfrainbowthreelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalrainbowthreelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^中立/)!= null) return exports.bancardbalancerainbowthreelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunerainbowthreelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragonrainbowthreelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowrainbowthreelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalrainbowthreelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavenrainbowthreelimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}
	
		

	if (trigger.match(/無限制5張虹卡禁卡|無限制5張虹卡限卡|無限制5虹/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodrainbowfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfrainbowfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalrainbowfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^中立/)!= null) return exports.bancardbalancerainbowfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunerainbowfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragonrainbowfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowrainbowfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalrainbowfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavenrainbowfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}





	if (trigger.match(/無限制7張虹卡禁卡|無限制7張虹卡限卡|無限制7虹/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodrainbowsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfrainbowsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalrainbowsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^中立/)!= null) return exports.bancardbalancerainbowsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunerainbowsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragonrainbowsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowrainbowsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalrainbowsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavenrainbowsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}



	if (trigger.match(/無限制10張虹卡禁卡|無限制10張虹卡限卡|無限制10虹/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodrainbowtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfrainbowtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalrainbowtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^中立/)!= null) return exports.bancardbalancerainbowtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunerainbowtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragonrainbowtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowrainbowtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalrainbowtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavenrainbowtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}


	if (trigger.match(/無限制7張金卡禁卡|無限制7張金卡限卡|無限制7金/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodgoldsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfgoldsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalgoldsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunegoldsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragongoldsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowgoldsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalgoldsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavengoldsevenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}

	if (trigger.match(/無限制10張金卡禁卡|無限制10張金卡限卡|無限制10金/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodgoldtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfgoldtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalgoldtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunegoldtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragongoldtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowgoldtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalgoldtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavengoldtenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}


	if (trigger.match(/無限制15張金卡禁卡|無限制15張金卡限卡|無限制15金/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodgoldtenfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfgoldtenfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalgoldtenfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunegoldtenfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragongoldtenfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowgoldtenfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalgoldtenfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavengoldtenfiveunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}


	if (trigger.match(/無限制20張金卡禁卡|無限制20張金卡限卡|無限制20金/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardbloodgoldtwotenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelfgoldtwotenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportalgoldtwotenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrunegoldtwotenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragongoldtwotenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadowgoldtwotenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardroyalgoldtwotenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhavengoldtwotenunlimit.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}


	if (trigger.match(/指定全禁卡|指定全限卡/) != null) {
		if (trigger.match(/^血鬼|^吸血鬼/)!= null) return exports.bancardblood.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^妖精/)!= null) return exports.bancardelf.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^復仇者|^復仇/)!= null) return exports.bancardportal.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^中立/)!= null) return exports.bancardbalance.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^巫師|^法師/)!= null) return exports.bancardrune.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^龍族/)!= null) return exports.bancarddragon.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^死靈/)!= null) return exports.bancardshadow.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^皇家/)!= null) return exports.bancardrayol.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
		if (trigger.match(/^主教/)!= null) return exports.bancardhaven.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	}
	
	if (trigger.match(/隨機顏色|幸運顏色/) != null) return exports.funny.randomColour(mainMsg) ;	

	
	if (trigger.match(/隨機職業/) != null) return exports.careerchoice.MultiDrawBan(mainMsg[1], mainMsg[2], 2);
	
	
	
	//FLAG指令開始於此
	if (trigger.match(/再次|再一次|再啦幹/) != null) return exports.funny.mot() ;	
	
	if (trigger.match(/在次|在一次|在啦幹/) != null) return exports.funny.moo() ;	
	
	if (trigger.match(/你喜歡/) != null) return exports.funny.like() ;	
	
	if (trigger.match(/悠亞/) != null) return exports.funny.randomYula() ;	 
		
	if (trigger.match(/ㄘ什麼|吃甚麼|吃什麼/) != null) return exports.funny.FoodChoices(mainMsg) ;	
	
	if (trigger.match(/喝甚麼|喝什麼/) != null) return exports.funny.randomDrink(mainMsg) ;	
	
	if (trigger.match(/運勢|的機率是多少/) != null) return exports.funny.randomLuck(mainMsg) ; //占卜運氣		
	
	if (trigger.match(/角色背景|人設/) != null) return exports.funny.BStyleFlagSCRIPTS(mainMsg) ;	
	
	if (trigger.match(/黑歷史/) != null) return exports.funny.BlackHistory(mainMsg) ;	
	
	if (trigger.match(/立flag|死亡flag/) != null) return exports.funny.Flag() ;	
	
	if (trigger.match(/^八雲$|^@小學生八雲やくも$|^@平成最後の小学生八雲（やくも）$/) != null) return exports.funny.randomYakumo() ;	
	
	
	if (trigger.match(/女裝/) != null) return exports.funny.randomReply() ;	
	
	if (trigger.match(/鋪起來|鋪滿/) != null) return exports.funny.randomAOE() ;	
	
	if (trigger.match(/ㄐㄐ|雞雞/) != null) return exports.funny.randomChick() ;	
	
	if (trigger.match(/^吹雪$|^@震棋$/) != null) return exports.funny.randomSnow() ;	
	if (trigger.match(/^lullaby$|^露菈$/) != null) return exports.funny.randomLulla() ;	
	if (trigger.match(/^安特$/) != null) return exports.funny.randomAnt() ;
	if (trigger.match(/^筱亞$|^@筱亞叔叔$|^洨亞$/) != null) return exports.funny.randomFrog() ;	
	if (trigger.match(/^兔子$|燻兔肉佐/) != null) return exports.funny.randomRabbit() ;	
	if (trigger.match(/燻兔肉佐/) != null) return exports.funny.randomRabbit() ;	
	if (trigger.match(/^@高睿鴻$|^笑臉$/) != null) return exports.funny.randomSmileFace() ;
		
	if (trigger.match(/舔吹雪/) != null) return exports.image.imsnow() ;	
	
	if (trigger.match(/摸吹雪/) != null) return exports.imagetwo.immsnow() ;	
	
	if (trigger.match(/^車圖$/) != null) return exports.fakeimage.fake() ;	
	
	if (trigger.match(/摸老大|摸yu/) != null) return exports.yu.yuoo() ;	
	
	if (trigger.match(/鳳梨/) != null) return exports.imagepie.PieIm() ;	
	
	if (trigger.match(/ㄎㄧㄤ|ㄎㄧㄠ/) != null) return exports.crazy.ircra() ;	
	
	if (trigger.match(/並沒有/) != null) return exports.nothing.irnothing() ;	

	if (trigger.match(/瞎掰|騙人|屁啦/) != null) return exports.no.irno() ;	
		
	if (trigger.match(/邪教/) != null) return exports.video.mushroomcloud() ;	
		
	if (trigger.match(/(渦芽（橙靈心）$)|^渦芽$/) != null) return exports.funny.rrrr() ;	
	
	if (trigger.match(/^紅茶$|^@紅茶$/) != null) return exports.funny.tea() ;	
	
	if (trigger.match(/猜拳/) != null) {
		return RockPaperScissors(inputStr, mainMsg[1]);
	}
  
}


module.exports = {
	parseInput:parseInput
};
