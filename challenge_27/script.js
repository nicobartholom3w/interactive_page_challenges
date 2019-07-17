document.addEventListener("DOMContentLoaded", function(event){
	let cursor = document.querySelector(".cursor");
	let cursorVisible = false;
	let cursorDiameter = 5;
	let animationDiameter = 30;

	document.addEventListener("mousemove", (event) => {
		cursorVisible ? moveCursor(event) : cursorAppears(event);
	});

	document.addEventListener("click", (event) => {
		let element = addAnimatedElement(event);
		setTimeout(() => {element.remove();}, 500);
	});

	function cursorAppears(event){
		cursor.style.left = event.clientX - cursorDiameter + "px";
		cursor.style.top = event.clientY - cursorDiameter + "px";
		cursor.classList.add("cursor-active");
		cursorVisible = true;
	}

	function moveCursor(event){
		requestAnimationFrame(moveCursor);
		cursor.style.left = event.clientX - cursorDiameter + "px";
		cursor.style.top = event.clientY - cursorDiameter + "px";
	}

	function addAnimatedElement(event){
		let animatedElement = document.createElement("div");
		animatedElement.classList.add("ripple-dot");
		animatedElement.style.left = event.clientX - animationDiameter + "px";
		animatedElement.style.top = event.clientY - animationDiameter + "px";
		document.body.appendChild(animatedElement);
		return animatedElement;
	}
});