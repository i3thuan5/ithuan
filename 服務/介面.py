from 臺灣言語工具.綜合標音.句綜合標音 import 句綜合標音
from 臺灣言語工具.綜合標音.閩南語字綜合標音 import 閩南語字綜合標音
from django.http.response import HttpResponse
import json
from 服務.標音翻譯 import 閩南語翻譯物件
from 服務.標音翻譯 import 閩南語標音物件
from 服務.標音翻譯 import 章物件轉標仔
from 臺灣言語工具.語音合成.句物件轉合成標仔 import 句物件轉合成標仔

_句物件轉合成標仔=句物件轉合成標仔()


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
	標仔陣列=_句物件轉合成標仔.句物件轉標仔(斷詞物件)
	
	結果 = 句綜合標音(閩南語字綜合標音, 斷詞物件)
	print(標仔陣列,',斷詞物件')
	return 章物件轉標仔(標仔陣列)

def 閩南語翻譯合成(request, 腔口, 語句):
	閩南語章物件 = 閩南語翻譯物件(腔口, 語句)
	標仔陣列=_句物件轉合成標仔.章物件轉標仔(閩南語章物件)
	return 章物件轉標仔(標仔陣列)
