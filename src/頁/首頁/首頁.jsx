import React from 'react';
import 標音 from './標音.png';
import 翻譯 from './翻譯.png';
import 發音 from './發音.png';
import 組字 from './組字.png';

export default class 首頁 extends React.Component {

  render () {
    return (
        <div className="huainn5 關於意傳">
        <article>
            <section className="font22px">
                <header>意傳文化科技開發母語的免費工具，讓母語學習和母語研究都能事半功倍</header>
                <ul id="意傳工具小簡歷" className="clearfix">      
                    <li><a href="#"><img src={翻譯}/></a><h2>翻譯</h2><p>幫您翻譯出閩母語文稿</p></li>
                    <li><a href="#"><img src={發音}/></a><h2>發音</h2><p>立即聽見母語發音</p></li>
                    <li><a href="#"><img src={組字}/></a><h2>組字</h2><p>輕鬆組出您要的漢語文字</p></li>       
                    <li><a href="#"><img src={標音}/></a><h2>注音</h2><p>將所有漢字標上注音</p></li>       
                </ul>   
            </section>
        </article>
        </div>
      );
  }
}
