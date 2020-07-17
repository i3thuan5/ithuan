import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Segment, Menu, Icon, Header, Image } from 'semantic-ui-react';
import { Sidebar, Dimmer, Button } from 'semantic-ui-react';
import Debug from 'debug';
var debug = Debug('ithuan:手機仔');


class 手機仔 extends Component {
  getClasses(value) {
    return this.props.getClasses(value);
  }

  render() {
    const { paths, visible } = this.props;
    const { home, tsuanan, suisiann, kosu, siongkuan, lianlok } = paths;
    return (
      <Sidebar as={Menu} fixed="left" animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Link to={paths.home} className={this.getClasses(paths.home)} onClick={this.closeVisibility}>
            <Icon name='home'/>首頁
          </Link>
          <a href="https://sujiphuat.ithuan.tw" className={this.getClasses('/台文/輸入法/')}>
            <Icon name='keyboard'/>台文輸入法
          </a>
          <Link to={paths.suisiann} className={this.getClasses(paths.suisiann)} onClick={this.closeVisibility}>
            <Icon name='volume up'/>SuíSiann
          </Link>
          <Link to={paths.tsuanan} className={this.getClasses(paths.tsuanan)} onClick={this.closeVisibility}>
            <Icon name='rocket'/>專案開發
          </Link>
          <Link to={paths.siongkuan} className={this.getClasses(paths.siongkuan)} onClick={this.closeVisibility}>
            <Icon name='world'/>資源連結
          </Link>
          <Link to={paths.lianlok} className={this.getClasses(paths.lianlok)} onClick={this.closeVisibility}>
            <Icon name='envelope'/>連絡交流
          </Link>
      </Sidebar>
    );
  }
}

export default 手機仔;
