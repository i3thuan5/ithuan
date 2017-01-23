import React from 'react';
import { Container, Segment, List } from 'semantic-ui-react';

export default class 全部專案 extends React.Component {

  render () {
    return (
      <Container text>
        <Segment basic padded>
          <List>
            <List.Item>參與的專案</List.Item>
            <List.Item as='a' href="http://itaigi.tw" target="_blank">itaigi</List.Item>
            <List.Item as='a' href="http://寫啥物.意傳.台灣/" target="_blank">寫啥物</List.Item>
          </List>
          
          <List>
            <List.Item>函式庫</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_kang1-ku7'>臺灣言語工具</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_tsu1-liau7-khoo3'>臺灣言語資料庫</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5'>臺灣言語平臺</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7'>臺灣言語服務</List.Item>
          </List>
        </Segment>
      </Container>
     );
  }
}

