document.addEventListener("DOMContentLoaded", function(event){
	let scrollButtons = Array.from(document.getElementsByClassName("scroll-button"));
	let scrollRightButton = scrollButtons[1];
	let scrollLeftButton = scrollButtons[0];
	let scrollBox = document.querySelector(".no-overflow");
	let containerContent = document.querySelector(".container-content");
	let blocksArray = Array.from(document.getElementsByClassName("block"));
	let blocksArrayIndex = 0;
	let position = 0;

	function scrollToRight(event) {
		position += blocksArray[blocksArrayIndex].offsetWidth;
		scrollBox.scrollTo({
			top: 0,
			left: position,
			behavior: "smooth"
		});
		if(position > 0) {
			scrollLeftButton.classList.add("scroll-button-left");
		}
		if(position >= containerContent.offsetWidth/2) {
			scrollRightButton.classList.remove("scroll-button-right");
		}
		blocksArrayIndex++;
		// console.log("current scroll value after plus: " + position + "\ncurrent block: " + blocksArray[blocksArrayIndex].offsetWidth);
	}

	function scrollToLeft(event) {
		blocksArrayIndex--;
		position -= blocksArray[blocksArrayIndex].offsetWidth;
		scrollBox.scrollTo({
			top: 0,
			left: position,
			behavior: "smooth"
		});
		if(position === 0){
			scrollLeftButton.classList.remove("scroll-button-left");
		}
		if(position <= containerContent.offsetWidth/2) {
			scrollRightButton.classList.add("scroll-button-right");
		}
		// console.log("current scroll value after minus : " + scrollBox.scrollLeft + "\ncurrent block: " + blocksArray[blocksArrayIndex].offsetWidth);
	}
	scrollRightButton.onclick = scrollToRight;
	scrollLeftButton.onclick = scrollToLeft;
});

	function isPermutation(strA, strB) {
		// if (strA.length !== strB.length) {
		// 	return false
		// }
		// for (let i = 0; i < strA.length; i++) {
		// 	let countA = 1;
		// 	let countB = 0;
		// 	for(let k = i + 1; k < strA.length; k++) {
		// 		if (strA[i] === strA[k]) {
		// 			countA++;
		// 		}	
		// 	}
		// 	for(let m = 0; m < strB.length; m++) {
		// 		if (strA[i] === strB[m]) {
		// 			countB++;
		// 		}
		// 	}
		// 	if(countA !== countB) {
		// 		return false;
		// 	}
		// }
		// return true;
		if (strA.length !== strB.length) {
			return false
		}
		strA = strA.split("").sort().join("");
		strB = strB.split("").sort().join("");

		for (let i = 0; i < strA.length; i++) {
			if (strA[i] !== strB[i]) {
				return false;
			}
		}
		return true;
	}

	// console.log(isPermutation("abc", "bca"));
	function URLify(str, len) {
		str = Array.from(str);
		// keeps track of how many space char we have currently from the current index all the way to the last
		let space = 0;
		// keeps track of how many characters we have currently from the current index all the way to the last
		let numOfChars = 0;
		let counta = 0;
		let countb = 0;
		let sumb = 0;
		for(let i = str.length - 1; i >= 0; i--){
			if(str[i] === " ") {
				space++;
				if(numOfChars > 0){
					str[str.length - 1 - numOfChars] = "0";
					str[str.length - numOfChars - 2] = "2";
					str[str.length - numOfChars - 3] = "%";
					numOfChars = numOfChars + 3;
					space = space - 3;
				}
			}

			else {
				// initialize a variable as i to be able to change value for loop
				let num = i;
				numOfChars++;
				
				// moves index values with characters one index to the right for number of spaces times
				for(let k = space; k > 0; k--) {
					let current = str[num];
					let next = str[num + 1];
					let temp = current;
					str[num] = next;
					str[num + 1] = current;
					num++;
					countb++;
					
				}
				sumb += countb;
			}	
			counta++;
			// console.log(str + " spaces: " + space + " counta: " + counta + " countb: " + countb + " sumb: " + sumb);
			countb = 0;
		}
		return str.join("");
	}
	// console.log(URLify("mr. apple juice a a        ", 19));
	// O(n^2 logn)?


	// for(let i = str.length - 1; i < str.length; i--) {
	// 		let before = str[i - 1];
	// 		let after = str[i + 1];
	// 		if(str[i] == " " && before !== " " && after !== " ") {
	// 			str[i] = "%20";
	// 		}
	// 	}