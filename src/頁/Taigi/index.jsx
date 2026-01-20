import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import SingleItem from '../SingleItem'
import LogoTshuTsiauA from '../../圖/tshutsiaua.png'
import LogoItaigi from '../../圖/itaigi.svg'


import Debug from 'debug';
var debug = Debug('ithuan:網站');


let list_to_singleitem = (list) => (
  list.map((item, k) => {
    let {children, ...rest} = item
    return (<SingleItem key={k} {...rest}>{children}</SingleItem>)
  })
)

export default class 全部專案 extends React.Component {

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
  

  Taigi() {
    let list = [{
      logo: LogoTshuTsiauA,
      title: "厝鳥仔講台語",
      url: "https://apps.apple.com/tw/app/id6743581200",
      meta: "真人發音互動學習，開喙講台語無問題！",
      children: "想講一口流利又親切的台語嗎？「厝鳥仔講台語」App 為你量身打造！這是一款專為台語學習者設計的口說練習應用程式，透過道地真人發音跟讀和即時語音回饋，幫助你掌握正確的台語發音，講出自然的語調，不再害怕開口說台語！"
    },{
      title: "意傳台文輸入法",
      url: "",
      meta: "（已退場，2019-2024）",
      children: "Rime是一个伐平台的輸入法框。阮是照這个框的規範，共台語詞庫囥入去、寫台語拍字規則。目前支援Win7、Win10、Mac、linux。"
    },{
      title: "台羅POJ轉換器",
      url: "https://lomaji.ithuan.tw/",
      meta: "台文羅馬字系統轉換",
      children: "台羅轉POJ、POJ轉台羅的家私。接受原件數字調抑是傳統調號，全羅抑漢羅攏通處理。"
    },{
      title: "鬥拍字",
      url: "https://suisiann.ithuan.tw/",
      meta: "台文漢羅轉換kah自動發音",
      children: "輸入台文，電腦同齊產生漢字佮台羅的對照，而且閣會唸予你聽。"
    },{
      title: "臺灣台語常用詞辭典",
      logo: "https://sutian.moe.edu.tw/static/image/logo/logo.png",
      url: "https://sutian.moe.edu.tw/",
      meta: "教育部ê辭典",
      children: "提供臺灣台語搜揣佮華語搜揣，會用得聽詞目佮例句發音，予逐家方便學。閣有分類索引、部首筆劃索引佮附錄。（意傳負責huānn網站）"
    },{
      title: "iTaigi愛台語",
      logo: LogoItaigi,
      url: "https://itaigi.tw/",
      meta: "台語的大眾辭典",
      children: "欲知影這个詞的台語按怎講，來遮查就著矣！逐个詞攏有語音合成，隨唸予你聽。嘛ē-sái提供家己的講法喔！（意傳負責huānn網站）"
    },{
      title: "詞彙分級工作計畫",
      meta: "台文語料庫詞頻統計",
      children: "網站提供自動偵查錯誤、即時計算詞頻、方言差管理、搜尋等功能，支援輸入全羅、漢羅。Tsit-má無對外開放。（意傳huānn語料庫系統）"
    },{
      title: "加速開發台文字幕流程計畫",
      meta: "台語語音辨識研究專案",
      children: "2019年文化部加速文化內容開發與科技創新應用補助案。加強語音辨識轉寫做台文技術，未來會提供這項服務。(結案--ah)"
    },{
      title: "台語兒",
      logo: "https://baconbao.github.io/TaiwaneseWizard/img/faceBackground.png",
      url: "https://baconbao.github.io/TaiwaneseWizard/",
      meta: "文字轉做台語語音",
      children: "台語兒是一隻會曉朗讀台語的語音精靈，有Chrome、Firefox、Messenger、Andriod版本通裝。(意傳語音技術支援)"
    },
    ];
    return list_to_singleitem(list)
  }

  suisiann() {
    let tsuliau=[
      {
        title: "SuíSiann-Dataset",
        url: "https://suisiann-dataset.ithuan.tw/",
        meta: "語料庫",
        children: "台灣話語音合成語料庫，發音人是王秀容老師。"
      },
      {
        title: "錄音方法",
        url: "https://www.youtube.com/watch?v=GJvtWyuizyA&list=PLGsG7mG2A9eup2E_Mx0yIjk4RgHUMeQ7n&index=1",
        meta: "Youtube",
        children: "錄音室實際錄音方法，有錄音ê流程，閣有對比句校正錄音風格。"
      },
      {
        title: "語音合成錄音演講",
        url: "https://www.youtube.com/watch?v=wIrj7LU6JOo&list=PLGsG7mG2A9eup2E_Mx0yIjk4RgHUMeQ7n",
        meta: "Youtube",
        children: "Hiā-khì 錄音室解說語音合成 ê 錄音 mê-kak。"
      },
      {
        title: "媠聲標記規則",
        url: "https://hackmd.io/363JOxAFQQexdUm7LOCaDg#",
        meta: "Hackmd",
        children: "Hiā-khì 錄音室解說語音合成 ê 錄音 mê-kak。"
      },
      {
        title: "語料庫網站",
        url: "https://github.com/SuiSiann/SuiSiann-Dataset",
        meta: "Github",
        children: "校對語料庫 ê docker-compose，主要是 Django 介面。"
      },
      {
        title: "WaveRNN Hùn-liān",
        url: "https://github.com/SuiSiann/HunLian/tree/master/fatchord-WaveRNN",
        meta: "訓練 scripts",
        children: "用 dobi 規劃 ê Tacotron kah WaveRNN 訓練 scripts。"
      },
      {
        title: "WaveRNN Bôo-hîng",
        url: "https://hub.docker.com/repository/docker/i3thuan5/suisiann-wavernn",
        meta: "合成模型",
        children: "WaveRNN ê 訓練模型 kah Web-based 服務 Docker。"
      },
      {
        title: "HTS Hùn-liān",
        url: "https://github.com/SuiSiann/HunLian/tree/master/HTS",
        meta: "訓練 scripts",
        children: "用 docker ê HTS 訓練 scripts。"
      },
      {
        title: "HTS Bôo-hîng",
        url: "https://github.com/i3thuan5/tai5-uan5_gian5-gi2_hok8-bu7/wiki/快速說明#直接用訓練好的語音合成",
        meta: "語音合成模型",
        children: "HTS ê 訓練模型 kah Web-based 服務 Docker。"
      },
    ]

    return tsuliau.map((item, k) => {
      let {children, ...rest} = item
      return (<SingleItem key={k} {...rest}>{children}</SingleItem>)
    })
  }

  render () {
    return (
      <Container text>
        <Segment basic size="large">
        <Item.Group relaxed>
          {this.Taigi()}
        </Item.Group>
        </Segment>
        <Segment basic size="large">
          <Header as='h2'>台灣媠聲2.0</Header>
            <p>
              2017年文化部推行語言多樣性友善環境補助案。來改良阮的語音合成系統，予音質閣較清楚、自然。(已結案)"
            </p>
          <Header as='h3'>台語語音合成研究專案</Header>
          <p>阮改良台語語音合成系統，予音質閣較清楚、自然，相關成果攏公開佇tsia。</p>
          <iframe src="//www.slideshare.net/slideshow/embed_code/key/ElynnvC7cy9GdC" width="595" height="485" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" style={{border:"1px solid #CCC", borderWidth:"1px", marginBottom:"5px", maxWidth: "100%",}} allowFullScreen> </iframe> 
          <Item.Group relaxed>
              {this.suisiann()}
          </Item.Group>
        </Segment>
      </Container>
     );
  }
}

