import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 網站 from './網站/網站';
import 首頁 from './頁/首頁/首頁';
import 全部專案 from './頁/全部專案/全部專案';
import 相關連結 from './頁/相關連結/相關連結';
import 連絡交流 from './頁/連絡/連絡';

import Debug from 'debug';
Debug.enable('ithuan:*');

const root = document.getElementById('app');

let history = browserHistory;
render(
  <Router history={history}>
          <Route path='/' component={網站}>
              <IndexRoute component={首頁}/>
              <Route path='%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88' component={全部專案}/>
              <Route path='suisiann' component={全部專案}/>
              <Route path='%E7%9B%B8%E9%97%9C%E9%80%A3%E7%B5%90' component={相關連結}/>
              <Route path='%E9%80%A3%E7%B5%A1%E4%BA%A4%E6%B5%81' component={連絡交流}/>
              {/*線上組字 舊址*/}
              <Route path='%E7%B7%9A%E4%B8%8A%E7%B5%84%E5%AD%97' component={全部專案}/>

              <Route path='*' component={首頁}/>
          </Route>
  </Router>,
  root
);
