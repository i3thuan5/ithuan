import React from 'react';
import { Item } from 'semantic-ui-react';
import LogoItaigi from '../../圖/itaigi.svg';

const SingleItem = ({photo=LogoItaigi, url, title, meta, children}) => (
  <Item>
    <Item.Image size='tiny' src={photo} />
    <Item.Content>
      <Item.Header as='a' href={url} target="_blank">{title}</Item.Header>
      <Item.Meta>{meta}</Item.Meta>
      <Item.Description>{children}</Item.Description>
    </Item.Content>
  </Item>
)

export default SingleItem;
