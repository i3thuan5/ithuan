import React from 'react';
import { Link } from 'react-router';
import Logo from './LOGO_1.png';
import './目錄.css';

export default class 目錄 extends React.Component {

  render () {
    return (
        <div id="rightWrapper">
          <div id="logobox">
            <Link id="logo" to='/'>
              <img alt="LOGO" src={Logo} width="100%"></img>
            </Link>
          </div>
          <div  id="副標題" className="fontKai">在地資訊系統開發</div>
          
          <nav id="topNav">
          <ul>
            <li><Link to='/'>關於意傳</Link></li>
            <li><Link to='/%E6%AF%8D%E8%AA%9E%E7%B3%BB%E7%B5%B1'>母語系統</Link></li>
            <li><Link to='/%E7%B7%9A%E4%B8%8A%E7%B5%84%E5%AD%97'>線上組字</Link></li>
            <li><Link to='/%E9%96%A9%E5%AE%A2%E6%95%85%E4%BA%8B'>閩客故事</Link></li>        
            <li className="last"><Link to='/%E7%9B%B8%E9%97%9C%E9%80%A3%E7%B5%90'>相關連結</Link></li>
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

