import gzip
import pickle
import time
import Pyro4
from 臺灣言語工具.表單.肯語句連詞 import 肯語句連詞

if __name__ == '__main__':
	print('載入辭典', time.ctime())
	閩南語辭典連詞檔案 = gzip.open('閩南語辭典.pickle.gz', 'rb')
	閩南語辭典 = pickle.load(閩南語辭典連詞檔案)
	閩南語辭典連詞檔案.close()
	print('閩南語辭典',閩南語辭典)
	print('閩南語辭典.上濟字數]',閩南語辭典.上濟字數)
	print('閩南語辭典.上濟字數()]',閩南語辭典.上濟字數())
	print('載入連詞', time.ctime())
	閩南語連詞 = 肯語句連詞('語料/翻譯/閩.lm')
	print('載入結束', time.ctime())

	Pyro4.config.SERIALIZERS_ACCEPTED.add('pickle')
	Pyro4.Daemon.serveSimple(
	{
		閩南語辭典: "閩南語辭典",
		閩南語連詞: "閩南語連詞",
	}, ns=False, port=9839)
