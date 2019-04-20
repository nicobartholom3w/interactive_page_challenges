document.addEventListener("DOMContentLoaded", function(event){
	let wordArray = ["design", "frontend", "backend", "testing"];
	let wordSpan = document.getElementsByClassName("word")[0];
	let currentWord = 0;
	
	let changeWordId = setInterval(function() {
		wordSpan.textContent = wordArray[currentWord];
		currentWord++;
	}, 2000);
});