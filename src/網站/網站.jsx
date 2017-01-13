import React from 'react';
// import 目錄 from './目錄';
import 'semantic-ui-css/semantic.min.css';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
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
       <Menu icon vertical inverted fixed='top'>
            <Menu.Item name='kuahpau'>
              <Button inverted icon onClick={this.toggleVisibility.bind(this)}>
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
          
         
          <Sidebar.Pusher>
          
            {/*<Menu fixed='top'>
            <Menu.Item name='kuahpau'>
              <Button icon onClick={this.toggleVisibility.bind(this)}>
                <Icon name='sidebar' />
              </Button>
            </Menu.Item>
            </Menu>*/}
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      );
  }
}
