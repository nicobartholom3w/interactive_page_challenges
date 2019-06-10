document.addEventListener("DOMContentLoaded", function(event){
	let optionsArray = Array.from(document.getElementsByClassName("option"));
	let optionsBoxArray = Array.from(document.getElementsByClassName("option__box"));
	let formTitleField = document.querySelector(".form__title");
	let formTitleFieldInit = formTitleField.innerText;
	let orderText;
	let previousOrder;
	let displayCount = 0;
	let extraCount = 0;
	initCheckboxFunction();

	function initCheckboxFunction() {


		for(let i = 0; i < optionsArray.length; i++) {
			let option = optionsArray[i];
			let optionBox = optionsBoxArray[i];
			option.addEventListener("click", function(event){
				if(this == event.target) {
					if(event.target.checked) {
						unSelected(option, event);
					}
					else {
						selected(option, event);
					}
				}
				else {
					event.stopPropagation();
				}
			});
		}
	}

	function selected(node, event) {
		node.classList.add("option__active");
		node.checked = true;
		node.setAttribute("checked", "true");
		displayOrder(node, event);
	}

	function unSelected(node, event) {
		node.classList.remove("option__active");
		node.checked = false;
		node.setAttribute("checked", "false");
		subtractOrder(node, event);
	}

	function displayOrder(selectedNode, event) {
		if(displayCount < 2) {
			orderText = event.target.innerText;
			if(displayCount == 1) {
				orderText = previousOrder + ", " + orderText;
			}
			formTitleField.innerHTML = orderText;
			previousOrder = orderText;
			displayCount++;
		}
		else {
			extraCount++;
			let extraLargeOrder = orderText + ", and " + extraCount + " more";
			previousOrder = event.target.innerText;
			formTitleField.innerHTML = extraLargeOrder;
		}
	}

	function subtractOrder(selectedNode, event) {
		if(extraCount > 1) {
			extraCount--;
			formTitleField.innerHTML = orderText + ", and " + extraCount + " more";	
		}
		else {
			if(extraCount > 0) {
				extraCount = 0;
				formTitleField.innerHTML = orderText;
			}
			else {
				if(displayCount <= 1) {
					formTitleField.innerHTML = formTitleFieldInit;
					orderText = "";
					previousOrder = "";
				}
				else {
					orderText = orderText.replace(event.target.innerText, "");
					orderText = orderText.replace(" ,", "");
					orderText = orderText.replace(", ", "");
					previousOrder = orderText;
					formTitleField.innerHTML = orderText;
				}	
				displayCount--;
			}
			
		}
	}

});