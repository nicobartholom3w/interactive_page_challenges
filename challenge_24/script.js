document.addEventListener("DOMContentLoaded", function(event){
	let messageButton = document.querySelector(".button__message");
	let alertButton = document.querySelector(".button__alert");
	let busy = false;

	function showToast(element){
		if(!busy) {
			busy = true;
			setTimeout(() => {element.classList.add("toast-active")}, 100);
			let mouseOverTimeout = setTimeout(() => {removeToast(element);}, 5000);
			element.addEventListener("mouseover", (event) => {
				clearTimeout(mouseOverTimeout);
			});
			element.addEventListener("mouseout", (event) => {
				mouseOverTimeout = setTimeout(() => {removeToast(element);}, 5000);
			});
		}
	}

	function removeToast(element) {
		element.classList.remove("toast-active");
		setTimeout(() => {
			busy = false;
			element.remove();
		}, 200);
	}

	function createToast(button) {
		let div = document.createElement("div");
		div.classList.add("toast");
		div.innerText = button.dataset.text;
		if(button.dataset.type === "error") {
			div.classList.add("toast__alert");
		}
		else {
			div.classList.add("toast__message");
		}
		document.body.appendChild(div);
		return div;
	}

	messageButton.addEventListener("click", (event) => {
		let e = createToast(event.target);
		showToast(e);
	});

	alertButton.addEventListener("click", (event) => {
		let e = createToast(event.target);
		showToast(e);
	});
});