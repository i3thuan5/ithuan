# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url
from 意傳網站.介面 import 關於意傳
from 服務.介面 import 閩南語標音
from 服務.介面 import 閩南語翻譯

urlpatterns = patterns('',
	url(r'^自動標音/(?P<腔口>[^/]+)/(?P<語句>[^/]*)$', 閩南語標音, name='閩南語標音'),
	url(r'^華語翻譯/(?P<腔口>[^/]+)/(?P<語句>[^/]*)$', 閩南語翻譯, name='閩南語翻譯'),
	url(r'^.*$', 關於意傳.as_view(), name='關於意傳'),
)