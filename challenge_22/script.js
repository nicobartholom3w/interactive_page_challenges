document.addEventListener("DOMContentLoaded", function(event){
	let canvas = document.querySelector(".container");
	let dot = canvas.getContext("2d");
	let x = 200;
	let y = 200;
	let speed = 1;
	let timeout;
	let isMoving = false;

	initCanvas();

	function initCanvas() {
		canvas.width = canvas.height = 400;
		dot.fillStyle = "#f88379";
		loadDot();
	}

	function loadDot() {
		dot.clearRect(0, 0, 400, 400);
		dot.beginPath();
		dot.arc(x, y, 5, 0, Math.PI * 2);
		dot.fill();
	}

	function moveDot(event) {
		if(event.key === "ArrowLeft") {
        	x -= speed;
		}
		else if(event.key === "ArrowRight") {
			x += speed;
		}
		else if(event.key === "ArrowUp") {
			y -= speed;
		}
		else if(event.key === "ArrowDown") {
			y += speed;
		}

		if (x >= 395) {
		    x = 395;
		} else if (x <= 5) {
		    x = 5;
		}

		if (y > 395) {
		    y = 395;
		} else if (y <= 5) {
		    y = 5;
		}

		loadDot();

		if(isMoving) {
			timeout = window.requestAnimationFrame(() => moveDot(event));
		}
	}

	function buttonUp(event) {
		isMoving = false;
		window.cancelAnimationFrame(timeout);
	}

	document.onkeyup = buttonUp;
	document.onkeydown = (event) => {timeout = window.requestAnimationFrame(() => {
		isMoving = true;
		moveDot(event);
	});};
});