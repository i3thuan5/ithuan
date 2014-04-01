var tsha5tioh4 = new Array();
var suan2 = new Array();
var 標音方法='';
var 標音言語='';
var 標音字串='';
var 臺羅數字 = true;
var 吳守禮方音 = true;
var 臺羅閏號 = false;
var 通用拼音 = false;
var 臺灣客話 = false;
var 注音符號 = false;
$('document').ready(function() {
	$('input[name=言語種類]').change(function() {
		var 語 = $('input[name=言語種類]:checked');
		if (語.val().indexOf('漢語族閩方言閩南語') != -1)
			$('#標音選項').attr('disabled', false);
		else
			$('#標音選項').attr('disabled', true);
	});
});
tsha5 = function(bang2tsi2) {
	$('#tsha5e5kiat4ko2').html('處理中……');
	/* alert(bang2tsi2);// */
	$.ajax({
		url : bang2tsi2,
		type : 'GET',
		data : {},
		error : function(xhr) {
			$('#tsha5e5kiat4ko2').html('系統更新中，請稍候再試');
			$('#tsha5e5kiat4ko2').fadeIn();
		},
		success : function(response) {
			// $('#tsha5e5kiat4ko2').html(response);
			// alert(response);
			tsha5tioh4 = eval('(' + response + ')');
			suan2 = new Array(tsha5tioh4.length);
			var str = '';
			for ( var i = 0; i < tsha5tioh4.length; ++i) {
				str += '<span class="suan2" id="tsha5e5kiat4ko2_' + i
						+ '" onclick="javascript:au7tsit8e5kiat4ko2(this)">';
				str += '</span>';
			}
			$('#tsha5e5kiat4ko2').html(str);
			重設文白();
			製標音展示();
			$('#tsha5e5kiat4ko2').fadeIn();
		}
	});
	return false;
};
function suan2gi2(方法)
{
	標音方法=方法;
	var 語=$('input[name=言語種類]:checked');
	標音言語=語.val();
	標音字串=encodeURIComponent($('#ai3tsha5').val());
	return tsha5('./'+標音方法+'/'+標音言語+'/'+標音字串);
}
function san2sing1ji7kiat4ko2(ji7kiat4ko2) {
	var i = +ji7kiat4ko2.id.split('_', 2)[1];
	var str = '';
	if (tsha5tioh4[i].length > 0)
		for ( var k = 0; k < tsha5tioh4[i][suan2[i]].詞組綜合標音.length; ++k) {
			str += '<ruby><rb>';
			str += tsha5tioh4[i][suan2[i]].詞組綜合標音[k].型體;
			if (吳守禮方音)
				str += tsha5tioh4[i][suan2[i]].詞組綜合標音[k].吳守禮方音;
			else if (注音符號)
				str += tsha5tioh4[i][suan2[i]].詞組綜合標音[k].注音符號;
			str += '</rb><rt>';
			if (臺羅數字)
				str += tsha5tioh4[i][suan2[i]].詞組綜合標音[k].臺羅數字調;
			else if (臺羅閏號)
				str += tsha5tioh4[i][suan2[i]].詞組綜合標音[k].臺羅閏號調;
			else if (通用拼音)
				str += tsha5tioh4[i][suan2[i]].詞組綜合標音[k].通用數字調;
			else if (臺灣客話)
				str += tsha5tioh4[i][suan2[i]].詞組綜合標音[k].臺灣客話;
			str += '</rt></ruby>';
		}
	ji7kiat4ko2.innerHTML = str;
	tshue7tsoo2ji7(ji7kiat4ko2);
	製稿表();
}
function au7tsit8e5kiat4ko2(ji7kiat4ko2) {
	var i = +ji7kiat4ko2.id.split('_', 2)[1];
	if ($('input[name=言語層]:checked').val() == '文讀音') {
		suan2[i] += tsha5tioh4[i].length - 1;
	} else
	// if($('input[name=言語層]:checked').val()=='白話音')
	{
		suan2[i] += 1;
	}
	suan2[i] %= tsha5tioh4[i].length;
	san2sing1ji7kiat4ko2(ji7kiat4ko2);
	// alert(ji7kiat4ko2.id+suan2.length);
	// $('#'+ji7kiat4ko2.id).html('');
	// ji7kiat4ko2.innerHTML='';
}
function 重設文白() {
	if ($('input[name=言語層]:checked').val() == '文讀音') {
		for ( var i = 0; i < suan2.length; ++i)
			suan2[i] = tsha5tioh4[i].length - 1;
	} else
	// if($('input[name=言語層]:checked').val()=='白話音')
	{
		for ( var i = 0; i < suan2.length; ++i)
			suan2[i] = 0;
	}
}
function 製標音展示() {
	臺羅數字 = false;
	吳守禮方音 = false;
	臺羅閏號 = false;
	通用拼音 = false;
	臺灣客話 = false;
	注音符號 = false;
	var 語 = $('input[name=言語種類]:checked');
	if (語.val().indexOf('漢語族閩方言閩南語') != -1) {
		var 標音選項 = $('#標音選項').val();
		if (標音選項.indexOf('臺羅數字') != -1)
			臺羅數字 = true;
		if (標音選項.indexOf('注音') != -1)
			吳守禮方音 = true;
		if (標音選項.indexOf('臺羅閏號') != -1)
			臺羅閏號 = true;
		if (標音選項.indexOf('通用') != -1)
			通用拼音 = true;
	} else if (語.val().indexOf('漢語族客家方言') != -1) {
		臺灣客話 = true;
	} else if (語.val().indexOf('漢語族官話方言北京官話臺灣腔') != -1) {
		注音符號 = true;
	}
	for ( var i = 0; i < tsha5tioh4.length; ++i) {
		san2sing1ji7kiat4ko2(document.getElementById('tsha5e5kiat4ko2_' + i));
	}
}
function 製稿表() {
	var 第幾字 = 0;
	var 語法 = '';
	var 面頂 = '', 下跤 = '';
	var 逐逝字數 = $('#逐逝幾字').val();
	for ( var i = 0; i < tsha5tioh4.length; ++i) {
		if (tsha5tioh4[i].length > 0)
			for ( var j = 0; j < tsha5tioh4[i][suan2[i]].詞組綜合標音.length; j++) {
				if (第幾字 % 逐逝字數 == 0 && 第幾字 != 0) {
					語法 += '<table><tr>';
					語法 += 面頂;
					語法 += '</tr><tr>';
					語法 += 下跤;
					語法 += '</tr></table>';
					面頂 = '';
					下跤 = '';
				}
				面頂 += '<td class="表的字">';
				面頂 += tsha5tioh4[i][suan2[i]].詞組綜合標音[j].型體;
				if (吳守禮方音)
					面頂 += tsha5tioh4[i][suan2[i]].詞組綜合標音[j].吳守禮方音;
				else if (注音符號)
					面頂 += tsha5tioh4[i][suan2[i]].詞組綜合標音[j].注音符號;
				面頂 += '</td>';
				下跤 += '<td class="表的音">';
				if (臺羅數字)
					下跤 += tsha5tioh4[i][suan2[i]].詞組綜合標音[j].臺羅數字調;
				else if (臺羅閏號)
					下跤 += tsha5tioh4[i][suan2[i]].詞組綜合標音[j].臺羅閏號調;
				else if (通用拼音)
					下跤 += tsha5tioh4[i][suan2[i]].詞組綜合標音[j].通用數字調;
				else if (臺灣客話)
					下跤 += tsha5tioh4[i][suan2[i]].詞組綜合標音[j].臺灣客話;
				下跤 += '</td>';
				第幾字 += 1;
			}
	}
	語法 += '<table><tr>';
	語法 += 面頂;
	語法 += '</tr><tr>';
	語法 += 下跤;
	語法 += '</tr></table>';
	var 表 = document.getElementById('稿表');
	表.innerHTML = 語法;
	tshue7tsoo2ji7(表);
	調整表字體大細();
}

