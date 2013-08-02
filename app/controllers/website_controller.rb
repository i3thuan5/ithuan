# encoding: UTF-8
class WebsiteController < ApplicationController
	def 關於意傳
	end
	def 橫式範例
	end
	def 標音方法
	end
	def 線上組字
	end
	def 聯絡我們
	end
  def 閩客歷史
  end
  def 悲慘世界
  end
	def 相關連結
	end
	def method_missing(name, *args, &block)
		redirect_to '/', status: 302 
	end
	def index
		redirect_to '/', status: 302 
	end
end

