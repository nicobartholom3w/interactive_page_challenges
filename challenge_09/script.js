document.addEventListener("DOMContentLoaded", function(event){
	
	let card = document.querySelector(".card");
	let sticky = card.offsetTop;

	window.onscroll = () => {
		if (window.pageYOffset >= sticky) {
			card.classList.add("sticky");
		}
		else {
			card.classList.remove("sticky");
		}
	}





});