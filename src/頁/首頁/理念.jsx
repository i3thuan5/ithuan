import React, { Component, PropTypes } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';


class 理念 extends Component {
  render() {
    return (
      <Segment basic className="submasthead stripe slogan" padded='very'>
        <Container text>
          <p>市面上雖然很多華語工具，但不一定適用我們的語言；因此我們想藉由各式各樣的台語、客語和族語工具，提供另一種選擇。</p>
          <p>讓研究母語能夠事半功倍，學習母語也可以很「時行」！</p>
        </Container>
        <Segment basic textAlign='center'>
          <Link to="/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88" className="ui medium primary button">
          看全部專案<Icon name="arrow right"/></Link>
        </Segment>
      </Segment>
    );
  }
}

export default 理念;
