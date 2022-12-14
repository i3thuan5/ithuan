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
    const { home, sanphin, tsuanan, suisiann, tsuan } = paths;
    return (
      <Segment id="appNav" textAlign='center' inverted vertical>
          <Menu secondary inverted size="large" pointing>
            <Container text>
              <Link className='favicon'><Image src={favicon} size="mini" alt="意傳Logo"/></Link>
              <Link to={home} className={this.getItemClass(home)}>首頁</Link>
              <Link to={sanphin} className={this.getItemClass(sanphin)}>產品</Link>
              <Link to={tsuanan} className={this.getItemClass(tsuanan)}>合作專案</Link>
              <Link to={suisiann} className={this.getItemClass(suisiann)}>SuíSiann</Link>
              <Link to={tsuan} className={this.getItemClass(tsuan)}>資訊安全政策</Link>
            </Container>
          </Menu>
      </Segment>
    );
  }
}

export default 頁首;
