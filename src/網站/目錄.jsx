import React from 'react';
import { Link } from 'react-router';
import Logo from './LOGO_1.png';

export default class 目錄 extends React.Component {

  render () {
    return (
        <div id="rightWrapper">
          <div id="logobox">
            <a id="logo" href="http://意傳.台灣/">
              <img alt="LOGO" src={Logo} width="100%"></img>
            </a>
          </div>
          <div  id="副標題" className="fontKai">閩南語、客語教材系統</div>
          
          <nav id="topNav">
          <ul>
            <li><Link to='/'>關於意傳</Link></li>
            <li><Link to='/'>母語系統</Link></li>
            <li><Link to='/%E7%B7%9A%E4%B8%8A%E7%B5%84%E5%AD%97'>線上組字</Link></li>
            <li><Link to='/'>閩客故事</Link></li>        
            <li><Link to='/'>相關連結</Link></li>
            <li className="last"><a href="">聯絡我們</a></li>
          </ul>
          </nav>
          <table className="FBbox"><tbody><tr>
            <td><div className="fb-share-button" data-href="https://www.facebook.com/i3thuan5/"
              data-layout="button"></div>
            </td>
            <td><div className="fb-like" data-href="https://www.facebook.com/i3thuan5/"
            data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
            </td>
          </tr></tbody></table>     
        </div>
    );
  }
}

