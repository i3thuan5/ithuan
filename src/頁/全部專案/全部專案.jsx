import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import 族語合成 from './族語合成';
import LogoItaigi from '../../圖/itaigi.svg';
import LogoTL_POJ from '../../圖/TL_POJ_tsuan.png';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import LogoSia2 from '../../圖/sia2.png';
import LogoTsoo2 from '../../圖/tsoo2ji7.svg';
import LogoTau3 from '../../圖/tau3.png';

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
      children: "Rime是一个伐平臺ê輸入法框。阮是照這个框ê規範，共台語詞庫囥入去、寫台語拍字ê規則。目前支援linux。"
    },{
      title: "臺羅POJ轉換器",
      url: "https://xn--m7rr8i4sil03a3tchtsc3hztv.xn--v0qr21b.xn--kpry57d/",
      logo: LogoTL_POJ,
      children: "臺羅轉POJ、POJ轉臺羅ê家私。無論是數字調抑是傳統調攏會用得。全羅文佮漢羅文ê羅馬字攏ē-sài。"
    },{
      title: "iTaigi愛台語",
      logo: LogoItaigi,
      url: "https://itaigi.tw/",
      children: "想欲知影這个詞的台語按怎說，來遮查就著矣！逐个詞攏有語音合成，隨唸予你聽。嘛ē-sái提供家己ê講法喔！"
    },{
      title: "106年詞彙分級工作計畫",
      logo: LogoSu5lui7,
      url: "https://詞彙分級.意傳.台灣/",
      meta: "建立台語文語料庫來統計詞頻",
      children: "網站提供：自動偵測錯誤即時計算詞頻、方言差管理、搜尋功能，支援輸入全羅、漢羅。*目前無對外開放"
    },{
      title: "鬥拍字",
      logo: LogoTau3,
      url: "https://鬥拍字.意傳.台灣/",
      meta: "你拍台文，電腦唸予你聽",
      children: "輸入台文，電腦即時同齊產生漢字佮台羅ê對照，而且koh唸予你聽。"
    },{
      title: "寫啥物",
      logo: LogoSia2,
      url: "https://寫啥物.意傳.台灣/",
      meta: "華台翻譯器",
      children: "輸入華語了後翻譯做台語。"
    },{
      title: "臺灣媠聲2.0",
      url: "https://grants.g0v.tw/projects/5875bd8becdcf3001eb6bbb7",
      meta: "台語語音合成研究專案",
      children: "2017年共文化部申請ê補助案。欲來改良咱ê語音合成系統，予音質閣較清楚、閣較自然。"
    },{
      title: "鉸刀",
      url: "https://鉸刀.意傳.台灣",
      meta:"台語切音工具",
      children: "輸入音檔佮聽拍ê結果，由程式切做一段一段ê音檔。"
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
        <Item.Group relaxed>
          {this.Taigi()}
        </Item.Group>
        </Segment>

        <Segment basic size="large">
        <Header as='h3'>族語</Header>
        <Item.Group relaxed>
          <族語合成 名='Lamal' 族語='Pangcah' 漢字='阿美語' />
          <族語合成 名='Hapoy' 族語='SaySiyat' 漢字='賽夏語' />
          <族語合成 名='Sapuz' 族語='Bunun' 漢字='布農語' />
          <族語合成 名='Puniq' 族語='Atayal' 漢字='泰雅語' />
        </Item.Group>
        </Segment>

        <Segment basic size="large">
          <Header as='h3'>客語</Header>
          <Item.Group relaxed>
          <SingleItem title="𢯭手" url="https://𢯭手.意傳.台灣/" meta="客語學習工具">
            初學者看不懂客語，可以將客語輸入，可以唸給你聽喲！對老師而言，只需要打一次文案，就可以同時得到漢字和拼音喲！</SingleItem>
          <SingleItem title="用.意傳" url="https://用.意傳.台灣/講/" meta="講客話">輸入華語，告訴你客語怎麼念！</SingleItem>
          </Item.Group>
        </Segment>

        <Segment basic size="large">
        <Header as='h3'>字體</Header>
        <Item.Group relaxed>
          <SingleItem title="組字" logo={LogoTsoo2} url="https://組字.意傳.台灣/" meta="客語學習工具"
          >自己的母語字自己組</SingleItem>
        </Item.Group>
        </Segment>

        <Segment basic size="large">
          <Header as='h3'><Icon name="github"/>函式庫</Header>
          <List>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_kang1-ku7' target="_blank">台灣言語工具</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_tsu1-liau7-khoo3' target="_blank">台灣言語資料庫</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5' target="_blank">台灣言語平台</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7' target="_blank">台灣言語服務</List.Item>
          </List>
        </Segment>
      </Container>
     );
  }
}

