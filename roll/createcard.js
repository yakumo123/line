var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function build7char(text01){
	let old ="";
	let ReStr = '【';
	if (text01 == undefined) {
	old = '八雲的未知卡片＜沒有預設值>' ;
	ReStr = ReStr + old + '】\n如要加預設值請這樣輸入： 生成卡片 八雲之怒';
	}
	else 
	{
	old = text01;
	ReStr = ReStr + old + '】';
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
	let DependArr = [1,2,3,4,5,6,7,8,9,10]	
	let Depend = DependArr[Math.floor((Math.random() * (DependArr.length)) + 0)];
	let abiltyArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]	
	let abilty = abiltyArr[Math.floor((Math.random() * (abiltyArr.length)) + 0)];
	let levelArr = [1,2,3,4,5,6,7,8,9,10,11,11,11,11,11,11,11,11,11,11]
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
	let HEOneArr = 1;
	let HETwoArr = [1,2]
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
	let RushEffectArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','召喚1個鳳凰庭園到自己場上','給予1張斯巴達的遺址到手中','對敵方一名從者做成1點傷害','對敵方一名從者做成2點傷害','對敵方一名從者做成3點傷害','對敵方一名從者做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','消滅對方所有你選擇的同名從者','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','將對面所有語音轉變成老鼠吱吱聲','召喚1個不滅聖劍·杜蘭朵到自己場上','這場對戰中，給予自己的主戰者「自己的回合開始時，如果上個敵方的回合中，自己的主戰者受到的單次傷害大於4，則增加哥布林到敵方的手牌中直到上限。」效果','給予自己的主戰者「接下來的4場對戰獲得先攻，若敵方的主戰者也持有同效果，則失去此效果並對敵方的裝置使用DDoS。」效果。主戰者無法疊加此效果','給予自己的主戰者印牌的能力，主戰者無法疊加此效果','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符']
	let RushEffect = RushEffectArr[Math.floor((Math.random() * (RushEffectArr.length)) + 0)];
	let EndEffectArr = ['在敵方的回合中，獲得必殺效果','隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','給予1張斯巴達的遺址到手中','對敵方一名從者做成1點傷害','對敵方一名從者做成2點傷害','對敵方一名從者做成3點傷害','對敵方一名從者做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','隨機消滅敵方一名從者']
	let EndEffect = EndEffectArr[Math.floor((Math.random() * (EndEffectArr.length)) + 0)];
	let EnterEffectArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','召喚1個鳳凰庭園到自己場上','給予1張斯巴達的遺址到手中','對敵方一名從者做成1點傷害','對敵方一名從者做成2點傷害','對敵方一名從者做成3點傷害','對敵方一名從者做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','消滅對方所有你選擇的同名從者','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','將對面所有語音轉變成老鼠吱吱聲','召喚1個不滅聖劍·杜蘭朵到自己場上','這場對戰中，給予自己的主戰者「自己的回合開始時，如果上個敵方的回合中，自己的主戰者受到的單次傷害大於4，則增加哥布林到敵方的手牌中直到上限。」效果','給予自己的主戰者「接下來的4場對戰獲得先攻，若敵方的主戰者也持有同效果，則失去此效果並對敵方的裝置使用DDoS。」效果。主戰者無法疊加此效果','給予自己的主戰者印牌的能力，主戰者無法疊加此效果','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符']
	let EnterEffect = EnterEffectArr[Math.floor((Math.random() * (EnterEffectArr.length)) + 0)];
	let EnterShadowArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','召喚1個援護砲擊到自己場上','召喚1個斯巴達的遺址到自己場上','召喚1個甦醒的熾天使到自己場上','召喚1個封印的熾天使到自己場上','PP上限＋2','對敵方全體從者做成1點傷害','對敵方全體從者做成2點傷害','召喚1個天狐神社到自己場上','給予1張封印的熾天使到手中','召喚1個鳳凰庭園到自己場上','給予1張斯巴達的遺址到手中','對敵方一名從者做成1點傷害','對敵方一名從者做成2點傷害','對敵方一名從者做成3點傷害','對敵方一名從者做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','消滅對方所有你選擇的同名從者','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','將對面所有語音轉變成老鼠吱吱聲','召喚1個不滅聖劍·杜蘭朵到自己場上','這場對戰中，給予自己的主戰者「自己的回合開始時，如果上個敵方的回合中，自己的主戰者受到的單次傷害大於4，則增加哥布林到敵方的手牌中直到上限。」效果','給予自己的主戰者「接下來的4場對戰獲得先攻，若敵方的主戰者也持有同效果，則失去此效果並對敵方的裝置使用DDoS。」效果。主戰者無法疊加此效果','給予自己的主戰者印牌的能力，主戰者無法疊加此效果','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符','獲得1回可以攻擊2次的效果','獲得1回可以攻擊3次的效果']
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

	if (level == 2) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATTwo + '【血量】：' + HETwo + '\n' ;
	if (level == 2 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 2 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 2 && abilty == 3) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 2 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 2 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 2 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 2 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 2 && abilty == 8) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 2 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 2 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 2 && abilty == 11) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 2 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 2 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 2 && abilty == 14) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 2 && abilty == 15) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 2 && abilty == 16) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 2 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 2 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 2 && abilty == 19) ReStr = ReStr + '入場死靈 謝幕死靈' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 2 && level == 2 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 2 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 2 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 2 && abilty == 23) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 2 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 2 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 2 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 2 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 2 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 2 && abilty == 29) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 2 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 2 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 2 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 2 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 2 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 2 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 2 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 2 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 2 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 2 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 2 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 2 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 2 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 2 && abilty == 43) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect ;
	if (level == 2 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 2 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 2 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 2 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 2 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 2 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 2 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 2 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 2 && abilty == 52) ReStr = ReStr + '【激奏' + RTTwo + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 2 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;

	if (level == 3) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATThree + '【血量】：' + HEThree + '\n' ;
	if (level == 3 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 3 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 3 && abilty == 3) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 3 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 3 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 3 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 3 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 3 && abilty == 8) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 3 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 3 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 3 && abilty == 11) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 3 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 3 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 3 && abilty == 14) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 3 && abilty == 15) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 3 && abilty == 16) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 3 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 3 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 3 && abilty == 19) ReStr = ReStr + '入場死靈 謝幕死靈' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 3 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 3 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 3 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 3 && abilty == 23) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 3 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 3 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 3 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 3 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 3 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 3 && abilty == 29) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 3 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 3 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 3 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 3 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 3 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 3 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 3 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 3 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 3 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 3 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 3 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 3 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 3 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 3 && abilty == 43) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect ;
	if (level == 3 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 3 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 3 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 3 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 3 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 3 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 3 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 3 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 3 && abilty == 52) ReStr = ReStr + '【激奏' + RTThree + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 3 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;

		if (level == 4) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATFour + '【血量】：' + HEFour + '\n' ;
	if (level == 4 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 4 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 4 && abilty == 3) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 4 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 4 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 4 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 4 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 4 && abilty == 8) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 4 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 4 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 4 && abilty == 11) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 4 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 4 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 4 && abilty == 14) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 4 && abilty == 15) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 4 && abilty == 16) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 4 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 4 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 4 && abilty == 19) ReStr = ReStr + '入場死靈 謝幕死靈' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 4 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 4 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 4 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 4 && abilty == 23) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 4 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 4 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 4 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 4 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 4 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 4 && abilty == 29) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 4 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 4 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 4 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 4 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 4 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 4 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 4 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 4 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 4 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 4 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 4 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 4 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 4 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 4 && abilty == 43) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect ;
	if (level == 4 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 4 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 4 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 4 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 4 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 4 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 4 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 4 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 4 && abilty == 52) ReStr = ReStr + '【激奏' + RTFour + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 4 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;

	if (level == 5) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATFive + '【血量】：' + HEFive + '\n' ;
	if (level == 5 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 5 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 5 && abilty == 3) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 5 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 5 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 5 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 5 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 5 && abilty == 8) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 5 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 5 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 5 && abilty == 11) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 5 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 5 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 5 && abilty == 14) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 5 && abilty == 15) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 5 && abilty == 16) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 5 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 5 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 5 && abilty == 19) ReStr = ReStr + '入場死靈 謝幕死靈' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 5 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 5 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 5 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 5 && abilty == 23) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 5 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 5 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 5 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 5 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 5 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 5 && abilty == 29) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 5 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 5 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 5 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 5 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 5 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 5 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 5 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 5 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 5 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 5 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 5 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 5 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 5 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 5 && abilty == 43) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect ;
	if (level == 5 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 5 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 5 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 5 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 5 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 5 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 5 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 5 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 5 && abilty == 52) ReStr = ReStr + '【激奏' + RTFive + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 5 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;

	if (level == 6) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATSix + '【血量】：' + HESix + '\n' ;
	if (level == 6 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 6 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 6 && abilty == 3) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 6 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 6 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 6 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 6 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 6 && abilty == 8) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 6 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 6 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 6 && abilty == 11) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 6 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 6 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 6 && abilty == 14) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 6 && abilty == 15) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 6 && abilty == 16) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 6 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 6 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 6 && abilty == 19) ReStr = ReStr + '入場死靈 謝幕死靈' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 6 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 6 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 6 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 6 && abilty == 23) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 6 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 6 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 6 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 6 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 6 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 6 && abilty == 29) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 6 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 6 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 6 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 6 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 6 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 6 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 6 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 6 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 6 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 6 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 6 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 6 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 6 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 6 && abilty == 43) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect ;
	if (level == 6 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 6 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 6 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 6 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 6 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 6 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 6 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 6 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 6 && abilty == 52) ReStr = ReStr + '【激奏' + RTSix + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 6 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;

	if (level == 7) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATSeven + '【血量】：' + HESeven + '\n' ;
	if (level == 7 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 7 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 7 && abilty == 3) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 7 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 7 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 7 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 7 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 7 && abilty == 8) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 7 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 7 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 7 && abilty == 11) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 7 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 7 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 7 && abilty == 14) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 7 && abilty == 15) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 7 && abilty == 16) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 7 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 7 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 7 && abilty == 19) ReStr = ReStr + '入場死靈 謝幕死靈' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 7 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 7 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 7 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 7 && abilty == 23) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 7 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 7 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 7 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 7 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 7 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 7 && abilty == 29) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 7 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 7 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 7 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 7 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 7 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 7 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 7 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 7 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 7 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 7 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 7 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 7 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 7 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 7 && abilty == 43) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect ;
	if (level == 7 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 7 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 7 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 7 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 7 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 7 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 7 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 7 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 7 && abilty == 52) ReStr = ReStr + '【激奏' + RTSeven + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 7 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;

	if (level == 8) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATEight + '【血量】：' + HEEight + '\n' ;
	if (level == 8 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 8 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 8 && abilty == 3) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 8 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 8 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 8 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 8 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 8 && abilty == 8) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 8 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 8 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 8 && abilty == 11) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 8 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 8 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 8 && abilty == 14) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 8 && abilty == 15) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 8 && abilty == 16) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 8 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 8 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 8 && abilty == 19) ReStr = ReStr + '入場死靈 謝幕死靈' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 8 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 8 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 8 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 8 && abilty == 23) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 8 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 8 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 8 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 8 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 8 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 8 && abilty == 29) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 8 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 8 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 8 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 8 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 8 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 8 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 8 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 8 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 8 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 8 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 8 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 8 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 8 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 8 && abilty == 43) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect ;
	if (level == 8 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 8 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 8 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 8 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 8 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 8 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 8 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 8 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 8 && abilty == 52) ReStr = ReStr + '【激奏' + RTEight + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 8 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;
	
	if (level == 9) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATNine + '【血量】：' + HENine + '\n' ;
	if (level == 9 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 9 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 9 && abilty == 3) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 9 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 9 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 9 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 9 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 9 && abilty == 8) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 9 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 9 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 9 && abilty == 11) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 9 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 9 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 9 && abilty == 14) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 9 && abilty == 15) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 9 && abilty == 16) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 9 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 9 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 9 && abilty == 19) ReStr = ReStr + '入場死靈 謝幕死靈' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 9 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 9 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 9 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 9 && abilty == 23) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 9 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 9 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 9 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 9 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 9 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 9 && abilty == 29) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 9 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 9 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 9 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 9 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 9 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 9 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 9 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 9 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 9 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 9 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 9 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 9 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 9 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 9 && abilty == 43) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect ;
	if (level == 9 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 9 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 9 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 9 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 9 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 9 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 9 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 9 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 9 && abilty == 52) ReStr = ReStr + '【激奏' + RTNine + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 9 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;
	
	if (level == 10) ReStr = ReStr + '【類型】：從者 【費用】：' + level + '\n【攻擊力】：' + ATTen + '【血量】：' + HETen + '\n' ;
	if (level == 10 && abilty == 1) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 10 && abilty == 2) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 10 && abilty == 3) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect + '\n' + BasicEffect;
	if (level == 10 && abilty == 4) ReStr = ReStr + BasicEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 10 && abilty == 5) ReStr = ReStr + BasicEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 10 && abilty == 6) ReStr = ReStr + BasicEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 10 && abilty == 7) ReStr = ReStr + '【入場曲】' + '\n' + EnterEffect + '【謝幕曲】' + DeathEffect ;
	if (level == 10 && abilty == 8) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect + '\n' + '【入場曲】' + EnterEffect ;
	if (level == 10 && abilty == 9) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 10 && abilty == 10) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ; ;
	if (level == 10 && abilty == 11) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 10 && abilty == 12) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】' + DeathEffect ;	
	if (level == 10 && abilty == 13) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 10 && abilty == 14) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect + '\n' + '回合結束時' + EndEffect ;
	if (level == 10 && abilty == 15) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 10 && abilty == 16) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 10 && abilty == 17) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '回合結束時' + EndEffect ;
	if (level == 10 && abilty == 18) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow;
	if (level == 10 && abilty == 20) ReStr = ReStr + Sheld ;
	if (level == 10 && abilty == 21) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【交戰時】' + InteractionEffect ;	
	if (level == 10 && abilty == 22) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 10 && abilty == 23) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 10 && abilty == 24) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '回合結束時' + EndEffect  ;
	if (level == 10 && abilty == 25) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 10 && abilty == 26) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow  ;
	if (level == 10 && abilty == 27) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 10 && abilty == 28) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 10 && abilty == 29) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 10 && abilty == 30) ReStr = ReStr + + '【攻擊時】' + AttactEffect + '回合結束時' + EndEffect ;
	if (level == 10 && abilty == 31) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 10 && abilty == 32) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 10 && abilty == 33) ReStr = ReStr + BasicEffect + '\n' + '【攻擊時】' + AttactEffect ;
	if (level == 10 && abilty == 34) ReStr = ReStr + BasicEffect + '\n' + '【交戰時】' + InteractionEffect ;
	if (level == 10 && abilty == 35) ReStr = ReStr + BasicEffect ;
	if (level == 10 && abilty == 36) ReStr = ReStr + '【入場曲】' + EnterEffect ;
	if (level == 10 && abilty == 37) ReStr = ReStr + '【謝幕曲】' + DeathEffect ;
	if (level == 10 && abilty == 38) ReStr = ReStr + '回合結束時' + EndEffect ;
	if (level == 10 && abilty == 39) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (level == 10 && abilty == 40) ReStr = ReStr + '【謝幕曲】【死靈術' + Shadow + '】' ;
	if (level == 10 && abilty == 41) ReStr = ReStr + '【攻擊時】' + AttactEffect ;
	if (level == 10 && abilty == 42) ReStr = ReStr + '【交戰時】' + InteractionEffect ;
	if (level == 10 && abilty == 43) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect ;
	if (level == 10 && abilty == 44) ReStr = ReStr + BasicEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 10 && abilty == 45) ReStr = ReStr + '【入場曲】' + EnterEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 10 && abilty == 46) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】' + DeathEffect ;
	if (level == 10 && abilty == 47) ReStr = ReStr + '回合結束時' + EndEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 10 && abilty == 48) ReStr = ReStr + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 10 && abilty == 49) ReStr = ReStr + '【進化時】' + EvolutionEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + DeathShadow ;
	if (level == 10 && abilty == 50) ReStr = ReStr + '【交戰時】' + InteractionEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 10 && abilty == 51) ReStr = ReStr + '【攻擊時】' + AttactEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 10 && abilty == 52) ReStr = ReStr + '【激奏' + RTTen + '】' + RushEffect + '\n' + '【進化時】' + EvolutionEffect ;
	if (level == 10 && abilty == 53) ReStr = ReStr + '【進化時】' + EvolutionEffect ;

	if (Depend == 1 && level == 11) ReStr = ReStr + '【類型】：法術 【費用】：' + Depend + '\n' + RushEffect ;
	if (Depend == 2 && level == 11) ReStr = ReStr + '【類型】：法術 【費用】：' + Depend + '\n' + RushEffect ;
	if (Depend == 3 && level == 11) ReStr = ReStr + '【類型】：法術 【費用】：' + Depend + '\n' + RushEffect ;
	if (Depend == 4 && level == 11) ReStr = ReStr + '【類型】：法術 【費用】：' + Depend + '\n' + RushEffect ;
	if (Depend == 5 && level == 11) ReStr = ReStr + '【類型】：護符 【費用】：' + Depend + '\n' + '【倒數：' + Shadow + '】' + '\n' + '【入場曲】' + EnterEffect ;
	if (Depend == 6 && level == 11) ReStr = ReStr + '【類型】：護符 【費用】：' + Depend + '\n' + '【倒數：' + Shadow + '】' + '\n' + '【謝幕曲】' + DeathEffect ;
	if (Depend == 7 && level == 11) ReStr = ReStr + '【類型】：護符 【費用】：' + Depend + '\n' + '【倒數：' + Shadow + '】' + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (Depend == 8 && level == 11) ReStr = ReStr + '【類型】：護符 【費用】：' + Depend + '\n' + '【倒數：' + Shadow + '】' + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + EnterShadow ;
	if (Depend == 9 && level == 11) ReStr = ReStr + '【類型】：護符 【費用】：' + Depend + '\n' + '【倒數：' + Shadow + '】' + '\n' + '【入場曲】【死靈術' + Shadow + '】' + EnterShadow + '\n' + '【謝幕曲】' + DeathEffect ;
	if (Depend == 10 && level == 11) ReStr = ReStr + '【類型】：護符 【費用】：' + Depend + '\n' + '【倒數：' + Shadow + '】' + '\n' + '【入場曲】' + EnterEffect + '\n' + '【謝幕曲】【死靈術' + Shadow + '】' + EnterShadow ;



	rply.text = ReStr;
	return rply;
	} 




module.exports = {
	build7char: build7char,
};
