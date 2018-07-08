var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改
var rplymuti = [{type : 'text'}, {type : 'text'}];

function FoodChoices(TEXT) {

let rplyArr = ['蕎麥麵 ','小籠包','拉麵','瓜仔肉','壽司','刺身','炸雞','排骨飯','意大利麵','滷肉飯','銅鑼燒','米粉炒','肉燥飯','不吃','吃土','八雲','吹雪','安特','牛丼','親子丼','麵包','麥當勞','漢堡','KFC','銅鑼燒','鹽酥雞','胡椒餅','鍋貼','粽子','披薩','烤雞','烤肉','石頭鍋飯','羊肉爐','麻油雞','肉羹','擔仔麵','排骨麵','蔥抓餅','刈包','薑汁番茄','生煎包','蚵仔煎','肉粽','炸雞排','烤玉米、烤番薯','烤香腸','蔥油餅','臭豆腐','肉圓','蚵仔麵線','筒仔米糕','豬血糕','蛋包飯','摩斯','海南雞飯','阿忠麵線','麵線','火鍋','三明治','涼麵','拌麵','烏冬','燒臘飯','海鮮丼','部隊鍋','魷魚焿','熱狗堡','豬腳飯','炒飯','雞腿飯','炸雞排','蛋餅','沙拉','咖哩','雞肉咖哩','瑞典肉丸','德國豬腳','雞塊','鐵板燒','印度薄餅','豬排飯','牛排飯','便當','貢丸湯','泰式炒河粉','韓式炒年糕','紫菜包飯','韓式燒烤','酸辣湯麵','西班牙海鮮飯','坦都里烤雞','千層麵','春捲'];
	
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];

return rply;

}

