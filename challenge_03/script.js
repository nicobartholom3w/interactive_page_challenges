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
				randomlyActive(button, clickedSwitch);
			}
		}
	}

	function randomlyActive(button) {
		if(Math.floor(Math.random() * Math.floor(2)) == 1){
			if(button.getAttribute("active") == "true"){
				button.classList.remove("switch__active");
				button.setAttribute("active", "false");
			}
			else {
				button.classList.add("switch__active");
				button.setAttribute("active", "true");
			}
		}
	}

	


	addClickEvent(switchArray);



});