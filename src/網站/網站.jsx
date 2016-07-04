import React from 'react';
import Transmit from 'react-transmit';
import Router from 'react-router';
import './網站.css'
import Logo from '../圖/版型/ituanLOGO_1.png';

class 網站 extends React.Component {

  render () {
    return (
      <div id="網頁最外圍">
        <div id="leftWrapper">
          <div id="mainContainer">
            意傳文化科技
          </div>
        </div>
        
        <div id="rightWrapper">
          <div id="logobox">
            <a id="logo" href="http://意傳.台灣/">
              <img alt="LOGO" src={Logo} width="100%"></img>
            </a>
          </div>
          <div  id="副標題" className="fontKai">閩南語、客語教材系統</div>
          
          <nav id="topNav">
          <ul>
            <li><a href="">關於意傳</a></li>
            <li>線上標音</li>       
            <li>線上組字</li>       
            <li><a href="">閩客故事</a></li>        
            <li><a href="">相關連結</a></li>
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
      </div>
    );
  }
}

export default Transmit.createContainer(網站, { queries: {} });