function Flag() {
let rplyArr = ['\
「打完這仗我就回老家結婚（この戦いが終わったら、故郷に帰って結婚するんだ）」', '\
「打完這一仗後我請你喝酒」', '\
「你、你要錢嗎！要什麼我都能給你！/我可以給你更多的錢！」', '\
「做完這次任務，我就要結婚了。」', '\
「幹完這一票我就金盆洗手了。」', '\
「好想再XXX啊……」', '\
「已經沒什麼好害怕的了（もう何も恐くない）」', '\
「我一定會回來的（必ず帰る！）」', '\
「差不多該走了」', '\
「我只是希望你永遠不要忘記我。」', '\
「我只是希望能永遠和你在一起。」', '\
「啊啊…為什麼會在這種時候、想起了那些無聊的事呢？」', '\
「能遇見你真是太好了。」', '\
「我終於…為你們報仇了！」', '\
「等到一切結束後，我有些話想跟妳說！」', '\
「這段時間我過的很開心啊。」', '\
把自己的寶物借給其他人，然後說「待一切結束後記得還給我。」', '\
「真希望這份幸福可以永遠持續下去。」', '\
「我們三個人要永永遠遠在一起！」', '\
「這是我女兒的照片，很可愛吧？」', '\
「請告訴他/她，我永遠愛他/她」', '\
「聽好，在我回來之前絕不要亂走動哦（いいか、俺が帰ってくるまでここを動くんじゃないぞ）」', '\
「要像一個乖孩子一樣等著我回來」', '\
「我去去就來（先に行って、すぐ戻るから）」', '\
「快逃！(逃げろう！/早く逃げろう！)」', '\
「對方只有一個人，大家一起上啊」', '\
「我就不信，這麼多人還殺不了他一個！」', '\
「幹，幹掉了嗎？（やったのか？）」', '\
「身體好輕」', '\
「可惡！你給我看著！（逃跑）」', '\
「躲在這裡就應該不會被發現了吧。」', '\
「我不會讓任何人死的。」', '\
「可惡！原來是這麼回事！」', '\
「跑這麼遠應該就行了。」', '\
「我已經甚麼都不怕了（もう何も恐くない）」', '\
「這XXX是什麼，怎麼之前沒見過（なんだこのXXX、見たことないな）」', '\
「什麽聲音……？就去看一下吧（:「何の音だ？ちょっと見てくる」', '\
「是我的錯覺嗎？/果然是錯覺/錯覺吧/可能是我（看/聽）錯了」', '\
「二十年後又是一條好漢！」', '\
「大人/將軍武運昌隆」', '\
「這次工作的報酬是以前無法比較的（:「今度の仕事でまとまったカネが入るんだ」', '\）」', '\
「我才不要和罪犯呆在一起，我回自己的房間去了！（この中に殺人者がいるかもしれないのに、一緒に居られるか!俺は自分の部屋に戻るぞ!）」', '\
「其實我知道事情的真相…（各種廢話）…犯人就是……」', '\
「我已經天下無敵了~~」', '\
「大人！這邊就交給小的吧，請快離開這邊吧」', '\
「XX，這就是我們流派的最終奧義。這一招我只會演示一次，你看好了！」', '\
「誰敢殺我？」', '\
「從來沒有人能越過我的劍圍。」', '\
「就算殺死也沒問題吧？」', '\
「看我塔下強殺！」', '\
「騙人的吧，我們不是朋友嗎？」', '\
「我老爸是....你有種就....」', '\
「我可以好好利用這件事」'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function BStyleFlagSCRIPTS(TEXT) {
let PersonalDescriptionArr = ['神族', '魔族', '妖精族', '人族', '巨人族', '森精族', '獸人族', '天翼族', '機凱族', '魚人族', '吸血鬼族', '龍族']
let IdeologyBeliefsArr = ['男性', '女性'];
let RPGCareerArr = ['戰士（FIG） \n【職業特徵】：可以裝備強大的武器和重甲。不僅作為一個簡單的戰鬥人員，也是作為一個站在前衛的防衛。但移動速度偏低。', '騎士（KNI） \n【職業特徵】：可以裝備非常重的盔甲。此外，亦擁有優秀的防守技能。但戰鬥力不高。', '狂戰士（BER） \n【職業特徵】：可以裝備一件非常重的武器。而且可以使用瞬發火力高的攻擊技能。但是，大多數裝甲不能裝備，並且耐力很低。', '盜賊（THI） \n【職業特徵】：移動速度快。可以使用特殊技能“隱藏”。隱藏時，敵人無法察覺存在的氣息，並且能在“隱藏”時發動技能“突襲”。而且具有“陷阱解除”，“偷竊”等技巧。但只能穿輕便且防禦力很低的皮裝或布裝，防禦力低且被攻擊時傷害會翻倍。', '祭司（SHE） \n【職業特徵】：優秀的輔助。除了擁有很多輔助系統的魔法，召喚魔法，並持有大量治療及狀態異常回復的魔法。但是只能裝備極輕的裝甲，不過能裝備持有神聖屬性附魔的裝甲。', '魔法師（MAG） \n【職業特徵】：能使用大量的元素魔法及擁有大範圍的攻擊魔法，此外亦能使用附魔魔法對武器進化附魔，替武器附上不同的屬性。魔力回復速度極高且魔法做成的傷害極大。不過只能裝備防禦力低下的輕便裝甲。', '死靈法師（NEC） \n【職業特徵】：能使用大量的召喚魔法。此外亦擁有“死者復甦”跟“靈魂附着。但使役亡者需要消耗大量魔力，耐久值偏低'];
let SignificantPeopleArr = ['非洲的', '抽不到主戰的', '甲爆的', '變態的', '歐洲的', '結實的', '帥氣的', '粗鄙的', '機靈的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的', '青春洋溢的', '感覺疲憊的', '豐滿的', '粗壯的', '毛髮茂盛的', '苗條的', '優雅的', '邋遢的', '敦實的', '蒼白的', '陰沉的', '平庸的', '臉色紅潤的', '皮膚黝黑色', '滿臉皺紋的', '古板的', '有狐臭的', '狡猾的', '健壯的', '嬌俏的', '筋肉發達的', '魁梧的', '遲鈍的',  '虛弱的', '可愛的', '萌萌的', '帥氣的', '有獸耳的','傲嬌的','色色的','傲慢的','爆肌的','甲甲的','智障的','賈巴的','經常女裝的','現充的','邊緣的','狗幹的','心理變態的','變態的','兄控的','蘿莉控的','姐控的','妹控的','怪物控的','肥宅的'];
let SignificantPeopleWhyArr = ['虔誠信仰著某個神祈', '覺得人類不需要依靠宗教也可以好好生活，從而毀滅了世界上1/3的宗教', '做出了一個有超巨大威力的武器希望藉此毀滅地球，但最後被阻止了', '改變了世界上一切的因果循環與命運', '創立了世界上最神秘的秘密結','剷除了一個國家', '是神秘學的信徒', '在學校令一整個班級的人懷孕了', '覺得金錢至上，且為了金錢不擇手段', '是一個激進主義分子，活躍於社會運動','女裝並被室友幹上了','當過偽娘','愛上了一隻怪獸','在路上拔掉所有他遇到的男性的雞雞','變成了安特','毀滅了他所看到的現充','生過10個小孩','被100個女生告白','令100個女生懷孕了','交過50個女朋友','交過100個男朋友','令一個男生懷孕了']
let MeaningfulLocationsArr = ['他的父母', '他的祖父母', '他的兄弟姐妹', '他的孩子', '他的另一半','他的兒時好友', '他心目中的偶像或是英雄', '他的好基友', '【沒有】', '安特', '吹雪', '八雲', '女朋友', 'LM', '兔子', '某一名變態'];
let TreasuredPossessionsArr = ['一件他的在工作上需要用到的必需品', '一個從他童年時就保存至今的寶物', '一樣由最重要的人給予他的物品', '一件珍視的蒐藏品', '一件無意間發現，但不知道到底是什麼的東西，正努力尋找答案', '某種體育用品', '一把特別的武器', '他的寵物'];
let HpSettingArr = ['100','200','300','400','500','600','700','800','900','1000','不明']
let MpSettingArr = ['1000','2000','3000','4000','5000','6000','7000','8000','9000','10000','不明']

rply.text = TEXT[0] + ' ： ' + '\n【種族】：' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '\n【性別】：' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '\n【職業】：' + RPGCareerArr[Math.floor((Math.random() * (RPGCareerArr.length)) + 0)] + '\n【血量】：' + HpSettingArr[Math.floor((Math.random() * (HpSettingArr.length)) + 0)] + '【魔力】：' + MpSettingArr[Math.floor((Math.random() * (MpSettingArr.length)) + 0)] + '\n【特徵】：他是一個' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '人。 \n【往事】：他曾經' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)] + '。 \n【重要之人】：對他來說，最重要的人是' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + ' \n【寶貴之物】：他最寶貴的東西就是'+ TreasuredPossessionsArr[Math.floor((Math.random() * (TreasuredPossessionsArr.length)) + 0)];
return rply;
}

