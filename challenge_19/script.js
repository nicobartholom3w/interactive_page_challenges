document.addEventListener("DOMContentLoaded", function(event){
	let percentageDisplay = document.querySelector(".percentage-display");
	let bar = document.querySelector(".bar");
	let input = document.querySelector(".bar__progress");
	

	function updateValue(event) {
		console.log(input.value);
		percentageDisplay.innerHTML = input.value;
	}

	input.oninput = updateValue;

});