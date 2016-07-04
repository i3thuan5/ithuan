import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 網站 from './網站/網站';
import './app.css';
import 首頁 from './頁/首頁/首頁';
import 線上組字 from './頁/線上組字/線上組字';

import Debug from 'debug';
Debug.enable('意傳:*');

const root = document.getElementById('app');

let history = browserHistory;
render(
  <Router history={history}>
          <Route path='/' component={網站}>
              <IndexRoute component={首頁}/>
              <Route path='%E7%B7%9A%E4%B8%8A%E7%B5%84%E5%AD%97' component={線上組字}/>
          </Route>
  </Router>,
  root
);
