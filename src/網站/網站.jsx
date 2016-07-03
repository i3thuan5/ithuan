import React from 'react';
import Transmit from 'react-transmit';
import Router from 'react-router';

class 網站 extends React.Component {

  render () {
    return (
        <div className='app background'>
          <header className='app header'>
            XX
          </header>
          {
            React.cloneElement(this.props.children,
            { 
            }
          )}
          <footer className='app footer inverted'>
            <ul className='ui menu container inverted'>
              <li className='item'><a href='https://g0v.hackpad.com/f4rSgcFTIzz'>我想幫忙</a></li>
              <li className='item'><a href='http://sih4sing5hong5.github.io/tai5-uan5_gian5-gi2_hok8-bu7/%E5%8C%AF%E5%85%A5%E8%B3%87%E6%96%99.html'>語料來源</a></li>
              <li className='item'><a href='http://docs.tai5uan5gian5gi2hok8bu7.apiary.io/'>服務API</a></li>
            </ul>
          </footer>
        </div>
      );
  }
}

export default Transmit.createContainer(網站, { queries: {} });
