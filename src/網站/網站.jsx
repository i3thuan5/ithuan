import React from 'react';
import './網站.css'
import 目錄 from './目錄';


export default class 網站 extends React.Component {

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
