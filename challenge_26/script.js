document.addEventListener("DOMContentLoaded", function(event){
	let overlay = document.querySelector(".overlay");
	let itemArray = Array.from(document.getElementsByClassName("onboarding__item"));
	let button = document.querySelector(".button");
	let step = 0;

	button.addEventListener("click", (event) => {
		startOnboarding(event);
	});

	function startOnboarding(event) {
		overlay.classList.add("overlay__active");
		activateElement(event, itemArray[step]);
		// continueOnboarding(event, itemArray[step]);
	}

	// function continueOnboarding(event, activeElement, priorElement){
	// 	event.stopPropagation();
	// 	event.preventDefault();
	// 	if(priorElement) {
	// 		priorElement.style.zIndex = "0";
	// 		priorElement.style.cursor = "default";
	// 	}
	// 	if(step >= itemArray.length) {
	// 		overlay.classList.remove("overlay__active");
	// 		target.element.removeEventListener("click", nextElement);
	// 		step = 0;
	// 		return;
	// 	}

	// 	overlay.classList.add("overlay__active");
	// 	activeElement.style.zIndex = "2";
	// 	activeElement.style.cursor = "pointer";
	// 	step++;

	// 	function nextElement(event) {
	// 		event.stopPropagation();
	// 		event.preventDefault();
	// 		let prevElement = activeElement;
	// 		let currentElement = itemArray[step];
	// 		continueOnboarding(event, currentElement, prevElement);
	// 	}
	// 	activeElement.addEventListener("click", nextElement);
	// 	target.element.removeEventListener("click", nextElement);
	// }
	// 
	function activateElement(event, element) {
		element.style.zIndex = "2";
		element.style.cursor = "pointer";
		step++;
		element.addEventListener("click", nextElement);
	}

	function nextElement(event) {
		if(step > 2) {
			event.target.removeEventListener("click", nextElement);
			overlay.classList.remove("overlay__active");
			event.target.style.zIndex = "0";
			event.target.style.cursor = "default";
			step = 0;
			return;
		}
		event.target.removeEventListener("click", nextElement);
		event.target.style.zIndex = "0";
		event.target.style.cursor = "default";

		itemArray[step].style.zIndex = "2";
		itemArray[step].style.cursor = "pointer";
		itemArray[step].addEventListener("click", nextElement);
		step++;
	}
});