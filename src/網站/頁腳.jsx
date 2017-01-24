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
    const { home, tsuanan, kosu, siongkuan } = paths;

    return (
      <Segment inverted vertical>
        <Container textAlign="center">
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
             <Menu vertical inverted compact>
              <p><a className="item" href="https://github.com/i3thuan5/i3thuan5" target="_blank">github</a></p>
              <p><a className="item" href="https://www.facebook.com/i3thuan5/" target="_blank">facebook</a></p>
              </Menu>
            </Grid.Column>
            <Grid.Column>
            <Menu vertical inverted compact>
              <p><Link to={home} className="item fitted">首頁</Link></p>
              <p><Link to={tsuanan} className="item fitted">全部專案</Link></p>
              <p><Link to={kosu} className="item fitted">閩客故事</Link></p>
              <p><Link to={siongkuan} className="item fitted">相關連結</Link></p>
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
