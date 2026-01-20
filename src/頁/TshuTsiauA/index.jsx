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
          <Header as='h1'>厝鳥仔講台語隱私權保護政策</Header>
          <p>更新日期：2025.4.18</p>
          <Item.Group relaxed>

<section style={{"marginBottom": "2rem"}}>
<p>意傳科技有限公司（下稱本公司）非常重視您的隱私權，為了協助您清楚厝鳥仔講台語（下稱本app）如何蒐集、應用及保護您所提供的個人資料，請您詳細閱讀本app隱私權保護政策。
</p>
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
<p>本隱私權保護政策不適用於本app以外的相關連結網站，也不適用於非本公司的人員。
</p>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="boktik">二、個人資料的蒐集、目的以及使用方式</h2>
<p>我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本app不會將個人資料用於其他用途。</p>
<ol>
  <li>當您使用本app時，保存練習結果僅會留存在您的設備上，以便您於app內查閱，本公司並不會收集任何練習音檔及練習結果。</li>
  <li>在您聯絡客服或填寫問卷調查時，會保留您所提供的別名、電子郵寄地址、聯絡方式及聯絡時間，以便與其他服務對象區隔。</li>
  <li>一般連線時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的作業系統、瀏覽及點選資料記錄等，做為我們增進app服務的參考依據，此記錄為內部應用，絕不對外公佈。</li>
  <li>若您使用本app時設備異常，本公司會收集相關資訊，進行除錯，包含設備型號、作業系統版本等，並對使用者個資去識別化。</li>
  <li>為提供精確的服務，我們會將收集的內容進行統計與分析，分析結果之統計資料或說明文字呈現，除供內部研究外，我們會視需要公佈統計資料及說明文字，但不涉及特定個人之資料。</li>
</ol>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="suiong">三、個人資料使用期間與地區</h2>
<p>本服務僅在中華民國境內利用您的個人資料。除非另有公告，將因應前述蒐集目的永久保存；唯本團隊對超過5年未登入本服務之會員帳號或其它維運需要，擁有刪除資料之權利。</p>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="hongsik">四、個人資料權利行使方式</h2>
<p>您隨時可來信至本公司要求刪除所有個人資料。</p>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="liankiat">五、網站對外的相關連結</h2>
<p>本app無提供其他網站的網路連結。</p>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="hunhiong">六、個人資料分享之政策</h2>
<p>本app絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。</p>
<p>前項但書之情形包括不限於：</p>
<ol>
  <li>您書面同意。</li>
  <li>法律明文規定。</li>
  <li>為免除您生命、身體、自由或財產上之危險。</li>
  <li>當您在app裡的行為，違反服務條款或損害app與其他使用者權益或導致任何人遭受損害時，經app管理組織研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。</li>
  <li>有利於您的權益。</li>
  <li>本app委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。</li>
</ol>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="pohoo">七、資料之保護</h2>
<p>本app主機均設有防火牆等相關資安防護措施。只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。</p>
<p>如因業務需要有必要委託其他單位提供服務時，本app亦會嚴格要求其遵守保密義務，並且採取必要檢查程式以確定其將確實遵守。</p>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="siutsing">八、隱私權保護政策之修正</h2>
<p>本app隱私權保護政策將因應需求隨時進行修正。</p>
</section>


          </Segment>
      </Container>
     );
  }
}

