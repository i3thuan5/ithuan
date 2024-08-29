import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import SingleItem from '../SingleItem'
import LogoPangcah from '../../圖/pangcah.png'
import LogoMisanoPangcah from './icon_180x180.png'


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
  
  render () {
    return (
      <Container text>
        <Segment basic size="large">
        <Item.Group relaxed>
          <SingleItem title=" MisanoPangcah/'Amis" logo={ LogoMisanoPangcah } url="https://apps.apple.com/tw/app/misanopangcah-amis/id6450070292" meta="阿美語口說練習"
            >MisanoPangcah/‘Amis app是一個阿美語跟讀練習app，聽一遍例句發音後，再跟著唸一遍，語音辨識結果可以讓你馬上知道哪裡唸得與例句不同，並且為你的發音評分。（本計畫感謝文化部語言友善環境及創作應用與推廣補助）</SingleItem>
          <SingleItem title="阿美語萌典" logo={LogoPangcah} url="https://amis.moedict.tw/#:co'ong" meta="阿美語線上辭典"
            >阿美語萌典是群眾協作掃描校對的數位化辭典專案，目前可以查到三部阿美語字典。（合作專案，發音功能由意傳語音技術支援）</SingleItem>
          <Item id='lamal'>
            <Item.Content>
              <Item.Header >Lamal - 族語之火</Item.Header>
              <Item.Meta>Pangcah阿美語發音</Item.Meta>
              <Item.Description>
                輸入阿美語，電腦會唸給你聽。（已退場，2017-2024）
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        </Segment>
      </Container>
     );
  }
}

