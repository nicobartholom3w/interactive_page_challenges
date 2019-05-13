document.addEventListener("DOMContentLoaded", function(event){
	let cards = Array.from(document.getElementsByClassName("card"));
	let container = document.getElementsByClassName("container")[0];
	let viewHeight = window.innerHeight || document.documentElement.clientHeight;
	let hiddenCards = [];

	function initialLoad () {
		container.className = container.className.replace("hidden", "container__fade-in");
		hideExtraCards();
	}

	function hideExtraCards() {
		for (let card of cards) {
			let cardBounding = card.getBoundingClientRect();
			if (cardBounding.top >= viewHeight){
				card.classList.add("hidden");
				hiddenCards.push(card);

			}
		}
	}

	function cardFadeIn() {
		for (let hiddenCard of hiddenCards) {
			let hiddenCardBounding = hiddenCard.getBoundingClientRect();
			if (hiddenCardBounding.top <= viewHeight){
				hiddenCard.className = hiddenCard.className.replace("hidden", "card__fade-in");
				hiddenCards.shift(hiddenCard);
			}
		}
	} 

	initialLoad();
	window.addEventListener("scroll", cardFadeIn);
});
