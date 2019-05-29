document.addEventListener("DOMContentLoaded", function(event){
	let card = document.querySelector(".card");
	let colorElement = document.querySelector(".color");
	let colorPseudo = document.querySelector(".color-pseudo");
	let colors = ["orange", "yellow", "green", "cyan", "blue", "violet"];
	let cardX;
	let cardY;
	let currentMouseX;
	let currentMouseY;
	let initMouseX;
	let initMouseY;
	let count = 0;	

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
		count++;
		if (count > 5) {
			animateGradient(e, currentMouseX);
			count = 0;
		}
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

	function onMouseUpHandler(e) {
		mouseDown = false;
	}

	function animateGradient(e, current) {
		let thisColor;
		colorPseudo.style.transition = "all .5" + Math.abs(current) + "s";
		let wait = Math.abs(current) * 100;
		if(Math.sign(current) == 1){
			thisColor = colors.pop();
			colors.unshift(thisColor);
		}
		else {
			thisColor = colors.shift();
			colors.push(thisColor);
		}
		if(colorPseudo.style.opacity == 0) {
			colorPseudo.style.background = "linear-gradient(to right," + colors.join(", ");
			colorPseudo.style.opacity = "1";
			window.setTimeout( () => {colorElement.style.background = "linear-gradient(to right," + colors.join(", ")}, 500);
			// colorElement.style.background = "linear-gradient(to right," + colors.join(", ");
		}
		else {
			colorElement.style.background = "linear-gradient(to right," + colors.join(", ");
			colorPseudo.style.opacity = "0";
			window.setTimeout( () => {colorPseudo.style.background = "linear-gradient(to right," + colors.join(", ")}, 500);
			// colorPseudo.style.background = "linear-gradient(to right," + colors.join(", ");
		}

		
	}

	document.onmousedown = onMouseDownHandler;
	document.onmousemove = onMouseMoveHandler;
	document.onmouseup = onMouseUpHandler;
});