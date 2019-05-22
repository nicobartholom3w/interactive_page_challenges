document.addEventListener("DOMContentLoaded", function(event){
	let card = document.querySelector(".card");
	let x = 0;
	let y = 0;

	setOrigin(card);
	let mouseDown = false;

	function setOrigin(e) {
		x =  e.offsetLeft;
		y = e.offsetTop;
	}

	function updatePosition(e) {
		x = e.clientX;
		y = e.clientY;
		card.style.left = x + "px";
		card.style.top = y + "px";
	}

	function onMouseDownHandler(event) {
		mouseDown = true;
		setOrigin(card);
	}

	function onMouseMoveHandler(e) {
		if(mouseDown == true) {
			updatePosition(e);
		}
	}

	function onMouseUpHandler(event) {
		mouseDown = false;
		setOrigin(card);
	}

	card.onmousedown = onMouseDownHandler;
	card.onmousemove = onMouseMoveHandler;
	card.onmouseup = onMouseUpHandler;
});