import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import 族語合成 from './族語合成';
import SingleItem from '../SingleItem'
import LogoPangcah from '../../圖/pangcah.png';


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
      title: "意傳台文輸入法",
      url: "https://sujiphuat.ithuan.tw/",
      meta: "台語文輸入法",
      children: "Rime是一个伐平台的輸入法框。阮是照這个框的規範，共台語詞庫囥入去、寫台語拍字規則。目前支援Win7、Win10、Mac、linux。"
    },{
      title: "台羅POJ轉換器",
      url: "https://xn--m7rr8i4sil03a3tchtsc3hztv.xn--v0qr21b.xn--kpry57d/",
      meta: "台文羅馬字系統轉換",
      children: "台羅轉POJ、POJ轉台羅的家私。接受原件數字調抑是傳統調號，全羅抑漢羅攏通處理。"
    },{
      title: "鬥拍字",
      url: "https://鬥拍字.意傳.台灣/",
      meta: "拍字電腦唸予你聽",
      children: "輸入台文，電腦同齊產生漢字佮台羅的對照，而且閣會唸予你聽。"
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

