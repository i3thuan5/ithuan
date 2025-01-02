import React, { Component } from 'react';
import { Segment, Header, Grid, Image, Icon, List } from 'semantic-ui-react';
import LogoTiA from '../../圖/line.png';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import { Link } from 'react-router';

class 參與專案 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Segment basic className="submasthead stripe slogan">

        <Grid container centered stackable verticalAlign='middle'>
          <Grid.Column width={6}>
            <Segment basic>
              <Header>台語語音LineAI</Header>
              <p>隨時唸予你聽</p>
              <List>
                <List.Item>語音合成TTS</List.Item>
                <List.Item>語音辨識ASR</List.Item>
                <List.Item>華台翻譯MT</List.Item>
                <List.Item>台語漢字羅馬字對照</List.Item>
              </List>
              <a href="https://lin.ee/5KFLGwW">
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
                  alt="加入好友" height="36" border="0"/>
              </a>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment basic><Image src={LogoTiA} size='medium'/></Segment>
          </Grid.Column>
        </Grid>

      </Segment>

      <Segment basic className="stripe">
          <Grid container centered stackable verticalAlign='middle'>
            <Grid.Column width={6}>
              <Segment basic>
                <Header>客製化語料庫</Header>
                <p>阮有濟款協助校對的工具，比如掠文本錯誤所在、顯示字詞收錄狀況、輸出詞頻統計報表。</p>
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment basic><Image src={LogoSu5lui7} size='medium'/></Segment>
            </Grid.Column>
          </Grid>
      </Segment>
    </div>
    );
  }
}

export default 參與專案;
