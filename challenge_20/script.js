document.addEventListener("DOMContentLoaded", function(event){
	let optionsArray = Array.from(document.getElementsByClassName("option"));
	let optionsButtonsArray = Array.from(document.getElementsByClassName("option__listitem"));
	let optionsDescriptionArray = Array.from(document.getElementsByClassName("option__description"));
	let buttonHeight = parseInt(getComputedStyle(document.querySelector(".option")).height);
	let option = {};

	addListener(optionsButtonsArray);
	createOptionObject(optionsArray, optionsButtonsArray, optionsDescriptionArray);

	function addListener(buttons) {
		buttons.forEach(() => {
			this.addEventListener("click", isClicked);
		}); 
	}

	function createOptionObject(optionsArray, optionsButtonsArray, optionsDescriptionArray) {
		for(let i = 1; i <= optionsArray.length; i++){
			option[i] = {optionBlock: optionsArray[i - 1], optionButton: optionsButtonsArray[i - 1], optionDescription: optionsDescriptionArray[i - 1]};
		}
	}

	function isClicked(event) {
		for(let button of optionsButtonsArray) {
			if(event.target.getAttribute("active") === "false" && event.target === button) {
				makeActive(event.target);
			}
			else {
				makeNotActive(button);
			}
		}
	}

	function makeActive(element) {
		let num = Number.parseInt(element.getAttribute("data-option"));
		let currentObj = option[num];
		let currentDescriptionHeight = parseInt(getComputedStyle(currentObj.optionDescription).height);
		currentObj.optionBlock.classList.add("option-active");
		currentObj.optionButton.classList.add("option__listitem-active");
		currentObj.optionBlock.style.height = currentDescriptionHeight + buttonHeight + "px";
		element.setAttribute("active", "true");
	}

	function makeNotActive(element) {
		let num = Number.parseInt(element.getAttribute("data-option"));
		let currentObj = option[num];
		currentObj.optionBlock.classList.remove("option-active");
		currentObj.optionButton.classList.remove("option__listitem-active");
		currentObj.optionBlock.style.height = buttonHeight + "px";
		element.setAttribute("active", "false");
	}


});