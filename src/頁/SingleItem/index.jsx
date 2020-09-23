import React from 'react';
import { Item } from 'semantic-ui-react';

const SingleItem = ({logo, size='small', url, title, meta, children}) => (
  <Item>
    {logo ? <Item.Image size={size} src={logo} /> : null}
    <Item.Content>
      <Item.Header as='a' href={url} target="_blank">{title}</Item.Header>
      <Item.Meta>{meta}</Item.Meta>
      <Item.Description>{children}</Item.Description>
    </Item.Content>
  </Item>
)

export default SingleItem;
