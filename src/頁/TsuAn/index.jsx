import React from 'react';
import { Container, Item, Header, Segment } from 'semantic-ui-react';

export default class 資訊安全政策 extends React.Component {

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
          <Header as='h1'>資訊安全政策</Header>
          <p>更新日期：2022.12.14</p>
          <Item.Group relaxed>

          </Item.Group>
<nav aria-labellbedby="iahsikin" className="ui message">
  <h2 id="iahsikin" className="header">頁面索引</h2>
  <ul>
    <li><a href="#tsingtshik">一、本公司政策</a></li>
    <li><a href="#huanui">二、範圍</a></li>
    <li><a href="#miasu">三、名詞解說</a></li>
    <li><a href="#kuapotsing">四、掛保證</a></li>
    <li><a href="#bokphiau">五、目標</a></li>
  </ul>
</nav>

<section style={{"marginBottom": "2rem"}}>
<h2 id="tsingtshik">一、本公司政策</h2>
<p>「Pina'on to nisosodan.」</p>
<p>本公司提供安全穩定、高效率ê資訊服務，kā管理程序kah安全防護技術應用tī ta̍k項資訊作業，建立「Pina'on to nisosodan.」程序，保障資訊蒐集、處理、傳送、儲存kah流通等等全程攏有機密性、完整性kah可用性ê安全保障。</p>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="huanui">二、範圍</h2>
<p>系統服務專案自需求、設計、語料、開發、試驗到維護等等流程。（The requirements, design, corpus, development, testing and maintenance procedure within the system and service projects.)</p>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="miasu">三、名詞解說</h2>
<ol>
  <li>pina'on：(詞幹:na'on)請留心、小心、謹慎。</li>
  <li>nisosodan：傳輸的資料。</li>
</ol>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="kuapotsing">四、掛保證</h2>
<p>本公司掛保證，會照本政策發展資訊安全管理系統，執行相關業務。</p>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="bokphiau">五、目標</h2>
<p>資訊安全管理系統符合ISO27001:2013標準，含相關管理事項：</p>

<h3>5.1. 資訊安全政策：</h3>
<ol>
  <li>依營運要求及相關法律與法規，提供資訊安全之管理指導方針及支持。</li>
  <li>資訊安全政策由管理階層定義並核准，且對內部及相關外部傳達。</li>
  <li>資訊安全政策應定期或發生重大變更時審查，以確保合宜性、適切性及有效性。</li>
</ol>
<h3>5.2. 資訊安全之組織：</h3>
  <ol>
    <li>建立管理框架，以於組織內啟動及控制資訊安全之實作及運作。</li>
    <li>確保員工及承包者瞭解其將承擔之責任，並適任其角色。</li>
    <li>確保員工及承包者認知並履行其資訊安全責任。</li>
    <li>將保護組織利益納入聘用變更或終止聘用過程之一部分。</li>
    <li>行動裝置政策：不得利用行動資訊設備，包含平板電腦、筆記型電腦、隨身碟、隨身硬碟或電腦週邊設備、光碟…等，將未經授權之機密資訊或敏感資訊外流。</li>
    <li>遠距工作政策：確保遠距工作安全性，須透過權限管理機制，依資訊傳輸機密重要性，採取必要的安全控制機制，如加密機制。</li>
  </ol>
<h3>5.3. 人力資源安全：</h3>
  <ol>
    <li>確保員工及承包者瞭解其將承擔之責任，並適任其角色。</li>
    <li>確保員工及承包者認知並履行其資訊安全責任。</li>
    <li>將保護組織利益納入聘用變更或終止聘用過程之一部分。</li>
  </ol>
<h3>5.4. 資產管理：</h3>
  <ol>
    <li>識別組織之資產並定義適切之保護責任。</li>
    <li>確保所有資產依其對組織之重要性，受到適切等級的保護。</li>
    <li>防止儲存於媒體之資訊被未經授權之揭露、修改、移除或破壞。</li>
  </ol>
<h3>5.5. 存取控制：</h3>
  <ol>
    <li>限制對資訊及資訊處理設施之存取。</li>
    <li>確保授權使用者得以存取，並避免系統及服務的未授權存取。</li>
    <li>令使用者對保全其鑑別資訊負責。</li>
    <li>防止系統及應用遭未經授權存取。</li>
  </ol>
