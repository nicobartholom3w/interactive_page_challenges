document.addEventListener("DOMContentLoaded", function(event){
	let submitContentArray = Array.from(document.getElementsByClassName("submit__content"));
	let initButtonArray = Array.from(document.getElementsByClassName("button"));
	let listArray = Array.from(document.getElementsByClassName("list__item"));
	let wholeSelectionArray = [];
	// 
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

			// if previous item not active dont' do anything
			
			if(selected && isActive(previousLi)) {
					selection.item.classList.add("list__item-active");
					selection.item.setAttribute("active", "true");
					selection.content.classList.add("submit__content-active");
					selection.content.setAttribute("active", "true");
					for (let button of selection.button){
						button.classList.add("button__active");
						button.setAttribute("active", "true");
					}
				if(isActive(listArray[j + 1])) {
					let previouslyActive = wholeSelectionArray[j + 1];
					previouslyActive.item.classList.remove("list__item-active");
					previouslyActive.item.setAttribute("active", "false");
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
		// if (!isActive(listArray[2]) && !isActive(listArray[1]){
			// let stayActive = listArray[0];
			// stayActive.item.classList.add("list__item-active");
			// stayActive.item.setAttribute("active", "true");
		// }
	}

	addListClickEvent(listArray);
});

// function hide(listItem, text, button1, button2) {
// 		listItem.classList.remove("list__item-active");
// 		text.classList.remove("submit__content-active");
// 		button1.classList.remove("button__active");
// 		button2.classList.remove("button__active");
// 	}

// 	function display(listItem, text, button1, button2) {
// 		listItem.classList.add("list__item-active");
// 		text.classList.add("submit__content-active");
// 		button1.classList.add("button__active");
// 		button2.classList.add("button__active");
// 	}

// 	function clickedLi (selectedLi) {
// 		for (let i = 0; i < listArray.length; i++) {
// 			let selected = listArray[i] == selectedLi;
// 			if(selected) {
// 				display(listArray[i], submitContentArray[i], buttonArray[i], buttonArray[i + 1]);
// 			}
// 			else {
// 				hide(listArray[i], submitContentArray[i], buttonArray[i], buttonArray[i + 1])
// 			}
// 		}
// 	}