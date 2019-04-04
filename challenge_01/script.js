document.addEventListener("DOMContentLoaded", function(event){
	let desktopOptionsMenuNode = document.getElementsByClassName("options__desktop");
	desktopOptionsMenuNode = desktopOptionsMenuNode[0];
	// let display = desktopOptionsMenu.getAttribute("display");
	let buttons = Array.from(document.getElementsByClassName("button"));
	// let checked = option.getAttribute("aria-checked");
	// initializing styling on first button selected
	buttons[0].style.color = "white";
	buttons[0].style.backgroundColor = "rgb(88, 149, 255)";
	buttons[0].setAttribute("aria-checked", "true");

	function addClickEvent (node){
		for(let i = 0; i < buttons.length; i++){
			let button = buttons[i];
			button.addEventListener("click", () => selectOption(button));
		}
	}

	function selectOption(selectedOption) {
		for (let btn of buttons){
			let selected = btn == selectedOption;
			btn.style.backgroundColor = selected ? "rgb(88, 149, 255)" : "white";
			btn.style.color = selected ? "white" : "black";
			btn.setAttribute("aria-checked", selected);
		}
	}

	addClickEvent(desktopOptionsMenuNode);
});