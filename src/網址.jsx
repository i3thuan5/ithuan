import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import BangTsam from './網站/網站';
import Tshu from './頁/首頁/首頁';
import TsuanAn from './頁/TsuanAn';
import SanPhin from './頁/SanPhin';
import SuiSiann from './頁/SuiSiann';

import Debug from 'debug';
Debug.enable('ithuan:*');

const root = document.getElementById('app');

let history = browserHistory;
render(
  <Router history={history}>
          <Route path='/' component={BangTsam}>
              <IndexRoute component={Tshu}/>
              <Route path='tsuanan' component={TsuanAn}/>
              <Route path='sanphin' component={SanPhin}/>
              <Route path='suisiann' component={SuiSiann}/>
              <Route path='*' component={Tshu}/>
          </Route>
  </Router>,
  root
);
