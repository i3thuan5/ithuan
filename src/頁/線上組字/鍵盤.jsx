import React from 'react';

export default class 鍵盤 extends React.Component {

  render () {
    return (
            <table className="鍵盤"><tbody>
              <tr><td>
              一般符號：
              <input className="tsoo2ji7liu2a2" type="button" value="{{ 字 }}"
               onClick={this.props.加物件.bind(this, 'b')} />
                </td><td>
            注音符號： 
              <input className="tsoo2ji7liu2a2" type="button" value="{{ 字 }}"
               onClick={this.props.加物件.bind(this, 'a')} />
                  <br/>
              </td><td>
              
            </td></tr></tbody></table>
     );
  }
}