function randomLuck(TEXT) {
let rplyArr = ['來~先跪下來我才告訴你','都2018年了 還問甚麼運勢','你問多少次運勢你也不抽到主戰的 放棄吧','為何你會覺得問運勢 能令你你的人生可以脫離苦痛','問你媽的運勢','沒有希望','你就陷入絕望吧','沒人可以幫到你的','(無視中)','運氣這東西 你會有嗎??','別妄想了 你運氣不會好的','非洲人不是一朝一夕就可以養成的 同理歐洲人也是','我都保持在歐洲 你留着非洲就行','為何你會覺得你運勢有好的一刻?','抽不到絲碧涅憑甚麼問運勢','你就沒運勢 別再問了','吉 吉 大 爆 炸','我…我才不告訴你呢……!哼!','我才不要說呢!','如果我不說 我會怎樣','你的樣子如何 你的命運也必如何','為何…為何你要問我……','我不會告訴你的','明明人家都不知道','要爆炸啦~','麻糬','吉爆','爆吉','大爆吉','大吉吉','你大吉吉','這我一定吉','你真的凶爆呃','請選擇：凶爆 爆凶','吉到爆啦','別吉啦','超吉','超級上吉','大吉','吉','中吉','小吉','末吉','中吉','凶','小凶','沒凶','大凶','很凶','你不要知道比較好呢','命運在手中,何必問我','凶爆','你好凶','凶屁凶','乖 你不會想知道的','嗯…殘念','有吉也沒用 唉…','你猜猜看','嗯咦 嗯… 嗯','這是世界的真理','你不能看透這世界','我勸你 不要追問下去'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}



function randomYakumo() {
let rplyArr = ['\
喵??', '\
誰叫我??', '\
八雲參上！！！', '\
怎了??', '\
喵喵喵喵~~~', '\
萌爆八雲參上', '\
呀呢呢~~', '\
(盯', '\
再說一次吧', '\
聽不到啦！！大聲點！！', '\
窩甚麼也看不到', '\
救命呀！！！！', '\
閣下的呼喚 暫時未能傳遞 請晚點再呼喚一次~', '\
大召喚儀式 八雲……召喚！！', '\
叫誰???', '\
嘟嘟嚕嘟 嘟嘟嚕嘟 嘟嘟嚕督大大', '\
嗯姆~', '\
暗黑召喚！！', '\
亡者召返99 \n八雲召喚成功', '\
๛ก(ｰ̀ωｰ́ก) ', '\
(謎之聲)你能付出多少代價?', '\
大聲點啦！！！！', '\
你在大聲甚麼啦！！！！', '\
現充爆炸吧！！(鬧事', '\
其實………你在叫八雲(???', '\
你…已經死了！  \n【謎之聲】：甚麼！！？？', '\
(亮刀', '\
你是誰？？？別過來呀！！！(尖叫', '\
你就算得到我的身體 你也不會得到我的心的！', '\
三 小 啦 ！ ！', '\
嗯？', '\
說！你想幹嘛！你別過來', '\
走開！不要接近我', '\
我……才不想被你叫呢！哼！', '\
我看你有多少能耐', '\
我的鮮血 我感覺到他在沸騰中', '\
別接近我！！我怕我控制不到寄宿在我右手的力量(呀！！！！！', '\
喵喵喵！'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomLulla() {
let rplyArr = ['\
I very vegetable' ,'\
(問號)' ,'\
????'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomSmileFace() {
let rplyArr = ['\
安妮後援會會長' ,'\
偽娘笑臉' ,'\
跑出來的笑臉' ,'\
笑臉逐漸母湯中' ,'\
都被露菈打爆' ,'\
'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomAnt() {
let rplyArr = ['\
把安插到懷孕ㄌ' ,'\
然後雨傘覺醒 成為雨傘人' ,'\
可是對到的安特的都被安特………………(掩臉' ,'\
是否開始懷疑自我了' ,'\
收起來 樓上別玩ㄐㄐ了' ,'\
嘶嘶嘶' ,'\
騷爆 \n不 我是說很有個性' ,'\
甲 甲 大 爆 射' ,'\
吃我的超巨型破魔蟲吧' ,'\
你渴望力♂量嗎' ,'\
八雲我的 \n【八雲】：八雲不屬於任何人的!!!!' ,'\
大爆射' ,'\
安特之長槍使用權限 解除 \n發射！' ,'\
怎都沒人摸安特' ,'\
我也要吹雪姐姐摸摸頭' ,'\
我不只會妖精 我更會哲♂學' ,'\
要加鳳梨嗎?' ,'\
被橫刀奪愛了' ,'\
有種婆 叫別人的老婆' ,'\
LUL' ,'\
騷爆' ,'\
好了叫我' ,'\
快揉爆' ,'\
你不是也愛男的ㄇ'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomAOE() {
let rplyArr = ['\
里維：俺の名はレヴィ，覚えとけ！', '\
葛利姆：さぁ！その胸に刻むがよい！我こそは軍神！踊り狂う暴風！グリイイイイイイイムニル！', '\
社長：全身全霊で貴様を穿つ', '\
社長：この一槍に魂を賭す', '\
法夫納：天地を焦がす', '\
癲狂暴龍：吼!!', '\
巴哈姆特：吼!!!!!!(打嗝', '\
白貞：我が力は、神のみわざなり！', '\
黑貞：この戦場に神などいない', '\
秘銀石像：噹噹', '\
默示錄：(Boom)', '\
八雲：場 面 大 爆 炸！！！', '\
八雲：對 面 雞 雞 大 爆 炸！！！', '\
灰光頭：蛇蛇傳送門 開啟', '\
鮮血女帝：アハハハ！嗤える死に様だ！'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomChick() {
let rplyArr = ['\
樓上大雞雞', '\
雞雞大爆炸', '\
你才大雞雞', '\
要被拔雞雞?', '\
我沒有雞雞啦', '\
想被割掉嗎???', '\
摸摸吹雪', '\
你想被燒嗎?', '\
八雲沒有雞雞', '\
安的女友大雞雞', '\
當你的雞雞不在視線內 他是處於一個沒有雞雞 跟有大雞雞的狀態 當你觀察的時候 才會固定在大雞雞的一個狀態 此定律我們稱之為薛丁格之雞', '\
八雲裙子裡沒怪獸啦！！', '\
嗯…(不敢直視'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomRabbit() {
let rplyArr = ['\
在他還不是變態的時候，他叫兔子 \n\n現在他叫變態兔子', '\
鬼爆兔子菇', '\
我叫兔子，是名變態', '\
露出的笑容逐漸母湯', '\
荸薺白醬淹兔子', '\
兔子他自己94大麻', '\
ㄎㄧㄤ~~~~~爆', '\
已經好久沒聽過這個名字了', '\
兔子沒有人會tag 所以tag他不會有反應', '\
(被系統邊緣中', '\
好遜', '\
超不好用', '\
喔等等'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomSnow() {
let rplyArr = ['\
吹雪姐姐~~~', '\
然後吹雪就拿出了第二根……', '\
吹雪快女裝！', '\
我愛吹雪', '\
還不是都加吹雪精華', '\
感謝吹雪 讚嘆吹雪', '\
他自己賣肉賺的錢很多', '\
啊啊啊啊', '\
樓上跟吹雪傲嬌', '\
摸摸吹雪', '\
吹雪我婆', '\
請問你要愛護吹雪嗎??', '\
吹雪都喜歡欺負人', '\
吹雪壞壞' ,'\
為何吹雪都不女裝'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomFrog() {
let rplyArr = ['\
有沒有萌萌的感覺', '\
筱亞：呱！ (眾人：呱三小！(拿武器', '\
有沒有人看到我的內褲', '\
這樣就是 乖保持着這樣 對！就是這樣！ 嗯 這樣就剛剛好', '\
筱亞從不騙水', '\
找小安特玩', '\
筱亞超~~~快~~~的~~~', '\
其實沒有人會想Tag筱亞', '\
筱亞：最近都找不太到內褲 所以出門都不穿內褲', '\
聽說line名自叔叔都是蘿莉 唯獨筱亞不是', '\
我來幫樓上名字加個開頭 \n開頭就加"狗幹"這2個字好了', '\
不要 我快受不了..', '\
不要' ,'\
小妹屁股賣5000'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomReply() {
let rplyArr = ['\
笨蛋吹雪！！', '\
幹 走開', '\
想被扔進焚化爐?', '\
來 跪下', '\
走開', '\
噁心', '\
Get Out', '\
滾', '\
你們死定了呃呃呃不要糾結這些……所以是在糾結哪些？', '\
嗚噁噁噁噁噁噁，不要隨便叫我。', '\
幹，你這學不會的豬！', '\
嘎嘎嘎。', '\
你壞掉了，50元收', '\
你打到虛脫了', '\
wwwwwwwwwwwwwwwww', '\
為什麼你們每天都可以一直玩；玩就算了還玩我。', '\
在南半球，一隻海豹在拍打吹雪。', '\
什麼東西你共三小。', '\
我甚麼也不知道', '\
一直叫，你4不4想強吻吹雪？', '\
八雲你也敢嘴？', '\
我的嘴巴會長出觸手，然後開花成四個花瓣哦 (´×`)', '\
看看我！！我體內的怪物已經這麼大了！！', '\
傳說中，凡是喝過水的人，有高機率在100年內死去。', '\
人類每花60秒在工作，就減少一分鐘的壽命。', '\
你在大聲什麼啦！！！！', '\
公道價，八萬一（伸手）。', '\
你的嘴裡有異音（指）', '\
有人打你的左臉，你就要用肉食性猛擊咬斷他的小腿。', '\
喵?', '\
嗯?', '\
安安', '\
死掉了 好像', '\
在那邊 (指', '\
(指', '\
私は魔法少女です！！', '\
止まるんじゃねぇぞ…', '\
私はあなたと友達をすることができるか？', '\
希望のはな 繋いだ絆が', '\
變態！！', '\
怎了??', '\
Wryyyyy', '\
替身攻擊！！', '\
JoJo我不當人類啦！！', '\
母湯喔', '\
誰叫我??', '\
(望 ', '\
( ´•௰•`)( ´•௰•`)( ´•௰•`)( ´•௰•`)', '\
MudaMudaMudaMuda', '\
不要', '\
走開'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomShit() {
let ree = '自稱小妹的通常是一個大叔 自稱大叔的在此刻也是一名大叔';
rply.text = ree
return rply;
}

function randomYakumoKii() {
let rplyArr = ['\
都來疼愛八雲妹妹吧(´▽｀)(´▽｀)', '\
喵~~~', '\
我……我才不要被你摸呢！哼！', '\
嗯…別…嗯……這…這樣…', '\
(舒服', '\
八雲是拿來疼愛的', '\
八雲是拿來愛護的', '\
別再摸啦！！', '\
我快受不了…喵……', '\
不要！！…嗯……'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

////////////////////////////////////////
//////////////// Funny
////////////////////////////////////////
/* 猜拳功能 */
function RockPaperScissors(HandToCal, text) {
	let returnStr = '';
	if (HandToCal.match(/石頭|布|剪刀|1|2|3/) != null) {
	let aHand = ['石頭','布','剪刀'];
	HandToCal = aHand[Math.floor((Math.random() * (aHand.length)) + 0)];
	}
	var hand = rollbase.FunnyDice(3); // 0:石頭 1:布 2:剪刀

	switch (hand) {
	case 0: //石頭
		returnStr = '我出石頭！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '哼哼你輸惹';
		else if (HandToCal.match(/石頭|2/) != null) returnStr += '看來我們不相上下阿';
		else if (HandToCal.match(/布|3/) != null) returnStr += '你好像有點強！';
		else returnStr += '欸不對喔你亂出！';

		break;

	case 1: //布
		returnStr = '我出布！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '讓你一次而已啦！';
		else if (HandToCal.match(/布|2/) != null) returnStr += '原來平手...沒什麼嘛！';
		else if (HandToCal.match(/石頭|3/) != null) returnStr += '哈哈你看看你！';
		else returnStr += '別亂出阿會壞掉的';

		break;

	case 2: //剪刀
		returnStr = '我出剪刀！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '平手 (  艸)';
		else if (HandToCal.match(/布|2/) != null) returnStr += '贏了 (｀・ω・´)b';
		else if (HandToCal.match(/石頭|3/) != null) returnStr += '輸惹 ゜。。゜(ノД‵)ノ・゜';
		else returnStr += '亂出打你喔 (｀・ω・´)凸';

		break;

	default:
		returnStr = '我出的是...欸不對你沒出喔！\n';
		break;
	}

	rply.text = returnStr;
	return rply;
}



////////////////////////////////////////
//////////////// Tarot塔羅牌
////////////////////////////////////////
function MultiDrawTarot(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) //時間之流
	{
	cards[0] = rollbase.FunnyDice(79); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(79);
		if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 3; i++) {
		if (i == 0) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 1) returnStr += '現在: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 2) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);
	}

	} else if (type == 2) //塞爾特大十字
	{
	cards[0] = rollbase.FunnyDice(79); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 10; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(79);
		if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 10; i++) {
		if (i == 0) returnStr += '現況: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 1) {
		if (revs[i] == 0) //正位
			returnStr += '助力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '阻力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 2) returnStr += '目標: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 3) returnStr += '基礎: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 4) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 5) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 6) returnStr += '自我: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 7) returnStr += '環境: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 8) {
		if (revs[i] == 0) //正位
			returnStr += '希望: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '恐懼: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 9) returnStr += '結論: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);

	}

	} else {

	if (text == null)
		returnStr = tarotCardReply(rollbase.FunnyDice(79)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
		returnStr = tarotCardReply(rollbase.FunnyDice(79)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	}


	rply.text = returnStr;
	return rply;
}

function NomalDrawTarot(CardToCal, text) {
	let returnStr = '';

	if (text == null)
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	rply.text = returnStr;
	return rply;
}


function tarotRevReply(count) {
	let returnStr = '';

	if (count == 0) returnStr = '＋';
	if (count == 1) returnStr = '－';

	return returnStr;
	//return rply;
}


function tarotCardReply(count) {
	let returnStr = '';
	// returnStr = count + '愚者';
	if (count == 0) returnStr = '愚者';
	if (count == 1) returnStr = '魔術師';
	if (count == 2) returnStr = '女祭司';
	if (count == 3) returnStr = '女皇';
	if (count == 4) returnStr = '皇帝';
	if (count == 5) returnStr = '教皇';
	if (count == 6) returnStr = '戀人';
	if (count == 7) returnStr = '戰車';
	if (count == 8) returnStr = '力量';
	if (count == 9) returnStr = '隱者';
	if (count == 10) returnStr = '命運之輪';
	if (count == 11) returnStr = '正義';
	if (count == 12) returnStr = '吊人';
	if (count == 13) returnStr = '死神';
	if (count == 14) returnStr = '節制';
	if (count == 15) returnStr = '惡魔';
	if (count == 16) returnStr = '高塔';
	if (count == 17) returnStr = '星星';
	if (count == 18) returnStr = '月亮';
	if (count == 19) returnStr = '太陽';
	if (count == 20) returnStr = '審判';
	if (count == 21) returnStr = '世界';
	if (count == 22) returnStr = '權杖一';
	if (count == 23) returnStr = '權杖二';
	if (count == 24) returnStr = '權杖三';
	if (count == 25) returnStr = '權杖四';
	if (count == 26) returnStr = '權杖五';
	if (count == 27) returnStr = '權杖六';
	if (count == 28) returnStr = '權杖七';
	if (count == 29) returnStr = '權杖八';
	if (count == 30) returnStr = '權杖九';
	if (count == 31) returnStr = '權杖十';
	if (count == 32) returnStr = '權杖侍者';
	if (count == 33) returnStr = '權杖騎士';
	if (count == 34) returnStr = '權杖皇后';
	if (count == 35) returnStr = '權杖國王';
	if (count == 36) returnStr = '聖杯一';
	if (count == 37) returnStr = '聖杯二';
	if (count == 38) returnStr = '聖杯三';
	if (count == 39) returnStr = '聖杯四';
	if (count == 40) returnStr = '聖杯五';
	if (count == 41) returnStr = '聖杯六';
	if (count == 42) returnStr = '聖杯七';
	if (count == 43) returnStr = '聖杯八';
	if (count == 44) returnStr = '聖杯九';
	if (count == 45) returnStr = '聖杯十';
	if (count == 46) returnStr = '聖杯侍者';
	if (count == 47) returnStr = '聖杯騎士';
	if (count == 48) returnStr = '聖杯皇后';
	if (count == 49) returnStr = '聖杯國王';
	if (count == 50) returnStr = '寶劍一';
	if (count == 51) returnStr = '寶劍二';
	if (count == 52) returnStr = '寶劍三';
	if (count == 53) returnStr = '寶劍四';
	if (count == 54) returnStr = '寶劍五';
	if (count == 55) returnStr = '寶劍六';
	if (count == 56) returnStr = '寶劍七';
	if (count == 57) returnStr = '寶劍八';
	if (count == 58) returnStr = '寶劍九';
	if (count == 59) returnStr = '寶劍十';
	if (count == 60) returnStr = '寶劍侍者';
	if (count == 61) returnStr = '寶劍騎士';
	if (count == 62) returnStr = '寶劍皇后';
	if (count == 63) returnStr = '寶劍國王';
	if (count == 64) returnStr = '錢幣一';
	if (count == 65) returnStr = '錢幣二';
	if (count == 66) returnStr = '錢幣三';
	if (count == 67) returnStr = '錢幣四';
	if (count == 68) returnStr = '錢幣五';
	if (count == 69) returnStr = '錢幣六';
	if (count == 70) returnStr = '錢幣七';
	if (count == 71) returnStr = '錢幣八';
	if (count == 72) returnStr = '錢幣九';
	if (count == 73) returnStr = '錢幣十';
	if (count == 74) returnStr = '錢幣侍者';
	if (count == 75) returnStr = '錢幣騎士';
	if (count == 76) returnStr = '錢幣皇后';
	if (count == 77) returnStr = '錢幣國王';
	if (count == 78) returnStr = '空白牌';
	return returnStr;
	//return rply;

}
////////////////////////////////////////
//////////////// choice 及SORT
////////////////////////////////////////
function choice(input,str) {
	let a = input.replace(str[0], '').match(/\S+/ig);
	rply.text = str[0] + '['+ a + '] → ' + a[rollbase.Dice(a.length)-1];
	return rply;
}

 function SortIt(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + ' → ['+ a + ']' ;
	return rply;
 }

module.exports = {
	FoodChoices,
	Flag,
	BStyleFlagSCRIPTS,
	randomReply,
	randomYakumo,
	randomLulla,
	randomSmileFace,
	randomAnt,
	randomLuck,
	randomAOE,
	randomChick,
	randomRabbit,
	randomSnow,
	randomFrog,
	randomShit,
	randomYakumoKii,
	RockPaperScissors,
	MultiDrawTarot,
	NomalDrawTarot,
	SortIt,
	tarotRevReply,
	choice,
	tarotCardReply	
};
