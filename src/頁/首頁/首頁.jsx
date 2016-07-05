import React from 'react';
import { Link } from 'react-router';
import './首頁.css'
import 標音 from './標音.png';
import 翻譯 from './翻譯.png';
import 發音 from './發音.png';
import 組字 from './組字.png';

export default class 首頁 extends React.Component {

  render () {
    return (
        <article>
            <section>
                <ul id="意傳工具小簡歷">
                    <li><Link to="/%E6%AF%8D%E8%AA%9E%E7%B3%BB%E7%B5%B1"><img src={翻譯}/><img src={發音}/></Link><h2>語言學習</h2><p>幫您翻譯出母語文稿，立即聽見母語發音</p></li>
                    <li><Link to="/%E7%B7%9A%E4%B8%8A%E7%B5%84%E5%AD%97"><img src={組字}/><img src={標音}/></Link><h2>組字</h2><p>輕鬆組出漢字和注音</p></li>
                </ul>   
            </section>
        </article>
      );
  }
}
