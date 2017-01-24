import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import LogoItaigi from '../../圖/itaigi.svg';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import LogoSia2 from '../../圖/sia2.png';
import LogoTsoo2 from '../../圖/tsoo2ji7.svg';
import LogoTau3 from '../../圖/tau3.png';

export default class 全部專案 extends React.Component {

  render () {
    return (
      <Container text>
        <Segment basic size="large">
        <Item.Group relaxed>
        
          <Item>
            <Item.Image size='tiny' src={LogoTsoo2} />
            <Item.Content>
              <Item.Header as='a' href="http://組字.意傳.台灣/" target="_blank">組字</Item.Header>
              <Item.Meta>自己的母語字自己組</Item.Meta>
              <Item.Description>
                自己的母語字自己組
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoItaigi} />
            <Item.Content>
              <Item.Header as='a' href="https://itaigi.tw/" target="_blank">Itaigi</Item.Header>
              <Item.Meta>臺語字典</Item.Meta>
              <Item.Description>
                『這個字怎麼說？』除了查詢，每個人都能上傳新字，評分最棒的念法。
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoSu5lui7} />
            <Item.Content>
              <Item.Header as='a' href="http://詞彙分級.意傳.台灣/" target="_blank">詞彙分級</Item.Header>
              <Item.Meta>中教大臺語文系的合作網站</Item.Meta>
              <Item.Description>
                人工編輯音標和漢字後，就由程式自動斷詞對齊漢字和音標
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoSia2} />
            <Item.Content>
              <Item.Header as='a' href="http://寫啥物.意傳.台灣/" target="_blank">寫啥物</Item.Header>
              <Item.Meta>寫啥物</Item.Meta>
              <Item.Description>
                翻譯並且告訴你怎念！
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoTau3} />
            <Item.Content>
              <Item.Header as='a' href="http://鬥拍字.意傳.台灣/" target="_blank">鬥拍字</Item.Header>
              <Item.Meta>鬥拍字</Item.Meta>
              <Item.Description>
                鬥拍字
              </Item.Description>
            </Item.Content>
          </Item>

        </Item.Group>
        </Segment>  

        <Segment basic size="large">
        <Header as='h3'>客語</Header>
        <Item.Group relaxed>
          <Item>
            <Item.Image size='tiny' src={LogoSia2} />
            <Item.Content>
              <Item.Header as='a' href="https://用.意傳.台灣/講/" target="_blank">用.意傳</Item.Header>
              <Item.Meta>客語線上語音</Item.Meta>
              <Item.Description>
                客語的『寫啥物』
              </Item.Description>
            </Item.Content>
          </Item>

        </Item.Group>
        </Segment>  

        <Segment basic size="large">
          <Header as='h3'><Icon name="github"/>函式庫</Header>
          <List>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_kang1-ku7' target="_blank">臺灣言語工具</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_tsu1-liau7-khoo3' target="_blank">臺灣言語資料庫</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5' target="_blank">臺灣言語平臺</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7' target="_blank">臺灣言語服務</List.Item>
          </List>
        </Segment>
      </Container>
     );
  }
}

