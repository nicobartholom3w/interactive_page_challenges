document.addEventListener("DOMContentLoaded", function(event){
	let wordArray = ["design", "frontend", "backend", "testing"];
	let wordSpan = document.getElementsByClassName("word")[0];
	let currentWord = 0;
	let currentLetter = 0;
	
	let changeWordId = setInterval(function() {
		let changeLetterId = setInterval(function() {
			let thisWord = wordArray[currentWord];
			thisWordArray = thisWord.split("");
			wordSpan.textContent = thisWordArray[currentLetter];
			currentLetter++;
		}, 2000);
		currentWord++;
		if(currentWord == 4){
			currentWord = 0;
		}
	}, 2000);
});