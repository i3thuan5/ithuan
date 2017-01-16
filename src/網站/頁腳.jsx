import React, { Component } from 'react';
import { Container, Divider, Grid, Segment } from 'semantic-ui-react';

class 頁腳 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default 頁腳;
