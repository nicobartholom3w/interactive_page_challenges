document.addEventListener("DOMContentLoaded", function(event){
	let inputArray = document.getElementsByClassName("form__input");
	initializeForm();


	function initializeForm() {
		for(let i = 0; i < inputArray.length; i++) {
			let inputBox = inputArray[i];
			inputBox.maxLength = "1";
			if(i == 0) {
				inputBox.focus();
			}
			else {
				inputBox.readOnly = true;	
			}
		}
	}

	function autoTab(current, to) {
		if (current.getAttribute && current.value.length==current.getAttribute("maxlength")) {
        	to.focus(); 
    	}
	}


document.oninput = autoTab;





});