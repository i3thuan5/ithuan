import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './鍵盤.css';

export default class 鍵盤 extends React.Component {

  render () {
    let 一般符號陣列 = [
      ['⿰', '⿱', '⿴'],
      ['⿰', '⿰糸', '⿰', '⿰爿'],
      ['⿰', '⿰', '⿱'],
      ['⿴囗', '⿴辶', '⿴气', '⿴宀'],
      ['⿰因', '⿱任心', '⿴囗或'],
      ['⿱金⿰金金', '⿱⿰火火⿰火火'],
      ['⿴辶⿴宀⿱珤⿰隹⿰貝招'],
      ];
    let 注音陣列 = [
      ['⿿', '⿿⿿⿿ㄍㄨ㆐ㆵ', '⿿⿿ㆠㄞˋ'],
      ['ㄅ', 'ㄆ', 'ㄇ', 'ㆠ', 'ㄈ', 'ㄪ'],
      ['ㄉ', 'ㄊ', 'ㄋ', 'ㄌ'],
      ['ㄍ', 'ㄎ', 'ㄏ', 'ㆣ', 'ㄫ'],
      ['ㄐ', 'ㄑ', 'ㄒ', 'ㆢ', 'ㄬ'],
      ['ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄭ'],
      ['ㄗ', 'ㄘ', 'ㄙ', 'ㆡ'],
      ['ㄧ', 'ㆪ', 'ㄨ', 'ㆫ', 'ㆨ', 'ㄩ'],
      ['ㄚ', 'ㆩ', 'ㄛ', 'ㆦ', 'ㆧ', 'ㄜ', 'ㄮ'],
      ['ㄝ', 'ㆤ', 'ㆥ', 'ㄞ', 'ㆮ', 'ㄟ', 'ㄠ', 'ㆯ', 'ㄡ'],
      ['ㆬ', 'ㆰ', 'ㆱ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㆲ', 'ㆭ', 'ㄥ', 'ㄦ'],
      ['ˊ', 'ˇ', 'ˋ', '˙', '˪', '˫', '^', '㆐'],
      ['ㆴ', 'ㆵ', 'ㆶ', 'ㆷ'],
    ];
    let 一般陣列鈕仔 = this.轉鈕仔(一般符號陣列);
    let 注音陣列鈕仔 = this.轉鈕仔(注音陣列);
    return (
       <Tabs>
        <TabList>
          <Tab>使用說明</Tab>
          <Tab>一般符號</Tab>
          <Tab>注音符號</Tab>
        </TabList>

        <TabPanel>
          {this.使用說明()}
        </TabPanel>
        <TabPanel>
          {一般陣列鈕仔}
        </TabPanel>
        <TabPanel>
          {注音陣列鈕仔}
        </TabPanel>
      </Tabs>
     );
  }

  轉鈕仔(陣列) {
    return 陣列.map(
      (陣列, i)=>(
        <div key={i}>
          {陣列.map(
            (符號)=>
                <input className="tsoo2ji7liu2a2" type="button" key={符號} value={符號}
                 onClick={this.props.加物件.bind(this, 符號)} />
           )}
        </div>
      )
    );
  }

  使用說明() {
    return (
      <div>
        <p>組字式是拆解漢字的偏旁，拆解分為上到下<span className="wordB"></span>、左到右<span className="wordpq"></span>、外到內<span className="wordoo"></span>，三個方向。</p>

        <div style={{ paddingLeft: '2em' }}>
          <p>⿱任心＝<span className="wordB">任心</span> （上到下）</p>
          <p>⿰扌帶＝<span className="wordpq">扌帶</span> （左到右）</p>
          <p>因＝<span className="wordoo">囗大</span> （外到內）</p>
          <p>⿰因＝<span className="wordpq">因</span>＝<span className="wordpq"><span className="wordoo">囗大</span></span></p>  
        </div>
        
        <p>像是閩南語的「⿰因」和客語的「⿰厓」以往只能造字，還得製作字型檔才能使用，因此本站提供跨平台的組字工具。
           只要依序輸入組字式，也就是部首及偏旁的拆解順序，就可以自動生成該文字的組字圖。
           一來解決目前中文輸入法尚未支援閩客語文字的問題，再加上圖片不會受到平臺的影響，能避免亂碼問題。</p>
        
        <p>漢字組建使用java撰寫，採用Affero通用公眾特許條款（Affero General Public License, AGPL)開放
          <a href="https://github.com/sih4sing5hong5/han3_ji7_tsoo1_kian3">原始碼</a>。
        </p>
      </div>
    );
  }
}
