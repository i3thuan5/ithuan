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
        <Header as='h2' textAlign='center'>贊助我們</Header>
        <p>這些工具都是團隊們平日抽空，一點一滴累積的成果。不管金額多少，都能幫助加速開發這些工具。也非常歡迎任何建議或是給我們打氣。</p>
        </Container>
      </Segment>
    );
  }
}

export default 贊助;
