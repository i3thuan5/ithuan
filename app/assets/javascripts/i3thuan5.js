function pian3tit8()
{
	// <![CDATA[
	var taketori = (new Taketori()).set({
		lang : 'zh-tw',
		multiColumnEnabled : 'auto',
		fontFamily : 'serif',
		height : '20em'
	}).element('div.tit8').toVertical();
	// ]]>
}

function bang2tsam7khai1si2()
{
	liu5lam2khi3 = BrowserDetect.browser;
	tsoo2han3ji7();
	if (liu5lam2khi3 == 'Firefox')
		pian3tit8();
	else if (liu5lam2khi3 == 'Chrome')
	{
		pian3tit8();
	}
	else
	{
		瀏覽器警告();
	}

}

function 瀏覽器警告()
{
	if ($.cookie("看過警告") == null)
	{
		alert("您知道您的瀏覽器不支援新技術嗎！？會嚴重影響本站品質，請使用Firefox或Chrome！");
	}
	var date = new Date();
	var minutes = 30;
	date.setTime(date.getTime() + (minutes * 60 * 1000));
	$.cookie("看過警告", "有", {
		expires : date
	});
}