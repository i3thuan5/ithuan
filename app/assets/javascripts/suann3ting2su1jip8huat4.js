var su1jip8, ket4ko2;
var huan7ui5;
var oo1, beh8;
function tsit8khai1si2() {
	su1jip8 = document.getElementById('su1jip8');
	ket4ko2 = document.getElementById('ket4ko2');
	oo1 = '■';
	beh8 = '□';
	ket4ko2.focus();
	ki3lok8huan7ui5();
	su1jip8.focus();
	kiam2tsa1();
	setInterval("hian2si7too5()", 1000);
}
function ki3lok8huan7ui5() {
	var sin1huan7ui5 = window.getSelection().getRangeAt(0);
	// alert("t1="+sin1huan7ui5.startContainer.parentNode.tagName);
	// alert("t2="+sin1huan7ui5.startContainer.parentNode.id);
	// alert("t3="+sin1huan7ui5.startContainer.tagName);
	// alert("t4="+sin1huan7ui5.startContainer.id);
	if (sin1huan7ui5.startContainer.id == 'ket4ko2'
			|| sin1huan7ui5.startContainer.parentNode.id == 'ket4ko2')
		huan7ui5 = sin1huan7ui5;
}
function set4ting7too5(te7it4e5too5, te7ji7e5too5) {
	var too5it4 = document.getElementById("hian2si7too5it4");
	var too5ji7 = document.getElementById("hian2si7too5ji7");
	too5it4.src = tsoo2ji7ting5sik4 + '宋體/' + te7it4e5too5 + '.png';
	too5ji7.src = tsoo2ji7ting5sik4 + '宋體/' + te7ji7e5too5 + '.png';
}
function hian2si7too5() {
	var too5it4 = document.getElementById("hian2si7too5it4");
	var too5ji7 = document.getElementById("hian2si7too5ji7");
	if (too5it4.style.display == "none") {
		too5it4.style.display = "block";
		too5ji7.style.display = "none";
	} else {
		too5ji7.style.display = "block";
		too5it4.style.display = "none";
	}
}
function kiam2tsa1() {
	var num = 0;
	var i = 0;
	for (; i < su1jip8.value.length && num < 1; ++i) {
		if (si7tsoo2hap8bo5(su1jip8.value[i])) {
			num--;
		} else {
			num++;
		}
	}
/*	if (i != su1jip8.value.length) {
		var tshah4 = su1jip8.value.substring(0, i);
		var tshun1 = su1jip8.value.substring(i);
		su1jip8.value = tshun1;
		ket4ko2tshah4ji7(tshah4);
		kiam2tsa1();
	}*/
	var piau5si7too5 = su1jip8.value;
	if (num < 1) {
		piau5si7too5 += oo1;
		num++;
	}
	while (num < 1) {
		piau5si7too5 += beh8;
		num++;
	}
	var uan5too5 = piau5si7too5.replace(oo1, beh8);
	set4ting7too5(piau5si7too5, uan5too5);
}
function sang3tsut4su1jip8() {
	var num = 0;
	var i = 0;
	for (; i < su1jip8.value.length && num < 1; ++i) {
		if (si7tsoo2hap8bo5(su1jip8.value[i])) {
			num--;
		} else {
			num++;
		}
	}
	if (num == 1) {
		var tshah4 = su1jip8.value.substring(0, i);
		var tshun1 = su1jip8.value.substring(i);
		su1jip8.value = tshun1;
		ket4ko2tshah4ji7(tshah4);
		sang3tsut4su1jip8();
	}
	tshue7tsoo2ji7(ket4ko2);
}
function ket4ko2tshah4ji7(ji7) {
	var newNode = document.createTextNode(ji7);
	huan7ui5.deleteContents();
	huan7ui5.insertNode(newNode);
	huan7ui5.setStartAfter(newNode);
	huan7ui5.setEndAfter(newNode);
}
// tui2
// http://stackoverflow.com/questions/3286595/update-textarea-value-but-keep-cursor-position
function insertAtCursor(myField, myValue) {
	// IE support
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
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
}
// tui2 http://snipplr.com/view/1384/insertatcursor/
function getInputSelection(el) {
	var start = 0, end = 0, normalizedValue, range, textInputRange, len, endRange;

	if (typeof el.selectionStart == "number"
			&& typeof el.selectionEnd == "number") {
		start = el.selectionStart;
		end = el.selectionEnd;
	} else {
		range = document.selection.createRange();

		if (range && range.parentElement() == el) {
			len = el.value.length;
			normalizedValue = el.value.replace(/\r\n/g, "\n");

			// Create a working TextRange that lives only in the input
			textInputRange = el.createTextRange();
			textInputRange.moveToBookmark(range.getBookmark());

			// Check if the start and end of the selection are at the very end
			// of the input, since moveStart/moveEnd doesn't return what we want
			// in those cases
			endRange = el.createTextRange();
			endRange.collapse(false);

			if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
				start = end = len;
			} else {
				start = -textInputRange.moveStart("character", -len);
				start += normalizedValue.slice(0, start).split("\n").length - 1;

				if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
					end = len;
				} else {
					end = -textInputRange.moveEnd("character", -len);
					end += normalizedValue.slice(0, end).split("\n").length - 1;
				}
			}
		}
	}

	return {
		start : start,
		end : end
	};
}

function offsetToRangeCharacterMove(el, offset) {
	return offset - (el.value.slice(0, offset).split("\r\n").length - 1);
}

function setInputSelection(el, startOffset, endOffset) {
	if (typeof el.selectionStart == "number"
			&& typeof el.selectionEnd == "number") {
		el.selectionStart = startOffset;
		el.selectionEnd = endOffset;
	} else {
		var range = el.createTextRange();
		var startCharMove = offsetToRangeCharacterMove(el, startOffset);
		range.collapse(true);
		if (startOffset == endOffset) {
			range.move("character", startCharMove);
		} else {
			range.moveEnd("character",
					offsetToRangeCharacterMove(el, endOffset));
			range.moveStart("character", startCharMove);
		}
		range.select();
	}
}
function addTextonInputSelection(field, value) {
	var sel = getInputSelection(field);
	insertAtCursor(field, value);
	field.focus();
	setInputSelection(field, sel.start + value.length, sel.end +  value.length);
	kiam2tsa1();
}