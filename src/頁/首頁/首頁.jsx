import React from 'react';
import { Link } from 'react-router';
// import './首頁.css';
// import 標音 from './標音.png';
// import 翻譯 from './翻譯.png';
// import 發音 from './發音.png';
// import 組字 from './組字.png';
import { Container, Segment } from 'semantic-ui-react';
export default class 首頁 extends React.Component {

  render () {
    return (
      <Segment textAlign='center' inverted vertical>

    <Container>
      <div className="ui large secondary inverted pointing menu">
        <a className="toc item">
          <i className="sidebar icon"></i>
        </a>
        <a className="active item">Home</a>
        <a className="item">Work</a>
        <a className="item">Company</a>
        <a className="item">Careers</a>
      </div>
    </Container>

    <Container className="ui text container">
      <h1 className="ui inverted header">
        意傳文化科技
      </h1>
      <h2>Do whatever you want when you want to.</h2>
      <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
    </Container>

  </Segment>
      );
  }
}
