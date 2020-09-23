import React, { Component } from 'react';
import 大看板 from './大看板';
import 理念 from './理念';
import 參與專案 from './參與專案';
import './首頁.css';

export default class 首頁 extends Component {
  render () {
    return (
      <div>
        <大看板/>
        <參與專案/>
        <理念/>
      </div>
    );
  }
}
