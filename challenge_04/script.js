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
		if (e.getAttribute("active") == "true") {
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
			if(selected) {
				// make active = true
				// add somethingsomething-active
				selection.item.classList.add("list__item-active");
				selection.item.setAttribute("active", "true");
				selection.content.classList.add("submit__content-active");
				selection.content.setAttribute("active", "true");
				for (let button of selection.button){
					button.classList.add("button__active");
					button.setAttribute("active", "true");
				}
			}
			else {
				current.content.classList.remove("submit__content-active");
				current.content.setAttribute("active", "false");
				for (let button of current.button){
					button.classList.remove("button__active");
					button.setAttribute("active", "false");
				}
			}
		}
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