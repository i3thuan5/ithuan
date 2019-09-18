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
     <div className="ui segment">
  <div className="ui two column very relaxed grid">
    <div className="column">
      <h4 className="ui right aligned header">
      <p>影音字幕自動化</p>
      <p>文本發音參考</p>
      <p>語料標注系統</p>
      <p>詞頻統計系統</p></h4>
    </div>
    <div className="column">
    <h4 className="ui left aligned header">
      <p>客製化語料庫</p>
      <p>台華雙語對譯</p>
      <p>AI語音合成</p>
      <p>AI語音辨識</p></h4>
    </div>
  </div>
  <div className="ui vertical divider"><i className="handshake outline icon"></i></div>
</div>
  <br></br>
    </Segment>
    );
  }
}

export default 服務;
