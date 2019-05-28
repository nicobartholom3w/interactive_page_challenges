document.addEventListener("DOMContentLoaded", function(event){
	let card = document.querySelector(".card");
	let initX;
	let initY;
	let currentX;
	let currentY;

	setOrigin(card);
	let mouseDown = false;

	function setOrigin(e) {
		// initX =  e.clientX + window.scrollX - e.offsetLeft;
		// initY = e.clientY + window.scrollY - e.offsetTop;
		initX = e.offsetLeft;
		initY = e.offsetTop;
	}

	function updatePosition(e) {
		currentX = e.clientX;
		currentY = e.clientY;
		card.style.left = (currentX + window.scrollX - initX) + "px";
		card.style.top = (currentY + window.scrollY - initY) + "px";
	}

	function onMouseDownHandler(event) {
		mouseDown = true;
		// setOrigin(card);
	}

	function onMouseMoveHandler(e) {
		if(mouseDown == true) {
			// setOrigin(e);
			updatePosition(e);
		}
	}

	function onMouseUpHandler(event) {
		mouseDown = false;
		// setOrigin(card);
	}

	card.onmousedown = onMouseDownHandler;
	card.onmousemove = onMouseMoveHandler;
	card.onmouseup = onMouseUpHandler;
});