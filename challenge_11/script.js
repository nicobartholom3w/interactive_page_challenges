document.addEventListener("DOMContentLoaded", function(event){
	let inputArray = Array.from(document.getElementsByClassName("form__input"))
	let submitButton = document.querySelector(".form__submit");
	
	function initializeForm() {
		for(let i = 0; i < inputArray.length; i++) {
			let inputBox = inputArray[i];
			inputBox.maxLength = "1";
			inputBox.setAttribute("oninput", "autotab(this, document.code.box" + (i + 2) + ")");
			inputBox.setAttribute("onkeydown", "deleteback(document.code.box" + i + ", this, event)");
			if(i == 0) {
				inputBox.focus();
			}
			else {
				inputBox.readOnly = "true";	
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

	function alert(event) {
		let valueArray = [];
		for(let element of inputArray) {
			element = element.value;
			valueArray.push(element);
		}
		window.alert("Value is " + valueArray.join(""));
		event.preventDefault();
	}

	initializeForm();

	document.onmousedown = preventFocus;
	document.onkeydown = preventFocusTab;
	document.onsubmit = alert;

});

function autotab(current, to) {
	if (current.getAttribute && current.value.length == current.getAttribute("maxlength")) {
		to.focus();
		to.readOnly = false; 
	}

  
}

function deleteback(previous, current, event) {
    if(current.value.length == 0 && event.keyCode == 8) {
    	current.blur();
    	current.readOnly = true;
    	previous.focus();
    	previous.value = "";
    	previous.readOnly = false;
	}
}


