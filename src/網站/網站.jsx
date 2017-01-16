import React from 'react';
import { Link } from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import './網站.css';
import { Sidebar, Segment, Dimmer, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import Debug from 'debug';

// import 目錄 from './目錄';

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
              <Link to="/" className="active item">
                <Icon name='home' />首頁
              </Link>
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Link to="/%E7%B7%9A%E4%B8%8A%E7%B5%84%E5%AD%97" className="item">
                <Icon name='gamepad' />線上組字
              </Link>
            </Menu.Item>
            <Menu.Item name='camera'>
              <Link to="/%E9%96%A9%E5%AE%A2%E6%95%85%E4%BA%8B" className="item">
                <Icon name='camera' />閩客故事
              </Link>
            </Menu.Item>
            <Menu.Item name='camera'>
              <Link to="/%E7%9B%B8%E9%97%9C%E9%80%A3%E7%B5%90" className="item">
                <Icon name='camera' />相關連結
              </Link>
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
