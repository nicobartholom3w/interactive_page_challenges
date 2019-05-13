document.addEventListener("DOMContentLoaded", function(event){
	let cards = Array.from(document.getElementsByClassName("card"));
	let container = document.getElementsByClassName("container")[0];
	let hiddenCards = [];

	function initialLoad () {
		container.className = container.className.replace("hidden", "container__fade-in");
		hideExtraCards();
	}

	function hideExtraCards() {
		let viewWidth = window.innerWidth || document.documentElement.clientWidth;
		let viewHeight = window.innerHeight || document.documentElement.clientHeight;
		for (let card of cards) {
			let cardBounding = card.getBoundingClientRect();
			if (cardBounding.left >= 0 && cardBounding.top >= viewHeight){
				card.classList.add("hidden");
				hiddenCards.push(card);

			}
		}
	}


	let i = 0;
	function cardFadeIn() {
		i++;
		console.log("scrolled " + i + " times");
		
		let viewHeight = window.innerHeight || document.documentElement.clientHeight;
		for (let hiddenCard of hiddenCards) {
			let hiddenCardBounding = hiddenCard.getBoundingClientRect();
			if (hiddenCardBounding.top <= viewHeight){
				hiddenCard.classList.remove("hidden");
				hiddenCard.classList.add("card__fade-in");
				// hiddenCard.className.replace("hidden", "card__fade-in");
				hiddenCards.shift(hiddenCard);
				console.log(hiddenCard);
			}
		}
	} 

	initialLoad();
	window.addEventListener("scroll", cardFadeIn);
	


});





	// function inViewport(element) {
	// 	let viewHeight = window.innerHeight || document.documentElement.clientHeight;
	// 	let elementPosition = element.getBoundingClientRect();
	// 	return (elementPosition.top <= viewHeight);
	// }
	// 
	// 
	// 
	// 
	// document.addEventListener('scroll', event => {
	// 	let viewWidth = window.innerWidth || document.documentElement.clientWidth;
	// 	let viewHeight = window.innerHeight || document.documentElement.clientHeight;
	// 	for (let card of cards) {
	// 		let cardBounding = card.getBoundingClientRect();
	// 		if (cardBounding.left >= 0 && cardBounding.top <= viewHeight){
	// 			card.className.replace("hidden", "card__fade-in");
	// 		}
	// 	}
	// });

	


	// window.onscroll = function () {
	// 	let viewHeight = window.innerHeight || document.documentElement.clientHeight;
	// 	for (let hiddenCard of hiddenCards) {
	// 		let hiddenCardBounding = hiddenCard.getBoundingClientRect();
	// 		if (hiddenCardBounding.top <= viewHeight){
	// 			hiddenCard.className.replace("hidden", "card__fade-in");
	// 		}
	// 	}
	// }

	

	// window.onscroll = cardFadeIn;
	// 
	// 
	// 
	// 
	// 
	// 				// window.addEventListener("scroll", event => {
				// 	if(cardBounding.top <= viewHeight) {
				// 		card.className.replace("hidden", "card__fade-in");
				// 	}
				// });