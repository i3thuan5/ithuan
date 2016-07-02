import React from 'react';
import {render} from 'react-dom';
import Router, {Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import 網站 from './網站/網站';
import 首頁 from './頁/首頁';
import './app.css';

import Debug from 'debug';
Debug.enable('意傳:*');

const root = document.getElementById('app');

let history = createBrowserHistory();
render(
  <Router history={history}>
          <Route path='/' component={網站}>
              <IndexRoute component={首頁}/>
              <Route path='%E8%AC%9B(/:khiunn/:ku)' component={首頁}/>
          </Route>
  </Router>,
  root
);
