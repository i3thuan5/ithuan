import React from 'react';
import { Container, Header, List, Icon, Item, Image, Segment } from 'semantic-ui-react';
import LogoItaigi from '../../圖/itaigi.svg';
import LogoTL_POJ from '../../圖/TL_POJ_tsuan.png';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import LogoSia2 from '../../圖/sia2.png';
import LogoTsoo2 from '../../圖/tsoo2ji7.svg';
import LogoTau3 from '../../圖/tau3.png';
import SingleItem from '../全部專案/SingleItem'


import Debug from 'debug';
var debug = Debug('ithuan:網站');

export default class 全部專案 extends React.Component {

  
  Taigi() {
    let tsuliau=[
      {
        title: "意傳台語AI",
        url: "https://suisiann-dataset.ithuan.tw/",
        meta: "Linebot",
        children: "語音合成demo"
      },
      {
        title: "SuíSiann",
        url: "https://suisiann.ithuan.tw/",
        meta: "舊名鬥拍字",
        children: "線頂輸入法kah語音合成Demo"
      },
      {
        title: "SuíSiann-Dataset",
        url: "https://suisiann-dataset.ithuan.tw/",
        meta: "語料庫",
        children: "台灣話語音合成語料庫，發音人是王秀容老師。"
      },
      {
        title: "語音合成錄音演講",
        url: "https://www.youtube.com/watch?v=wIrj7LU6JOo&list=PLGsG7mG2A9eup2E_Mx0yIjk4RgHUMeQ7n",
        meta: "語料庫",
        children: "台灣話語音合成語料庫，發音人是王秀容老師。"
      },
      {
        title: "錄音方法",
        url: "https://www.youtube.com/watch?v=GJvtWyuizyA&list=PLGsG7mG2A9eup2E_Mx0yIjk4RgHUMeQ7n&index=1",
        meta: "錄音室實際錄音方法",
        children: "錄音室實際錄音方法"
      },
      {
        title: "WaveRNN Hùn-liān",
        url: "https://github.com/SuiSiann/HunLian/tree/master/fatchord-WaveRNN",
        meta: "訓練 scripts",
        children: "用 dobi 規劃 ê Tacotron kah WaveRNN 訓練 scripts"
      },
      {
        title: "WaveRNN Bôo-hîng",
        url: "https://github.com/SuiSiann/HunLian/tree/master/fatchord-WaveRNN",
        meta: "語音合成模型",
        children: "WaveRNN ê 訓練 scripts"
      },
      {
        title: "HTS Hùn-liān",
        url: "https://github.com/SuiSiann/HunLian/tree/master/HTS",
        meta: "訓練 scripts",
        children: "用 docker ê HTS 訓練 scripts"
      },
      {
        title: "HTS Bôo-hîng",
        url: "https://github.com/i3thuan5/tai5-uan5_gian5-gi2_hok8-bu7/wiki/快速說明#直接用訓練好的語音合成",
        meta: "語音合成模型",
        children: "WaveRNN ê 訓練 scripts"
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

