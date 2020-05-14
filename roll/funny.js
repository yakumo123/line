var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function suck(TEXT) {
	let rplyArr = ['你就爛阿= =','我要尊重你？？','你都不是人 我那需要尊重你？','先上GM再來討論好不好？','沒GM的人水準差太多無法溝通= ='] ;
	let numArr = [1,2,3,4,5,6,7,8,9,10];
	let num1Arr = [1,2,3,4,5,6,7,8,9,10];
	let num2Arr = [1,2,3,4,5,6,7,8,9];
	
	rply.text = '<' + TEXT[0] + '>' + '\n ---MiaO-LaZYCat語錄' + '《' + numArr[Math.floor((Math.random() * (numArr.length)) + 0)] + '》' + '節錄' + num1Arr[Math.floor((Math.random() * (num1Arr.length)) + 0)] + '.' + num2Arr[Math.floor((Math.random() * (num2Arr.length)) + 0)] + '<爛>' + '\n\n追加語錄：<' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)] + '>';
	return rply;
}

function meat(TEXT) {
let FirArr = [1,2,3,4,5,6,7,8,9]
let SecArr = [500,0500,0000,1000,2000,3000,4000,5000,6000,7000,8000,9000,00000]
rply.text = TEXT[0] + ' ： ' + FirArr[Math.floor((Math.random() * (FirArr.length)) + 0)] + SecArr[Math.floor((Math.random() * (SecArr.length)) + 0)]; ; 
return rply;
}

function yakumomark() {
	rply.text = '八雲的綜合分數：\n【魅力】：101\n【萌力】：101\n【廚藝】：101\n【財力】：101\n【生命力】：101\n【親和力】:101\n【歐皇之力】：101\n\n【八雲點評】：請信仰八雲教！' ;
	return rply;
}

function disss() {
	rply.text = '言的綜合分數：\n【噁心度】：100\n【試煉擔當】：0\n\n【八雲點評】：噁' ;
	return rply;
}

function ykh() {
rply.text = '八雲沒有黑歷史';
return rply;
}
	
function shadow() {
	rply.text = '吃我的冥府啦！！！！！！' ;
	return rply;
}

function know() {
rply.text = '我怎麼知道\n你又沒跟我說過( ˘･з･)';
return rply;
}

function think() {
let rplyArr = ['\
別在感謝祭了啦！！！','\
走開啦！','\
八雲不會放過你喔','\
煩死了啦！！','\
並沒有感謝祭','\
你信不信我把你扔出去！哼！','\
FBI來把樓上抓了吧','\
想被扔進垃圾桶嗎？','\
並！沒！有！','\
你精蟲上腦喔？','\
別過來RRRRR','\
滾！','\
打你喔！','\
你才感謝祭啦！！','\
死變態','\
變態！','\
走開！','\
把你燒了喔！！','\
想被割雞雞？','\
夠了啦！！QQ……','\
嗚嗚……','\
不要！','\
打爆你喔！','\
我不會放過你喔！！！','\
為何一直感謝啦！！！！','\
夠了啦！！','\
死變態走開'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomColour(TEXT) {
let rplyArr = ['鴇','赤白','油','紺桔梗','躑躅','肌','伽羅','花','桜','橙','青丹','瑠璃','薔薇','灰茶','鶯','琉璃紺','韓紅','茶','利久','紺','珊瑚','樺茶','媚茶','青藍','紅梅','枯茶',' 藍海松茶','杜若','桃','焦茶','青鈍','勝','薄柿','柑子','抹茶','羣青','薄紅梅','杏','黃綠','鐵紺','曙','蜜柑','苔','藍鐵','紅','褐','若草','青褐','赤丹','路考茶','若綠','褐返','紅赤','飴','萌黃','藤納戸','臙脂','丁子','苗','桔梗','真赭','丁子茶','草','紺藍','今様','黃櫨','柳','藤','梅染','土器','若草','藤紫','退紅','黃枯茶','松葉','青紫','蘇芳','狐','白綠','菫','茜','黃橡','薄綠','鳩羽','紅','銀煤竹','千草','薄','銀硃','涅','青綠','薄鼠','赤','胡桃','淺綠','鳩羽鼠','硃','香','綠','菖蒲','洗朱','國防','草','江戸紫','紅樺','練','木賊','紫','紅緋','肉','常盤','滅紫','樺','人','綠青','葡萄鼠','鉛丹','土','千歳綠','古代紫','赭','小麥','深綠','暗紅','緋','琥珀','萌葱','葡萄','丹','木蘭','青白橡','茄子紺','土','梔子','革','紫紺','焦香','朽葉','麴塵','濃','真紅','萱草','仙斎茶','藍','緋','黃金','若竹','菖蒲','紅海老茶','金','青磁','牡丹','淺蘇芳','金茶','青竹','赤紫','鳶','卵','鐵','白','小豆','山吹','錆鼠','胡粉','弁柄','黃土','鐵御納戸','生成','慄梅','朽葉','青綠','灰白','海老茶','空五倍子','錆淺葱','石竹','深緋','鶯茶','水淺葱','象牙','赤銅','向日葵','新橋','乳白','赤褐','鬱金','淺葱','薄鈍','金赤','砂','白羣','銀鼠','赤茶','芥子','御納戸','茶鼠','赤錆','淡黃','甕覗','鼠','黃丹','亜麻','水','薄墨','赤橙','枯','藍鼠','利休鼠','柿','鳥子','祕','鉛','肉桂','黃','空','灰','樺','蒲公英','青','鈍','煉瓦','中黃','藍','煤竹','錆','刈安','濃藍','黒茶','檜皮','黃檗','勿忘草','黒橡','栗','綠黃','露草','濃鼠','黃赤','鶸','縹','墨','代赭','海松','淺縹','黒','駱駝','鶸茶','薄縹','黒鐵','黃茶','山鳩','薄花','蝋','洗柿','生壁','紺青','紫黒','鴨黃','鵝黃','緗','秋香','橙黃','杏黃','橘黃','橘紅','琥珀','黃櫨','橙','薑黃','松花','豆綠','柳黃','蔥綠','草綠','油綠','綠沈','深綠','松花綠','松柏綠','青碧','縹','水藍','蔚藍','碧藍','湖藍','藍','群青','靛青','靛藍','青','藏藍','黛藍','蒼青','水紅','藕荷','藕','丁香','雪青','醬紫','黛紫','紫棠','青蓮','紫','紫醬','紫檀','精白','鉛白','霜','雪白','瑩白','月白','素','荼白','縞','魚肚白','象牙白','黎','黧','象牙黑','玄','緇','黝黑','烏','烏黑','玄青','漆黑','黑']
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)] + '色';
return rply;
}

