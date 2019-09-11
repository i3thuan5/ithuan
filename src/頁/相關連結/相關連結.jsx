import React from 'react';
import { Container, Divider, Header, List, Segment } from 'semantic-ui-react';
import Debug from 'debug';
var debug = Debug('ithuan:相關連結');

export default class 相關連結 extends React.Component {

  render () {
    return (
      <Container text>
        <Segment basic size="large">
          <p>有誠濟利便的母語線頂資源，工具、辭典在你揀。</p>
        </Segment>
        <Divider/>
        
        <Segment basic size="large">
        <List>
          <List.Item>台語 教學</List.Item>
          <List.Item as='a' href="http://tailo.moe.edu.tw/" target="_blank">臺灣閩南語羅馬字拼音教學網</List.Item>
          <List.Item as='a' href="https://depart.moe.edu.tw/ed2400/cp.aspx?n=C66FA6542738574B&s=C526D22344F1DACE" target="_blank">臺灣閩南語羅馬字拼音方案</List.Item>
          <List.Item as='a' href="https://depart.moe.edu.tw/ed2400/cp.aspx?n=4BF15BC68455979F&s=E811E52AB3BBBB86" target="_blank">教育部閩南語推薦用字</List.Item>
         <List.Item>台語 辭典</List.Item>
         <List.Item as='a' href="https://itaigi.tw/" target="_blank">iTaigi</List.Item>
         <List.Item as='a' href="https://chhoe.taigi.info/" target="_blank">ChhoeTaigi找台語</List.Item>
         <List.Item as='a' href="http://taigi.fhl.net/dict/" target="_blank">台日大辭典</List.Item>
         <List.Item as='a' href="http://taigi.fhl.net/dick/" target="_blank">甘字典</List.Item>
         <List.Item as='a' href="http://twblg.dict.edu.tw/holodict_new/" target="_blank">臺灣閩南語常用詞辭典</List.Item>
         <List.Item as='a' href="https://apps.apple.com/tw/app/chhoetaigi-%E5%8F%B0%E8%AA%9E%E8%BE%AD%E5%85%B8-taigi-dict/id1437125209" target="_blank">ChhoeTaigi 台語辭典(iOS) </List.Item>
         <List.Item>台語 輸入法</List.Item>
         <List.Item as='a' href="http://taigi.fhl.net/TaigiIME/" target="_blank">信望愛台語客語輸入法</List.Item>
         <List.Item as='a' href="https://depart.moe.edu.tw/ed2400/cp.aspx?n=BB47AA61331DDAC8&s=5900082022C17E11" target="_blank">臺灣閩南語漢字輸入法</List.Item>
         <List.Item as='a' href="https://apps.apple.com/tw/app/id1080190324" target="_blank">Lohankha台語輸入法(iOS)</List.Item>
         <List.Item as='a' href="https://apps.apple.com/tw/app/phahtaigi-%E5%8F%B0%E8%AA%9E%E8%BC%B8%E5%85%A5%E6%B3%95/id1455093650" target="_blank">PhahTaigi 台語輸入法(iOS)</List.Item>
         <List.Item as='a' href="https://play.google.com/store/apps/details?id=com.taccotap.phahtaigi&hl=zh_TW" target="_blank">PhahTaigi 台語輸入法(Android)</List.Item>
        </List>
        </Segment>
        
        <Segment basic size="large">
        <List>
          <List.Item>客家話 教學</List.Item>
          <List.Item as='a' href="https://happyhakka.moe.edu.tw/index.php" target="_blank">臺灣客家語拼音學習網</List.Item>
          <List.Item as='a' href="https://depart.moe.edu.tw/ed2400/News_Content.aspx?n=5EB26D97D6A29617&sms=8C59E176B3E3F56E&s=30783F04D0989E57" target="_blank">臺灣客家語羅馬字拼音方案</List.Item>
          <List.Item as='a' href="https://ws.moe.edu.tw/001/Upload/6/RelFile/6507/7824/hakka-words.pdf" target="_blank">臺灣客家語推薦用字一</List.Item>
          <List.Item as='a' href="https://ws.moe.edu.tw/001/Upload/6/RelFile/6507/7823/hakka_words-2nd_all.pdf" target="_blank">臺灣客家語推薦用字二</List.Item>
          <List.Item as='a' href="http://elearning.hakka.gov.tw/" target="_blank">哈客網路學院</List.Item>
          <List.Item>客家話 辭典</List.Item>
          <List.Item as='a' href="http://hakka.dict.edu.tw/hakkadict/" target="_blank">臺灣客家話常用辭典</List.Item>
          <List.Item as='a' href="https://wiki.hakka.gov.tw/ver2018/index.aspx" target="_blank">客語認證詞彙資料庫</List.Item>
          <List.Item>客家話 輸入法</List.Item>

        </List>  
        </Segment>
        
        <Segment basic size="large">
        <List>
          <List.Item>族語</List.Item>
          <List.Item as='a' href="http://tayal.pqwasan.org.tw/kmal/desktop/index.php" target="_blank">賽考利克泰雅語 - 線上辭典</List.Item>
        </List>  
        </Segment>

        <Segment basic size="large">
        <List>
          <List.Item>其他網站</List.Item>
          <List.Item as='a' href="https://www.facebook.com/pages/%E6%88%91%E6%84%9B%E5%B7%A7%E5%AE%9B%E7%84%B6/400765906649247" target="_blank">我愛巧宛然</List.Item>
          <List.Item as='a' href="http:///olddoc.tmu.edu.tw/chiaushin/" target="_blank">台語天地</List.Item>
          <List.Item as='a' href="http://210.240.194.97/taigu.asp" target="_blank">白話字台語文網站</List.Item>
          <List.Item as='a' href="http://hik-u-tw.blogspot.tw/" target="_blank">台語半桶師雜記</List.Item>
        </List>  
        </Segment>
      
        <Segment basic size="large">
            <p>會持續更新網站清單，也歡迎來信和意傳分享！</p>
        </Segment>
      </Container>
    );
  }
}

