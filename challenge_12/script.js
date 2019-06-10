document.addEventListener("DOMContentLoaded", function(event){
	let optionsArray = Array.from(document.getElementsByClassName("option"));
	let optionsBoxArray = Array.from(document.getElementsByClassName("option__box"));
	let formTitleField = document.querySelector(".form__title");
	let formTitleFieldInit = formTitleField.innerText;
	let checkAllBox = optionsBoxArray[0];
	let checkAllNode = optionsArray[0];
	let orderArray = [];
	let orderText;
	let displayCount = 0;
	let extraCount = 0;
	let extraLargeOrder;
	initCheckboxFunction();

	function initCheckboxFunction() {
		for(let i = 0; i < optionsArray.length; i++) {
			let option = optionsArray[i];
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
		displayCount++;
		orderText = event.target.innerText;
		orderArray.push(orderText);
		if(orderArray.length == 4) {
			checkAllBox.checked = true;
			checkAllNode.classList.add("option__active");
			checkAllNode.setAttribute("checked", "true");
			checkAllNode.checked = true;
			orderArray = checkAllList();
		}
		if(event.target.innerText == "Check all") {
			orderArray = checkAllList();
			let foodOptionsBoxArray = optionsBoxArray.slice();
			foodOptionsBoxArray.shift();
			for(let i = 0; i < foodOptionsBoxArray.length; i++) {
				let checkbox = foodOptionsBoxArray[i];
				checkbox.checked = true;
				let node = optionsArray[i + 1];
				if(node.getAttribute("checked") == "false") {
					node.classList.add("option__active");
					node.checked = true;
					node.setAttribute("checked", "true");
				}
			}
			displayCount = 4;
			extraCount = 1;
		}
		
		if(displayCount <= 2) {
			orderText = orderArray.join(", ");
			formTitleField.innerHTML = orderText;
		}	
		else {
			extraCount++;
			extraLargeOrder = ", and " + extraCount + " more";
			let placeHolder = orderArray.slice();
			for(let i = 0; i < extraCount; i++){
				placeHolder.pop();
			}
			orderText = placeHolder.join(", ");
			formTitleField.innerHTML = orderText + extraLargeOrder;
		}
	}

	function subtractOrder(selectedNode, event) {
		if(checkAllBox.checked == true && orderArray.length == 4) {
			checkAllBox.checked = false;
			checkAllNode.classList.remove("option__active");
			checkAllNode.setAttribute("checked", "false");
			checkAllNode.checked = false;
		}
		if(event.target.innerText == "Check all") {
			displayCount = 0;
			extraCount = 0;
			formTitleField.innerHTML = formTitleFieldInit;
			orderArray = [];
			let foodOptionsBoxArray = optionsBoxArray.slice();
			foodOptionsBoxArray.shift();
			for(let checkbox of foodOptionsBoxArray) {
				checkbox.checked = false;
			}
			let foodOptionsArray = optionsArray.slice();
			foodOptionsArray.shift();
			for(let node of optionsArray) {
				if(node.getAttribute("checked") == "true") {
					node.classList.remove("option__active");
					node.checked = false;
					node.setAttribute("checked", "false");
				}
			}
			return;
		}
		displayCount--;
		let removeThis = event.target.innerText;
		for(let i = 0; i < orderArray.length; i++) {
			if(orderArray[i] == removeThis) {
				orderArray.splice(i, 1);
			}
		}
		let placeHolder = orderArray.slice();
		for(let i = 0; i < (extraCount - 1); i++){
			placeHolder.pop();
		}
		orderText = placeHolder.join(", ");
		if(extraCount > 1) {
			extraCount--;
			extraLargeOrder = ", and " + extraCount + " more";
			if(extraCount > 0) {
				formTitleField.innerHTML = orderText + extraLargeOrder;
			}
			else {
				formTitleField.innerHTML = orderText;
			}
		}
		else {
			if(displayCount == 0) {
				formTitleField.innerHTML = formTitleFieldInit;
			}
			else {
				extraCount--;
				formTitleField.innerHTML = orderText;
			}
		}
	}

	function checkAllList(){
		orderArray = [];
		for(let j = 1; j < optionsArray.length; j++) {
			let choice = optionsArray[j];
			orderArray.push(choice.innerText);
		}
		return orderArray;
	}
});