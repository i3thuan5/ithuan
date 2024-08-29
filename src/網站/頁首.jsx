import React from 'react';
import { Link } from 'react-router';
import { Container, Segment, Menu, Icon, Header, Image } from 'semantic-ui-react';
import favicon from '../../favicons/android-chrome-192x192.png';


class 頁首 extends React.Component {
  constructor(props) {
    super(props);
    this.getItemClass = this.getItemClass.bind(this);
  }

  getItemClass(value) {
    return this.props.getClasses(value);
  }

  render() {
    const { paths } = this.props;
    return (
      <Segment id="appNav" textAlign='center' inverted vertical style={{paddingLeft: "3rem"}}>
          <Menu secondary inverted pointing>
              <Image src={favicon} size="mini" alt="意傳Logo" style={{marginRight: "1rem", marginTop: ".85714286em", "height": "35px"}}/>
              <Link to={paths.home} className={this.getItemClass(paths.home)}>首頁</Link>
              <Link to={paths.taigi} className={this.getItemClass(paths.taigi)}>台語專案</Link>
              <Link to={paths.pangcah} className={this.getItemClass(paths.pangcah)}>Pangcah專案</Link>
              <Link to={paths.kaxabu} className={this.getItemClass(paths.kaxabu)}>Kaxabu專案</Link>
              <Link to={paths.hakka} className={this.getItemClass(paths.hakka)}>客話專案</Link>
              <Link to={paths.tsuan} className={this.getItemClass(paths.tsuan)}>資訊安全政策</Link>
          </Menu>
      </Segment>
    );
  }
}

export default 頁首;