function like() {	
let rplyArr = ['\
我喜歡', '\
我很喜歡', '\
我還滿喜歡的'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function eato() {	
rply.text = '吃土比較適合你';
return rply;
}

function drinko() {	
rply.text = '你連水也沒得喝';
return rply;
}

function moo() {	
rply.text = '再啦幹';
return rply;
}

function mot() {	
rply.text = '在啦幹';
return rply;
}


function randomDrink(TEXT) {
let rplyArr = ['青草茶','冬瓜茶','牧場鮮乳','葡萄柚綠','青蛙撞奶','紅茶牛奶','紫薯奶綠','玉荷清蘆薈蜜','芋頭鮮','地瓜鮮奶','多多綠','蘆薈蜜','楊枝甘露','抹茶','玄米茶','抹茶拿鐵','梅酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','桃酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','蜜桃葡萄柚星冰樂','彈珠汽水','芭樂汁','檸檬愛玉冰','青蛙下蛋','黑松沙士','啤酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','木瓜牛奶','珍珠奶茶','奶茶','可樂','汽水','紅茶','綠茶','巧克力','水果酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','日本酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','雞尾酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','麥茶','檸檬紅茶','檸檬汁','蘋果汁','甘蔗汁','椰子汁','吹雪','橙汁','西瓜汁','鳳梨汁','蜂蜜檸檬','咖啡','好立克','阿華田','豆奶','牛奶','黑糖珍奶','檸檬水','鴛鴦','茶走','鴦走','綜合果汁','蔬菜汁','蔬果汁','烏龍茶','巧克力牛奶','草莓汁','火龍果汁','草莓牛奶','芒果汁','芒果紅茶','芒果綠茶','乳酸飲品','拿鐵','芒果沙冰','草莓沙冰','蘋果沙冰','鳳梨沙冰','果汁','水果沙冰','冰滴咖啡','早餐店清腸胃的大冰奶','水','水也沒得你喝','紅豆冰','蘋果西打','野 格 爆 彈\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','白茶','黑茶','葡萄酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','萄葡汁','花茶','摩卡','柚子茶','拉茶','薏米水','檸檬碳酸水']
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function FoodChoices(TEXT) {
let rplyArr = ['蕎麥麵 ','小籠包','拉麵','瓜仔肉','壽司','刺身','炸雞','排骨飯','意大利麵','滷肉飯','銅鑼燒','米粉炒','肉燥飯','不吃','吃土','八雲','吹雪','安特','牛丼','親子丼','麵包','麥當勞','漢堡','KFC','銅鑼燒','鹽酥雞','胡椒餅','鍋貼','粽子','披薩','烤雞','烤肉','石頭鍋飯','羊肉爐','麻油雞','肉羹','擔仔麵','排骨麵','蔥抓餅','刈包','薑汁番茄','生煎包','蚵仔煎','肉粽','炸雞排','烤玉米、烤番薯','烤香腸','蔥油餅','臭豆腐','肉圓','蚵仔麵線','筒仔米糕','豬血糕','蛋包飯','摩斯','海南雞飯','阿忠麵線','麵線','火鍋','三明治','涼麵','拌麵','烏冬','燒臘飯','海鮮丼','部隊鍋','魷魚焿','熱狗堡','豬腳飯','炒飯','雞腿飯','炸雞排','蛋餅','沙拉','咖哩','雞肉咖哩','瑞典肉丸','德國豬腳','雞塊','鐵板燒','印度薄餅','豬排飯','牛排飯','便當','貢丸湯','泰式炒河粉','韓式炒年糕','紫菜包飯','韓式燒烤','酸辣湯麵','西班牙海鮮飯','坦都里烤雞','千層麵','春捲'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)] + '  /  ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomYula() {
let rplyArr = ['\
筱啦幹', '\
筱啦幹 你這個文盲', '\
那是三上悠亞'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function Flag() {
let rplyArr = ['\
「對面應該解不光我的場吧？」', '\
「來吧關鍵牌！」', '\
「存這麽多了，應該能抽到主戰的」', '\
「穩了！」', '\
「下一回就能收頭了！」', '\
「對面應該沒有那張的！」', '\
「他都出了2張了，應該沒有第三張的」', '\
「來 這包中主戰」', '\
「應該給我先攻了吧？」', '\
「對面下回應該斬不了我」', '\
「他下回不出那張我就贏了」', '\
「他應該沒那麽準吧」', '\
「紅茶穩了」', '\
「紅茶應該不會被羈押吧」', '\
「穩」', '\
「對面走遠了」', '\
「對面應該不是XXX」', '\
「只要有那張就贏了」', '\
「低費那麽多，應該不會卡手」', '\
「這套牌不容易卡手的」', '\
「這曲線應該不會卡手」', '\
「這放太多張我怕會太早上手會卡(每場起手也抽到)」', '\
「這放3張比較好上手」', '\
「我覺得我這場贏了」', '\
「下回就贏了」', '\
「我就不信對面有…」', '\
「對面斬不了的 對面還差X滴」', '\
「這套應該能輕鬆的進A組」', '\
「這套應該可以進決賽的」', '\
「決賽只要有1勝就可以了」', '\
「還有X次機會 還行」', '\
「決賽有2次機會 不怕啦」', '\
「都10包沒虹了 下一包應該有」', '\
「我存了這麽多來抽新卡包 應該不需要合太多虹卡」', '\
「對面沒有回應 穩了」', '\
「這套有很多濾牌 應該不甩擔心手牌問題」', '\
「這隻對面解不到的 穩了」', '\
「我就不信對面有第三張」', '\
「我已經X連勝了」', '\
「我想進決賽」', '\
「應該能進決賽」', '\
「我想進A組」', '\
「應該能進A組」', '\
「我已經天下無敵了~~」', '\
「B組決賽隨便打隨便3勝」', '\
「這任務差X場 很快就能解完」', '\
「還有X包 有機會的」', '\
「這場還有機會」', '\
「對面沒可能那麽扯的」', '\
「對面沒進化點了 我還有X顆進化點 穩了」', '\
「差一場就解完任」', '\
「我用毒瘤高速解任吧」', '\
「我這場面 可以」'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function BlackHistory(TEXT) {
let actionArr = ['幹上了', '捏死了', '打爆了', '綁架了', '捉住了', '偷走了', '愛上了', '抱住了', '上了', '變成了', '成為了', '吃了', '拉出了', '排出了', '睡了', 'NTR了', '每天都親']
let targetArr = ['一個偽娘', '偽娘八雲', '玩具', '異形', '外星人', '可愛的八雲', '萌萌的八雲', '八雲妹妹', '吹雪姐姐', '女裝八雲', '女裝吹雪', '萌萌的吹雪', '偽娘吹雪', '偽男', '扶他', '扶他吹雪', '安特', '瘟疫安特', '大叔吹雪', '被父愛如山的安', '筱亞叔叔', '肌肉魔法少女~☆', '血小板', '別人的老公', '一個布偶', '自己', '吹雪的大雞雞', '破魔蟲', '神', '奶油蒼蠅', '白血球', '史萊姆', '式神', 'LM', '小魚', '土耳其火雞', '鳳梨披薩', '八爪魚', '一根木棒', '一隻火雞', '女生', '12歲的女孩', '蘿莉', 'BBA', '老太婆', 'FBI隊員', '一隻手機', '一張光碟', '貓娘', '狐娘', '魔王', '爆肌男', '獸人', '妖精', '吸血鬼', '魔法使']
let consequenceArr = ['令他懷孕了', '令他哭了', '令他變姓了', '被羈押了', '快樂地和他生活下去', '和他永不分離', '和他結婚了', '得了不女裝就會死的病', '喜歡上女裝', '每天都女裝', '當上了一個偽娘', '變成了扶他', '變了大叔控', '變了蘿莉控', '變了老太婆控', '變了獸人控', '變了獸耳控', '變了御姐控', '令吹雪懷孕了']

rply.text = TEXT[0] + ': \n' + '他曾經' + actionArr[Math.floor((Math.random() * (actionArr.length)) + 0)] + targetArr[Math.floor((Math.random() * (targetArr.length)) + 0)] + '。從而' +  consequenceArr[Math.floor((Math.random() * (consequenceArr.length)) + 0)] + '\n這就是'  +  TEXT[0] ;
return rply;
}

function BStyleFlagSCRIPTS(TEXT) {
let PersonalDescriptionArr = ['神族', '魔族', '妖精族', '人族', '森精族', '天翼族', '機凱族', '魚人族', '吸血鬼族']
let IdeologyBeliefsArr = ['男性', '女性', '八雲', '吹雪', '偽娘', '偽男', '不明','露菈','無性別'];
let BodyArr = ['嬌小','結實','豐滿','粗壯','苗條','健壯','魁梧','肥胖','瘦小','有點肉感','凹凸有致'];
let SignificantPeopleArr = ['非洲的', '抽不到主戰的', '歐洲的', '帥氣的', '粗鄙的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的', '感覺疲憊的', '毛髮茂盛的', '優雅的', '邋遢的', '敦實的', '虛弱的', '蒼白的', '平庸的', '臉色紅潤的', '皮膚黝黑色', '滿臉皺紋的', '古板的', '有狐臭的', '萌萌的', '帥氣的', '有獸耳的','爆肌的','賈巴的','經常女裝的','現充的','邊緣的','狗幹的','心理變態的','兄控的','蘿莉控的','姐控的','妹控的','怪物控的','肥宅的'];
let EyeArr = ['綠色','金色','藍色','紅色','左眼紅色右眼藍色','天藍色','桃紅色','天藍色','咖啡色','靛色','海棠紅色','銀紅色','絳紫色','殷紅','淺黃色','淺橄欖色','淺黃綠色','橙黃','杏黃','橘黃','橘紅','花黃綠色','橙色','黃白色','水藍','蔚藍','碧藍','湖藍','藍色','深藍色','藍色','紺紫色','藏藍色','黛藍色','蒼青色','松花色','淺黃綠色','柳黃色','蔥綠色','草綠色','深綠色','松花綠色','墨綠色','水紅色','淺藍紫色','醬紫色','深紫色','黑紅色','偏藍的紫色','紫色','紫檀色','銀白色','霜色','雪白色','月白色','淡藍色','黝黑','烏黑色','黑色'];
let HairArr = ['單馬尾','雙馬尾','中分','刺蝟頭','爆炸頭','公主頭','長髮辮子','短髮','飄逸長髮','姬髮式','包包頭','瀏海','背頭','分頭','雷鬼頭'];
let HairColourArr = ['紅色','橙色','黃色','咖啡色','藍色','綠色','琥珀色','棕色','桃紅色','粉紅色','水藍色','天藍色','海棠紅色','銀紅色','絳紫色','殷紅','淺黃色','淺橄欖色','淺黃綠色','橙黃','杏黃','橘黃','橘紅','花黃綠色','橙色','黃白色','水藍','蔚藍','碧藍','湖藍','藍色','深藍色','藍色','紺紫色','藏藍色','黛藍色','蒼青色','松花色','淺黃綠色','柳黃色','蔥綠色','草綠色','深綠色','松花綠色','墨綠色','水紅色','淺藍紫色','醬紫色','深紫色','黑紅色','偏藍的紫色','紫色','紫檀色','銀白色','霜色','雪白色','月白色','淡藍色','黝黑','烏黑色','黑色'];
let DecorationArr = ['頭髮頂着呆毛','有着狐狸耳朵跟尾巴','有着貓耳朵跟尾巴','配戴着華麗的寶石吊飾','配戴着寶石耳環','身上有着刺青','拿着恐怖的狼牙棒','拿着水藍色的魔杖','拿着聖劍'];
let AtiArr = ['甲爆','變態','傲嬌','色色','傲慢','可愛','變態','甲甲','智障','狡猾','遲鈍','陰沉','青春洋溢','機靈','無口','電波系','腹黑','中二','病嬌','天然呆','傻傻','冒失','經常黑化','性格容易壞掉','像大和撫子','鬼畜','嗜血','兇狠','很惡','文靜','溫柔','邪惡','充滿心機','容易害羞','狡猾','固執','執着','可愛','恐怖','傻呼呼','陰鬱'];
let ClothingArr = ['貓耳裝','水手服','女僕裝','洛麗塔','泳衣','浴衣','巫女服','斗篷','緊身衣 ','卡通圖案的睡衣 ','學校制服和黑色過膝襪','毛衣','和服','吊帶褲','西裝','可愛的睡衣','睡衣','條紋上衣和牛仔褲'];
let SignificantPeopleWhyArr = ['虔誠信仰著某個神祈', '覺得人類不需要依靠宗教也可以好好生活，從而毀滅了世界上1/3的宗教', '割腕尋妻而失去過多','成了一個頂級的非洲人','和吹雪結婚了從而過上幸福美滿的生活','因為闖了一間幼兒園而被FBI捉走了','壁咚了八雲','和偽娘笑臉度過了一個美好的結婚蜜月旅行','做出了一個有超巨大威力的武器希望藉此毀滅地球，但最後被阻止了', '改變了世界上一切的因果循環與命運', '創立了世界上最神秘的秘密結','剷除了一個國家', '是神秘學的信徒', '在學校令一整個班級的人懷孕了', '覺得金錢至上，且為了金錢不擇手段', '是一個激進主義分子，活躍於社會運動','女裝並被室友幹上了','當過偽娘','愛上了一隻怪獸','在路上拔掉所有他遇到的男性的雞雞','變成了安特','毀滅了他所看到的現充','生過10個小孩','被100個女生告白','令100個女生懷孕了','交過50個女朋友','交過100個男朋友','令一個男生懷孕了']
let MeaningfulLocationsArr = ['和平底鍋談戀愛','用全消滅教報復社會','當偽娘','當偽男','和笑臉親親','變噁心','抽主戰','被焦糖化','被碳化','被怪物強上','被推倒','抱住吹雪','抱住八雲','被八雲打臉','和洗衣機做朋友','親吻垃圾桶','女裝','淋雨','看血小板','令人懷孕','被壁咚','抽不到主戰','當非洲人','和偽娘笑臉結婚','從八樓跳下去咬別人的頭','用手砍樹','用杯麵的杯蓋吃麵','把馬桶當鍋子用','舔電視','拿浴缸煮湯','幹砲中離','後空翻打手…','24小時親吻大地','吃土','把內褲套在頭上上學','用愛發電','舔吹雪','不空腹吃早餐','被FBI帶走','每天都生日','跟公司請假','打給張老師','吃手手'];
	
rply.text = TEXT[0] + ' ： ' + '\n【種族】：' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '\n【性別】：' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '\n【身形】：他身形' + BodyArr[Math.floor((Math.random() * (BodyArr.length)) + 0)] + '\n【眼睛】：他擁有一雙' + EyeArr[Math.floor((Math.random() * (EyeArr.length)) + 0)] + '的眼睛' + '\n【髮色】：他有着一頭' + HairColourArr[Math.floor((Math.random() * (HairColourArr.length)) + 0)] + '的頭髮' + '\n【髮型】：他的髮型是' + HairArr[Math.floor((Math.random() * (HairArr.length)) + 0)] + '\n【特徵】：他是一個' + DecorationArr[Math.floor((Math.random() * (DecorationArr.length)) + 0)] + '的人' + '\n【給人的印象】：他給人的印象是一個' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '人' + '\n【性格】：在性格上來說，他是一個' + AtiArr[Math.floor((Math.random() * (AtiArr.length)) + 0)] + '的人' + '\n【服飾】：他平常的衣着為' + ClothingArr[Math.floor((Math.random() * (ClothingArr.length)) + 0)] + '。 \n【興趣】：在他的生命中，他最喜歡' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + ' \n【往事】：他曾經' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)];
return rply;
}


function randomLuck(TEXT) {
let rplyArr = ['來~先跪下來我才告訴你','都2019年了 還問甚麼運勢','你問多少次運勢你也不抽到主戰的 放棄吧','為何你會覺得問運勢 能令你的人生可以脫離苦痛','問你媽的運勢','沒有希望','你就陷入絕望吧','沒人可以幫到你的','(無視中)','運氣這東西 你會有嗎??','別妄想了 你運氣不會好的','非洲人不是一朝一夕就可以養成的 同理歐洲人也是','我都保持在歐洲 你留着非洲就行','為何你會覺得你運勢有好的一刻?','抽不到絲碧涅憑甚麼問運勢','你就沒運勢 別再問了','吉 吉 大 爆 炸','我…我才不告訴你呢……!哼!','我才不要說呢!','如果我不說 我會怎樣','你的樣子如何 你的命運也必如何','為何…為何你要問我……','我不會告訴你的','明明人家都不知道','要爆炸啦~','麻糬','吉爆','爆吉','大爆吉','大吉吉','你大吉吉','這我一定吉','你真的凶爆呃','請選擇：凶爆 爆凶','吉到爆啦','別吉啦','超吉','超級上吉','大吉','吉','中吉','小吉','末吉','中吉','凶','小凶','沒凶','大凶','很凶','你不要知道比較好呢','命運在手中,何必問我','凶爆','你好凶','凶屁凶','乖 你不會想知道的','嗯…殘念','有吉也沒用 唉…','你猜猜看','嗯咦 嗯… 嗯','這是世界的真理','你不能看透這世界','我勸你 不要追問下去'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomChance(TEXT) {
let levelArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
let level = levelArr[Math.floor((Math.random() * (levelArr.length)) + 0)];
let norArr = ['來~先跪下來我才告訴你','機率有多高也救不到你吧？','你有甚麼資格問資料？','わからない！','哈！！？？','你在開玩笑對吧？','為何我要理你？','大概就那幾%啦~','我想1%也沒有吧','100%？我覺得是0%吧','問機率前要女裝是常識吧？？','還沒女裝憑甚麼問機率','先交出你的女裝再說吧','你下體要爆炸了，你先看一下吧','先向我主人八芸提出申請再來問我？','你這噁心人別過來！！！','再過來我會叫的喔！！！','你消失的機率大概是50%','你頭上有團破邪之光！拜拜囉~','吃我的○○啦！！','叮噹叮噹','閣下所訊問的問答暫時未能產生，請女裝後再提問。','今天就是你的最後一天的','我手中掌握住你的未來了 你問啥都沒用','這裡是那裡！！？？我是誰！！？？你又是誰！！？？你變態嗎！！？？','你可以先穿女裝啊','(母湯の微笑)','歐金爆！','你是童蘿騷','你問多少次機率你也不抽到主戰的 放棄吧','為何你會覺得問機率可以改變你命運','問你媽的運勢','沒有希望','你就陷入絕望吧','沒人可以幫到你的','(無視中)','運氣這東西，你會有嗎？？','別妄想了 你運氣不會好的','非洲人不是一朝一夕就可以養成的 同理歐洲人也是','為何你會覺得你機率會如你所願？','我…我才不告訴你呢……！哼！','我才不要說呢!','如果我不說，我會怎樣？','你的樣子如何 你的機率也必如何','為何…為何你要問我……','我不會告訴你的','明明人家都不知道','要爆炸啦~','你雞雞大爆炸','你不要知道比較好呢','命運在手中，何必問我','凶爆','你好凶','凶屁凶','乖 你不會想知道的','嗯…？','應該只有0%','你猜猜看','嗯咦 嗯… 嗯','這是世界的真理','你不能看透這世界','我勸你 不要追問下去','100%！並沒有','笑wwww','當你想要100%時，這機率就是0%\n當你想要0%時，這機率就是100%','打我阿！來阿！','母湯','狗幹','非洲','歐洲','%%%','你不會知道的','啥？','沒有希望','你雞雞大爆炸的','問你媽機率','誰准你問機率','別再問了','你要被…沒事','我就這樣看着你被wwww','樓上說要被樓下嘲諷'];
let nor = norArr[Math.floor((Math.random() * (norArr.length)) + 0)];
let dependArr = [1,2,2]
let depend = dependArr[Math.floor((Math.random() * (dependArr.length)) + 0)];

if (depend == 1) {
rply.text = TEXT[0] + ' ： ' + level + '%' ;
}
else
{
rply.text = TEXT[0] + ' ： ' + nor ;
}
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
奧義：八雲Fly踢', '\
沒主戰才是正常的人生', '\
叫誰???', '\
嘟嘟嚕嘟 嘟嘟嚕嘟 嘟嘟嚕督大大', '\
嗯姆~', '\
(逃', '\
見證我奇蹟的一刻', '\
來 我要一包入魂！！！', '\
見證我奇蹟的一抽吧', '\
八 雲 大 爆 炸 ！ ！', '\
大家10抽都全保底 哇哈哈哈哈', '\
嗯嗯！(點頭', '\
我只是一個萌新', '\
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
我渣渣', '\
三 小 啦 ！ ！', '\
八雲的cooking time', '\
(被抱走', '\
感覺滿歡樂的', '\
有誰要吃八雲煮的飯?', '\
講吧', '\
嗯？', '\
八雲是萌新~', '\
樓上是真·大佬', '\
安安(刷存在感', '\
八雲真的是萌新啦', '\
八雲是SV渣渣', '\
I is VCE please do not bully me', '\
大家都是大佬好恐怖…我看到八雲只能在牆角瑟瑟發抖', '\
說！你想幹嘛！你別過來', '\
走開！不要接近我', '\
我……才不想被你叫呢！哼！', '\
我看你有多少能耐', '\
我的鮮血 我感覺到他在沸騰中', '\
別接近我！！我怕我控制不到寄宿在我右手的力量(呀！！！！！', '\
喵喵喵！', '\
姆………', '\
系統：此人不存在', '\
我才不要理你呢！', '\
(嘟嘴)', '\
八雲是你可以叫的嗎?', '\
樓上沒雞雞', '\
前面轉左 跳下樓', '\
請問你要喝甚麼嗎？', '\
請問你要吃甚麼？', '\
樓上的生命只餘下2天(寫死亡筆記中(筆記本外寫着 【偽·死亡筆記】', '\
快說我可愛', '\
樓上大爆炸', '\
昨天吹雪說要當我姐姐', '\
吹雪快點女裝啦', '\
我想不到要回甚麼了', '\
你誰？', '\
rrrrrr', '\
樓上的黑歷史好恐怖的', '\
不是', '\
感覺是', '\
應該是', '\
除非不是', '\
不要', '\
我才不要呢', '\
不要丟棄我', '\
樓上的呼喚方式可以做得更好的', '\
八雲八雲~~(八雲的叫聲', '\
系統提醒：查無此人', '\
Baby don’t know why I cry さよなら 本当は言いたくないタダの強がり', '\
有人想聽八雲唱歌嗎？', '\
怕', '\
走開', '\
嗯'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomSmileFace() {
let rplyArr = ['\
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
可是對到安特的都被安特………………(掩臉' ,'\
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
你想被燒嗎?', '\
八雲沒有雞雞', '\
露娜大雞雞', '\
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
然後他就拿出了第二根……', '\
我愛吹雪', '\
感謝吹雪 讚嘆吹雪', '\
啊啊啊啊', '\
樓上跟吹雪傲嬌', '\
吹雪我婆', '\
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
	rply.text = str[0] + '\n' + '['+ a + '] \n→ ' + a[rollbase.Dice(a.length)-1];
	return rply;
}

function twochoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] ;
	return rply;
 }

function threechoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] ;
	return rply;
 }

function fourchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] ;
	return rply;
 }

function fivechoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] ;
	return rply;
 }

function sixchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] + '/' + a[5] ;
	return rply;
 }

function sevenchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] + '/' + a[5] + '/' + a[6] ;
	return rply;
 }

function eightchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3]  + '/' + a[4] + '/' + a[5] + '/' + a[6] + '/' + a[7] ;
	return rply;
 }

function ninechoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] + '/' + a[5] + '/' + a[6] + '/' + a[7] + '/' + a[8] ;
	return rply;
 }

function tenchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] + '/' + a[5] + '/' + a[6] + '/' + a[7] + '/' + a[8] + '/' + a[9] ;
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
	rply.text = mainMsg[0] + '\n' + ' → ['+ a + ']' ;
	return rply;
 }

function Poker14() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] + ' ， ' + arr[6] + ' ， ' + arr[7] + ' ， ' + arr[8] + ' ， ' + arr[9] + ' ， ' + arr[10] + ' ， ' + arr[12] + ' ， ' + arr[13] ;
return rply;
}


function Poker13() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] + ' ， ' + arr[6] + ' ， ' + arr[7] + ' ， ' + arr[8] + ' ， ' + arr[9] + ' ， ' + arr[10] + ' ， ' + arr[12] ;
return rply;
}

function Poker12() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] + ' ， ' + arr[6] + ' ， ' + arr[7] + ' ， ' + arr[8] + ' ， ' + arr[9] + ' ， ' + arr[10] + ' ， ' + arr[11] ;
return rply;
}

function Poker11() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] + ' ， ' + arr[6] + ' ， ' + arr[7] + ' ， ' + arr[8] + ' ， ' + arr[9] + ' ， ' + arr[10] ;
return rply;
}

function Poker10() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] + ' ， ' + arr[6] + ' ， ' + arr[7] + ' ， ' + arr[8] + ' ， ' + arr[9] ;
return rply;
}


