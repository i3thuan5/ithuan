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
    const { home, sanphin, tsuanan, suisiann, siongkuan, lianlok } = paths;

    return (
      <Segment inverted vertical>
        <Container>
        <Grid columns={4} stackable>
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column>
             <Menu vertical inverted compact>
              <p><Icon name='mail'/>ithuan@ithuan.tw</p>
              <p><Icon name='phone'/>04-8358062</p>
              <p><a className="item" href="https://www.facebook.com/ithuan.tw/" target="_blank" rel="noopener noreferrer"><Icon name='facebook' />Facebook</a></p>
              <p><a className="item" href="https://github.com/i3thuan5/i3thuan5" target="_blank" rel="noopener noreferrer"><Icon name='github' />Github</a></p>
              </Menu>
            </Grid.Column>
            <Grid.Column>
            <Menu vertical inverted compact>
              <p><Link to={home} className="item fitted">首頁</Link></p>
              <p><Link to={sanphin} className="item fitted">產品</Link></p>
              <p><Link to={tsuanan} className="item fitted">專案</Link></p>
              <p><Link to={suisiann} className="item fitted">SuíSiann</Link></p>
              <p><Link to={siongkuan} className="item fitted">資源</Link></p>
              </Menu>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
          </Grid>
          
          <Divider/>
          
          <p>ÌTHUÂN KHOKI 意傳科技 © 2020</p>

        </Container>
      </Segment>
    );
  }
}

export default 頁腳;
