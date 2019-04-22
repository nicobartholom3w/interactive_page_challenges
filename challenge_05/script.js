document.addEventListener("DOMContentLoaded", function(event){
	let wordArray = ["design", "frontend", "backend", "testing"];
	let wordSpan = document.getElementsByClassName("word")[0];
	let wordSoFar = "";
	// change word when finished going through letters in current word
	// 
	for(let word of wordArray){
		let wordSplit = word.split("");
		let letterCount = 0;
		spellOutWord(wordSplit, letterCount);
	}

	function spellOutWord(wordSplit, letterCount) {
		let currentLetter = wordSplit[letterCount];
		wordSoFar += currentLetter;
		wordSpan.textContent = wordSoFar;
		letterCount++;
		if(letterCount < wordSplit.length){
			setTimeout(spellOutWord, 1000);
		}
	}
});