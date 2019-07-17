document.addEventListener("DOMContentLoaded", function(event){
	let cursor = document.querySelector(".cursor");
	let cursorVisible = false;

	document.addEventListener("onmousemove", (event) => {
		if(cursorVisible) {
			moveMouse(event);
		}
		else {
			cursorAppears(event);
		}
	});

	document.addEventListener("click", () => {
		// add element
		// 
	});

	function cursorAppears(event){

	}

});