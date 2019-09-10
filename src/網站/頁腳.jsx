import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Divider, Grid, Icon, Menu, Segment } from 'semantic-ui-react';
import Debug from 'debug';
var debug = Debug('ithuan:頁腳');

class 頁腳 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { paths } = this.props;
    const { home, tsuanan, kosu, siongkuan } = paths;

    return (
      <Segment inverted vertical>
        <Container textAlign="center">
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
             <Menu vertical inverted compact>
              <p><a className="item" href="https://www.facebook.com/i3thuan5/" target="_blank"><Icon name='facebook' />facebook</a></p>
              <p><a className="item" href="https://github.com/i3thuan5/i3thuan5" target="_blank"><Icon name='github' />github</a></p>
              </Menu>
            </Grid.Column>
            <Grid.Column>
            <Menu vertical inverted compact>
              <p><Link to={home} className="item fitted">首頁</Link></p>
              <p><Link to={tsuanan} className="item fitted">專案開發</Link></p>
              <p><Link to={siongkuan} className="item fitted">資源連結</Link></p>
              <p>連絡交流</p>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          
          <Divider/>
          
          <p>意傳科技</p>

        </Container>
      </Segment>
    );
  }
}

export default 頁腳;
