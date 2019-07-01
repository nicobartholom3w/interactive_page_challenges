document.addEventListener("DOMContentLoaded", function(event){
	let percentageDisplay = document.querySelector(".percentage-display");
	let bar = document.querySelector(".bar");
	let input = document.querySelector(".bar__progress");
	
	percentageDisplay.innerHTML = input.value;

	function updateValue(event) {
		percentageDisplay.innerHTML = input.value;
		input.style.background = "linear-gradient(to right, rgb(127, 141, 140) " + input.value + "%,  rgb(235, 235, 235) " + input.value + "% , rgb(235, 235, 235) 100%)";
	}

	input.oninput = updateValue;

});