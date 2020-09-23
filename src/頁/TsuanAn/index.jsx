import React from 'react';
import { Container, Item, Header, Segment } from 'semantic-ui-react';
import SingleItem from '../SingleItem'

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
      title: "詞彙分級工作計畫",
      url: "https://詞彙分級.意傳.台灣/",
      meta: "台文語料庫詞頻統計",
      children: "網站提供自動偵查錯誤、即時計算詞頻、方言差管理、搜尋等功能，支援輸入全羅、漢羅。(對2017年開始佮中教大委託案，目前無對外開放。)"
    },{
      title: "台灣媠聲2.0",
      url: "/suisiann",
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
      </Container>
     );
  }
}

