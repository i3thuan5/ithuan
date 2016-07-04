import React from 'react';
import Transmit from 'react-transmit';
import Router from 'react-router';

class 線上組字 extends React.Component {

  render () {
    return (
        <div class="huainn5 關於意傳">
        <article>
            <section class="font22px">
                <header>線上組字</header>
            </section>
        </article>
        </div>
      );
  }
}

export default Transmit.createContainer(線上組字, { queries: {} });
