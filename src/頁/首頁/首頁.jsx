import React from 'react';
import { Link } from 'react-router';
// import './首頁.css';
// import 標音 from './標音.png';
// import 翻譯 from './翻譯.png';
// import 發音 from './發音.png';
// import 組字 from './組字.png';
import { Container, Segment, Header, Grid, Item, Step, Icon } from 'semantic-ui-react';
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

    <Segment vertical>
        <Header as='h2' textAlign='center'>我們的服務</Header>
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column>
            
              <Step.Group>
                <Step>
                  <Icon name='truck' />
                  <Step.Content>
                    <Step.Title>語音辨識</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>

             <Grid.Column>
              <Step.Group>
                <Step>
                  <Icon name='truck' />
                  <Step.Content>
                    <Step.Title>語音合成</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Step.Group>
                <Step>
                  <Icon name='database' />
                  <Step.Content>
                    <Step.Title>整理語料</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>

             <Grid.Column>
              <Step.Group>
                <Step>
                  <Icon name='text cursor' />
                  <Step.Content>
                    <Step.Title>對齊漢字音標</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    </div>
      );
  }
}
