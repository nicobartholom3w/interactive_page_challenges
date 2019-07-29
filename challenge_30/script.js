document.addEventListener("DOMContentLoaded", function(event){
	let imgContainer = document.querySelector(".img__container");
	let img = document.querySelector(".img");
	let imgZoom = document.querySelector(".img__zoom");
	let lens;
	let lensDiameter = 20;
	let imgRect = img.getBoundingClientRect();
	let lensActive = false;

	function moveLens(event) {
		if(event.target === img) {
			addLens(event);
		}
		if(lensActive) {
			lens.style.top = event.clientY - imgRect.top - lensDiameter + "px";
			lens.style.left = event.clientX - imgRect.left - lensDiameter + "px";
			if(event.clientX <= imgRect.left || event.clientX >= imgRect.right || event.clientY <= imgRect.top || event.clientY >= imgRect.bottom) {
				removeZoom(event);
			}
		}
	}

	function addLens(event) {
		if(event.relatedTarget === lens || lensActive === true) {
			return;
		}
		lensActive = true;
		lens = document.createElement("div");
		lens.classList.add("hover__lens");
		imgContainer.prepend(lens);
		imgZoom.classList.add("img__zoom-active");
		let rect = event.target.getBoundingClientRect();
		lens.style.top = event.clientY - rect.top - lensDiameter + "px";
		lens.style.left = event.clientX - rect.left - lensDiameter + "px";
		lens.classList.add("hover__lens-active");
	}

	function removeZoom(event) {
		imgZoom.classList.remove("img__zoom-active");
		lens.classList.remove("hover__lens-active");
		lensActive = false;
	}

	document.onmousemove = moveLens;
});