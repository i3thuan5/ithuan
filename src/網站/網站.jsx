import React from 'react';
// import 目錄 from './目錄';
import 'semantic-ui-css/semantic.min.css';
import { Sidebar, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import Debug from 'debug';
var debug = Debug('ithuan:網站');

export default class 網站 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  render () {
    const { visible } = this.state;
    return (
      <div>
        <Button onClick={this.toggleVisibility.bind(this)}>Toggle Visibility</Button>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
           {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>);
  }
}
