var tsoo2ji7ting5sik4 = 'http://xn--v0qr21b.xn--kpry57d/組字/';

function tsoo2han3ji7(beh4tshu2li2bo5) {
	tshue7tsoo2ji7(document.getElementsByTagName('body')[0], beh4tshu2li2bo5);
}
function long2ai2tshu2li2(ji7) {
	return true;
}
function tshue7tsoo2ji7(element, beh4tshu2li2bo5) {
	beh4tshu2li2bo5 = beh4tshu2li2bo5 || si7tsoo2hap8bo5;
	var fontFamily = '宋體', fontSize = '16px', fontWeight = '400';
	if (window.getComputedStyle && window.getComputedStyle(element)) {
		fontFamily = window.getComputedStyle(element).fontFamily;
		fontSize = window.getComputedStyle(element).fontSize;
		fontWeight = window.getComputedStyle(element).fontWeight;
	} else if (element.currentStyle) {
		fontFamily = element.currentStyle.fontFamily;
		fontSize = element.currentStyle.fontSize;
		fontWeight = element.currentStyle.fontWeight;
	}

	if (element.hasChildNodes()) {
		var ELEMENT_NODE = 1;
		var TEXT_NODE = 3;
		var targetNode = element.firstChild;
		while (targetNode) {
			var nextNode = targetNode.nextSibling;
			// alert("還在" + element + "的" + i + " " + targetNode.nodeType
			// + " Value='" + targetNode.nodeValue + "' html='"
			// + targetNode.innerHTML + "' " + (ELEMENT_NODE)
			// + " nodeName=" + targetNode.nodeName);//

			if (targetNode.nodeType === ELEMENT_NODE) {
				if (targetNode.nodeName != 'SCRIPT') {
					tshue7tsoo2ji7(targetNode, beh4tshu2li2bo5);
				}
			} else if (targetNode.nodeType === TEXT_NODE) {
				var newArray = ka7ji7uann7tiau7(targetNode, fontFamily,
						fontSize, fontWeight, beh4tshu2li2bo5);
				if (newArray.length > 0) {
					for ( var j = 0; j < newArray.length; ++j)
						element.insertBefore(newArray[j], targetNode);
					element.removeChild(targetNode);
				}
			}
			targetNode = nextNode;
		}
	}
}
function ka7ji7uann7tiau7(textNode, fontFamily, fontSize, fontWeight,
		beh4tshu2li2bo5) {
	var ji7the2 = kuah4tin7ji7the2(fontFamily, fontWeight);
	var newArray = new Array();
	var start = 0;
	for ( var i = 0; i < textNode.nodeValue.length; ++i) {
		if (beh4tshu2li2bo5(textNode.nodeValue[i])) {
			var middle = i;
			var num = 0;
			for (i; i < textNode.nodeValue.length && num < 1; ++i) {
				if (si7tsoo2hap8bo5(textNode.nodeValue[i])) {
					num--;
				} else {
					num++;
				}
			}
			var end = i;
			newArray[newArray.length] = document
					.createTextNode(textNode.nodeValue.substring(start, middle));
			var tsoo2ji3 = textNode.nodeValue.substring(middle, end);
			var img = document.createElement('img');
			img.setAttribute('class', 'tsoo2ji3');
			img.setAttribute('src', tsoo2ji7ting5sik4 + ji7the2 + '/'
					+ tiau5tsing2tsoo2ji7sik4(tsoo2ji3) + '.png');
			img.setAttribute('alt', tsoo2ji3);
			img.setAttribute('title', tsoo2ji3);
			img.setAttribute('height', fontSize);
			img.setAttribute('width', fontSize);/*for ie = =++*/
			newArray[newArray.length] = img;// */
			start = i;
			--i;
		}
		// alert(textNode.nodeValue[i]);
	}
	if (start != 0) {
		newArray[newArray.length] = document.createTextNode(textNode.nodeValue
				.substring(start, i));
	}
	return (newArray);
}
function si7tsoo2hap8bo5(ji7) {
	switch (ji7) {
	case '⿰':
	case '⿱':
	case '⿴':
	case '⿳':
	case '⿻':
		return true;
	}
	return false;
}
function kuah4tin7ji7the2(fontFamily, fontWeight) {
	var ji7the2 = '宋體';
	if (fontFamily.indexOf('楷') !== -1)
		ji7the2 = '楷體';
	if (+fontWeight >= +700)
		ji7the2 += '粗體';
	return ji7the2;
}
function pian3tng2tsoo2ji7sik4() {
	var tsoo2ji7too5 = document.getElementsByClassName('tsoo2ji3');
	for ( var i = tsoo2ji7too5.length - 1; i >= 0; --i) {
		var bun5ji7 = document.createTextNode(tsoo2ji7too5[i].alt);
		var parent = tsoo2ji7too5[i].parentNode;
		parent.replaceChild(bun5ji7, tsoo2ji7too5[i]);
	}
}
function tiau5tsing2tsoo2ji7sik4(tsoo2ji7sik4) {
	return tsoo2ji7sik4.replace(/\u00a0/g, ' ');
}