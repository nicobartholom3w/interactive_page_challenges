document.addEventListener("DOMContentLoaded", function(event){
	let bubbleArea = document.querySelector(".bubble-area");
	let formInput = document.querySelector(".form__input");
	let bubble;

	function createBubble(event) {
		event.preventDefault();
		bubble = document.createElement("div");
		bubble.classList.add("bubble");
		bubbleArea.appendChild(bubble);
		let time = Number.parseInt(formInput.value);
		bubble.innerText = time;
		setInterval(countDown, 1000, time, bubble);
		// let intervalId = setInterval(bubblePop, time * 1000);
	}

	function countDown(time, bubble) {
		if(time <= 0) {
			return bubblePop();
		}
		time--;
		bubble.innerText = time;
		setInterval(countDown, 1000, time, bubble);

	}

	function bubblePop() {

	}

	document.onsubmit = createBubble;
});