import React from 'react';
import { Container, Item, Header, Segment } from 'semantic-ui-react';
import { hupio } from  './hupio';
import './tsuan.css';

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

  render_hupio() {
    console.log(hupio)
    return hupio.map((tsua) =>(
      <tr>
        <td>{tsua[0]}</td>
        <td>{tsua[1]}</td>
        <td>{tsua[2]}</td>
        <td>{tsua[3]}</td>
        <td>{tsua[4]}</td>
        <td>{tsua[5]}</td>
      </tr>
      ))
  }


  render () {
    
    return (
<Container text>
  <Segment basic size="large">
    <Header as='h1'>資訊安全政策</Header>
    <p>更新日期：2025.06.04</p>
    <p>版本編號：1.0</p>

<nav aria-labelledby="iahsikin" className="ui message">
  <h2 id="iahsikin" className="header">頁面索引</h2>
  <ol>
    <li><a href="#boktik">目的</a></li>
    <li><a href="#huanui">適用範圍</a></li>
    <li><a href="#tinggi">定義</a></li>
    <li><a href="#tshikliok">目標</a></li>
    <li><a href="#tsikjim">責任</a></li>
    <li><a href="#simtsa">審查</a></li>
    <li><a href="#sitsi">實施</a></li>
    <li><a href="#hupio">附表 ISMS流程與組織對應表</a></li>
  </ol>
</nav>

<section style={{"marginBottom": "2rem"}}>
<h2 id="boktik">1. 目的</h2>
<p>1.1 為支持意傳科技有限公司(以下簡稱本公司)業務永續運作，提升營運效率，滿足資訊資產的機密性、完整性及可用性需求，
並掌握資訊安全現況，提早面對機會與風險，特定此政策規範。</p>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="huanui">2. 適用範圍</h2>
<p>2.1 本公司之所有單位。</p>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="tinggi">3. 定義</h2>
<p>3.1 所有人員：本公司人員與委外廠商。</p>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="tshikliok">4. 策略與目標</h2>
<p>4.1 資訊安全策略：</p>
<p className="lv3">4.1.1 提升公司營業效率。</p>
<p className="lv3">4.1.2 同仁了解資安目的並能掌握管理系統。</p>
<p className="lv3">4.1.3 掌握資安現況並提早面對機會與風險。</p>
<p>4.2 依據資訊安全策略，擬定資訊安全目標如下：</p>
<p className="lv3">4.2.1 資訊安全管理系統運作順暢，並落實公司、專案對機密性、完整性及可用性要求。（依策略4.1.1）</p>
<p className="lv3">4.2.2. 核心業務維持一定水準的系統可用性。（依策略4.1.1）</p>
<p className="lv3">4.2.3 每年進行資安目的意識培訓並評估成效。（依策略4.1.2）</p>
<p className="lv3">4.2.4 檢視開發、維運環節資安現況，透過定期評鑑，把握公司永續發展的機會，並降低地緣政治衝突所產生的風險。（依策略4.1.3）</p>
<p>4.3 應針對上述資訊安全目標，擬定年度待辦事項、所需資源、負責人員、預計完成時間以及結果評估方式與評估結果，
相關監督與量測程序，應遵循本公司「監督與量測管理程序書」辦理。</p>
<p>4.4 資訊安全執行小組應於管理審查會議中，針對資訊安全目標有效性量測結果，向資訊安全委員會召集人進行報告。</p>
</section>

<section style={{"marginBottom": "2rem"}}>
<h2 id="tsikjim">5. 責任</h2>
<p>5.1 本公司的管理階層建立及審查此政策。</p>
<p>5.2 資訊安全執行小組透過標準和程序以實施此政策。</p>
<p>5.3 所有人員須依照相關安全管理程序以維護資訊安全政策。</p>
<p>5.4 所有人員有責任報告資訊安全事件和任何已鑑別出之弱點。</p>
<p>5.5 任何危及資訊安全之行為，將視情節輕重追究其民事、刑事及行政責任或依本公司之相關規定進行懲處。</p>
<p>5.6 資訊安全政策應傳達至內部及外部人員，並得透過內部公告、會議、教育訓練、官網、電子郵件等方式傳達。</p>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="simtsa">6. 審查</h2>
<p>6.1 本政策應至少每年審查乙次，以反映政府法令、技術及業務等最新發展現況，以確保本公司永續運作及資訊安全實務作業能力。</p>
<p>6.2 本公司如發生重大變化時，應審查資訊安全政策。</p>
</section>


<section style={{"marginBottom": "2rem"}}>
<h2 id="sitsi">7. 實施</h2>
<p>7.1 下年度資訊安全政策配合當年度管理審查會議進行審核。</p>
<p>7.2 本公司各單位基於業務屬性差異，執行資訊安全管理作業並互相支援。各單位負責項目請參考附表「ISMS流程與組織對應表」。</p>
<p>7.3 各單位執行資訊安全管理作業，如下列項目需進行變更，應依規劃之方式執行變更：</p>
<p className="lv3">7.3.1 資訊安全管理系統變更。</p>
<p className="lv3">7.3.2 發生重大資安事故。</p>
<p className="lv3">7.3.3 有新增、變更或移除資訊資產。</p>
<p className="lv3">7.3.4 作業環境改變。</p>
<p>7.4 如需進行資訊安全管理系統變更，應考量下列事項：</p>
<p className="lv3">7.4.1 變更的目的與其潛在之影響。</p>
<p className="lv3">7.4.2 管理系統的完整性。</p>
<p className="lv3">7.4.3 資源的可用性。</p>
<p className="lv3">7.4.4 職責與權限之分配或重新分配。</p>
<p>7.5 本政策經「資訊安全委員會」進行會審後，由召集人核定後實施，修訂時亦同。</p>
</section>

<section>
<h2 id="hupio">附表 ISMS流程與組織對應表</h2>
<table className="ui celled table">
  <thead>
    <tr>
      <th>條文</th>
      <th>程序</th>
      <th>管理文件</th>
      <th>資訊安全委員會</th>
      <th>文管人員</th>
      <th>資訊安全稽核小組</th>
    </tr>
  </thead>
  <tbody>
    {this.render_hupio()}
  </tbody>
</table>
</section>
          </Segment>
      </Container>
     );
  }
}

