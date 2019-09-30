import React, { Component, PropTypes } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';


class 理念 extends Component {
  render() {
    return (
      <Segment basic className="submasthead stripe slogan" padded='very'>
        <Container text>
          <br></br><br></br>
          <p><i className="large envelope icon"></i>歡迎來批：ithuan@ithuan.tw</p>
          <br></br>
          <p><a href="https://www.facebook.com/ithuan.tw/" target="_blank"><Icon name='large facebook' />面冊交流：@ithuan.tw</a></p>
          <br></br><br></br>

        </Container>
        
      </Segment>
    );
  }
}

export default 理念;
