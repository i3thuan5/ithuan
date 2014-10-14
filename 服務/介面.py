from 臺灣言語工具.綜合標音.句綜合標音 import 句綜合標音
from 臺灣言語工具.綜合標音.閩南語字綜合標音 import 閩南語字綜合標音
from django.http.response import HttpResponse
import json
from 服務.標音翻譯 import 閩南語翻譯物件
from 服務.標音翻譯 import 閩南語標音物件
from 服務.標音翻譯 import 章物件轉標仔
from 臺灣言語工具.語音合成.句物件轉合成標仔 import 句物件轉合成標仔
from 臺灣言語工具.音標系統.閩南語.臺灣閩南語羅馬字拼音 import 臺灣閩南語羅馬字拼音
from 臺灣言語工具.解析整理.轉物件音家私 import 轉物件音家私
from 臺灣言語工具.語音合成.閩南語變調 import 閩南語變調

_家私 = 轉物件音家私()
_句物件轉合成標仔=句物件轉合成標仔()
_閩南語變調=閩南語變調()

def 閩南語標音(request, 腔口, 語句):
	斷詞物件 = 閩南語標音物件(腔口, 語句)
	結果 = 句綜合標音(閩南語字綜合標音, 斷詞物件)
# 	print(結果.轉json格式())
	return HttpResponse(json.dumps(結果.轉json格式()), content_type="application/json")

def 閩南語翻譯(request, 腔口, 語句):
	閩南語章物件 = 閩南語翻譯物件(腔口, 語句)
	結果 = 句綜合標音(閩南語字綜合標音, 閩南語章物件)
# 	print(結果.轉json格式())
	return HttpResponse(json.dumps(結果.轉json格式()), content_type="application/json")

def 閩南語語音合成(request, 腔口, 語句):
	斷詞物件 = 閩南語標音物件(腔口, 語句)
	音值物件 = _家私.轉音(臺灣閩南語羅馬字拼音, 斷詞物件, 函式 = '音值')
	_閩南語變調.變調(音值物件)
	標仔陣列=_句物件轉合成標仔.章物件轉標仔(音值物件)
	return 章物件轉標仔(標仔陣列)

def 閩南語翻譯合成(request, 腔口, 語句):
	閩南語章物件 = 閩南語翻譯物件(腔口, 語句)
	音值物件 = _家私.轉音(臺灣閩南語羅馬字拼音, 閩南語章物件, 函式 = '音值')
	_閩南語變調.變調(音值物件)
	標仔陣列=_句物件轉合成標仔.章物件轉標仔(音值物件)
	return 章物件轉標仔(標仔陣列)
