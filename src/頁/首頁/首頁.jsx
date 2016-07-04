import React from 'react';
import Transmit from 'react-transmit';
import Router from 'react-router';
import 標音 from './標音.png';
import 翻譯 from './翻譯.png';
import 發音 from './發音.png';
import 組字 from './組字.png';

class 首頁 extends React.Component {

  render () {
    return (
<div class="huainn5 關於意傳">
<article>
<section class="font22px">
<header>意傳文化科技開發免費的閩客言語工具，讓學習方言和方言研究都能事半功倍。若有需要母語教材客製化，歡迎聯絡我們。</header>
<ul id="意傳工具小簡歷" class="clearfix">		
<li><a href="#}"><img src={標音}/></a><h2>標音</h2><p>將所有閩客文字標上音標，方便母語學習</p></li>
<li><a href="#"><img src={翻譯}/></a><h2>翻譯</h2><p>幫您翻譯出閩客語文稿</p></li>
<li><a href="#"><img src={發音}/></a><h2>發音</h2><p>立即聽見翻譯或標音結果</p></li>
<li><a href="#"><img src={組字}/></a><h2>組字</h2><p>輕鬆組出您要的閩客語文字</p></li>				
</ul>	
</section>
</article>
</div>
      );
  }
}

export default Transmit.createContainer(首頁, { queries: {} });
