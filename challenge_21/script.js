document.addEventListener("DOMContentLoaded", function(event){
	let listItemAttributes = ["class", "role"];
	let listItemAttributeValues = ["list-item", "listitem"];
	let itemNum = 0;
	let list = document.querySelector(".list");
	let input = document.querySelector(".input__text");

	function addTask(event) {
		event.preventDefault();
		localStorage.setItem(itemNum, input.value);
		itemNum++;
		createListItem(input.value);
	}

	function createListItem(listItemValue) {
		let listItem = document.createElement("div");
		for(let i = 0; i < listItemAttributes.length; i++) {
			setAllAttributes(listItem, listItemAttributes[i], listItemAttributeValues[i]);
		}
		list.append(listItem);
		listItem.innerText = listItemValue;
	} 

	function setAllAttributes(element, attribute, value) {
		element.setAttribute(attribute, value);
	}

	function clearList(event) {

	}

	document.onsubmit = addTask;
	document.onreset = clearList;
});



