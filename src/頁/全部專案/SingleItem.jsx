import React from 'react';
import { Item } from 'semantic-ui-react';

let LogoI3Thuan5='https://grants.g0v.tw/uploads/5d147554034c77e3e66bc0706473714e.png';

const SingleItem = ({logo=LogoI3Thuan5, url, title, meta, children}) => (
  <Item>
    <Item.Image size='tiny' src={logo} />
    <Item.Content>
      <Item.Header as='a' href={url} target="_blank">{title}</Item.Header>
      <Item.Meta>{meta}</Item.Meta>
      <Item.Description>{children}</Item.Description>
    </Item.Content>
  </Item>
)

export default SingleItem;
