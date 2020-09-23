import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Segment, Menu, Icon, Header, Image } from 'semantic-ui-react';
import { Sidebar, Dimmer, Button } from 'semantic-ui-react';


class 手機仔 extends Component {
  getClasses(value) {
    return this.props.getClasses(value);
  }

  render() {
    const { paths, visible } = this.props;
    const { home, tsuanan, sanphin, suisiann } = paths;
    return (
      <Sidebar as={Menu} fixed="left" animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Link to={paths.home} className={this.getClasses(paths.home)} onClick={this.closeVisibility}>
            <Icon name='home'/>首頁
          </Link>
          <Link to={paths.sanphin} 
            className={this.getClasses(paths.sanphin)} onClick={this.closeVisibility}>
            <Icon name='rocket'/>產品
          </Link>
          <Link to={paths.tsuanan} className={this.getClasses(paths.tsuanan)} onClick={this.closeVisibility}>
            <Icon name='briefcase'/>合作專案
          </Link>
          <Link to={paths.suisiann} className={this.getClasses(paths.suisiann)} onClick={this.closeVisibility}>
            <Icon name='volume up'/>SuíSiann
          </Link>
      </Sidebar>
    );
  }
}

export default 手機仔;
