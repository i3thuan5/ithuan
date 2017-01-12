import React from 'react';
// import './網站.css';
import 目錄 from './目錄';
import 'semantic-ui-css/semantic.min.css';

export default class 網站 extends React.Component {

  render () {
    return (
      <div id="網頁最外圍">
        <div id="leftWrapper">
            {this.props.children}
        </div>
      </div>
    );
  }
}
