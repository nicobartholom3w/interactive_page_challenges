document.addEventListener("DOMContentLoaded", function(event){
	let listItemAttributes = ["class", "role"];
	let listItemAttributeValues = ["list-item", "listitem"];
	let itemNum = 0;
	let list = document.querySelector(".list");
	listItemArr = [];
	let input = document.querySelector(".input__text");

	if(localStorage.length !== 0) {
		keepData();
	}

	function addTask(event) {
		event.preventDefault();
		createElement(input.value);
		localStorage.setItem("#" + itemNum, input.value);
		localStorage.setItem("itemNum", itemNum);
		input.value = "";
	}

	function createElement(listItemValue) {
		let listItem = document.createElement("div");
		for(let i = 0; i < listItemAttributes.length; i++) {
			setAllAttributes(listItem, listItemAttributes[i], listItemAttributeValues[i]);
		}
		listItem.innerText = listItemValue;
		list.append(listItem);
		listItemArr.push(listItem);
		itemNum++;
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
		itemNum = 0;
	}

	function keepData() {
		itemNum = Number.parseInt(localStorage.getItem("itemNum"));
		let storageKeys = Object.keys(localStorage);
		for(let k = storageKeys.length - 1; k >= 0; k--) {
			if(storageKeys[k] === "itemNum") {
				continue;
			}
			createElement(localStorage[storageKeys[k]]);
		}

	}

	document.onsubmit = addTask;
	document.onreset = clearList;
});



