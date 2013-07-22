function pian3tit8() {
	// <![CDATA[
	var taketori = (new Taketori()).set({
		lang : 'zh-tw',
		multiColumnEnabled : 'auto',
		fontFamily : 'sans-serif',
		height : '25em'
	}).element('div.tit8').toVertical();
	// ]]>
}

function bang2tsam7khai1si2() {
	liu5lam2khi3 = BrowserDetect.browser;
	tsoo2han3ji7();
	if (liu5lam2khi3 == 'Firefox')
		pian3tit8();
	/*
	 * else if(liu5lam2khi3=='Chrome') pian3tit8();
	 */
}