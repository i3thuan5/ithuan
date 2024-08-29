import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import BangTsam from './網站/網站';
import Tshu from './頁/首頁/首頁';
import MisanoPangcah from './頁/MisanoPangcah';
import TsuanAn from './頁/TsuanAn';
import SanPhin from './頁/SanPhin';
import SuiSiann from './頁/SuiSiann';
import TsuAn from './頁/TsuAn';
import Taigi from './頁/Taigi';
import Pangcah from './頁/Pangcah';
import Kaxabu from './頁/Kaxabu';
import Hakka from './頁/Hakka';

import Debug from 'debug';
Debug.enable('ithuan:*');

const root = document.getElementById('app');

let history = browserHistory;
render(
  <Router history={history}>
          <Route path='/' component={BangTsam}>
              <IndexRoute component={Tshu}/>
              <Route path='misanopangcah' component={MisanoPangcah}/>
              <Route path='taigi' component={Taigi}/>
              <Route path='pangcah' component={Pangcah}/>
              <Route path='kaxabu' component={Kaxabu}/>
              <Route path='hakka' component={Hakka}/>
              <Route path='tsuan' component={TsuAn}/>
              <Route path='*' component={Tshu}/>
              <Route path='tsuanan' component={TsuanAn}/>
              <Route path='sanphin' component={SanPhin}/>
              <Route path='suisiann' component={SuiSiann}/>
          </Route>
  </Router>,
  root
);
