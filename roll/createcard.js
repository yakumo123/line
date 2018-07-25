var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function build7char(text01){
	let old ="";
	let ReStr = '【';
	if (text01 == undefined) {
	old = 0;
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
	let craftArr = ['龍族','妖精','皇家','死靈','復仇者','血鬼','主教','法師'] 
	let craft = craftArr[Math.floor((Math.random() * (craftArr.length)) + 0)];
	let rureArr = ['青銅','白銀','黃金','傳說'] 
	let rure = rureArr[Math.floor((Math.random() * (rureArr.length)) + 0)];
	let ShadowArr = [1,2,3,4,5,6,7,8,9,10,11,12]
	let Shadow = ShadowArr[Math.floor((Math.random() * (ShadowArr.length)) + 0)];
	let DependArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]	
	let Depend = DependArr[Math.floor((Math.random() * (DependArr.length)) + 0)];
	let abiltyArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]	
	let abilty = abiltyArr[Math.floor((Math.random() * (abiltyArr.length)) + 0)];
	let levelArr = 0
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
	let RTOne = 0;
	let RTTwo = 1;
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
	let BasicEffectArr = ['【守護】','【突進】','【必殺】','【疾馳】','【吸血】','任何卡片效果做成的傷害轉變為0。','任何法術做成的傷害轉變為0。','受到攻擊4以上改變為3。','【葬送】']
	let BasicEffect = BasicEffectArr[Math.floor((Math.random() * (BasicEffectArr.length)) + 0)];
	let DeathEffectArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','召喚1個鳳凰庭園到自己場上','給予1張斯巴達的遺址到手中','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','將對面所有語音轉變成老鼠吱吱聲','召喚1個不滅聖劍·杜蘭朵到自己場上','這場對戰中，給予自己的主戰者「自己的回合開始時，如果上個敵方的回合中，自己的主戰者受到的單次傷害大於4，則增加哥布林到敵方的手牌中直到上限。」效果','給予自己的主戰者「接下來的4場對戰獲得先攻，若敵方的主戰者也持有同效果，則失去此效果並對敵方的裝置使用DDoS。」效果。主戰者無法疊加此效果','給予自己的主戰者印牌的能力，主戰者無法疊加此效果','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符']
	let DeathEffect = DeathEffectArr[Math.floor((Math.random() * (DeathEffectArr.length)) + 0)];
	let RushEffectArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','召喚1個鳳凰庭園到自己場上','給予1張斯巴達的遺址到手中','對敵方一名傷害做成1點傷害','對敵方一名傷害做成2點傷害','對敵方一名傷害做成3點傷害','對敵方一名傷害做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','消滅對方所有你選擇的同名從者','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','將對面所有語音轉變成老鼠吱吱聲','召喚1個不滅聖劍·杜蘭朵到自己場上','這場對戰中，給予自己的主戰者「自己的回合開始時，如果上個敵方的回合中，自己的主戰者受到的單次傷害大於4，則增加哥布林到敵方的手牌中直到上限。」效果','給予自己的主戰者「接下來的4場對戰獲得先攻，若敵方的主戰者也持有同效果，則失去此效果並對敵方的裝置使用DDoS。」效果。主戰者無法疊加此效果','給予自己的主戰者印牌的能力，主戰者無法疊加此效果','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符']
	let RushEffect = RushEffectArr[Math.floor((Math.random() * (RushEffectArr.length)) + 0)];
	let EndEffectArr = ['在敵方的回合中，獲得必殺效果','隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','給予1張斯巴達的遺址到手中','對敵方一名傷害做成1點傷害','對敵方一名傷害做成2點傷害','對敵方一名傷害做成3點傷害','對敵方一名傷害做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','隨機消滅敵方一名從者']
	let EndEffect = EndEffectArr[Math.floor((Math.random() * (EndEffectArr.length)) + 0)];
	let EnterEffectArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','召喚1個鳳凰庭園到自己場上','給予1張斯巴達的遺址到手中','對敵方一名傷害做成1點傷害','對敵方一名傷害做成2點傷害','對敵方一名傷害做成3點傷害','對敵方一名傷害做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','消滅對方所有你選擇的同名從者','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','將對面所有語音轉變成老鼠吱吱聲','召喚1個不滅聖劍·杜蘭朵到自己場上','這場對戰中，給予自己的主戰者「自己的回合開始時，如果上個敵方的回合中，自己的主戰者受到的單次傷害大於4，則增加哥布林到敵方的手牌中直到上限。」效果','給予自己的主戰者「接下來的4場對戰獲得先攻，若敵方的主戰者也持有同效果，則失去此效果並對敵方的裝置使用DDoS。」效果。主戰者無法疊加此效果','給予自己的主戰者印牌的能力，主戰者無法疊加此效果','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符']
	let EnterEffect = EnterEffectArr[Math.floor((Math.random() * (EnterEffectArr.length)) + 0)];
	let EnterShadowArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','召喚1個鳳凰庭園到自己場上','給予1張斯巴達的遺址到手中','對敵方一名傷害做成1點傷害','對敵方一名傷害做成2點傷害','對敵方一名傷害做成3點傷害','對敵方一名傷害做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','消滅對方所有你選擇的同名從者','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','將對面所有語音轉變成老鼠吱吱聲','召喚1個不滅聖劍·杜蘭朵到自己場上','這場對戰中，給予自己的主戰者「自己的回合開始時，如果上個敵方的回合中，自己的主戰者受到的單次傷害大於4，則增加哥布林到敵方的手牌中直到上限。」效果','給予自己的主戰者「接下來的4場對戰獲得先攻，若敵方的主戰者也持有同效果，則失去此效果並對敵方的裝置使用DDoS。」效果。主戰者無法疊加此效果','給予自己的主戰者印牌的能力，主戰者無法疊加此效果','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符','獲得1回可以攻擊2次的效果','獲得1回可以攻擊3次的效果']
	let EnterShadow = EnterShadowArr[Math.floor((Math.random() * (EnterShadowArr.length)) + 0)];
	let EvolutionEffectArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','召喚1個鳳凰庭園到自己場上','給予1張斯巴達的遺址到手中','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','將對面所有語音轉變成老鼠吱吱聲','召喚1個不滅聖劍·杜蘭朵到自己場上','這場對戰中，給予自己的主戰者「自己的回合開始時，如果上個敵方的回合中，自己的主戰者受到的單次傷害大於4，則增加哥布林到敵方的手牌中直到上限。」效果','給予自己的主戰者「接下來的4場對戰獲得先攻，若敵方的主戰者也持有同效果，則失去此效果並對敵方的裝置使用DDoS。」效果。主戰者無法疊加此效果','給予自己的主戰者印牌的能力，主戰者無法疊加此效果','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符']
	let EvolutionEffect = EvolutionEffectArr[Math.floor((Math.random() * (EvolutionEffectArr.length)) + 0)];
	let DeathShadowArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','召喚1個鳳凰庭園到自己場上','給予1張斯巴達的遺址到手中','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','將對面所有語音轉變成老鼠吱吱聲','召喚1個不滅聖劍·杜蘭朵到自己場上','這場對戰中，給予自己的主戰者「自己的回合開始時，如果上個敵方的回合中，自己的主戰者受到的單次傷害大於4，則增加哥布林到敵方的手牌中直到上限。」效果','給予自己的主戰者「接下來的4場對戰獲得先攻，若敵方的主戰者也持有同效果，則失去此效果並對敵方的裝置使用DDoS。」效果。主戰者無法疊加此效果','給予自己的主戰者印牌的能力，主戰者無法疊加此效果','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符']
	let DeathShadow = DeathShadowArr[Math.floor((Math.random() * (DeathShadowArr.length)) + 0)];
	let InteractionEffectArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','對敵方一名傷害做成1點傷害','對敵方一名傷害做成2點傷害','對敵方一名傷害做成3點傷害','對敵方一名傷害做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符']
	let InteractionEffect = InteractionEffectArr[Math.floor((Math.random() * (InteractionEffectArr.length)) + 0)];
	let AttactEffectArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','對敵方一名傷害做成1點傷害','對敵方一名傷害做成2點傷害','對敵方一名傷害做成3點傷害','對敵方一名傷害做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符']
	let AttactEffect = AttactEffectArr[Math.floor((Math.random() * (AttactEffectArr.length)) + 0)];
	let Sheld = '傷害轉變為0，且一切效術效果無效(攻擊力及體力的效果有效)'
	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]
	
	
	
	for ( i=0 ; abilty >= abiltyArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	
	ReStr = ReStr + '【職業】：' + craft + '【稀有度】：' + rure + '\n';
	if (level == 1) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATOne + '【血量】：' + HEOne + '\n' ;
	if (level == 1 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 1 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 1 && abilty == 3) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 1 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 1 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 1 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 1 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 1 && abilty == 8) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 1 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 1 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 1 && abilty == 11) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 1 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 1 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 1 && abilty == 14) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 1 && abilty == 15) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 1 && abilty == 16) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 1 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 1 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 1 && abilty == 19) ReStr = ReStr + '入場死靈 謝幕死靈' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 1 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 1 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 1 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 1 && abilty == 23) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 1 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 1 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 1 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 1 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 1 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 1 && abilty == 29) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 1 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 1 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 1 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 1 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 1 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 1 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 1 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 1 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 1 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 1 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 1 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 1 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 1 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 1 && abilty == 43) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect ;
	if (level == 1 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 1 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 1 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 1 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 1 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 1 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 1 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 1 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 1 && abilty == 52) ReStr = ReStr + '【激奏' + RTOne + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 1 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;

	
	



	rply.text = ReStr;
	return rply;
	} 




module.exports = {
	build7char: build7char,
};
