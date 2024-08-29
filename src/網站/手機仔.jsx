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
    return (
      <Sidebar as={Menu} fixed="left" animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Link to={paths.home} className={this.getClasses(paths.home)} onClick={this.closeVisibility}>
            <Icon name='home'/>首頁
          </Link>
          <Link to={paths.taigi}
            className={this.getClasses(paths.taigi)} onClick={this.closeVisibility}>
            <Icon name='rocket'/>台語專案
          </Link>
          <Link to={paths.pangcah} className={this.getClasses(paths.pangcah)} onClick={this.closeVisibility}>
            <Icon name='briefcase'/>Pangcah專案
          </Link>
          <Link to={paths.kaxabu} className={this.getClasses(paths.kaxabu)} onClick={this.closeVisibility}>
            <Icon name='volume up'/>Kaxabu專案
          </Link>
          <Link to={paths.hakka} className={this.getClasses(paths.hakka)} onClick={this.closeVisibility}>
            <Icon name='volume up'/>客話專案
          </Link>
          <Link to={paths.tsuan} className={this.getClasses(paths.tsuan)} onClick={this.closeVisibility}>
            資訊安全政策
          </Link>
      </Sidebar>
    );
  }
}

export default 手機仔;
