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
        <Header as='h1' inverted>意傳願景</Header>
        <p>Kā語言學習者kah語言工作者tàu-sann-kāng，hōo咱有法度kah厝內、社會bô-kâng族群交流。</p>
        </Container>
      </Segment>
    );
  }
}
