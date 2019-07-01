document.addEventListener("DOMContentLoaded", function(event){
	let percentageDisplay = document.querySelector(".percentage-display");
	let bar = document.querySelector(".bar");
	let barProgress = document.querySelector(".bar__progress");
	let dot = document.querySelector(".bar__progress-marker");
	let dotSelected = false;

	function updatePercentage() {
		// when barProgressMarker moves
		// 	update percentageDisplay
	}

	function updateBarProgress() {

	}

	function dotMouseDown(event) {
		console.log(event.target);
		if(event.target === dot) {
			dotSelected = true;
			dot.style.borderColor = "black";
			event.preventDefault();
		}
	}

	function moveDot(event) {
		if (dotSelected === true) {
			dot.style.left = event.clientX - 50 + "px";
		}	
	}

	function dotMouseUp(event) {
		dotSelected = false;
		dot.style.borderColor = "rgb(195, 195, 195)";
	}

	document.onmousedown = dotMouseDown;
	document.onmousemove = moveDot;
	document.onmouseup = dotMouseUp;
});