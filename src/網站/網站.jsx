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
        kosu: '/%E9%96%A9%E5%AE%A2%E6%95%85%E4%BA%8B',
        siongkuan: '/%E7%9B%B8%E9%97%9C%E9%80%A3%E7%B5%90',
      },
    };
    this.closeVisibility = this.closeVisibility.bind(this);
  }

  openVisibility() {
    this.setState({ visible: true });
  }

  closeVisibility() {
    this.setState({ visible: false });
  }

  getClasses(link) {
    if (this.props.location.pathname === link) {
      return 'active item';
    }

    return 'item';
  }

  render () {
    const { visible, paths } = this.state;

    return (
      <div>
       <Menu id="KuahPau" icon vertical inverted fixed='top'>
            <Menu.Item name='kuahpau' style={{ display: !this.state.visible ? 'block' : 'none' }}>
              <Button inverted icon
              onClick={this.openVisibility.bind(this)}>
                <Icon name='sidebar' />
              </Button>
            </Menu.Item>
            </Menu>
        <Sidebar.Pushable>
          <Sidebar as={Menu} fixed="left" animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
              <Link to={paths.home} className={this.getClasses(paths.home)} onClick={this.closeVisibility}>
                <Icon name='home'/>首頁
              </Link>
              <Link to={paths.kosu} className={this.getClasses(paths.kosu)} onClick={this.closeVisibility}>
                <Icon name='camera'/>閩客故事
              </Link>
              <Link to={paths.siongkuan} className={this.getClasses(paths.siongkuan)} onClick={this.closeVisibility}>
                <Icon name='camera'/>相關連結
              </Link>
          </Sidebar>
          
          <Sidebar.Pusher style={{ height: '100vh', overflowY: 'scroll', overflowX: 'hidden' }}>
            <Dimmer.Dimmable dimmed={visible}>
            <Dimmer active={visible} onClickOutside={this.closeVisibility.bind(this)} />
            <頁首 paths={this.state.paths} getClasses={this.getClasses.bind(this)}/>
             {this.props.children}
            <頁腳 paths={this.state.paths}/>
            </Dimmer.Dimmable>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      );
  }
}
