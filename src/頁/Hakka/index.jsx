import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
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

  Hak() {
    let list = [{
      title: "意傳客文輸入法",
      url: "https://sungibfab.ithuan.tw/",
      meta: "意傳客文輸入法",
      children: "用Rime這個跨平台个輸入法框改个，放客話詞庫、客文打字規則。目前支援Windows7-10、Mac、Linux Ubuntu。"
    },{
      title: "TenSu 𢯭手",
      meta: "客語語音學習工具（已退場，2017-2024）",
      children: "利用客話TTS語音合成AI，電腦讀客話分你聽，學客話。初學者看不懂客語，可以將客語輸入，唸給你聽喲！對教學者而言，只需打一次文案，就可同時得到漢字和拼音。"
    }];
    return list_to_singleitem(list)
  }

  render () {
    return (
      <Container text>
        <Segment basic size="large">
          <Header as='h2'>客家話</Header>
          <Item.Group relaxed>
          {this.Hak()}
          </Item.Group>
        </Segment>
      </Container>
     );
  }
}

