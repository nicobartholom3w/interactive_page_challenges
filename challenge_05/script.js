document.addEventListener("DOMContentLoaded", function(event){
	let wordArray = ["design", "frontend", "backend", "testing"];
	let wordSpan = document.getElementsByClassName("word")[0];

	function changeWord (){
		for (let word of wordArray){

			function nextWord () {
				wordSpan.textContent = word;
			}
			setTimeout(nextWord, 3000);
		}
	}

	changeWord();
});