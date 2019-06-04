document.addEventListener("DOMContentLoaded", function(event){
	let optionsArray = Array.from(document.getElementsByClassName("option"));
	let optionsBoxArray = Array.from(document.getElementsByClassName("option__box"));
	initCheckboxFunction();

	function initCheckboxFunction() {
		for(let i = 0; i < optionsArray.length; i++) {
			let option = optionsArray[i];
			let optionBox = optionsBoxArray[i];
			option.addEventListener("click", function(event){
				if(this == event.target) {
					if(event.target.checked) {
						unSelected(option);
					}
					else {
						selected(option);
					}
				}
				else {
					event.stopPropagation();
					return false;
				}
			});
		}
	}

	function selected(node) {
		node.classList.add("option__active");
		node.checked = true;
	}

	function unSelected(node) {
		node.classList.remove("option__active");
		node.checked = false;
	}

});