var tsha5tioh4 = new Array();
var suan2 = new Array();
tsha5 = function(bang2tsi2)
{
	$('#tsha5e5kiat4ko2').html('處理中……');
	/* alert(bang2tsi2);// */
	$.ajax({
		url : bang2tsi2,
		type : 'GET',
		data : {},
		error : function(xhr)
		{
			$('#tsha5e5kiat4ko2').html('發生錯誤！！');
			$('#tsha5e5kiat4ko2').fadeIn();
		},
		success : function(response)
		{
			// $('#tsha5e5kiat4ko2').html(response);
			// alert(response);
			tsha5tioh4 = eval('(' + response + ')');
			suan2 = new Array(tsha5tioh4.length);
			var str = '';
			for ( var i = 0; i < tsha5tioh4.length; ++i)
			{
				str += '<span class="suan2" id="tsha5e5kiat4ko2_' + i
						+ '" onclick="javascript:au7tsit8e5kiat4ko2(this)">';
				str += '</span>';
			}
			$('#tsha5e5kiat4ko2').html(str);
			重設文白();
			$('#tsha5e5kiat4ko2').fadeIn();
		}
	});
	return false;
};
function san2sing1ji7kiat4ko2(ji7kiat4ko2)
{
	var i = +ji7kiat4ko2.id.split('_', 2)[1];
	var str = '';
	for ( var k = 0; k < tsha5tioh4[i][suan2[i]].綜合標音.length; ++k)
	{
		str += '<ruby><rb>';
		str += tsha5tioh4[i][suan2[i]].綜合標音[k].型體;
		str += tsha5tioh4[i][suan2[i]].綜合標音[k].吳守禮方音;
		str += '</rb><rt>';
		str += tsha5tioh4[i][suan2[i]].綜合標音[k].臺羅數字調;
		str += '</rt></ruby>';
	}
	ji7kiat4ko2.innerHTML = str;
	tshue7tsoo2ji7(ji7kiat4ko2);
}
function au7tsit8e5kiat4ko2(ji7kiat4ko2)
{
	var i = +ji7kiat4ko2.id.split('_', 2)[1];
	if ($('input[name=言語層]:checked').val() == '文讀音')
	{
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
function 重設文白()
{
	if ($('input[name=言語層]:checked').val() == '文讀音')
	{
		for ( var i = 0; i < suan2.length; ++i)
			suan2[i] = tsha5tioh4[i].length - 1;
	} else
	// if($('input[name=言語層]:checked').val()=='白話音')
	{
		for ( var i = 0; i < suan2.length; ++i)
			suan2[i] = 0;
	}
	for ( var i = 0; i < tsha5tioh4.length; ++i)
	{
		san2sing1ji7kiat4ko2(document.getElementById('tsha5e5kiat4ko2_' + i));
	}
}
function 製稿表()
{
	var 第幾字 = 0;
	var 語法 = '';
	var 面頂 = '', 下跤 = '';
	for ( var i = 0; i < tsha5tioh4.length; ++i)
	{
		for ( var j = 0; j < tsha5tioh4[i][suan2[i]].綜合標音.length; j++)
		{
			if (第幾字 % 10 == 0 && 第幾字 != 0)
			{
				語法 += '<table><tr>';
				語法 += 面頂;
				語法 += '</tr><tr>';
				語法 += 下跤;
				語法 += '</tr></table>';
				面頂 = '';
				下跤 = '';
			}
			面頂 += '<td class="表的字">';
			面頂 += tsha5tioh4[i][suan2[i]].綜合標音[j].型體;
			面頂 += tsha5tioh4[i][suan2[i]].綜合標音[j].吳守禮方音;
			面頂 += '</td>';
			下跤 += '<td class="表的音">';
			下跤 += tsha5tioh4[i][suan2[i]].綜合標音[j].臺羅數字調;
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
}