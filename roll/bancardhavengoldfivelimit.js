	for (i = 1; i < 5; i++) {
			for (;;) {
			tmpcard = rollbase.FunnyDice(10);
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
	

		for (i = 0; i < 5; i++) {
			if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + '\n';
			if (i == 1) {
			if (revs[i] == 0)
				returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
			else
				returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
			}
			if (i == 2) returnStr += '3: ' + BanCardReply(cards[i]) + ' ' + '\n';
			if (i == 3) {
			if (revs[i] == 0) 
				returnStr += '4: ' + BanCardReply(cards[i]) + ' ' + '\n';
			else
				returnStr += '4: ' + BanCardReply(cards[i]) + ' ' + '\n';
			}
			if (i == 4) returnStr += '5: ' + BanCardReply(cards[i]) + ' ' ;
	

		}
