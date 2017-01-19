import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Divider, Grid, Menu, Segment } from 'semantic-ui-react';
import Debug from 'debug';
var debug = Debug('ithuan:頁腳');

class 頁腳 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { paths } = this.props;
    return (
      <Segment inverted vertical>
        <Container textAlign="center">
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <p>github</p>
              <p>facebook</p>
            </Grid.Column>
            <Grid.Column>
            <Menu vertical inverted compact>
              <p><Link to={paths.home} className="item fitted">首頁</Link></p>
              <p><Link to={paths.tsooji} className="item fitted" >線上組字</Link></p>
              <p><Link to={paths.kosu} className="item fitted" >閩客故事</Link></p>
              <p><Link to={paths.siongkuan} className="item fitted" >相關連結</Link></p>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          
          <Divider/>
          
          <p>意傳文化科技</p>

        </Container>
      </Segment>
    );
  }
}

export default 頁腳;
