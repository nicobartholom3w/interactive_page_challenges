document.addEventListener("DOMContentLoaded", function(event){
	let card = document.querySelector(".card");
	let cardX;
	let cardY;
	let currentMouseX;
	let currentMouseY;
	let initMouseX;
	let initMouseY;
	

	setOrigin(card);
	let mouseDown = false;

	function setOrigin(e) {
		cardX = e.offsetLeft;
		cardY = e.offsetTop;
	}

	function updatePosition(e) {
		currentMouseX = initMouseX - e.clientX;
		currentMouseY = initMouseY - e.clientY;
		initMouseX = e.clientX;
		initMouseY = e.clientY;
		card.style.left = (card.offsetLeft - currentMouseX) + "px";
		card.style.top = (card.offsetTop - currentMouseY) + "px";
	}

	function onMouseDownHandler(e) {
		mouseDown = true;
		initMouseX = e.clientX;
		initMouseY = e.clientY;
	}

	function onMouseMoveHandler(e) {
		if(mouseDown == true) {
			updatePosition(e);
		}
	}

	function onMouseUpHandler(event) {
		mouseDown = false;
	}

	card.onmousedown = onMouseDownHandler;
	document.onmousemove = onMouseMoveHandler;
	document.onmouseup = onMouseUpHandler;
});