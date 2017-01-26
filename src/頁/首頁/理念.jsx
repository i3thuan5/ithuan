import React, { Component, PropTypes } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

class 理念 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment basic className="stripe slogan">
        <Container text>
        <Header as='h2' textAlign='center'>用程式推廣母語！</Header>
        <p>市面上很多提供中文工具和客製化中文網站，但不一定適用全部的語言，我們希望為母語使用者和對母語有熱忱的人提供另一選擇</p>
        </Container>
      </Segment>
    );
  }
}

export default 理念;