function 調整表字體大細() {
	var 字大細 = $("#字大細").val() + "px";
	var 音大細 = ($("#字大細").val() / 2) + "px";
	$('#稿表 .表的字').css("font-size", 字大細);
	$('#稿表 .表的音').css("font-size", 音大細);
	$('#稿表 .tsoo2ji3').css("height", 字大細);
	$('#稿表 .tsoo2ji3').css("width", 字大細);
}

function 改表內字大細() {
	switch ($("#字大細").val()) {
	case "16":
		$('#逐逝幾字').val("16");
		break;
	case "20":
		$('#逐逝幾字').val("13");
		break;
	case "24":
		$('#逐逝幾字').val("11");
		break;
	case "36":
		$('#逐逝幾字').val("8");
		break;
	case "48":
		$('#逐逝幾字').val("6");
		break;
	default:
		break;
	}
	製稿表();
}

function 集選擇()
{
	if(標音言語=='漢語族官話方言北京官話臺灣腔')
	{
		alert('國語語音尚未完成，敬請期待～～');
		return;
	}
	var 選擇結果=suan2.join();
	var 合成功能;
	if(標音方法=='自動標音')
		合成功能='語音合成';
	else if (標音方法=='翻譯國語')
		合成功能='翻譯合成';
	else
		合成功能='語音合成';
	網址='./'+合成功能+'/'+標音言語+'/'+選擇結果+'/'+標音字串+'.wav';
	聲音物件=$('#聲音放送');
	聲音物件.attr('src',網址);
	聲音物件.get(0).play();
	$('#聲音掠落下').attr('href',網址);
	$('#聲音區').show();
}