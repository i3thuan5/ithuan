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
from 臺灣言語工具.語音合成.句物件轉合成標仔 import 句物件轉合成標仔
import htsengine
import wave

_粗胚 = 文章粗胚()
_分析器 = 拆文分析器()
_判斷 = 判斷

_斷詞斷字翻譯 = 斷詞斷字翻譯()
_官方斷詞剖析工具 = 官方斷詞剖析工具()
_編碼器 = 語句編碼器()
斷詞用戶端 = 摩西用戶端('localhost', 8105, 編碼器=_編碼器)
斷字用戶端 = 摩西用戶端('localhost', 8205, 編碼器=_編碼器)
_句物件轉合成標仔 = 句物件轉合成標仔()

def 閩南語標音物件(腔口, 語句):
	print('語句', 語句)
	處理減號 = _粗胚.建立物件語句前處理減號(臺灣閩南語羅馬字拼音, 語句)
	閩南語分數 = _判斷.閩南語分數(處理減號)
	return 閩南語分數[0]

def 閩南語翻譯物件(腔口, 語句):
	print('語句', 語句)
	try:
		斷詞物件 = _官方斷詞剖析工具.斷詞(語句)
		print('斷詞物件', 斷詞物件)
		處理減號 = _粗胚.建立物件語句前處理減號(官話注音符號, 語句)
		print('處理減號', 處理減號)
		華語章物件 = _分析器.建立章物件(處理減號)
		print('華語章物件', 華語章物件)
		閩南語章物件 = _斷詞斷字翻譯.譯(斷詞用戶端, 斷字用戶端, 華語章物件)
	except:
		print('斷詞失敗')
		處理減號 = _粗胚.建立物件語句前處理減號(官話注音符號, 語句)
		print('處理減號', 處理減號)
		華語章物件 = _分析器.建立章物件(' '.join(處理減號))
		孤字章物件 = _分析器.建立章物件('')
# 		for 句物件 in 華語章物件:
# 			孤字章物件.內底句.句物件
		print('華語章物件', 華語章物件)
		閩南語章物件 = _斷詞斷字翻譯.譯(斷字用戶端, 斷字用戶端, 華語章物件)
	return 閩南語章物件

def 章物件轉標仔(標仔陣列):
	for a in 標仔陣列[:5]:
		print('a',a)
	愛合成標仔 = _句物件轉合成標仔.跳脫標仔陣列(標仔陣列)
	for a in 愛合成標仔[:5]:
		print('b',a)
	model = 'HTSLSPtan5tso5.htsvoice'
	s, f, n, a = htsengine.synthesize(model, 愛合成標仔)
	回應 = HttpResponse()
	回應['Content-Type'] = 'audio/wav'
	回應['Accept-Ranges'] = 'bytes'
	wavFile = wave.open(回應, 'wb')
	wavFile.setsampwidth(s)
	wavFile.setframerate(f)
	wavFile.setnchannels(n)
	wavFile.writeframesraw(a)
	wavFile.close()
	return 回應
