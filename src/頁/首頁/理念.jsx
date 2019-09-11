import React, { Component, PropTypes } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';


class 理念 extends Component {
  render() {
    return (
      <Segment basic className="submasthead stripe slogan" padded='very'>
        <Container text>
          <p>雖罔市面上有濟濟華語工具，不一定合咱的語言；就親像豬舌搭馬鼻，按怎攏袂合。自按呢阮來開發各種台語、客語佮族語工具，予台灣的母語資源閣較phong-phài有發展。</p>
          <p>研究母語會事半功倍，學習母語嘛通足「時行」！<i className="large child icon"></i></p>
          
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
