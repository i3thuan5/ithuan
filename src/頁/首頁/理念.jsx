import React, { Component, PropTypes } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';


class 理念 extends Component {
  render() {
    return (
      <Segment basic className="submasthead stripe slogan" padded='very'>
        <Container text>
          <p>雖罔市面上有濟濟華語工具，kah咱家己的語言，就親像豬舌搭馬鼻，按怎攏bē合。自按呢阮開發各種台語、客語kah族語工具，予咱台灣ê母語資源閣較phong-phài。</p>
        </Container>
        <Segment basic textAlign='center'>
          <Link to="/sanphin" className="ui medium primary button">
          看全部產品<Icon name="arrow right"/></Link>
        </Segment>
      </Segment>
    );
  }
}

export default 理念;
