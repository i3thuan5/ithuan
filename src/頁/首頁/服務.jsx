import React, { Component } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';

class 服務 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Segment basic className="stripe">
      <Header as='h2' textAlign='center'>阮的服務</Header>
          <Grid container centered stackable>

          <Grid.Column width={5} textAlign="center">
            <Segment>影音字幕自動化</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>文本發音參考</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>語料標注系統</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>詞頻統計系統</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>客製化語料庫</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>台華雙語對譯</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>AI語音合成</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>AI語音辨識</Segment>
          </Grid.Column>
        </Grid>
    </Segment>
    );
  }
}

export default 服務;
