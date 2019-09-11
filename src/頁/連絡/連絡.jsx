import React, { Component, PropTypes } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';


class 理念 extends Component {
  render() {
    return (
      <Segment basic className="submasthead stripe slogan" padded='very'>
        <Container text>
          <p>歡迎來批: ithuan@意傳.台灣</p>
          <i className="tty icon"></i>
          <i className="massive tty icon"></i>
        </Container>
        
      </Segment>
    );
  }
}

export default 理念;
