document.addEventListener("DOMContentLoaded", function(event){
	let listItemAttributes = ["class", "role"];
	let listItemAttributeValues = ["list__item", "listitem"];
	let itemNum = 0;
	let list = document.querySelector(".list");
	let listItemArr = [];
	let input = document.querySelector(".input__text");
	let storageKeys = [];

	if(localStorage.length !== 0) {
		keepData();
	}

	function addTask(event) {
		event.preventDefault();
		createElement(input.value);
		localStorage.setItem("#" + itemNum, input.value);
		localStorage.setItem("itemNum", itemNum);
		storageKeys.push("#" + itemNum);
		localStorage.setItem("storageKeys", JSON.stringify(storageKeys));
		input.value = "";
	}

	function createElement(listItemValue) {
		let listItem = document.createElement("div");
		let dash = document.createElement("div");
		for(let i = 0; i < listItemAttributes.length; i++) {
			setAllAttributes(listItem, listItemAttributes[i], listItemAttributeValues[i]);
		}
		dash.setAttribute("class", "list__item-dash");
		listItem.innerText = listItemValue;
		list.append(listItem);
		listItem.append(dash);
		listItemArr.push(listItem);
		listItemArr.push(dash);
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
		storageKeys = [];
	}

	function keepData() {
		itemNum = Number.parseInt(localStorage.getItem("itemNum"));
		storageKeys = JSON.parse(localStorage["storageKeys"]);
		for(let k = 0; k < storageKeys.length; k++) {
			createElement(localStorage[storageKeys[k]]);
		}
	}

	function crossOff(event) {
		if(event.target.classList.contains("list__item")) {
			let targetChildren = Array.from(event.target.childNodes);
			let itemWidth = event.target.clientWidth;
			if(!targetChildren[1].classList.contains("list__item-active")){

				targetChildren[1].classList.add("list__item-active");
				targetChildren[1].style.width = itemWidth + "px";
			}
			else {
				targetChildren[1].classList.remove("list__item-active");
				targetChildren[1].style.width = "0";
			}
		}
	}

	document.onsubmit = addTask;
	document.onreset = clearList;
	document.onclick = crossOff;
});



