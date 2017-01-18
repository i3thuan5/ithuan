import React from 'react';
import { Link } from 'react-router';
import { Sidebar, Dimmer, Button, Menu, Icon } from 'semantic-ui-react';
import Debug from 'debug';
import 頁首 from './頁首';
import 頁腳 from './頁腳';
import 'semantic-ui-css/semantic.min.css';
import './網站.css';

var debug = Debug('ithuan:網站');

export default class 網站 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      activeItem: this.props.location.pathname || '/',
      paths: {
        home: '/',
        tsooji: '/%E7%B7%9A%E4%B8%8A%E7%B5%84%E5%AD%97',
        kosu: '/%E9%96%A9%E5%AE%A2%E6%95%85%E4%BA%8B',
        siongkuan: '/%E7%9B%B8%E9%97%9C%E9%80%A3%E7%B5%90',
      },
    };
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  handleItemClick(activeItem) {
    this.setState({ activeItem });
  }

  getClasses(link) {
    if (this.state.activeItem === link) {
      return 'active item';
    }

    return 'item';
  }

  render () {
    const { visible, activeItem, paths } = this.state;

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
              <Link to="/" className={this.getClasses(paths.home)} onClick={this.handleItemClick.bind(this, paths.home)}>
                <Icon name='home'/>首頁
              </Link>
              <Link to={paths.tsooji} className={this.getClasses(paths.tsooji)} onClick={this.handleItemClick.bind(this, paths.tsooji)}>
                <Icon name='gamepad'/>線上組字
              </Link>
              <Link to={paths.kosu} className={this.getClasses(paths.kosu)} onClick={this.handleItemClick.bind(this, paths.kosu)}>
                <Icon name='camera'/>閩客故事
              </Link>
              <Link to={paths.siongkuan} className={this.getClasses(paths.siongkuan)} onClick={this.handleItemClick.bind(this, paths.siongkuan)}>
                <Icon name='camera'/>相關連結
              </Link>
          </Sidebar>
          
          <Sidebar.Pusher style={{ height: '100vh', overflowY: 'scroll', overflowX: 'hidden' }}>
            <Dimmer.Dimmable dimmed={visible}>
            <Dimmer active={visible} onClickOutside={this.toggleVisibility.bind(this)} />
            <頁首/>
            {this.props.children}
            <頁腳/>
            </Dimmer.Dimmable>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      );
  }
}
