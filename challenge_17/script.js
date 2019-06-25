document.addEventListener("DOMContentLoaded", function(event){
	let cardContent = document.querySelector(".card__content");
	let scrollContainer = document.querySelector(".scroll");
	let scrollBar = document.querySelector(".scroll-bar");
	scrollBar.style.height = scrollContainer.clientHeight * cardContent.clientHeight / cardContent.scrollHeight + "px";

	if(scrollBar.clientHeight === scrollContainer.clientHeight) {
		scrollBar.style.opacity = "0";
		scrollContainer.style.opacity = "0";
	}

	cardContent.addEventListener("scroll", (event) => {
		scrollBar.style.top = scrollContainer.clientHeight * cardContent.scrollTop / cardContent.scrollHeight + "px";
	})

	document.addEventListener("resize", (event) => {
		scrollBar.style.height = scrollContainer.clientHeight * cardContent.clientHeight / cardContent.scrollHeight + "px";	
		if(scrollBar.clientHeight === scrollContainer.clientHeight) {
			scrollBar.style.opacity = "0";
			scrollContainer.style.opacity = "0";
		}
	})
});