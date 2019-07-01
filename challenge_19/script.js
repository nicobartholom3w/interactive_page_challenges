document.addEventListener("DOMContentLoaded", function(event){
	let percentageDisplay = document.querySelector(".percentage-display");
	let bar = document.querySelector(".bar");
	let barProgress = document.querySelector(".bar__progress");
	let dot = document.querySelector(".bar__progress");
	let dotSelected = false;
	let min = -12;
	let max = 388;
	let initX = 0;
	let updateX = 0;

	function updatePercentage() {
		// when barProgressMarker moves
		// 	update percentageDisplay
	}

	function updateBarProgress() {

	}

	function dotMouseDown(event) {
		console.log(event.clientX);
		if(event.target === dot) {
			dotSelected = true;
			dot.style.borderColor = "black";
			updateX = event.clientX;
			event.preventDefault();
		}
	}

	function moveDot(event) {
		if (dotSelected === true) {
			console.log(dot.offsetLeft);
			initX = updateX - event.clientX;
			updateX = event.clientX;
			let newPosition = dot.offsetLeft - initX;
			if(newPosition < min) {
				newPosition = min;
			}
			else if(newPosition > max) {
				newPosition = max;
			}
			dot.style.left = newPosition + "px";
		}	
	}

	function dotMouseUp(event) {
		dotSelected = false;
		dot.style.borderColor = "rgb(195, 195, 195)";
	}

	function apple(event) {
		console.log(barProgress.value);
	}
	// document.onmousedown = dotMouseDown;
	// document.onmousemove = moveDot;
	// document.onmouseup = dotMouseUp;
	document.oninput = apple;
});