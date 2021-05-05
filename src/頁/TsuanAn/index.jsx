import React from 'react';
import { Container, Item, Header, Segment } from 'semantic-ui-react';
import SingleItem from '../SingleItem'
import LogoItaigi from '../../圖/itaigi.svg'
import LogoPangcah from '../../圖/pangcah.png'

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
      title: "iTaigi愛台語",
      logo: LogoItaigi,
      url: "https://itaigi.tw/",
      meta: "台語的大眾詞典",
      children: "欲知影這个詞的台語按怎講，來遮查就著矣！逐个詞攏有語音合成，隨唸予你聽。嘛ē-sái提供家己的講法喔！(意傳語音技術支援)"
    },{
      title: "詞彙分級工作計畫",
      meta: "台文語料庫詞頻統計",
      children: "網站提供自動偵查錯誤、即時計算詞頻、方言差管理、搜尋等功能，支援輸入全羅、漢羅。(對2017年開始佮中教大委託案，目前無對外開放。)"
    },{
      title: "台灣媠聲2.0",
      url: "/suisiann",
      meta: "台語語音合成研究專案",
      children: "2017年文化部推行語言多樣性友善環境補助案。來改良阮的語音合成系統，予音質閣較清楚、自然。(已結案)"
    },{
      title: "加速開發台文字幕流程計畫",
      meta: "台語語音辨識研究專案",
      children: "2019年文化部加速文化內容開發與科技創新應用補助案。加強語音辨識轉寫做台文技術，未來會提供這項服務。(進行中)"
    },{
      title: "台語兒",
      url: "https://baconbao.github.io/TaiwaneseWizard/",
      meta: "文字轉做台語語音",
      children: "台語兒是一隻會曉朗讀台語的語音精靈，有Chrome、Firefox、Messenger、Andriod版本通裝。(意傳語音技術支援)"
    },];

    return list.map((item, k) => {
      let {children, ...rest} = item
      return (<SingleItem key={k} {...rest}>{children}</SingleItem>)
    })
  }
 
  tsokgi() {
    let list = [{
      title: "iTaigi愛台語",
      logo: LogoItaigi,
      url: "https://itaigi.tw/",
      meta: "台語的大眾詞典",
      children: "欲知影這个詞的台語按怎講，來遮查就著矣！逐个詞攏有語音合成，隨唸予你聽。嘛ē-sái提供家己的講法喔！(意傳語音技術支援)"
    },{
      title: "詞彙分級工作計畫",
      meta: "台文語料庫詞頻統計",
      children: "網站提供自動偵查錯誤、即時計算詞頻、方言差管理、搜尋等功能，支援輸入全羅、漢羅。(對2017年開始佮中教大委託案，目前無對外開放。)"
    },];

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

        <Header as='h2'>族語</Header>
        <Item.Group relaxed>
        <SingleItem title="阿美語萌典" logo={LogoPangcah} url="https://amis.moedict.tw/#:co'ong" meta="阿美語線上辭典"
          >阿美語萌典是群眾協作掃描校對的數位化辭典專案，目前可以查到三部阿美語字典，發音功能由意傳語音技術支援。</SingleItem>
        <SingleItem title="噶哈巫語分類辭典" url="https://kaxabu.ithuan.tw/" meta="噶哈巫語分類辭典kaxabubizu"
          >這个網站是電子版ê噶哈巫語分類辭典，網站是MIT開源授權。多謝潘永歷baba同意，規本辭典電子資料用CC BY-NC-SA公開出來。網站頂有完整辭典資料kah程式連結。</SingleItem>
        </Item.Group>
        </Segment>
      </Container>
     );
  }
}

