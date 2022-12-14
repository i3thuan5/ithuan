import React from 'react';
import { Container, Item, Header, Segment } from 'semantic-ui-react';
import SingleItem from '../SingleItem'
import LogoItaigi from '../../圖/itaigi.svg'
import LogoPangcah from '../../圖/pangcah.png'

export default class 資訊安全政策 extends React.Component {

  render () {
    
    return (
      <Container text>
        <Segment basic size="large">
          <Header as='h1'>資訊安全政策</Header>
          <Item.Group relaxed>
            {this.Taigi()}
          </Item.Group>
          </Segment>
        <Segment basic size="large">
        <Header as='h2'>台語</Header>
        <Item.Group relaxed>
          {this.Taigi()}
        </Item.Group>
        </Segment>
      </Container>
     );
  }
}

