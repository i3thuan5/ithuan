import React from 'react';
import { Link } from 'react-router';
// import './首頁.css';
// import 標音 from './標音.png';
// import 翻譯 from './翻譯.png';
// import 發音 from './發音.png';
// import 組字 from './組字.png';
import { Menu, Button, Container, Segment, Header, Grid, Item, Step, Icon, Divider } from 'semantic-ui-react';
export default class 首頁 extends React.Component {

  render () {
    return (
      <div>
      <Segment textAlign='center' inverted vertical>

    <Container>
      <div className="ui large secondary inverted pointing menu">
        <a className="toc item">
          <i className="sidebar icon"></i>
        </a>
        <Link to="/" className="active item">首頁</Link>
        <a className="item">Work</a>
        <a className="item">Company</a>
        <a className="item">Careers</a>
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
            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="right">
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
            
            <Grid.Column mobile={16} tablet={8} computer={5}>
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
      <Grid>
        <Grid.Row>
          
        </Grid.Row>
      </Grid>
      </Segment>

      <Segment vertical>
        <Container text>
        <Header as='h2' textAlign='center'>贊助我們</Header>
        <p>這些工具都是團隊們平日抽空，一點一滴累積的成果。不管金額多少，都能幫助加速開發這些工具。也非常歡迎任何建議或是給我們打氣。</p>
        </Container>
      </Segment>

      <Segment inverted vertical>
          <Container textAlign="center">
          <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
              <p>github</p>
              <p>facebook</p>
            </Grid.Column>
            <Grid.Column>
              <p></p>
            </Grid.Column>
            </Grid.Row>
            </Grid>
            <Divider/>
            <p>意傳文化科技</p>
          </Container>
      </Segment>
    </div>
      );
  }
}
