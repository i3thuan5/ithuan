import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 網站 from './網站/網站';
import 首頁 from './頁/首頁/首頁';
import 母語系統 from './頁/母語系統/母語系統';
import 閩客故事 from './頁/閩客故事/閩客故事';
import 相關連結 from './頁/相關連結/相關連結';

import Debug from 'debug';
Debug.enable('ithuan:*');

const root = document.getElementById('app');

let history = browserHistory;
render(
  <Router history={history}>
          <Route path='/' component={網站}>
              <IndexRoute component={首頁}/>
              <Route path='%E6%AF%8D%E8%AA%9E%E7%B3%BB%E7%B5%B1' component={母語系統}/>
              <Route path='%E9%96%A9%E5%AE%A2%E6%95%85%E4%BA%8B' component={閩客故事}/>
              <Route path='%E7%9B%B8%E9%97%9C%E9%80%A3%E7%B5%90' component={相關連結}/>
              <Route path='*' component={首頁}/>
          </Route>
  </Router>,
  root
);
