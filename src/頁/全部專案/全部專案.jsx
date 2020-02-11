import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import 族語合成 from './族語合成';
import LogoItaigi from '../../圖/itaigi.svg';
import LogoTL_POJ from '../../圖/TL_POJ_tsuan.png';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import LogoSia2 from '../../圖/sia2.png';
import LogoTsoo2 from '../../圖/tsoo2ji7.svg';
import LogoTau3 from '../../圖/tau3.png';
import LogoPangcah from '../../圖/pangcah.png';


import SingleItem from './SingleItem'


import Debug from 'debug';
var debug = Debug('ithuan:網站');

export default class 全部專案 extends React.Component {

componentDidMount() {
    this.jumpToHash();
  }
  componentDidUpdate() {
    this.jumpToHash();
  }
  jumpToHash  ()  {
    const {hash} = window.location;
    if (hash) {
      let element=  document.getElementById(hash.substr(1));
      setTimeout(() => {
        if (element) element.scrollIntoView();
      })
    }
  }
  
  Taigi() {
    let list = [{
      title: "rime-itaigi",
      url: "https://github.com/i3thuan5/rime-taigi/",
      meta: "台語輸入法",
      children: "Rime是一个伐平台的輸入法框。阮是照這个框的規範，共台語詞庫囥入去、寫台語拍字規則。目前只支援linux。"
    },{
      title: "台羅POJ轉換器",
      url: "https://xn--m7rr8i4sil03a3tchtsc3hztv.xn--v0qr21b.xn--kpry57d/",
      logo: LogoTL_POJ,
     
      meta: "台文羅馬字系統轉換",
      children: "台羅轉POJ、POJ轉台羅的家私。接受原件數字調抑是傳統調號，全羅抑漢羅攏通處理。"
    },{
      title: "鬥拍字",
      logo: LogoTau3,
      
      url: "https://鬥拍字.意傳.台灣/",
      meta: "拍字電腦唸予你聽",
      children: "輸入台文，電腦同齊產生漢字佮台羅的對照，而且閣會唸予你聽。"
     },{
      title: "鉸刀",
      url: "https://鉸刀.意傳.台灣",
      meta:"台語切音工具",
      children: "同齊囥入音檔佮聽拍文字，予程式切做一段一段的音檔。"
    },{
      title: "iTaigi愛台語",
      logo: LogoItaigi,
      url: "https://itaigi.tw/",
      meta: "台語的大眾詞典",
      children: "欲知影這个詞的台語按怎講，來遮查就著矣！逐个詞攏有語音合成，隨唸予你聽。嘛ē-sái提供家己的講法喔！(意傳語音技術支援)"
    },{
      title: "台語兒",
      url: "https://baconbao.github.io/TaiwaneseWizard/",
      meta: "文字轉做台語語音",
      children: "台語兒是一隻會曉朗讀台語的語音精靈，有Chrome, Firefox, Messenger, Andriod版本通裝。(意傳語音技術支援)"
    },{
      title: "詞彙分級工作計畫",
      logo: LogoSu5lui7,
      url: "https://詞彙分級.意傳.台灣/",
      meta: "台文語料庫詞頻統計",
      children: "網站提供自動偵查錯誤、即時計算詞頻、方言差管理、搜尋等功能，支援輸入全羅、漢羅。(對2017年開始佮中教大委託案，目前無對外開放。)"
    },{
      title: "台灣媠聲2.0",
      url: "",
      meta: "台語語音合成研究專案",
      children: "2017年文化部推行語言多樣性友善環境補助案。來改良阮的語音合成系統，予音質閣較清楚、自然。(已結案)"
    },{
      title: "加速開發台文字幕流程計畫",
      url: "",
      meta: "台語語音辨識研究專案",
      children: "2019年文化部加速文化內容開發與科技創新應用補助案。加強語音辨識轉寫做台文技術，未來會提供這項服務。(進行中)"
    }];

    return list.map((item, k) => {
      let {children, ...rest} = item
      return (<SingleItem key={k} {...rest}>{children}</SingleItem>)
    })
  }

  render () {
    let LogoI3Thuan5='https://grants.g0v.tw/uploads/5d147554034c77e3e66bc0706473714e.png';
    return (
      <Container text>
        <Segment basic size="large">
        <Header as='h2'>台語</Header>
        <Item.Group relaxed>
          {this.Taigi()}
        </Item.Group>
        </Segment>

          <Segment basic size="large">
          <Header as='h2'>客家話</Header>
          <Item.Group relaxed>
          <SingleItem title="𢯭手" url="https://𢯭手.意傳.台灣/" meta="客語學習工具">
            初學者看不懂客語，可以將客語輸入，唸給你聽喲！對教學者而言，只需打一次文案，就可同時得到漢字和拼音。</SingleItem>
          </Item.Group>
        </Segment>
        
        <Segment basic size="large">
        <Header as='h2'>族語</Header>
        <Item.Group relaxed>
          <SingleItem title="阿美語萌典" logo={LogoPangcah} url="https://amis.moedict.tw/#:co'ong" meta="阿美語線上辭典"
          >阿美語萌典是群眾協作掃描校對的數位化辭典專案，目前可以查到三部阿美語字典，發音功能由意傳語音技術支援。</SingleItem>

        </Item.Group>
        </Segment>
      </Container>
     );
  }
}

