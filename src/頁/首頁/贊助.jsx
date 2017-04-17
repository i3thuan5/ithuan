import React, { Component, PropTypes } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

class 贊助 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment vertical className="stripe">
        <Container text>
        <Header as='h2' textAlign='center'>支持我們</Header>
        <p>這些開源工具都是團隊們平日抽空，一點一滴累積的成果。如果需要客製化或有任何的建議，歡迎和我們聯絡。</p>
        </Container>
      </Segment>
    );
  }
}

export default 贊助;
