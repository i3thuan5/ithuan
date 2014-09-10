from 臺灣言語工具.音標系統.閩南語.臺灣閩南語羅馬字拼音 import 臺灣閩南語羅馬字拼音
from 臺灣言語工具.解析整理.文章粗胚 import 文章粗胚
from 分言語.語言判斷 import 判斷
from 臺灣言語工具.綜合標音.句綜合標音 import 句綜合標音
from 臺灣言語工具.綜合標音.閩南語字綜合標音 import 閩南語字綜合標音
from django.http.response import HttpResponse
import json
from 臺灣言語工具.翻譯.斷詞斷字翻譯 import 斷詞斷字翻譯
from 臺灣言語工具.翻譯.摩西工具.摩西用戶端 import 摩西用戶端
from 臺灣言語工具.音標系統.官話.官話注音符號 import 官話注音符號
from 臺灣言語工具.解析整理.拆文分析器 import 拆文分析器
from 臺灣言語工具.翻譯.摩西工具.語句編碼器 import 語句編碼器
from 臺灣言語工具.斷詞.中研院工具.官方斷詞剖析工具 import 官方斷詞剖析工具
from 服務.標音翻譯 import 閩南語翻譯物件
from 服務.標音翻譯 import 閩南語標音物件

_粗胚 = 文章粗胚()
_分析器=拆文分析器()
_判斷 = 判斷

_斷詞斷字翻譯=斷詞斷字翻譯()
_官方斷詞剖析工具=官方斷詞剖析工具()
_編碼器 = 語句編碼器()
斷詞用戶端=摩西用戶端('localhost',8105,編碼器=_編碼器)
斷字用戶端=摩西用戶端('localhost',8205,編碼器=_編碼器)

def 閩南語翻譯(request,腔口,語句):
	閩南語章物件=閩南語翻譯物件(腔口, 語句)
	結果=句綜合標音(閩南語字綜合標音,閩南語章物件)
	print(結果.轉json格式())
	return HttpResponse(json.dumps(結果.轉json格式()), content_type="application/json")

def 閩南語標音(request,腔口,語句):
	斷詞物件 = 閩南語標音物件(腔口, 語句)
	結果=句綜合標音(閩南語字綜合標音,斷詞物件)
	print(結果.轉json格式())
	return HttpResponse(json.dumps(結果.轉json格式()), content_type="application/json")
