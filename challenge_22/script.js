document.addEventListener("DOMContentLoaded", function(event){
	let canvas = document.querySelector(".container");
	let dot = canvas.getContext("2d");
	let x = 200;
	let y = 200;
	let velY = 0;
	let velX = 0;
	let speed = 5;
	// let friction = .95;

	initCanvas();

	function initCanvas() {
		canvas.width = canvas.height = 400;
		dot.beginPath();
		postion = dot.arc(x, y, 5, 0, Math.PI * 2);
		dot.fillStyle = "#f88379";
		dot.fill();
	}

	function moveDot(event) {
		requestAnimationFrame(moveDot);

		if(event.key === "ArrowLeft") {
			// if (velX > -speed) {
   //          	velX--;
   //      	}
        	speed++;
        	x -= speed;
		}
		else if(event.key === "ArrowRight") {
			moveRight();
		}
		else if(event.key === "ArrowUp") {
			moveUp();
		}
		else if(event.key === "ArrowDown") {
			moveDown();
		}

		// speed++;
		// velY *= friction;
		// y += velY;

		// velX *= friction;
		// x += velX;

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

	}

	document.onkeyup = buttonUp;
	document.onkeydown = moveDot;
});