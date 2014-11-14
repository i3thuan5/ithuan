# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url
from 意傳網站.介面 import 關於意傳
from 意傳網站.介面 import 橫式範例
from 意傳網站.介面 import 聯絡我們
from 意傳網站.介面 import 悲慘世界
from 意傳網站.介面 import 標音方法
from 意傳網站.介面 import 標音程式下載
from 意傳網站.介面 import 標音說明
from 意傳網站.介面 import 注音介紹
from 意傳網站.介面 import 特此聲明
from 意傳網站.介面 import 產品資訊
from 意傳網站.介面 import 相關連結
from 意傳網站.介面 import 組字程式下載
from 意傳網站.介面 import 組字說明
from 意傳網站.介面 import 線上組字
from 意傳網站.介面 import 閩客故事
from 意傳網站.介面 import 閩客語的演變
from 意傳網站.介面 import 測試臉書讚鈕

urlpatterns = patterns('',
# 	url(r'^關於意傳$', 關於意傳.as_view(), name='關於意傳'),
	url(r'^橫式範例$', 橫式範例.as_view(), name='橫式範例'),
	url(r'^聯絡我們$', 聯絡我們.as_view(), name='聯絡我們'),
	url(r'^悲慘世界$', 悲慘世界.as_view(), name='悲慘世界'),
	url(r'^標音方法$', 標音方法.as_view(), name='標音方法'), 
	url(r'^標音程式下載$', 標音程式下載.as_view(), name='標音程式下載'), 
	url(r'^標音說明$', 標音說明.as_view(), name='標音說明'),
	url(r'^注音介紹$', 注音介紹.as_view(), name='注音介紹'), 
	url(r'^特此聲明$', 特此聲明.as_view(), name='特此聲明'), 
	url(r'^產品資訊$', 產品資訊.as_view(), name='產品資訊'),
	url(r'^相關連結$', 相關連結.as_view(), name='相關連結'),
	url(r'^組字程式下載$', 組字程式下載.as_view(), name='組字程式下載'), 
	url(r'^組字說明$', 組字說明.as_view(), name='組字說明'),
	url(r'^線上組字$', 線上組字, name='線上組字'),
	url(r'^閩客故事$', 閩客故事.as_view(), name='閩客故事'),
	url(r'^閩客語的演變$', 閩客語的演變.as_view(), name='閩客語的演變'),
	url(r'^測試臉書讚鈕$', 測試臉書讚鈕.as_view(), name='測試臉書讚鈕'),
	url(r'^.*$', 關於意傳.as_view(), name='關於意傳'),
)