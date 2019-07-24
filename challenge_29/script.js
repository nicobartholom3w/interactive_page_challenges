document.addEventListener("DOMContentLoaded", function(event){
	let textArea = document.getElementById("textarea");
	let highlights = document.querySelector(".backdrop__highlights");
	let backdrop = document.querySelector(".backdrop");
	let card = document.querySelector(".card");
	let marks;
	let mouseDown = false;

	function handleInput(event) {
		let highlightedText = applyHighlights(textArea.value);
		highlights.innerHTML = highlightedText;
	}

	function applyHighlights(text) {
		// check for newline
		let alignmentRegex = /\n$/g;
		text = text.replace(alignmentRegex, '\n\n');
		// check for hash
		let isHashRegex = /#[A-Za-z0-9_]*/g;
		text = text.replace(isHashRegex, "<mark>$&</mark>");

		return text;
	}

	function handleScroll(event) {
		let scrollTop = textArea.scrollTop();
		backdrop.scrollTop(scrollTop);
	}

	function mouseDownHandler(event) {
		mouseDown = true;
	}

	function mouseUpHandler(event) {
		mouseDown = false;
		card.style.height = textArea.clientHeight + "px";
		backdrop.style.zIndex = "1";
		textArea.style.backgroundColor = "transparent";
			for(let mark of marks) {
				mark.style.color = "transparent";
			}
	}

	function resizeHandler(event) {
		marks = Array.from(document.getElementsByTagName("mark"));
		if(mouseDown === true) {
			textArea.style.backgroundColor = "white";
			backdrop.style.zIndex = "3";
			for(let mark of marks) {
				mark.style.color = "black";
			}
		}
	}

	textArea.oninput = handleInput;
	textArea.onscroll = handleScroll;
	textArea.onmousedown = mouseDownHandler;
	textArea.onmousemove = resizeHandler;
	document.onmouseup = mouseUpHandler;
});