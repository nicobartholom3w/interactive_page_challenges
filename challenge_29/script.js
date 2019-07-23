document.addEventListener("DOMContentLoaded", function(event){
	let textArea = document.getElementById("textarea");
	let highlights = document.querySelector(".backdrop__highlights");
	let backdrop = document.querySelector(".backdrop");
	let isHashtag = false;

	function checkKeyDown(event) {
		if(event.key === "#") {
			isHashtag = true;
		}
		if(isHashtag && (event.key === " ")) {
			isHashtag = false;
		}
	}

	function handleInput(event) {
		let highlightedText = applyHighlights(textArea.value);
		highlights.innerHTML = highlightedText;
	}

	function applyHighlights(text) {
		let alignmentRegex = /\n$/g;
		if(text.match(alignmentRegex)) {
			console.log(text);
		}
		text = text.replace(alignmentRegex, '\n\n');

		let isHashRegex = /#\S+/gi;
		let matches = text.match(isHashRegex);
		if(matches) {
			for(let match of matches) {
				// for all
				text = text.replace(match, "<mark>" + match + "</mark>");
			}
		}

		return text;
	}

	function handleScroll(event) {
		let scrollTop = textArea.scrollTop();
		backdrop.scrollTop(scrollTop);
	}

	textArea.oninput = handleInput;
	textArea.onscroll = handleScroll;
	textArea.onkeydown = checkKeyDown;
});