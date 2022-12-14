import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Divider, Grid, Header, Icon, List, Menu, Segment } from 'semantic-ui-react';
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
         <Grid columns={3} divided stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Header inverted as='h4' content='Tsih-tsiap' />
                  <List link inverted>
                    <List.Item as='a'>ithuan@ithuan.tw</List.Item>
                    <List.Item as='a'>04-8358062</List.Item>
                    <List.Item as='a'>510001 員林市，中正路543巷3號</List.Item>
                    <List.Item as='a' 
                        href="https://www.facebook.com/ithuan.tw/"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                      <Icon name='facebook'/>
                      Bīn-tsheh
                    </List.Item>
                    <List.Item as='a' 
                        href="https://github.com/i3thuan5/ithuan/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <Icon name='github'/>
                      Github
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header inverted as='h4' content='Ia̍h-bīn' />
                  <List inverted>
                    <List.Item><Link to={home} className="item fitted">首頁</Link></List.Item>
                    <List.Item><Link to={sanphin} className="item fitted">產品</Link></List.Item>
                    <List.Item><Link to={tsuanan} className="item fitted">合作專案</Link></List.Item>
                    <List.Item><Link to={suisiann} className="item fitted">SuíSiann</Link></List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header inverted as='h4' content='ÌTHUÂN KHOKI' />
                  <p>
                    台語文專業ê資訊公司，專門開發台語AI產品kah資訊服務。Ǹg-bāng透過台語科技產品，hām逐家做陣，tàm數位時代起造多元語言ê科技環境。
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>

         
          <Divider/>
          
          <p style={{"textAlign":"center"}}>ÌTHUÂN KHOKI 意傳科技 © 2021</p>

        </Container>
      </Segment>
    );
  }
}

export default 頁腳;
