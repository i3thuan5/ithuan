import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import LogoItaigi from '../../圖/itaigi.svg';
import LogoTL_POJ from '../../圖/TL_POJ_tsuan.png';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import LogoSia2 from '../../圖/sia2.png';
import LogoTsoo2 from '../../圖/tsoo2ji7.svg';
import LogoTau3 from '../../圖/tau3.png';
import LineQR from './L.png';
import SingleItem from '../全部專案/SingleItem'


import Debug from 'debug';
var debug = Debug('ithuan:網站');

export default class 全部專案 extends React.Component {

  
  Taigi() {
    let tsuliau=[
      {
        title: "SuíSiann",
        url: "https://suisiann.ithuan.tw/",
        meta: "舊名鬥拍字",
        children: "線頂輸入法kah語音合成Demo。",
        logo: LogoTau3,
      },
      {
        title: "意傳台語AI",
        url: "https://line.me/R/ti/p/%40241byfcj",
        meta: "Linebot",
        children: "語音合成 kah 語音辨識 demo。",
        logo: LineQR,
      },
      {
        title: "SuíSiann-Dataset",
        url: "https://suisiann-dataset.ithuan.tw/",
        meta: "語料庫",
        children: "台灣話語音合成語料庫，發音人是王秀容老師。"
      },
      {
        title: "錄音方法",
        url: "https://www.youtube.com/watch?v=GJvtWyuizyA&list=PLGsG7mG2A9eup2E_Mx0yIjk4RgHUMeQ7n&index=1",
        meta: "錄音室實際錄音方法",
        children: "錄音室實際錄音方法，有錄音ê流程，閣有對比句校正錄音風格。"
      },
      {
        title: "語音合成錄音演講",
        url: "https://www.youtube.com/watch?v=wIrj7LU6JOo&list=PLGsG7mG2A9eup2E_Mx0yIjk4RgHUMeQ7n",
        meta: "錄音 mê-kak kah 產業情形。",
        children: "Hiā-khì 錄音室解說語音合成 ê 錄音 mê-kak。"
      },
      {
        title: "媠聲標記規則",
        url: "https://hackmd.io/363JOxAFQQexdUm7LOCaDg#",
        meta: "台語文字語料標記方法",
        children: "Hiā-khì 錄音室解說語音合成 ê 錄音 mê-kak。"
      },
      {
        title: "語料庫網站",
        url: "https://github.com/SuiSiann/SuiSiann-Dataset",
        meta: "錄音檔校對網站",
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

      </Container>
     );
  }
}

