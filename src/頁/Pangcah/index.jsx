import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import SingleItem from '../SingleItem'
import LogoPangcah from '../../圖/pangcah.png'


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