function Poker9() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] + ' ， ' + arr[6] + ' ， ' + arr[7] + ' ， ' + arr[8] ;
return rply;
}

function Poker8() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] + ' ， ' + arr[6] + ' ， ' + arr[7] ;
return rply;
}

function Poker7() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] + ' ， ' + arr[6] ;
return rply;
}

function Poker6() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] ;
return rply;
}

function Poker5() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] ;
return rply;
}

function Poker4() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] ;
return rply;
}

function Poker3() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = ' → ' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] ;
return rply;
}

function Poker2() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = ' → ' + arr[0] + ' ， ' + arr[1] ;
return rply;
}

function Poker1() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = ' → ' + arr[0] ;
return rply;
}

function PokerAll() {	

	let arr = ['♤A','♤2','♤3','♤4','♤5','♤6','♤7','♤8','♤9','♤10','♤J','♤Q','♤K','♡A','♡2','♡3','♡4','♡5','♡6','♡7','♡8','♡9','♡10','♡J','♡Q','♡K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K','◇A','◇2','◇3','◇4','◇5','◇6','◇7','◇8','◇9','◇10','◇J','◇Q','◇K'];

	for (var i = arr.length-1; i >=0; i--) {

	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = arr[randomIndex];
	arr[randomIndex] = arr[i];
	arr[i] = itemAtIndex;
	}
rply.text = rply.text = 'Player 1：' + arr[0] + ' ， ' + arr[1] + ' ， ' + arr[2] + ' ， ' + arr[3] + ' ， ' + arr[4] + ' ， ' + arr[5] + ' ， ' + arr[6] + ' ， ' + arr[7] + ' ， ' + arr[8] + ' ， ' + arr[9] + ' ， ' + arr[10] + ' ， ' + arr[12] + ' ， ' + arr[13] + '\n\nPlayer 2：' + arr[14] + ' ， ' + arr[15] + ' ， ' + arr[16] + ' ， ' + arr[17] + ' ， ' + arr[18] + ' ， ' + arr[19] + ' ， ' + arr[20] + ' ， ' + arr[21] + ' ， ' + arr[22] + ' ， ' + arr[23] + ' ， ' + arr[24] + ' ， ' + arr[25] + ' ， ' + arr[26] + '\n\nPlayer 3：' + arr[27] + ' ， ' + arr[28] + ' ， ' + arr[29] + ' ， ' + arr[30] + ' ， ' + arr[31] + ' ， ' + arr[32] + ' ， ' + arr[33] + ' ， ' + arr[34] + ' ， ' + arr[35] + ' ， ' + arr[36] + ' ， ' + arr[37] + ' ， ' + arr[38] + ' ， ' + arr[39] + '\n\nPlayer 4：' + arr[40] + ' ， ' + arr[41] + ' ， ' + arr[42] + ' ， ' + arr[43] + ' ， ' + arr[44] + ' ， ' + arr[45] + ' ， ' + arr[46] + ' ， ' + arr[47] + ' ， ' + arr[48] + ' ， ' + arr[49] + ' ， ' + arr[50] + ' ， ' + arr[51] + ' ， ' + arr[11] ;
return rply;
}

module.exports = {
	yakumomark,
	disss,
	ykh,
	meat,
	shadow,
	know,
	think,
	randomColour,
	like,
	eato,
	drinko,
	moo,
	mot,
	randomDrink,
	FoodChoices,
	randomYula,
	Flag,
	BlackHistory,
	BStyleFlagSCRIPTS,
	randomReply,
	randomYakumo,
	randomSmileFace,
	randomAnt,
	randomLuck,
	randomChance,
	randomAOE,
	randomChick,
	randomRabbit,
	randomSnow,
	randomFrog,
	randomYakumoKii,
	RockPaperScissors,
	MultiDrawTarot,
	NomalDrawTarot,
	SortIt,
	tarotRevReply,
	choice,
	twochoice,
	threechoice,
	fourchoice,
	fivechoice,
	sixchoice,
	sevenchoice,
	eightchoice,
	ninechoice,
	tenchoice,
	tarotCardReply,
	Poker14,
	Poker13,
	Poker12,
	Poker11,
	Poker10,
	Poker9,
	Poker8,
	Poker7,
	Poker6,
	Poker5,
	Poker4,
	Poker3,
	Poker2,
	Poker1,
	PokerAll,
	suck
};