<h3>5.6. 密碼學：</h3>
  <ol>
    <li>依照法規、客戶要求及資訊資產風險設置加密機制。</li>
    <li>針對資料機密性要求及風險評估結果，對須防護其機密性之資料本體進行加密作業或對其傳輸過程進行加密作業。</li>
    <li>對於加密使用之金鑰，須對其取得、安裝、儲存、備份、回收及展延進行管理，以確保加密機制之完整及可用。</li>
  </ol>
<h3>5.7. 實體及環境安全：</h3>
  <ol>
    <li>防止組織資訊及資訊處理設施遭未經授權之實體存取、損害及干擾。</li>
    <li>防止資產之遺失、損害、遭竊或破解，並防止組織運作中斷。</li>
    <li>個人桌上型電腦、可攜式電腦應設定於一定時間不使用或離開後，應自動清除螢幕上的資訊並登出或鎖定系統，以避免被未經授權之存取。</li>
  </ol>
<h3>5.8. 運作安全：</h3>
  <ol>
    <li>確保資訊處理設施之正確及安全操作。</li>
    <li>確保資訊及資訊處理設施，以防範惡意軟體。</li>
    <li>防範資料漏失。</li>
    <li>紀錄事件及產生證據。</li>
    <li>確保運作中系統之完整性。</li>
    <li>防範對技術脆弱性之利用。</li>
    <li>使稽核活動對運作中系統之衝擊降至最低。</li>
    <li>依照資訊之可用性及完整性需求，制定資料備份週期、方式及保存期限，並測試其有效性。依照備份資料之機密性需求加以防護，避免衍生之其他資安風險及事件。</li>
  </ol>
<h3>5.9. 通訊安全：</h3>
  <ol>
    <li>確保對網路及其支援之資訊處理設施中資訊之保護。</li>
    <li>保護組織內及與任何外部個體所傳送資訊之安全。</li>
    <li>同仁應使用規定之電子傳輸媒體傳遞資料，不可因貪圖方便而任意使用非法與不當之傳輸媒體。</li>
    <li>同仁不得利用任何傳輸媒介透過資料傳遞、訊息傳送、發言或視訊等方式透露機密或敏感性資訊給其他組織或人員。</li>
  </ol>
<h3>5.10. 系統獲取、開發及維護：</h3>
  <ol>
    <li>確保資訊安全係跨越整個生命週期之整體資訊系統的一部分。此亦包括經由公共網路提供服務之資訊系統的要求事項。</li>
    <li>確保於資訊系統之開發生命週期內，設計及實作資訊安全。</li>
    <li>確保測試用資料之保護。</li>
    <li>當發展新資訊系統，或現有系統功能之強化，於系統規劃需求分析階段，將安全需求要項納入系統功能。</li>
    <li>在採購軟體時，視其安全需求，進行評估。</li>
    <li>系統之安全需求及控制程度，應與資訊資產價值相稱，並考量安全措施不足，可能帶來之傷害程度。資訊系統應保護資料，防止洩漏或被竄改。</li>
    <li>在作業系統上執行應用軟體，應建立控制程序並嚴格執行，為減少可能危害作業系統之風險，應用程式之更新作業應限定只能由授權之管理人員才可執行，可建立應用程式之更新稽核紀錄。</li>
  </ol>
<h3>5.11. 供應者關係：</h3>
  <ol>
    <li>確保對外包商者可存取之組織資產的保護。</li>
    <li>維持資訊安全及服務交付之議定等級與供應者協議一致。</li>
    <li>採購／維護合約書內容應包含服務項目、範圍、雙方權利義務與相關資訊資產安全保密責任。</li>
    <li>承包廠商需要向承包廠商之員工、履行輔助人、代理人、複代理人、關係企業、委任人或委託製造、採購、提供服務之協力廠商透露機密資訊時，應以受託業務上之正常使用範圍內為限，並應要求其切結保密及採取必要保密措施。</li>
  </ol>
<h3>5.12. 資訊安全事故管理：</h3>
  <ol>
    <li>確保對資訊安全事故之管理的一致及有效作法，包括對安全事件及弱點之傳達。</li>
  </ol>
<h3>5.13. 營運持續管理之資訊安全層面：</h3>
  <ol>
    <li>資訊安全持續應嵌入組織之營運持續管理系統中。</li>
    <li>確保資訊處理設施之可用性。</li>
    <li>保持持續運作環境。</li>
  </ol>
<h3>5.14. 遵循性：</h3>
  <ol>
    <li>符合有關資訊安全相關之法律、法令、法規或契約義務，以及任何安全要求事項。</li>
    <li>確保依組織的政策及程序，實作及運作資訊安全。</li>
  </ol>
</section>
          </Segment>
      </Container>
     );
  }
}

