import React from 'react';
import Transmit from 'react-transmit';
import Router from 'react-router';

class 首頁 extends React.Component {

  render () {
    return (
        <div className='app background'>
         首頁
        </div>
      );
  }
}

export default Transmit.createContainer(首頁, { queries: {} });
