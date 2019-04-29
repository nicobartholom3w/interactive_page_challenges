document.addEventListener("DOMContentLoaded", function(event){
	let wordArray = ["design", "frontend", "backend", "testing"];
	let wordSpan = document.getElementsByClassName("word")[0];
	let wordSoFar = "";
	let wordSplit = "";
	let letterCount = 0;
	let wordCount = 0; 
	
	function rotateThroughWords() {
		wordSoFar = "";
		if(wordCount == 4){
			wordCount = 0;
		}
		let word = wordArray[wordCount];
		wordSplit = word.split("");
		wordCount++;
		setTimeout(() => spellOutWord(wordSplit, letterCount), 300);
	}

	function spellOutWord(wordSplit, letterCount) {
		let currentLetter = wordSplit[letterCount];
		wordSoFar += currentLetter;
		wordSpan.textContent = wordSoFar;
		letterCount++;
		if(letterCount < wordSplit.length){
			setTimeout(spellOutWord, 300, wordSplit, letterCount);
		}
		else {
			setTimeout(rotateThroughWords, 1500);
		}
	}


	setTimeout(rotateThroughWords, 300);
});


// Examples/notes
	// let i = 1;
		// var blee = (function() {
		// 	return function() {
		// 		console.log(i);
		// 	}
		// })();
		// i++;
		// var blah = (function() {
		// 	return function() {
		// 		console.log(i);
		// 	}
		// })();
		// blee();
		// blah();