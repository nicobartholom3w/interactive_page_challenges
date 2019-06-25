document.addEventListener("DOMContentLoaded", function(event){
	let bubbleArea = document.querySelector(".bubble-area");
	let formInput = document.querySelector(".form__input");

	function createBubble(event) {
		if(formInput.value === "") {
			return;
		}
		event.preventDefault();
		let bubble = document.createElement("div");
		bubble.classList.add("bubble");
		bubbleArea.appendChild(bubble);
		let time = Number.parseInt(formInput.value);
		formInput.value = "";
		bubble.innerText = time;
		setTimeout(countDown, 1000, time, bubble);
	}

	function countDown(time, bubble) {
		if(time <= 0) {
			bubblePop(bubble);
			return;
		}
		time--;
		bubble.innerText = time;
		setTimeout(countDown, 1000, time, bubble);
	}

	function bubblePop(bubble) {
		bubble.style.animation = "fade-out .5s";
		setInterval(() => {
			bubbleArea.removeChild(bubble);
		}, 500)
	}

	document.onsubmit = createBubble;
});