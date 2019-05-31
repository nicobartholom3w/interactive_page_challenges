document.addEventListener("DOMContentLoaded", function(event){
	let inputArray = document.getElementsByClassName("form__input");
	
	function initializeForm() {
		for(let i = 0; i < inputArray.length; i++) {
			let inputBox = inputArray[i];
			inputBox.maxLength = "1";
			if(i == 0) {
				inputBox.focus();
			}
			else {
				inputBox.readOnly = "true";	
			}
			if(i < inputArray.length - 1){
				inputBox.setAttribute("oninput", "autotab(this, document.code.box" + (i + 2) + ")");
			}
		}
	}

	function preventFocus(event) {
		event.preventDefault();
	}

	function preventFocusTab(event) {
		if(event.keyCode == 9) {
			event.preventDefault();
		}
	}

	initializeForm();

	document.onmousedown = preventFocus;
	document.onkeydown = preventFocusTab;
});

function autotab(current, to) {
	if (current.getAttribute && current.value.length == current.getAttribute("maxlength")) {
    	to.focus();
    	to.readOnly = false; 
    }
}




