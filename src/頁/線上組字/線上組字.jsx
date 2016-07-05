import React from 'react';
import 組字圖 from './組字圖';
import 鍵盤 from './鍵盤';

export default class 線上組字 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      組字式: this.props.組字式 || '',
    };
  }

  改組字式(textarea)
  {
    let 組字式 = textarea.target.value;
    this.setState({ 組字式: 組字式 });
  }

  render () {
    let { 組字式 } = this.state;
    return (
      <article>
        <section id="線上組字">
          <table><tbody>
          <tr>
            <td>
              <組字圖 組字式={組字式}/>
            </td>
            <td>
              <textarea id='組字式輸入' ref="組字式輸入"
                defaultValue={組字式}
                onKeyUp={this.改組字式.bind(this)}
                onChange={this.改組字式.bind(this)}
                ></textarea>
            </td>
          </tr>
          </tbody></table>
          
          <br />
          <鍵盤 加物件={this.addTextonInputSelection.bind(this)} />
          </section>
          
        </article>
     );
  }

  addTextonInputSelection(value) {
    let field = document.getElementById('組字式輸入');
    let sel = this.getInputSelection(field);
    this.insertAtCursor(field, value);
    this.setInputSelection(field, sel.start + value.length, sel.end +  value.length);
  }

  // tui2 http://snipplr.com/view/1384/insertatcursor/
  getInputSelection(el) {
    let start = 0;
    let end = 0;

    if (typeof el.selectionStart == 'number'
        && typeof el.selectionEnd == 'number') {
      start = el.selectionStart;
      end = el.selectionEnd;
    } else {
      let  range = document.selection.createRange();

      if (range && range.parentElement() == el) {
        let len = el.value.length;
        let normalizedValue = el.value.replace(/\r\n/g, '\n');

        // Create a working TextRange that lives only in the input
        let  textInputRange = el.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());

        // Check if the start and end of the selection are at the very end
        // of the input, since moveStart/moveEnd doesn't return what we want
        // in those cases
        let  endRange = el.createTextRange();
        endRange.collapse(false);

        if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
          start = end = len;
        } else {
          start = -textInputRange.moveStart('character', -len);
          start += normalizedValue.slice(0, start).split('\n').length - 1;

          if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
            end = len;
          } else {
            end = -textInputRange.moveEnd('character', -len);
            end += normalizedValue.slice(0, end).split('\n').length - 1;
          }
        }
      }
    }

    return {
      start: start,
      end: end,
    };
  }

  // tui2
  // http://stackoverflow.com/questions/3286595/update-textarea-value-but-keep-cursor-position
  insertAtCursor(myField, myValue) {

    // IE support
    if (document.selection) {
      myField.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      this.setState({ 組字式: sel.text });
    }

    // MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      myField.value = myField.value.substring(0, startPos) + myValue
          + myField.value.substring(endPos, myField.value.length);
    } else {
      myField.value += myValue;
    }

    this.setState({ 組字式: myField.value });
  }

  offsetToRangeCharacterMove(el, offset) {
    return offset - (el.value.slice(0, offset).split('\r\n').length - 1);
  }

  setInputSelection(el, startOffset, endOffset) {
    if (typeof el.selectionStart == 'number'
        && typeof el.selectionEnd == 'number') {
      el.selectionStart = startOffset;
      el.selectionEnd = endOffset;
    } else {
      let range = el.createTextRange();
      let startCharMove = offsetToRangeCharacterMove(el, startOffset);
      range.collapse(true);
      if (startOffset == endOffset) {
        range.move('character', startCharMove);
      } else {
        range.moveEnd('character',
            offsetToRangeCharacterMove(el, endOffset));
        range.moveStart('character', startCharMove);
      }

      range.select();
    }
  }
}
