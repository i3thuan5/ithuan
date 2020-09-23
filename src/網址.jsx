import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 網站 from './網站/網站';
import 首頁 from './頁/首頁/首頁';
import TsuanAn from './頁/TsuanAn';
import SanPhin from './頁/SanPhin';
import SuiSiann from './頁/SuiSiann';
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
              <Route path='tsuanan' component={TsuanAn}/>
              <Route path='sanphin' component={SanPhin}/>
              <Route path='suisiann' component={SuiSiann}/>
              <Route path='*' component={首頁}/>
          </Route>
  </Router>,
  root
);
