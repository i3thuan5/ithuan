import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Segment, Menu, Icon, Header } from 'semantic-ui-react';
import Debug from 'debug';
var debug = Debug('ithuan:頁首');

class 頁首 extends Component {
  constructor(props) {
    super(props);
    this.getItemClass = this.getItemClass.bind(this);
    // this.handleItemClick = this.handleItemClick.bind(this);
  }

  // handleItemClick(value) {
  //   this.props.handleItemClick(value);
  // }
  getItemClass(value) {
    return this.props.getClasses(value);
  }

  render() {
    const { paths } = this.props;

    return (
      <Segment id="appNav" textAlign='center' inverted vertical>
        <Container>
          <Menu secondary inverted size="large" pointing>
            {/*<Link to={paths.home} className={this.getItemClass(paths.home)} onClick={this.handleItemClick(paths.home)}>首頁</Link>
            <Link to={paths.tsooji} className={this.getItemClass(paths.tsooji)} onClick={this.handleItemClick(paths.tsooji)}>線上組字</Link>
            <Link to={paths.kosu} className={this.getItemClass(paths.kosu)} onClick={this.handleItemClick(paths.kosu)}>閩客故事</Link>
            <Link to={paths.siongkuan} className={this.getItemClass(paths.siongkuan)} onClick={this.handleItemClick(paths.siongkuan)}>相關連結</Link>
          */}
            <Link to={paths.home} className={this.getItemClass(paths.home)}>首頁</Link>
            <Link to={paths.tsooji} className={this.getItemClass(paths.tsooji)}>線上組字</Link>
            <Link to={paths.kosu} className={this.getItemClass(paths.kosu)}>閩客故事</Link>
            <Link to={paths.siongkuan} className={this.getItemClass(paths.siongkuan)}>相關連結</Link>
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default 頁首;
