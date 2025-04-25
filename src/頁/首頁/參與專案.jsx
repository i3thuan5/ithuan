import React, { Component } from 'react';
import { Segment, Header, Grid, Image, Icon, List } from 'semantic-ui-react';
import LogoTiA from '../../圖/line.png';
import LogoTshuTsiauA from '../../圖/tshutsiaua_tshing.png'
import LogoStore from '../../圖/app-store-badge.png'
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
              <Header>厝鳥仔講台語</Header>
              <p>真人發音互動學習，開喙講台語無問題！</p>
              <p>想講一口流利又親切的台語嗎？「厝鳥仔講台語」App 為你量身打造！這是一款專為台語學習者設計的口說練習應用程式，透過道地真人發音跟讀和即時語音回饋，幫助你掌握正確的台語發音，講出自然的語調，不再害怕開口說台語！</p>
              <a href="https://apps.apple.com/tw/app/id6743581200">
                <img src={LogoStore}
                  alt="加入好友" height="36" border="0"/>
              </a>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment basic><Image src={LogoTshuTsiauA} size='medium'/></Segment>
          </Grid.Column>
        </Grid>

      </Segment>

      <Segment basic className="stripe">
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
    </div>
    );
  }
}

export default 參與專案;
