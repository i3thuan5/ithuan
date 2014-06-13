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
