document.addEventListener("DOMContentLoaded", function(event){
	let imgContainer = document.querySelector(".img__container");
	let img = document.querySelector(".img");
	let imgZoom = document.querySelector(".img__zoom");
	let lens;
	let lensRadius = 20;
	let lensActive = false;
	let zoomX = imgZoom.offsetWidth / (lensRadius * 2);
	let zoomY = imgZoom.offsetHeight / (lensRadius * 2);

	function moveLens(event) {
		let imgRect = img.getBoundingClientRect();
		if(event.target === img) {
			addLens(event);
		}
		if(lensActive) {
			if(event.clientX <= imgRect.left || event.clientX >= imgRect.right || event.clientY <= imgRect.top || event.clientY >= imgRect.bottom) {
				removeZoom(event);
			}
			let x = event.clientX  - imgRect.left - lensRadius;
			let y = event.clientY - imgRect.top - lensRadius;
			lens.style.top = y + "px";
			lens.style.left = x + "px";
			
			console.log("x = " + x * zoomX);
			console.log("y = " + y * zoomY);
			let signX = "-";
			let signY = "-"
			if(Math.sign(x) === -1) {
				signX = "";
			}
			if(Math.sign(y) === -1) {
				signY = "";
			}
			imgZoom.style.backgroundPosition = signX + (Math.abs(x) * zoomX) + "px " + signY + (Math.abs(y) * zoomY) + "px";
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
		lens.classList.add("hover__lens-active");

		let rect = event.target.getBoundingClientRect();
		lens.style.top = event.clientY - rect.top - lensRadius + "px";
		lens.style.left = event.clientX - rect.left - lensRadius + "px";

		imgZoom.classList.add("img__zoom-active");
		imgZoom.style.backgroundSize = (img.offsetWidth * zoomX) + "px " + (img.offsetHeight * zoomY) + "px";
	}

	function removeZoom(event) {
		imgZoom.classList.remove("img__zoom-active");
		lens.classList.remove("hover__lens-active");
		lensActive = false;
		// setTimeout(() => {lens.remove()}, 100);
		lens.remove();
	}

	document.onmousemove = moveLens;
});