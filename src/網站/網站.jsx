import React from 'react';
import Transmit from 'react-transmit';
import './網站.css'
import 目錄 from './目錄';

class 網站 extends React.Component {

  render () {
    return (
      <div id="網頁最外圍">
        <div id="leftWrapper">
          <div id="mainContainer">
            {this.props.children}
          </div>
        </div>
        <目錄/>
      </div>
    );
  }
}

export default Transmit.createContainer(網站, { queries: {} });
