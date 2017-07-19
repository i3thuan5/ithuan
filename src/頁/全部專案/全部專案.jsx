import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import LogoItaigi from '../../圖/itaigi.svg';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import LogoSia2 from '../../圖/sia2.png';
import LogoTsoo2 from '../../圖/tsoo2ji7.svg';
import LogoTau3 from '../../圖/tau3.png';

export default class 全部專案 extends React.Component {

  render () {
    let LogoI3Thuan5='https://grants.g0v.tw/uploads/5d147554034c77e3e66bc0706473714e.png';
    return (
      <Container text>
        <Segment basic size="large">
        <Item.Group relaxed>

          <Item>
            <Item.Image size='tiny' src={LogoItaigi} />
            <Item.Content>
              <Item.Header as='a' href="https://itaigi.tw/" target="_blank">iTaigi</Item.Header>
              <Item.Meta>台語大眾字典</Item.Meta>
              <Item.Description>
想知道一個詞的台語怎麼說，來這裡查就對了！也可以上傳自己發明台語的講法喲！
<br/>
網站特色：
1. 語音合成功能，唸台語給你聽
2. 單頁式設計，瀏覽更順暢
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoSu5lui7} />
            <Item.Content>
              <Item.Header as='a' href="https://詞彙分級.意傳.台灣/" target="_blank">詞彙分級</Item.Header>
              <Item.Meta>教育部委託中教大台語系的研究專案</Item.Meta>
              <Item.Description>
收集台語現有的文章，統計詞頻，決定台語詞彙的難易度，做後續認證考試、教材編輯的依據。
<br/>
網站提供：
1. 自動偵測錯誤，大幅提升語料庫品質
2. 即時計算詞頻、使用度等語言學數據
3. 方言差管理
4. 搜尋功能，以利語用學研究
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoTau3} />
            <Item.Content>
              <Item.Header as='a' href="https://鬥拍字.意傳.台灣/" target="_blank">鬥拍字</Item.Header>
              <Item.Meta>台語學習工具</Item.Meta>
              <Item.Description>
                初學者看不懂台文，可以將台文輸入，可以唸給你聽喲！
                對老師而言，只需要打一次文案，就可以同時得到漢字和台羅喲！
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoSia2} />
            <Item.Content>
              <Item.Header as='a' href="https://寫啥物.意傳.台灣/" target="_blank">寫啥物</Item.Header>
              <Item.Meta>台語翻譯工具</Item.Meta>
              <Item.Description>
                輸入華語，告訴你台語怎麼念！
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoI3Thuan5} />
            <Item.Content>
              <Item.Header as='a' href="https://grants.g0v.tw/projects/5875bd8becdcf3001eb6bbb7" target="_blank">臺灣媠聲</Item.Header>
              <Item.Meta>台語語音合成研究專案</Item.Meta>
              <Item.Description>
                讓語音合成的聲音，能更正確，更自然，幫助臺語學習的效果。
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoI3Thuan5} />
            <Item.Content>
              <Item.Header as='a' href="https://鉸刀.意傳.台灣" target="_blank">鉸刀</Item.Header>
              <Item.Meta>台語切音工具</Item.Meta>
              <Item.Description>
                輸入音檔佮聽拍的結果，由程式切做一段一段的音檔
              </Item.Description>
            </Item.Content>
          </Item>

        </Item.Group>
        </Segment>

        <Segment basic size="large">
        <Header as='h3'>族語</Header>
        <Item.Group relaxed>
          <Item>
            <Item.Image size='tiny' src={LogoI3Thuan5} />
            <Item.Content>
              <Item.Header as='a' href="https://lamal.意傳.台灣/" target="_blank">Lamal - 族語之火</Item.Header>
              <Item.Meta>Pangcah阿美語發音</Item.Meta>
              <Item.Description>
                輸入Pangcah，電腦會唸給你聽喲！
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        </Segment>

        <Segment basic size="large">
        <Header as='h3'>客語</Header>
        <Item.Group relaxed>
          <Item>
            <Item.Image size='tiny' src={LogoI3Thuan5} />
            <Item.Content>
              <Item.Header as='a' href="https://𢯭手.意傳.台灣/" target="_blank">𢯭手</Item.Header>
              <Item.Meta>客語學習工具</Item.Meta>
              <Item.Description>
                初學者看不懂客語，可以將客語輸入，可以唸給你聽喲！
                對老師而言，只需要打一次文案，就可以同時得到漢字和拼音喲！
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={LogoI3Thuan5} />
            <Item.Content>
              <Item.Header as='a' href="https://用.意傳.台灣/講/" target="_blank">用.意傳</Item.Header>
              <Item.Meta>講客話</Item.Meta>
              <Item.Description>
                輸入華語，告訴你客語怎麼念！
              </Item.Description>
            </Item.Content>
          </Item>

        </Item.Group>
        </Segment>

        <Segment basic size="large">
        <Header as='h3'>字體</Header>
        <Item.Group relaxed>        
          <Item>
            <Item.Image size='tiny' src={LogoTsoo2} />
            <Item.Content>
              <Item.Header as='a' href="https://組字.意傳.台灣/" target="_blank">組字</Item.Header>
              <Item.Meta>自己的母語字自己組</Item.Meta>
              <Item.Description>
                自己的母語字自己組
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        </Segment>

        <Segment basic size="large">
          <Header as='h3'><Icon name="github"/>函式庫</Header>
          <List>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_kang1-ku7' target="_blank">台灣言語工具</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_tsu1-liau7-khoo3' target="_blank">台灣言語資料庫</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5' target="_blank">台灣言語平台</List.Item>
            <List.Item as='a' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7' target="_blank">台灣言語服務</List.Item>
          </List>
        </Segment>
      </Container>
     );
  }
}

