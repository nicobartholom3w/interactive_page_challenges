document.addEventListener("DOMContentLoaded", function(event){
	let canvas = document.querySelector(".container");
	let dot = canvas.getContext("2d");
	let x = 200;
	let y = 200;
	let speed = 5;
	let timeout;


	initCanvas();

	function initCanvas() {
		canvas.width = canvas.height = 400;
		dot.beginPath();
		postion = dot.arc(x, y, 5, 0, Math.PI * 2);
		dot.fillStyle = "#f88379";
		dot.fill();
	}

	function moveDot(event) {
		

		if(event.key === "ArrowLeft") {
			timeout = requestAnimationFrame(() => moveDot(event));
        	x -= speed;
		}
		else if(event.key === "ArrowRight") {
			timeout = requestAnimationFrame(() => moveDot(event));
			x += speed;
		}
		else if(event.key === "ArrowUp") {
			timeout = requestAnimationFrame(() => moveDot(event));
			y -= speed;
		}
		else if(event.key === "ArrowDown") {
			timeout = requestAnimationFrame(() => moveDot(event));
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

		dot.clearRect(0, 0, 400, 400);
		dot.beginPath();
		dot.arc(x, y, 5, 0, Math.PI * 2);
		dot.fill();

	}

	
	function buttonUp(event) {
		// clearTimeout(timeout);
		cancelAnimationFrame(timeout);
	}

	document.onkeyup = buttonUp;
	document.onkeydown = moveDot;
});