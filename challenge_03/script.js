document.addEventListener("DOMContentLoaded", function(event){
	let switchArray = Array.from(document.getElementsByClassName("switch"));

	function addClickEvent(switches){
		for (let button of switches){
			button.addEventListener("click", () => isActive(button));
		}
	}

	function isActive(clickedSwitch) {
		for(let button of switchArray){
			let selected = clickedSwitch == button;
			if(selected){
				if(clickedSwitch.getAttribute("active") == "true"){
					clickedSwitch.classList.remove("switch__active");
					clickedSwitch.setAttribute("active", "false");
				}
				else {
					clickedSwitch.classList.add("switch__active");
					clickedSwitch.setAttribute("active", "true");
				}
			}
			else{
				randomlyActive();
			}
		}
	}

	function randomlyActive() {

	}

	


	addClickEvent(switchArray);



});