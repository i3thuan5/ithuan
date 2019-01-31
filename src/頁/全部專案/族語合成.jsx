import React from 'react';
import { Item } from 'semantic-ui-react';

export default class 族語合成 extends React.Component {

  render () {
    let LogoI3Thuan5='https://grants.g0v.tw/uploads/5d147554034c77e3e66bc0706473714e.png';
    let {名, 族語, 漢字} = this.props;
    return (
        <Item id='lamal'>
          <Item.Image size='tiny' src={LogoI3Thuan5} />
          <Item.Content>
            <Item.Header as='a' href={ `https://${名.toLowerCase()}.意傳.台灣/` } target="_blank">{名} - 族語之火</Item.Header>
            <Item.Meta>{族語}{漢字}發音</Item.Meta>
            <Item.Description>
              輸入{族語}，電腦會唸給你聽喲！
            </Item.Description>
          </Item.Content>
        </Item>
     );
  }
}

