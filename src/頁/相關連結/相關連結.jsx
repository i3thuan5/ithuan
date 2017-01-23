import React from 'react';
import { Container, Divider, Header, List, Segment } from 'semantic-ui-react';
import Debug from 'debug';
var debug = Debug('ithuan:相關連結');

export default class 相關連結 extends React.Component {

  render () {
    return (
      <Container text>
        <Segment basic padded>
          <p>一直都有很多團隊努力提供閩南語、客語的學習資源，在此部份推薦</p>
        </Segment>
        <Divider/>
        
        <Segment basic>
        <List>
          <List.Item>閩南語</List.Item>
          <List.Item as='a' href="http://twblg.dict.edu.tw/holodict_new/" target="_blank">臺灣閩南語常用詞辭典</List.Item>
          <List.Item as='a' href="http://www.edu.tw/FileUpload/3677-15601/Documents/tshiutsheh.pdf" target="_blank">臺灣閩南語羅馬字拼音方案使用手冊</List.Item>
          <List.Item as='a' href="https://bitbucket.org/pcchen/nan" target="_blank">信望愛台語語料庫</List.Item>
        </List>
        </Segment>
        
        <Segment basic>
        <List>
          <List.Item>客家話</List.Item>
          <List.Item as='a' href="http://www.edu.tw/FileUpload/3653-15592/Documents/hakka_pinyin3.pdf" target="_blank">臺灣客家語羅馬字拼音方案使用手冊</List.Item>
          <List.Item as='a' href="http://elearning.hakka.gov.tw/" target="_blank">哈客網路學院</List.Item>
          <List.Item as='a' href="http://hakka.dict.edu.tw/hakkadict/" target="_blank">臺灣客家話常用辭典</List.Item>
        </List>  
        </Segment>
        
        <Segment basic>
        <List>
          <List.Item>漢語相關</List.Item>
          <List.Item as='a' href="http://xiaoxue.iis.sinica.edu.tw/ccr/" target="_blank">漢字古今音資料庫</List.Item>
        </List>  
        </Segment>

        <Segment basic>
        <List>
          <List.Item>其他網站</List.Item>
          <List.Item as='a' href="https://www.facebook.com/pages/%E6%88%91%E6%84%9B%E5%B7%A7%E5%AE%9B%E7%84%B6/400765906649247" target="_blank">我愛巧宛然</List.Item>
          <List.Item as='a' href="http:///olddoc.tmu.edu.tw/chiaushin/" target="_blank">台語天地</List.Item>
          <List.Item as='a' href="http://210.240.194.97/taigu.asp" target="_blank">白話字台語文網站</List.Item>
          <List.Item as='a' href="http://hik-u-tw.blogspot.tw/" target="_blank">台語半桶師雜記</List.Item>
        </List>  
        </Segment>

        <Segment basic>
            <p>會持續更新網站清單，也歡迎來信和意傳分享！</p>
        </Segment>
      </Container>
    );
  }
}

