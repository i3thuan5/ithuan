import React, { Component } from 'react';
import { Container, Header, Image, Segment } from 'semantic-ui-react';
import favicon from '../../../favicons/android-chrome-192x192.png';

export default class 大看板 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment textAlign='center' inverted vertical className='masthead'>
        <Container text>
        <Image centered src={favicon} size="mini" hidden/>
        <Header as='h1' inverted>ÌTHUÂN KHOKI</Header>
        <Header as='h6' inverted>用科技 sak 台灣母語</Header>
        </Container>
      </Segment>
    );
  }
}
