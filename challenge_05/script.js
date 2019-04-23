document.addEventListener("DOMContentLoaded", function(event){
	let wordArray = ["design", "frontend", "backend", "testing"];
	let wordSpan = document.getElementsByClassName("word")[0];
	let wordSoFar = "";
	let wordSplit = "";
	let letterCount = 0;
	// change word when finished going through letters in current word
	// 
	
	function rotateThroughWords() {
		for(let word of wordArray){
			wordSplit = word.split("");
		}
	}

	function spellOutWord(wordSplit, letterCount) {
		let currentLetter = wordSplit[letterCount];
		wordSoFar += currentLetter;
		wordSpan.textContent = wordSoFar;
		letterCount++;
		if(letterCount < wordSplit.length){
			setTimeout(spellOutWord, 1000, wordSplit, letterCount);
		}
	}
	let apple = "apple";
	wordSplit = apple.split("");

	spellOutWord(wordSplit, letterCount);
});