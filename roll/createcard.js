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
	let craftArr = ['龍族','妖精','皇家','死靈','復仇者','血鬼','主教','法師'] 
	let craft = craftArr[Math.floor((Math.random() * (craftArr.length)) + 0)];
	let rureArr = ['青銅','白銀','黃金','傳說'] 
	let rure = rureArr[Math.floor((Math.random() * (rureArr.length)) + 0)];
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
	let BasicEffectArr = ['【守護】','【突進】','【必殺】','【疾馳】','【吸血】','任何卡片效果做成的傷害轉變為0','任何法術做成的傷害轉變為0','攻擊4以上改變為3','【葬送】’]
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
	let AttactEffectArr = ['隨機給予敵方的一名從者1點傷害','隨機給予敵方的一名從者2點傷害','隨機破壞敵方一名從者','抽取1張牌','抽取3張牌','發動1回法術增幅','PP上限＋1','回復場上所有從者1滴血','回復場上所有從者2滴血','回復自己主戰1滴血','回復自己主戰2滴血','回復自己主戰3滴血','回復自己主戰4滴血','召喚1體殭屍(222白板)到自己場上','召喚1體骷髏(111白板)到自己場上','對敵方一名傷害做成1點傷害','對敵方一名傷害做成2點傷害','對敵方一名傷害做成3點傷害','對敵方一名傷害做成1點傷害4點傷害','破壞敵方1體從者','破壞敵方2體從者','破壞對方1體最高攻擊力的從者','破壞對方所有你選擇的同名從者','消滅敵方1體從者','消滅敵方2體從者','消滅對方1體最高攻擊力的從者','隨機消滅敵方一名從者','直接勝利','消滅對方主戰','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者1點傷害','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符','給予敵方的一名從者-1/-0效果','給予自己的一名從者+0/+1效果','增加一張哥布林到自己的手牌中','給予自己的一名從者+0/+2與突進效果','使一名敵方從者失去所有能力','給予自己的一名從者必殺效果','如果敵方的戰場上有守護效果的從者，則會隨機破壞一名敵方的從者','給予自己的一名從者+2/+2與守護效果','給予與這個從者交戰的敵方從者-1/-0效果','到回合結束為止，根據自己的手牌數獲得+1/+0效果','當自己的其他從者獲得+效果時，給予這個從者守護、必殺、潛行其中一個效果','當敵方的手牌數量大於7時，則會給予敵方的主戰者2點傷害','若自己的戰場上的從者數為5，且都獲得了+效果，則隨機消滅2個敵方的從者或護符’]
	let AttactEffect = AttactEffectArr[Math.floor((Math.random() * (AttactEffectArr.length)) + 0)];
	let Sheld = '傷害轉變為0，且一切效術效果無效(攻擊力及體力的效果有效)'
	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]
	
	
	
	for ( i=0 ; level >= levelArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '【職業】：' + craft + '【稀有度】：' + rure + '\n';
	if (Depend = 1) ReStr = ReStr + '【類型】：從者' ;
	ReStr = ReStr + '【攻擊力】：' ;
	if (level = 1) ReStr = ReStr + ATOne + '【血量】：' + HEOne + '\n' ;
	
	else
	if (level = 2) ReStr = ReStr + ATTwo + '【血量】：' + HETwo + '\n' ;
	
	
	if (level = 3) ReStr = ReStr + ATThree + '【血量】：' + HEThree + '\n' ;
	if (level = 4) ReStr = ReStr + ATFour + '【血量】：' + HEFour + '\n' ;
	if (level = 5) ReStr = ReStr + ATFive + '【血量】：' + HEFive + '\n' ;
	if (level = 6) ReStr = ReStr + ATSix + '【血量】：' + HESix + '\n' ;
	if (level = 7) ReStr = ReStr + ATSeven + '【血量】：' + HESeven + '\n' ;
	if (level = 8) ReStr = ReStr + ATEight + '【血量】：' + HEEight + '\n' ;
	if (level = 9) ReStr = ReStr + ATNine + '【血量】：' + HENine + '\n' ;
	if (level = 10) ReStr = ReStr + ATTen + '【血量】：' + HETen + '\n' ;
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
