# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url
from 意傳網站.介面 import 頭頁


urlpatterns = patterns('',
	url(r'^關於意傳$', 頭頁, name='頭頁'),
)