document.addEventListener("DOMContentLoaded", function(event){
	let listItemAttributes = ["class", "role", "checked"];
	let listItemAttributeValues = ["list__item", "listitem", "false"];
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
		let newElement = createElement(input.value);
		itemNum++;
		newElement.setAttribute("id", "#" + itemNum);
		localStorage.setItem("#" + itemNum, JSON.stringify([input.value, false]));
		localStorage.setItem("itemNum", itemNum);
		storageKeys.push("#" + itemNum);
		localStorage.setItem("storageKeys", JSON.stringify(storageKeys));
		listItemArr.push(input.value);
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
		itemNum = 0;
		storageKeys = [];
	}

	function keepData() {
		itemNum = Number.parseInt(localStorage.getItem("itemNum"));
		storageKeys = JSON.parse(localStorage["storageKeys"]);
		for(let k = 0; k < storageKeys.length; k++) {
			let theKey = storageKeys[k];
			let value = JSON.parse(localStorage[theKey])[0];
			let boolean = JSON.parse(localStorage[theKey])[1];
			let remadeElement = createElement(value);
			remadeElement.setAttribute("id", theKey);
			if(boolean){
				remadeElement.setAttribute("checked", "true");
				remadeElement.childNodes[1].classList.add("list__item-active");
				remadeElement.childNodes[1].style.transition = "all 0s";
				remadeElement.childNodes[1].style.width = remadeElement.clientWidth + "px";
			}
		}
	}

	function crossOff(event) {
		event.stopPropagation();
		if(event.target.classList.contains("list__item")) {
			let targetChildren = Array.from(event.target.childNodes);
			let itemWidth = event.target.clientWidth;
			targetChildren[1].style.transition = "all .3s";
			if(!targetChildren[1].classList.contains("list__item-active")){
				event.target.setAttribute("checked", "true");
				targetChildren[1].classList.add("list__item-active");
				targetChildren[1].style.width = itemWidth + "px";
				localStorage.setItem(event.target.getAttribute("id"), JSON.stringify([event.target.innerText, true]));
			}
			else {
				event.target.setAttribute("checked", "false");
				targetChildren[1].classList.remove("list__item-active");
				targetChildren[1].style.width = "0";
				localStorage.setItem(event.target.getAttribute("id"), JSON.stringify([event.target.innerText, false]));
			}
		}
	}

	document.onsubmit = addTask;
	document.onreset = clearList;
	document.onclick = crossOff;
});



