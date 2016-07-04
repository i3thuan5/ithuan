import React from 'react';

export default class 母語系統 extends React.Component {

  render () {
    return (
      <div className="huainn5">
        <p>目前所參與的專案如下：</p>
        <div>
          相關專案
          <ul>
            <li><a href='http://itaigi.tw'>itaigi</a></li>
            <li><a href='http://寫啥物.意傳.台灣/'>寫啥物</a></li>    
          </ul>
        </div>
        <div>
          相關函式庫
          <ul>
            <li><a href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_kang1-ku7'>臺灣言語工具</a></li>
            <li><a href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_tsu1-liau7-khoo3'>臺灣言語資料庫</a></li>
            <li><a href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5'>臺灣言語平臺</a></li>
            <li><a href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7'>臺灣言語服務</a></li>
          </ul>
        </div>
      </div>
     );
  }
}

