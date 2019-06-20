document.addEventListener("DOMContentLoaded", function(event){
	let optionsDisplay = document.querySelector(".select");
	let colorHighlightArray = Array.from(document.getElementsByClassName("color-highlight"));
	let colorsArray = Array.from(document.getElementsByClassName("color"));
	let colorObj = {};
	currentColorIndex = 0;
	let displayed = false;

	function showOptionsDisplay(event) {
		event.stopPropagation();
		event.preventDefault();
		if(event.shiftKey && event.keyCode === 9) {
			optionsDisplay.classList.add("select-active");
			changeHighlight(currentColorIndex);
			displayed = true;
		}
		return currentColorIndex;
	}

	function removeOptionsDisplay(event) {
		if(event.keyCode === 16 && displayed) {
			changeColor(currentColorIndex);
			optionsDisplay.classList.remove("select-active");
		}
		
	}

	function changeColor(currentColorIndex) {
		document.body.style.backgroundColor = colorsArray[currentColorIndex].style.backgroundColor;
	}

	function changeHighlight(currentColorIndex){
		colorHighlightArray[currentColorIndex].classList.remove("color-highlight-active");
		if(currentColorIndex == colorsArray.length - 1){
			colorHighlightArray[currentColorIndex--].classList.add("color-highlight-active");
		}
		colorHighlightArray[currentColorIndex++].classList.add("color-highlight-active");
		return currentColorIndex;
	}

	document.onkeydown = showOptionsDisplay;
	document.addEventListener("keyup", (event) => {
		console.log("keyup");
		removeOptionsDisplay(event);
	});
});