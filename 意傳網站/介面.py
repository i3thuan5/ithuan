# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader
from django.views import generic
from django.shortcuts import get_object_or_404
from django.http.response import HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.db.models import Q
from django.views.generic.base import TemplateView

class 關於意傳(TemplateView):
	template_name = '意傳網站/關於意傳.html'

class 橫式範例(TemplateView):
	template_name = '意傳網站/橫式範例.html'

class 聯絡我們(TemplateView):
	template_name = '意傳網站/聯絡我們.html'

class 悲慘世界(TemplateView):
	template_name = '意傳網站/悲慘世界.html'
class 標音方法(TemplateView):
	template_name = '意傳網站/標音方法.html'
class 標音程式下載(TemplateView):
	template_name = '意傳網站/標音程式下載.html'
class 標音說明(TemplateView):
	template_name = '意傳網站/標音說明.html'
class 注音介紹(TemplateView):
	template_name = '意傳網站/注音介紹.html'
class 特此聲明(TemplateView):
	template_name = '意傳網站/特此聲明.html'
class 產品資訊(TemplateView):
	template_name = '意傳網站/產品資訊.html'
class 相關連結(TemplateView):
	template_name = '意傳網站/相關連結.html'
class 組字程式下載(TemplateView):
	template_name = '意傳網站/組字程式下載.html'
class 組字說明(TemplateView):
	template_name = '意傳網站/組字說明.html'
def 線上組字(request):
	一般符號陣列=[
		["⿰","⿱","⿴"],
		["⿰","⿰糸","⿰","⿰爿"],
		["⿰","⿰","⿱"],
		["⿴囗","⿴辶","⿴气","⿴宀"],
		["⿰因","⿱任心","⿴囗或"],
		["⿱金⿰金金","⿱⿰火火⿰火火"],
		["⿴辶⿴宀⿱珤⿰隹⿰貝招"],
		]
	注音陣列=[
		["ㄅ","ㄆ","ㄇ","ㆠ","ㄈ","ㄪ"],
		["ㄉ","ㄊ","ㄋ","ㄌ"],
		["ㄍ","ㄎ","ㄏ","ㆣ","ㄫ"],
		["ㄐ","ㄑ","ㄒ","ㆢ","ㄬ"],
		["ㄓ","ㄔ","ㄕ","ㄖ","ㄭ"],
		["ㄗ","ㄘ","ㄙ","ㆡ"],
		["ㄧ","ㆪ","ㄨ","ㆫ","ㆨ","ㄩ"],
		["ㄚ","ㆩ","ㄛ","ㆦ","ㆧ","ㄜ","ㄮ"],
		["ㄝ","ㆤ","ㆥ","ㄞ","ㆮ","ㄟ","ㄠ","ㆯ","ㄡ"],
		["ㆬ","ㆰ","ㆱ","ㄢ","ㄣ","ㄤ","ㆲ","ㆭ","ㄥ","ㄦ"],
		["ˊ","ˇ","ˋ","˙","˪","˫","^","㆐"],
		["ㆴ","ㆵ","ㆶ","ㆷ"]
		]
	版 = loader.get_template('意傳網站/線上組字.html')
	參數 = RequestContext(request, {
		'一般符號陣列': 一般符號陣列,
		'注音陣列': 注音陣列
	})
	return HttpResponse(版.render(參數))
class 閩客故事(TemplateView):
	template_name = '意傳網站/閩客故事.html'
class 閩客語的演變(TemplateView):
	template_name = '意傳網站/閩客語的演變.html'
class 測試臉書讚鈕(TemplateView):
	template_name = '意傳網站/測試臉書社團.html'

