import React, { Component } from 'react';
import { Container, Header, Image, Segment } from 'semantic-ui-react';
import favicon from '../../../favicons/android-chrome-192x192.png';

export default class 大看板 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment textAlign='' inverted vertical className='masthead'>
        <Container text>
        <Image centered src={favicon} size="mini" hidden/>
        <Header as='h1' inverted>意傳願景：用語言相交流溫暖</Header>
        <p>Kā 20～50歲想欲感受語言溫暖情境 ê 人 kah 語言工作者 tàu-sann-kāng，hōo 人有法度去交流厝內、社會 bô-kâng 族群 ê 溫暖。</p>
        </Container>
      </Segment>
    );
  }
}
