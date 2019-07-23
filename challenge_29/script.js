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
		text = text.replace(/\n$/gi, '\n\n');
		let isHashRegex = /#\S+/gi;
		// if(isHashRegex.exec(text)) {
		// 	console.log("match");
		// }
		let matches = text.match(isHashRegex);
		console.log(matches);
		if(matches) {
			for(let match of matches) {
				console.log(match);
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