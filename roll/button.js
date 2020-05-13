var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function buttontest() {
	rply = {
  "type": "template",
  "altText": "gbf情報",
  "template": {
    "type": "carousel",
    "imageAspectRatio": "rectangle",
    "imageSize": "cover",
    "columns": [
      {
        "thumbnailImageUrl": "https://lh3.googleusercontent.com/69dQKTLVRHP2o8eVrYGqB8xI45iMv6jO9B4d66PURpT2bcXOgfZyQRdpZ_k9lAVvhALKcv8GpuNjBXd-19q3oAyGSrA4AnWH8Wtev7NuVK3B",
        "imageBackgroundColor": "#a8e8fb",
        "title": "其他",
        "text": "其他",
        "actions": [
  						{
							"type": "uri",
							"label": "RaidFinder【找路人場】",
							"uri": "http://gbfraider.herokuapp.com/"
						},
						{
							"type": "uri",
							"label": "其他GBF資訊",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/"
						},
						{
							"type": "uri",
							"label": "GBF中文維基",
							"uri": "https://gbf.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5"
						}
					]
				},
      {
        "thumbnailImageUrl": "https://lh3.googleusercontent.com/i6xulv2ovvSoiPVR6bVEq2fmGRstBMbEuqOskmVddbY0ul0DXkDHYfpFdUWJ5dZDTERecNfxN5692RhuR4KxPrZMCFJayGI7PTy-_3pDvn8",
        "imageBackgroundColor": "#a8e8fb",
					"title": "素材收集",
					"text": "素材收集",
					"actions": [
						{
							"type": "uri",
							"label": "十天眾素材及收集【日】",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/23094"
						},
						{
							"type": "uri",
							"label": "十天眾素材及收集【中】",
							"uri": "https://bbs.nga.cn/read.php?tid=11531638&rand=293"
						},
						{
							"type": "uri",
							"label": "天司武器",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/52819#final"
						}
					]
			},
      {
        "thumbnailImageUrl": "https://lh3.googleusercontent.com/8VmygRZCBGN4bbSUtANA9mC5Gj2ZOrNevjksCffJogUErwnMYYUDvVfQ1v9fVqOzL6LRjWMkMiDh8F66wudAlbQXfJiBusjBpMjYM0lU19dd",
        "imageBackgroundColor": "#a8e8fb",
					"title": "素材收集",
					"text": "素材收集",
					"actions": [
						{
							"type": "uri",
							"label": "素材地圖",
							"uri": "https://gbf.huijiwiki.com/wiki/%E7%B4%A0%E6%9D%90%E5%9C%B0%E5%9B%BE"
						},
						{
							"type": "uri",
							"label": "素材指南",
							"uri": "https://forum.gamer.com.tw/Co.php?bsn=25204&sn=22833"
						},
						{
							"type": "uri",
							"label": "Side Story武器碎片及屬晶資源",
							"uri": "https://home.gamer.com.tw/creationDetail.php?sn=4258259"
						}
					]
				},
	    
      {
        "thumbnailImageUrl": "https://lh3.googleusercontent.com/NHfJkgP5PpF9vaDv7PQ25147yrIp1R-4b70wNOgnExRzTLmpIKLqj3k3SYs4ANLR_c624_Lell2Ujxr_gwqvTWUm9Xs4tM4yl1pU23MBQ1Ty",
        "imageBackgroundColor": "#a8e8fb",
					"title": "素材收集",
					"text": "素材收集",
					"actions": [
							{
							"type": "uri",
							"label": "巴哈武器",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show//48325"
						},
						{
							"type": "uri",
							"label": "U巴武器",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/62344"
						},
						{
							"type": "uri",
							"label": "英雄武器",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/38000"
						}
					]
				},

      {
        "thumbnailImageUrl": "https://lh3.googleusercontent.com/_MSiV37MJ8aZ5-QBNSypvVdWnSWZqQKkExnWziekauFOQvRKcvCQjiMcrT6sXC9NQzUXXV_6ngPzvfSM-quoqlDxAGDIz2eeuOhZ1dH0fnbP",
        "imageBackgroundColor": "#a8e8fb",
					"title": "素材收集",
					"text": "素材收集",
					"actions": [
								{
							"type": "uri",
							"label": "共鬥素材表",
							"uri": "https://forum.gamer.com.tw/C.php?bsn=25204&snA=7522"
						},
						{
							"type": "uri",
							"label": "武器盤倍率介紹 及 100%升技表",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/33197"
						},
						{
							"type": "uri",
							"label": "Side Story 召喚石及武器的評價",
							"uri": "https://www.ptt.cc/man/GBF/DC71/DC36/M.1529890956.A.0FD.html"
						}
					]
				},
      {
        "thumbnailImageUrl": "https://lh3.googleusercontent.com/_MSiV37MJ8aZ5-QBNSypvVdWnSWZqQKkExnWziekauFOQvRKcvCQjiMcrT6sXC9NQzUXXV_6ngPzvfSM-quoqlDxAGDIz2eeuOhZ1dH0fnbP",
        "imageBackgroundColor": "#a8e8fb",
					"title": "素材收集",
					"text": "素材收集",
					"actions": [
								{
							"type": "uri",
							"label": "共鬥素材表",
							"uri": "https://forum.gamer.com.tw/C.php?bsn=25204&snA=7522"
						},
						{
							"type": "uri",
							"label": "武器盤倍率介紹 及 100%升技表",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/33197"
						},
						{
							"type": "uri",
							"label": "Side Story 召喚石及武器的評價",
							"uri": "https://www.ptt.cc/man/GBF/DC71/DC36/M.1529890956.A.0FD.html"
						}
					]
				},
      {
        "thumbnailImageUrl": "https://lh3.googleusercontent.com/VcuIlSnDpaqODtdd32UE-1hXwfLAu76zOpzxzncPiO-vbAW9N3aoe40oEin2u_FJh4iVp0ume3-YuZPRCbmUivgTUWKO7Df1UAO1yolCoryk",
        "imageBackgroundColor": "#a8e8fb",
					"title": "編成參考",
					"text": "編成參考",
					"actions": [
						{
							"type": "uri",
							"label": "武器盤及角色編成",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/37020"
						},
						{
							"type": "uri",
							"label": "角色評價",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/20722"
						},
						{
							"type": "uri",
							"label": "召喚石評價",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/21495"
						}
					]
				},
	      {
        "thumbnailImageUrl": "https://lh3.googleusercontent.com/YloRVg79nByVFtFJ0WMDIL_thsxjuIOHIyuVdHYWzu1WXO_NfxDr8WnXBzBdoXqdavTg23Rhjo0wLdwGblgI6aeow4Qpv4hm9g5FP5FuLhk",
        "imageBackgroundColor": "#a8e8fb",
					"title": "其他",
					"text": "其他",
					"actions": [
						{						
		                                        "type": "uri",
							"label": "C4及EX2開啟指南",
							"uri": "https://pttgame.com/gbf/M.1528541729.A.6A4.html"
						},
						{
							"type": "uri",
							"label": "十天眾武器屬性選擇概念",
							"uri": "https://m.gamer.com.tw/forum/Co.php?bsn=25204&snB=11965"
						},
						{
							"type": "uri",
							"label": "Rank經驗對應表",
							"uri": "https://gbf-wiki.com/index.php?%C9%AC%CD%D7EXP%C9%BD"
						}
					]
				},
	      {
        "thumbnailImageUrl": "https://lh3.googleusercontent.com/YloRVg79nByVFtFJ0WMDIL_thsxjuIOHIyuVdHYWzu1WXO_NfxDr8WnXBzBdoXqdavTg23Rhjo0wLdwGblgI6aeow4Qpv4hm9g5FP5FuLhk",
        "imageBackgroundColor": "#a8e8fb",
		"title": "其他",
					"text": "其他",
					"actions": [
						{
							"type": "uri",
							"label": "技能基礎值計算",
							"uri": "https://gbf-wiki.com/index.php?%A5%B9%A5%AD%A5%EB%B8%FA%B2%CC"
						},
						{
							"type": "uri",
							"label": "轉世詳細介紹",
							"uri": "https://m.gamer.com.tw/forum/Co.php?bsn=25204&snB=41185"
						},
						{
							"type": "postback",
							"label": "NA",
							"data": "A"
						}
					]
				}
	    
    ]
  }
};
	return rply;
}



module.exports = {
	buttontest: buttontest
};
