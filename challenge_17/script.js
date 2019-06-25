document.addEventListener("DOMContentLoaded", function(event){
	let cardContent = document.querySelector(".card__content");
	let scrollContainer = document.querySelector(".scroll");
	let scrollBar = document.querySelector(".scroll-bar");
	scrollBar.style.height = scrollContainer.clientHeight * cardContent.clientHeight / cardContent.scrollHeight + "px";

	function scrollIt(event) {
		console.log("apple");
	}

	cardContent.addEventListener("scroll", (event) => {
		scrollBar.style.top = scrollContainer.clientHeight * cardContent.scrollTop / cardContent.scrollHeight + "px";
	})
});