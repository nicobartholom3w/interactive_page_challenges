document.addEventListener("DOMContentLoaded", function(event){
	let listItemAttributes = ["class", "role"];
	let listItemAttributeValues = ["list-item", "listitem"];
	let itemNum = 0;
	let list = document.querySelector(".list");
	listItemArr = [];
	let input = document.querySelector(".input__text");
	let storage = window.localStorage;

	function addTask(event) {
		event.preventDefault();
		localStorage.setItem("item# " + itemNum, input.value);
		itemNum++;
		createListItem(input.value);
		input.value = "";
	}

	function createListItem(listItemValue) {
		let listItem = document.createElement("div");
		for(let i = 0; i < listItemAttributes.length; i++) {
			setAllAttributes(listItem, listItemAttributes[i], listItemAttributeValues[i]);
		}
		list.append(listItem);
		listItem.innerText = listItemValue;
		listItemArr.push(listItem);
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

	function keepData(event) {
		for(let k = 0; k >= Object.keys(storage).length; k++) {

		}
	}

	document.onsubmit = addTask;
	document.onreset = clearList;
	document.onload = keepData;
});



