document.addEventListener("DOMContentLoaded", function(event){
	let overlay = document.querySelector(".overlay");
	let itemArray = Array.from(document.getElementsByClassName("onboarding__item"));
	let button = document.querySelector(".button");
	let step = 0;

	button.addEventListener("click", (event) => {
		startOnboarding(event);
	});

	function startOnboarding(event) {
		continueOnboarding(event, itemArray[step]);
	}

	function continueOnboarding(event, activeElement, priorElement){
		event.stopPropagation();
		event.preventDefault();
		if(priorElement) {
			priorElement.style.zIndex = "0";
			priorElement.style.cursor = "default";
		}
		if(step >= itemArray.length) {
			overlay.classList.remove("overlay__active");
			step = 0;
			return;
		}

		overlay.classList.add("overlay__active");
		activeElement.style.zIndex = "2";
		activeElement.style.cursor = "pointer";
		step++;

		function nextElement(event) {
			event.stopPropagation();
			event.preventDefault();
			let prevElement = activeElement;
			let currentElement = itemArray[step];
			continueOnboarding(event, currentElement, prevElement);
		}
		activeElement.addEventListener("click", nextElement, false);
		target.element.removeEventListener("click", nextElement, false);
	}
});