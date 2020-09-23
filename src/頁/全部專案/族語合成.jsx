import React from 'react';
import { Item } from 'semantic-ui-react';

export default class 族語合成 extends React.Component {

  render () {
    let {名, 族語, 漢字} = this.props;
    return (
        <Item id='lamal'>
          <Item.Content>
            <Item.Header as='a' href={ `https://${名.toLowerCase()}.ithuan.tw/` } target="_blank">{名} - 族語之火</Item.Header>
            <Item.Meta>{族語}{漢字}發音</Item.Meta>
            <Item.Description>
              輸入{族語}，電腦會唸給你聽。
            </Item.Description>
          </Item.Content>
        </Item>
     );
  }
}

