import React from 'react';
// import 目錄 from './目錄';
import 'semantic-ui-css/semantic.min.css';
import './網站.css';
import { Sidebar, Segment, Dimmer, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
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
       <Menu id="KuahPau" icon vertical inverted fixed='top'>
            <Menu.Item name='kuahpau' style={{ display: !this.state.visible ? 'block' : 'none' }}>
              <Button inverted icon
              onClick={this.toggleVisibility.bind(this)}>
                <Icon name='sidebar' />
              </Button>
            </Menu.Item>
            </Menu>
        <Sidebar.Pushable>
          <Sidebar as={Menu} fixed="left" animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
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
          
          <Sidebar.Pusher style={{ height: '100vh', overflowY: 'scroll', overflowX: 'hidden' }}>
            <Dimmer.Dimmable dimmed={visible}>
            <Dimmer active={visible} onClickOutside={this.toggleVisibility.bind(this)} />
            {this.props.children}
            </Dimmer.Dimmable>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      );
  }
}
