import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import 族語合成 from './族語合成';
import SingleItem from '../SingleItem'


import Debug from 'debug';
var debug = Debug('ithuan:網站');


let list_to_singleitem = (list) => (
  list.map((item, k) => {
    let {children, ...rest} = item
    return (<SingleItem key={k} {...rest}>{children}</SingleItem>)
  })
)

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
      title: "意傳台文輸入法",
      url: "https://sujiphuat.ithuan.tw/",
      meta: "台語文輸入法",
      children: "Rime是一个伐平台的輸入法框。阮是照這个框的規範，共台語詞庫囥入去、寫台語拍字規則。目前支援Win7、Win10、Mac、linux。"
    },{
      title: "台羅POJ轉換器",
      url: "https://lomaji.ithuan.tw/",
      meta: "台文羅馬字系統轉換",
      children: "台羅轉POJ、POJ轉台羅的家私。接受原件數字調抑是傳統調號，全羅抑漢羅攏通處理。"
    },{
      title: "鬥拍字",
      url: "https://suisiann.ithuan.tw/",
      meta: "拍字電腦唸予你聽",
      children: "輸入台文，電腦同齊產生漢字佮台羅的對照，而且閣會唸予你聽。"
    }];
    return list_to_singleitem(list)
  }

  Hak() {
    let list = [{
      title: "意傳客文輸入法",
      url: "https://sungibfab.ithuan.tw/",
      meta: "意傳客文輸入法",
      children: "用Rime這個跨平台个輸入法框改个，放客話詞庫、客文打字規則。目前支援Windows7-10、Mac、Linux Ubuntu。"
    },];
    return list_to_singleitem(list)
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
          {this.Hak()}
          <SingleItem title="TenSu 𢯭手" url="https://tensu.ithuan.tw/" meta="客語語音學習工具">
            利用客話TTS語音合成AI，電腦讀客話分你聽，學客話。初學者看不懂客語，可以將客語輸入，唸給你聽喲！對教學者而言，只需打一次文案，就可同時得到漢字和拼音。
            </SingleItem>
          </Item.Group>
        </Segment>
        
        <Segment basic size="large">
        <Header as='h2'>族語</Header>
        <Item.Group relaxed>
          <族語合成 名='Lamal' 族語='Pangcah' 漢字='阿美語' />
          <族語合成 名='Hapoy' 族語='SaySiyat' 漢字='賽夏語' />
          <族語合成 名='Sapuz' 族語='Bunun' 漢字='布農語' />
          <族語合成 名='Puniq' 族語='Atayal' 漢字='泰雅語' />
        </Item.Group>
        </Segment>
      </Container>
     );
  }
}

