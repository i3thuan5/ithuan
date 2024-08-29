import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import 族語合成 from './族語合成';
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
    let LogoI3Thuan5='https://grants.g0v.tw/uploads/5d147554034c77e3e66bc0706473714e.png';
    return (
      <Container text>
        <Segment basic size="large">
        <Item.Group relaxed>
          <SingleItem title="阿美語萌典（合作專案）" logo={LogoPangcah} url="https://amis.moedict.tw/#:co'ong" meta="阿美語線上辭典"
            >阿美語萌典是群眾協作掃描校對的數位化辭典專案，目前可以查到三部阿美語字典，發音功能由意傳語音技術支援。</SingleItem>
          <族語合成 名='Lamal' 族語='Pangcah' 漢字='阿美語' />
        </Item.Group>
        </Segment>
      </Container>
     );
  }
}

