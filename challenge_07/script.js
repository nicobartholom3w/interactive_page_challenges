document.addEventListener("DOMContentLoaded", function(event){
	let cards = Array.from(document.getElementsByClassName("card"));
	let container = document.getElementsByClassName("container")[0];

	function cardFadeIn() {
		let viewWidth = window.innerWidth || document.documentElement.clientWidth;
		let viewHeight = window.innerHeight || document.documentElement.clientHeight;
		for (let card of cards) {
			let cardBounding = card.getBoundingClientRect();
			if (cardBounding.left >= 0 && cardBounding.top <= viewHeight){
				card.className.replace("hidden", "card__fade-in");
			}
		}
	} 

	function hideExtraCards() {
		let viewWidth = window.innerWidth || document.documentElement.clientWidth;
		let viewHeight = window.innerHeight || document.documentElement.clientHeight;
		for (let card of cards) {
			let cardBounding = card.getBoundingClientRect();
			if (cardBounding.left >= 0 && cardBounding.top >= viewHeight){
				card.classList.add("hidden");
			}
		}
		// for (let card of cards) {
		// 	let cardBounding = card.getBoundingClientRect();
		// 	if (cardBounding.top <= 0 && cardBounding.left <= 0 && cardBounding.top >= viewHeight){
		// 		card.classList.add("hidden");
		// 	}
	}

	window.addEventListener("scroll", cardFadeIn);

	window.onload = function() {
		container.className = container.className.replace("hidden", "container__fade-in");
		hideExtraCards();
	}



});