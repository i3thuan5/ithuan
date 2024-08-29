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

  render () {
    return (
      <Container text>
        <Segment basic size="large">
        <Item.Group relaxed>
        <SingleItem title="Kaxabu Muwalak Misa A Ahan Bizu" url="https://kaxabu.ithuan.tw/" meta="噶哈巫語分類辭典"
          >這个網站是電子版ê噶哈巫語分類辭典，網站是MIT開源授權。多謝潘永歷baba同意，規本辭典電子資料用CC BY-NC-SA公開出來。網站頂有完整辭典資料kah程式連結。（合作專案，意傳提供網站服務，2015-）</SingleItem>
        </Item.Group>
        </Segment>
      </Container>
     );
  }
}

