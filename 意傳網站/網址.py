# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url
from 意傳網站.介面 import 關於意傳
from 意傳網站.介面 import 橫式範例
from 意傳網站.介面 import 聯絡我們

urlpatterns = patterns('',
	url(r'^關於意傳$', 關於意傳.as_view(), name='關於意傳'),
	url(r'^橫式範例$', 橫式範例.as_view(), name='橫式範例'),
	url(r'^聯絡我們$', 聯絡我們.as_view(), name='聯絡我們'),
)