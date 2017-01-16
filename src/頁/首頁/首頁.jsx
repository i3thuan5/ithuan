import React from 'react';
import { Link } from 'react-router';
import { Menu, Button, Container, Card, Segment, Header, Grid, Item, Step, Icon, Divider } from 'semantic-ui-react';
import LogoItaigi from './itaigi.svg';
import LogoSu5lui7 from './su5lui7_hun1kip4.png';

// import './首頁.css';
// import 標音 from './標音.png';
// import 翻譯 from './翻譯.png';
// import 發音 from './發音.png';
// import 組字 from './組字.png';

export default class 首頁 extends React.Component {

  render () {
    return (
      <div>
      <Segment textAlign='center' inverted vertical>

    <Container id="appNav">
      <div className="ui large secondary inverted pointing menu">
        <Link to="/" className="active item">首頁</Link>
        <Link to="/%E7%B7%9A%E4%B8%8A%E7%B5%84%E5%AD%97" className="item">線上組字</Link>
        <Link to="/%E9%96%A9%E5%AE%A2%E6%95%85%E4%BA%8B" className="item">閩客故事</Link>
        <Link to="/%E7%9B%B8%E9%97%9C%E9%80%A3%E7%B5%90" className="item">相關連結</Link>
      </div>
    </Container>

    <Container text>
      <Header as='h1' inverted>意傳文化科技</Header>
      <Header as='h2' inverted>Do whatever you want when you want to.</Header>
      <div className="ui huge primary button">了解意傳 <i className="right arrow icon"></i></div>
    </Container>
  </Segment>

    <Segment basic> 
    <Container>
    <Header as='h2' textAlign='center'>我們的服務</Header>
        <Grid stackable centered columns={2}>
            <Grid.Column mobile={16} tablet={8} computer={6} textAlign="right">
              <Step.Group fluid>
                <Step>
                  <Icon name='truck' />
                  <Step.Content>
                    <Step.Title>語音辨識</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
              <Step.Group fluid>
                <Step>
                  <Icon name='truck' />
                  <Step.Content>
                    <Step.Title>語音合成</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={8} computer={6}>
              <Step.Group fluid>
                <Step>
                  <Icon name='truck' />
                  <Step.Content>
                    <Step.Title>整理語料</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
              <Step.Group fluid>
                <Step>
                  <Icon name='truck' />
                  <Step.Content>
                    <Step.Title>對齊漢字音標</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
        </Grid>
    </Container>
    </Segment>

 
      <Segment vertical>
        <Container text>
        <Header as='h2' textAlign='center'>用程式推廣母語！</Header>
        <p>市面上很多提供中文工具和客製化中文網站，但不一定適用全部的語言，我們希望為母語使用者和對母語有熱忱的人提供另一選擇</p>
        </Container>
      </Segment>

      <Segment vertical>
        <Header as='h2' textAlign='center'>參與的專案</Header>
        <Container text>
        <Grid columns={2}>
        <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Card
          centered
            image={LogoItaigi}
            header='Itaigi'
            meta='臺語字典'
            description='『這個字怎麼說？』除了查詢，每個人都能上傳新字，評分最棒的念法。'/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
            <Card
            centered
            image={LogoSu5lui7}
            header='詞彙分級'
            meta='中教大臺語文系的合作網站'
            description='人工編輯音標和漢字後，就由程式自動斷詞對齊漢字和音標'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
      </Segment>

      <Segment vertical>
        <Container text>
        <Header as='h2' textAlign='center'>贊助我們</Header>
        <p>這些工具都是團隊們平日抽空，一點一滴累積的成果。不管金額多少，都能幫助加速開發這些工具。也非常歡迎任何建議或是給我們打氣。</p>
        </Container>
      </Segment>

    </div>
      );
  }
}
