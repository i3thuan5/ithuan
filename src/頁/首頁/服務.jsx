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
      <Header as='h2' textAlign='center'>阮的事工</Header>

        <Grid container centered stackable>

          <Grid.Column width={5} textAlign="center">
            <Segment>自動產生台語字幕</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>劇本台語發音參考</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>語料標注系統</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>客製化語料庫</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>詞頻統計系統</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>華台翻譯</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>語音合成</Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment>語音辨識</Segment>
          </Grid.Column>
        </Grid>

    </Segment>
    );
  }
}

export default 服務;
