document.addEventListener("DOMContentLoaded", function(event){
	let listItemAttributes = ["class", "role"];
	let listItemAttributeValues = ["list-item", "listitem"];
	let itemNum = 0;
	let list = document.querySelector(".list");
	listItemArr = [];
	let input = document.querySelector(".input__text");

	if(localStorage) {
		keepData();
	}

	function addTask(event) {
		event.preventDefault();
		let listItem = createElement(input.value);
		localStorage.setItem("item#" + itemNum, input.value);
		input.value = "";
		listItemArr.push(listItem);
		itemNum++;
	}

	function createElement(listItemValue) {
		let listItem = document.createElement("div");
		for(let i = 0; i < listItemAttributes.length; i++) {
			setAllAttributes(listItem, listItemAttributes[i], listItemAttributeValues[i]);
		}
		listItem.innerText = listItemValue;
		list.append(listItem);
		return listItem;
	} 

	function setAllAttributes(element, attribute, value) {
		element.setAttribute(attribute, value);
	}

	function clearList(event) {
		event.preventDefault();
		localStorage.clear();
		for(let item of listItemArr) {
			item.remove();
		}
	}

	function keepData() {
		let storageKeys = localStorage.keys();
		for(let item in localStorage) {
			let savedValue = localStorage.getItem(item);
			createElement(savedValue);
		}
	}

	document.onsubmit = addTask;
	document.onreset = clearList;
});



