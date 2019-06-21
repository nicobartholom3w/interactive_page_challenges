document.addEventListener("DOMContentLoaded", function(event){
	let optionsDisplay = document.querySelector(".select");
	let colorHighlightArray = Array.from(document.getElementsByClassName("color-highlight"));
	let colorsArray = Array.from(document.getElementsByClassName("color"));
	let colorObj = {};
	let currentColorIndex = 0;
	let displayed = false;

	function showOptionsDisplay(event) {
		event.stopPropagation();
		if(event.shiftKey && event.keyCode === 9) {
			event.preventDefault();
			optionsDisplay.classList.add("select-active");
			currentColorIndex = changeHighlight(currentColorIndex);
			displayed = true;
		}
	}

	function removeOptionsDisplay(event) {
		if(event.keyCode === 16 && displayed) {
			changeColor(currentColorIndex);
			optionsDisplay.classList.remove("select-active");
		}	
	}

	function changeColor(currentColorIndex) {
		let newColor = getComputedStyle(colorsArray[currentColorIndex]);
		document.body.style.backgroundColor = newColor.getPropertyValue("background-color");
	}

	function changeHighlight(currentColorIndex){
		colorHighlightArray[currentColorIndex].classList.remove("color-highlight-active");
		if(currentColorIndex == colorsArray.length - 1){
			currentColorIndex = 0;
		}
		else {
			currentColorIndex++;
		}
		colorHighlightArray[currentColorIndex].classList.add("color-highlight-active");	
		return currentColorIndex;
	}

	document.onkeydown = showOptionsDisplay;
	document.onkeyup = removeOptionsDisplay;
});