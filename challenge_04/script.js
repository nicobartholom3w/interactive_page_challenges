document.addEventListener("DOMContentLoaded", function(event){
	let submitContentArray = Array.from(document.getElementsByClassName("submit__content"));
	let buttonArray = Array.from(document.getElementsByClassName("button"));
	let listArray = Array.from(document.getElementsByClassName("list__item"));

	// 
	// 
	
	function addClickEvent (list){
		for (let item of list){
			item.addEventListener("click", () => clickedLi(item));
		}
	}

	

	addClickEvent(listArray);
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