import React, { Component, PropTypes } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';


class 理念 extends Component {
  render() {
    return (
      <Segment basic className="submasthead stripe slogan" padded='very'>
        <Container text>
          <p><i className="large envelope icon"></i>歡迎來批：ithuan@意傳.台灣</p>
          <p><a href="https://www.facebook.com/i3thuan5/" target="_blank"><Icon name='large facebook' />面冊交流：@i3thuan5</a></p>

          
        </Container>
        
      </Segment>
    );
  }
}

export default 理念;
