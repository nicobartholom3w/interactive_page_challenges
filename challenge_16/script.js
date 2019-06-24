document.addEventListener("DOMContentLoaded", function(event){
	let bubbleArea = document.querySelector(".bubble-area");
	let bubble;

	function createBubble() {
		bubble = document.createElement("div");
		bubble.classList.add("bubble");
		bubbleArea.appendChild(bubble);
	}

});