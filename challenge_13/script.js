document.addEventListener("DOMContentLoaded", function(event){
	let scrollButtons = Array.from(document.getElementsByClassName("scroll-button"));
	let scrollRightButton = scrollButtons[1];
	let scrollLeftButton = scrollButtons[0];
	let scrollBox = document.querySelector(".container-content");
	let blocksArray = Array.from(document.getElementsByClassName("block"));

	function scrollToRight(event) {
		// get width of first element visible from left side
		// blocksArray[i].offsetWidth
		scrollBox.scrollRight
	}

	function scrollToLeft(event) {
		scrollBox.scrollLeft
	}

	document.onclick = scrollToRight;
	document.onclick = scrollToLeft;

});