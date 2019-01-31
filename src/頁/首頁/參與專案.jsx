import React, { Component, PropTypes } from 'react';
import { Menu, Container, Card, Segment, Header, Grid, Image, Item, Step, Icon, Divider } from 'semantic-ui-react';
import LogoItaigi from '../../圖/itaigi.svg';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import { Link } from 'react-router';

class 參與專案 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
<Segment basic className="submasthead stripe slogan">
        <Grid container verticalAlign='middle' centered stackable columns={2}>

          <Grid.Row>
            <Grid.Column width={6}>
              <Segment basic>
                <span>即時提供台語發音。</span>
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
                <Image src={LogoItaigi} size='medium' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
</Segment>
<Segment basic className="stripe">
          <Grid container verticalAlign='middle' centered stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={6}>
                <Image src={LogoSu5lui7} size='medium'/>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment basic>
                <span>客製化語料庫，掛載提示校對功能，輸出詞頻報表。</span>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
</Segment>
        <Segment basic textAlign="center">
        <Link to="/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88"
        className="ui massive primary button">
          詳細內容<Icon name="arrow right"/>
        </Link>
        </Segment>

    </div>
    );
  }
}

export default 參與專案;
