import React from 'react';
import { Link } from 'react-router';
import { Sidebar, Dimmer, Button, Menu, Icon } from 'semantic-ui-react';
import Debug from 'debug';
import 頁首 from './頁首';
import 頁腳 from './頁腳';
import 手機仔 from './手機仔'
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
        taigi: '/taigi',
        pangcah: '/pangcah',
        kaxabu: '/kaxabu',
        hakka: '/hakka',
        tsuan: '/tsuan',
        tsuanan: '/tsuanan',
        suisiann: '/suisiann',
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

  componentDidUpdate(prevProps, prevState) {
    debug('pigu papa');
    let 內文老爸 = document.getElementById('i3pusher');
    內文老爸.scrollTop = 0;
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
          <手機仔
            paths={this.state.paths} getClasses={this.getClasses.bind(this)}
            visible={visible}
            />
          
          <Sidebar.Pusher id="i3pusher">
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
