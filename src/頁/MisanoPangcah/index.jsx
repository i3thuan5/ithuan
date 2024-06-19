import React from 'react';
import { Container, Item, Header, Segment } from 'semantic-ui-react';

export default class 隱私權保護政策 extends React.Component {

componentDidMount() {
    this.jumpToHash();
  }
  componentDidUpdate() {
    this.jumpToHash();
  }
  jumpToHash  ()  {
    const {hash} = window.location;
    if (hash) {
      let element=  document.getElementById(hash.substr(1));
      setTimeout(() => {
        if (element) element.scrollIntoView();
      })
    }
  }

  render () {
    
    return (
      <Container text>
        <Segment basic size="large">
          <Header as='h1'>隱私權保護政策</Header>
          <p>更新日期：2024.6.19</p>
          <Item.Group relaxed>

<section style={{"marginBottom": "2rem"}}>
<p>意傳（下稱本公司）非常重視您的隱私權，為了協助您清楚MisanoPangcah/’Amis（下稱本app）如何蒐集、應用及保護您所提供的個人資料，請您詳細閱讀本app隱私權保護政策。</p>
</section>


          </Item.Group>
<nav aria-labelledby="iahsikin" className="ui message">
  <h2 id="iahsikin" className="header">頁面索引</h2>
  <ul>
    <li><a href="#huanui">一、隱私權保護政策的適用範圍</a></li>
    <li><a href="#boktik">二、個人資料的蒐集、目的以及使用方式</a></li>
    <li><a href="#suiong">三、個人資料使用期間與地區</a></li>
    <li><a href="#hongsik">四、個人資料權利行使方式</a></li>
    <li><a href="#liankiat">五、網站對外的相關連結</a></li>
    <li><a href="#hunhiong">六、個人資料分享之政策</a></li>
    <li><a href="#pohoo">七、資料之保護</a></li>
    <li><a href="#siutsing">八、隱私權保護政策之修正</a></li>
  </ul>
</nav>

<section style={{"marginBottom": "2rem"}}>
<h2 id="tsingtshik">一、隱私權保護政策的適用範圍</h2>
<p>本隱私權保護政策適用於您在使用本app及其相關服務過程中，涉及個人資料蒐集、處理、利用與保護之相關作法。</p>
<p>本隱私權保護政策不適用於本app以外的相關連結網站，也不適用於本公司的人員。</p>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="boktik">二、個人資料的蒐集、目的以及使用方式</h2>
<p></p>
<p></p>
<p></p>
<p></p>
<ol>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="suiong">三、個人資料使用期間與地區</h2>
<p></p>
<p></p>
<p></p>
<p></p>
<ol>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="hongsik">四、個人資料權利行使方式</h2>
<p></p>
<p></p>
<p></p>
<p></p>
<ol>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="liankiat">五、網站對外的相關連結</h2>
<p></p>
<p></p>
<p></p>
<p></p>
<ol>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="hunhiong">六、個人資料分享之政策</h2>
<p></p>
<p></p>
<p></p>
<p></p>
<ol>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="pohoo">七、資料之保護</h2>
<p></p>
<p></p>
<p></p>
<p></p>
<ol>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="siutsing">八、隱私權保護政策之修正</h2>
<p></p>
<p></p>
<p></p>
<p></p>
<ol>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>
</section>


          </Segment>
      </Container>
     );
  }
}

