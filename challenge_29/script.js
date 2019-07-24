document.addEventListener("DOMContentLoaded", function(event){
	let textArea = document.getElementById("textarea");
	let highlights = document.querySelector(".backdrop__highlights");
	let backdrop = document.querySelector(".backdrop");

	function handleInput(event) {
		let highlightedText = applyHighlights(textArea.value);
		highlights.innerHTML = highlightedText;
	}

	function applyHighlights(text) {
		// check for newline
		let alignmentRegex = /\n$/g;
		text = text.replace(alignmentRegex, '\n\n');
		// check for hashtag
		let isHashRegex = /#[A-Za-z0-9_]*/g;
		text = text.replace(isHashRegex, "<mark>$&</mark>");

		return text;
	}

	function handleScroll(event) {
		let scroll = textArea.scrollTop;
		backdrop.scrollTop = scroll;
	}

	textArea.oninput = handleInput;
	textArea.onscroll = handleScroll;
});