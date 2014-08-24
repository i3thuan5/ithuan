from 臺灣言語工具.音標系統.閩南語.臺灣閩南語羅馬字拼音 import 臺灣閩南語羅馬字拼音
from 臺灣言語工具.解析整理.文章粗胚 import 文章粗胚
from 分言語.語言判斷 import 判斷
from 臺灣言語工具.綜合標音.句綜合標音 import 句綜合標音
from 臺灣言語工具.綜合標音.閩南語字綜合標音 import 閩南語字綜合標音
from django.http.response import HttpResponse
import json

_粗胚 = 文章粗胚()
_判斷 = 判斷

def 閩南語標音(request,腔口,語句):
# 	if not 腔口有支援無(查詢腔口):
# 		查詢腔口 = 袂前遺的腔口
# 		查詢語句 = 查詢字串
	print('語句',語句)
	處理減號 = _粗胚.建立物件語句前處理減號(臺灣閩南語羅馬字拼音, 語句)
	閩南語分數 = _判斷.閩南語分數(處理減號)
	斷詞物件 = 閩南語分數[0]
	結果=句綜合標音(閩南語字綜合標音,斷詞物件)
	print(結果.轉json格式())
	return HttpResponse(json.dumps(結果.轉json格式()), content_type="application/json")