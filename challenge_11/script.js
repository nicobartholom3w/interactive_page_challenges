document.addEventListener("DOMContentLoaded", function(event){
	let inputArray = Array.from(document.getElementsByClassName("form__input"))
	let fieldSet = document.querySelector(".form__fieldset");
	
	function initializeForm() {
		for(let i = 0; i < inputArray.length; i++) {
			let inputBox = inputArray[i];
			inputBox.maxLength = "1";
			inputBox.setAttribute("oninput", "autotab(this, document.code.box" + (i + 2) + ")");
			inputBox.setAttribute("onkeydown", "deleteback(document.code.box" + i + ", this, event)");
			inputBox.setAttribute("focus", "false");
			if(i == 0) {
				inputBox.setAttribute("focus", "true");
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

	function setFocus(event) {
		for(let element of inputArray) {
			if(event.target.parentNode == fieldSet) {
				if(element.getAttribute("focus") == "true") {
					element.focus();
				}
			}
			else {
				element.blur();
			}
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
		for(let element of inputArray) {
			if(element.getAttribute("focus") == "true") {
				element.focus();
			}
		}
	}

	initializeForm();

	document.onmousedown = preventFocus;
	document.onkeydown = preventFocusTab;
	document.onsubmit = alert;
	document.onclick = setFocus;
});

function autotab(current, to) {
	if (current.getAttribute && current.value.length == current.getAttribute("maxlength")) {
		if(to == null ) {
			return;
		}
		current.setAttribute("focus", "false");
		to.setAttribute("focus", "true");
		to.focus();
		to.readOnly = false; 
	}

  
}

function deleteback(previous, current, event) {
    if(current.value.length == 0 && event.keyCode == 8) {
    	current.setAttribute("focus", "false");
    	previous.setAttribute("focus", "true");
    	current.blur();
    	current.readOnly = true;
    	previous.focus();
    	previous.value = "";
    	previous.readOnly = false;
	}
}

