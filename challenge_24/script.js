document.addEventListener("DOMContentLoaded", function(event){
	let message = document.querySelector(".toast__message");
	let alert = document.querySelector(".toast__alert");
	let messageButton = document.querySelector(".button__message");
	let alertButton = document.querySelector(".button__alert");
	let busy = false;

	function showToast(element){
		if(!busy) {
			busy = true;
			element.classList.add("toast-active");
			let mouseOverTimeout = setTimeout(() => {removeToast(element);}, 5000);
			element.addEventListener("mouseover", (event) => {
				clearTimeout(mouseOverTimeout);
			});
			element.addEventListener("mouseout", (event) => {
				mouseOverTimeout = setTimeout(() => {removeToast(element);}, 5000);
			})
		}
	}

	function removeToast(element) {
		element.classList.remove("toast-active");

		setTimeout(() => {busy = false;}, 200);
	}


	messageButton.addEventListener("click", (event) => {
		showToast(message);
	});

	alertButton.addEventListener("click", (event) => {
		showToast(alert);
	});
});