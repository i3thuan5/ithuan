import React, { Component } from 'react';
import { Container, Grid, Header, Item, Icon, Segment, Step } from 'semantic-ui-react';

class 服務 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Segment basic className="stripe"> 
      <Container>
      <Header as='h2' textAlign='center'>我們的服務</Header>
        <Grid stackable centered columns={2}>
            <Grid.Column mobile={16} tablet={6} computer={4} textAlign="right">
              <Step.Group fluid>
                <Step>
                  <Icon name='trophy' />
                  <Step.Content>
                    <Step.Title>語音辨識</Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
              <Step.Group fluid>
                <Step>
                  <Icon name='trophy' />
                  <Step.Content>
                    <Step.Title>語音合成</Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={6} computer={4}>
              <Step.Group fluid>
                <Step>
                  <Icon name='trophy' />
                  <Step.Content>
                    <Step.Title>語料庫分析</Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
              <Step.Group fluid>
                <Step>
                  <Icon name='trophy' />
                  <Step.Content>
                    <Step.Title>斷詞標音</Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
        </Grid>
      </Container>
    </Segment>
    );
  }
}

export default 服務;
