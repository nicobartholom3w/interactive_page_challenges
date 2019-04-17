document.addEventListener("DOMContentLoaded", function(event){
	let submitContentArray = Array.from(document.getElementsByClassName("submit__content"));
	let initButtonArray = Array.from(document.getElementsByClassName("button"));
	let listArray = Array.from(document.getElementsByClassName("list__item"));
	let wholeSelectionArray = [];
	let forwardButtonArray = [];
	let backButtonArray = [];
	let buttonSelectionOne = [initButtonArray[0]];
	let buttonSelectionTwo = [initButtonArray[1], initButtonArray[2]];
	let buttonSelectionThree = [initButtonArray[3], initButtonArray[4]];
	let buttonArray = [buttonSelectionOne, buttonSelectionTwo, buttonSelectionThree];
	
	function addListClickEvent (list){
		for (let i = 0; i < list.length; i++){
			let selectionObj = {item: listArray[i], content: submitContentArray[i], button: buttonArray[i]};
			wholeSelectionArray.push(selectionObj);
			let listItem = list[i];
			listItem.addEventListener("click", () => clickedLi(selectionObj));
		}
	}

	function addButtonClickEvents (individualButtonArray){
		for(let b = 0; b < individualButtonArray.length; b++) {
			let button = individualButtonArray[b];
			if(b % 2 == 0){
				forwardButtonArray.push(individualButtonArray[b]);
				button.addEventListener("click", () => forwardButton(button));

			}
			else {
				backButtonArray.push(individualButtonArray[b]);
				button.addEventListener("click", () => backButton(button));
			}
		}
	}

	function forwardButton(selectionButton) {
		for(let k = 0; k < forwardButtonArray.length; k++){
			let selected = selectionButton == forwardButtonArray[k];
			let selection = wholeSelectionArray[k + 1];
			let previous = wholeSelectionArray[k];
			if (selected){
				if (selection == undefined){
					let lastSelection = submitContentArray[3];
					lastSelection.classList.add("submit__content-active");
					lastSelection.setAttribute("active", "true");
					previous.content.classList.remove("submit__content-active");
					previous.content.setAttribute("active", "false");
					for (let button of previous.button){
						button.classList.remove("button__active");
						button.setAttribute("active", "false");
					}
					break;
				}
				selection.item.classList.add("list__item-active");
				selection.item.setAttribute("active", "true");
				selection.content.classList.add("submit__content-active");
				selection.content.setAttribute("active", "true");
				for (let button of selection.button){
					button.classList.add("button__active");
					button.setAttribute("active", "true");
				}
				previous.content.classList.remove("submit__content-active");
				previous.content.setAttribute("active", "false");
				for (let button of previous.button){
					button.classList.remove("button__active");
					button.setAttribute("active", "false");
				}
				break;
			}
		}
	}

	function backButton(selectionButton) {
		for(let m = 0; m < backButtonArray.length; m++){
			let selected = selectionButton == backButtonArray[m];
			let selection = wholeSelectionArray[m + 1];
			let previous = wholeSelectionArray[m];
			if(selected) {
				previous.content.classList.add("submit__content-active");
				previous.content.setAttribute("active", "true");
				for (let button of previous.button){
					button.classList.add("button__active");
					button.setAttribute("active", "true");
				}
				selection.item.classList.remove("list__item-active");
				selection.item.setAttribute("active", "false");
				selection.content.classList.remove("submit__content-active");
				selection.content.setAttribute("active", "false");
				for (let button of selection.button){
					button.classList.remove("button__active");
					button.setAttribute("active", "false");
				}
				break;
			}
		}
	}

	function isActive (e) {
		if (e == undefined || e.getAttribute("active") == "true") {
			return true;
		}
		else {
			return false;
		}
	}

	function clickedLi (selection) {
		for (let j = 0; j < wholeSelectionArray.length; j++){
			let current = wholeSelectionArray[j];
			let selected = selection == wholeSelectionArray[j];
			let currentLi = listArray[j];
			let previousLi = listArray[j - 1];
			let stayActive = wholeSelectionArray[0];

			if(selected && isActive(previousLi)) {
					selection.item.classList.add("list__item-active");
					selection.item.setAttribute("active", "true");
					selection.content.classList.add("submit__content-active");
					selection.content.setAttribute("active", "true");
					for (let button of selection.button){
						button.classList.add("button__active");
						button.setAttribute("active", "true");
					}
				if(j !== 2 && isActive(listArray[j + 1])) {
					for (let count = 2; count > j; count--){
						let previouslyActive = wholeSelectionArray[count];
						previouslyActive.item.classList.remove("list__item-active");
						previouslyActive.item.setAttribute("active", "false");
					}
				}
			}
			else {
				current.content.classList.remove("submit__content-active");
				current.content.setAttribute("active", "false");
				for (let button of current.button){
					button.classList.remove("button__active");
					button.setAttribute("active", "false");
				}
				
				if(j == 2 && !isActive(previousLi)){ 
					stayActive.item.classList.add("list__item-active");
					stayActive.item.setAttribute("active", "true");
					stayActive.content.classList.add("submit__content-active");
					stayActive.content.setAttribute("active", "true");
					for (let button of stayActive.button){
						button.classList.add("button__active");
						button.setAttribute("active", "true");
					}
				}
				
			}
		}
	}
	addListClickEvent(listArray);
	addButtonClickEvents(initButtonArray);
});