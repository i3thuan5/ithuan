import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Segment, Menu, Icon, Header } from 'semantic-ui-react';

class 頁首 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment id="appNav" textAlign='center' inverted vertical>
        <Container>
          <Menu secondary inverted size="large" pointing>
            <Link to="/" className="active item">首頁</Link>
            <Link to="/%E7%B7%9A%E4%B8%8A%E7%B5%84%E5%AD%97" className="item">線上組字</Link>
            <Link to="/%E9%96%A9%E5%AE%A2%E6%95%85%E4%BA%8B" className="item">閩客故事</Link>
            <Link to="/%E7%9B%B8%E9%97%9C%E9%80%A3%E7%B5%90" className="item">相關連結</Link>
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default 頁首;
