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
        <Header as='h2' textAlign='center'>參與專案</Header>
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
            meta='臺語大眾字典'
            description='想知道一個詞的台語怎麼說，來這裡查就對了！也可以上傳自己發明台語的講法喲！'/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
            <Card
            href='http://詞彙分級.意傳.台灣/'
            target="_blank"
            centered
            image={LogoSu5lui7}
            header='詞彙分級'
            meta='教育部委託中教大台語系的研究專案'
            description='收集台語現有的文章，統計詞頻，決定台語詞彙的難易度，做後續認證考試、教材編輯的依據。'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>

        <Segment basic textAlign="center">
        <Link to="/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88"
        className="ui massive primary button">
          詳細內容<Icon name="arrow right"/>
        </Link>
        </Segment>
      </Segment>
    );
  }
}

export default 參與專案;
