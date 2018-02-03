import React, { Component } from 'react';
import { Container, Grid, Header, Item, Segment, Step } from 'semantic-ui-react';
import { Link } from 'react-router';

class 服務 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Segment basic className="stripe"> 
      <Container>
      <Header as='h2' textAlign='center'>我們擅長於</Header>
        <Grid stackable centered columns={2}>
            <Grid.Column mobile={16} tablet={6} computer={4} textAlign="right">
              <Step.Group fluid>
                <Step>
                  <Step.Content>
                    <Step.Title><Link to='/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88#su'>客製化語料庫</Link></Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
              <Step.Group fluid>
                <Step>
                  <Step.Content>
                    <Step.Title><Link to='/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88#tau'>詞頻統計系統</Link></Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
              <Step.Group fluid>
                <Step>
                  <Step.Content>
                    <Step.Title><Link to='/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88#ten'>語料標注系統</Link></Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={6} computer={4}>
              <Step.Group fluid>
                <Step>
                  <Step.Content>
                    <Step.Title><Link to='/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88#tau'>語音合成</Link></Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
              <Step.Group fluid>
                <Step>
                  <Step.Content>
                    <Step.Title><Link to='/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88#tau'>語音辨識</Link></Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
              <Step.Group fluid>
                <Step>
                  <Step.Content>
                    <Step.Title><Link to='/%e5%85%a8%e9%83%a8%e5%b0%88%e6%a1%88#sia'>機器翻譯</Link></Step.Title>
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
