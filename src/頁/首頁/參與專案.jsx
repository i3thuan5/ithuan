import React, { Component, PropTypes } from 'react';
import { Menu, Container, Card, Segment, Header, Grid, Item, Step, Icon, Divider } from 'semantic-ui-react';
import LogoItaigi from '../../圖/itaigi.svg';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import { Link } from 'react-router';

class 參與專案 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Segment basic className="stripe">
        <Header as='h2' textAlign='center'>參與的專案</Header>
        <Container text>
        <Grid columns={2}>
        <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Card
            href='https://itaigi.tw/'
            target="_blank"
            centered
            image={LogoItaigi}
            header='iTaigi'
            meta='臺語字典'
            description='『這個字怎麼說？』除了查詢，每個人都能上傳新字，評分最棒的念法。'/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
            <Card
            href='http://詞彙分級.意傳.台灣/'
            target="_blank"
            centered
            image={LogoSu5lui7}
            header='詞彙分級'
            meta='中教大臺語文系的合作網站'
            description='人工編輯音標和漢字後，就由程式自動斷詞對齊漢字和音標'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>

        <Segment basic textAlign="center">
        <Link to="/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88"
        className="ui massive primary button">
          全部專案<Icon name="arrow right"/>
        </Link>
        </Segment>
      </Segment>
    );
  }
}

export default 參與專案;
