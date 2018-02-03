import React, { Component, PropTypes } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

class 理念 extends Component {
  render() {
    return (
      <Segment basic className="stripe slogan">
        <Container text>
        <Header as='h2' textAlign='center'>逆風高飛吧！</Header>
        <p>市面上雖然很多華語工具，但不一定適用我們的語言，我們想藉由開發台語、客語和族語各式各樣的開源工具，提供另一種選擇。</p>
        <p>讓研究母語的人可以事半功倍，學習母語也可以很「時行」！</p>
        </Container>
      </Segment>
    );
  }
}

export default 理念;
