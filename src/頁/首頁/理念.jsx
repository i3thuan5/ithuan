import React, { Component, PropTypes } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';


class 理念 extends Component {
  render() {
    return (
      <Segment basic className="submasthead stripe slogan" padded='very'>
        <Container text>
          <p>開發各種台灣母語ê資訊專案，予咱台灣ê母語資源閣較phong-phài。</p>
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
