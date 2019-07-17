document.addEventListener("DOMContentLoaded", function(event){
	let input = document.querySelector(".input");
	let dropDown = document.querySelector(".dropdown");
	let keyCount = 0;
	
	input.addEventListener("keydown", (event) => {
		dropDown.classList.add("dropdown-active");
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=964")
		.then((response) => response.json())
		.then((data) => {
			let pokemonObjectsArray = data.results;
			for(let pokemon of pokemonObjectsArray){
				let nthLetter = pokemon.name[keyCount];
				if(event.key.toLowerCase() === nthLetter) {
					let listItem = document.createElement("div");
					listItem.classList.add("dropdown-li");
					listItem.innerText = pokemon.name;
					dropDown.appendChild(listItem);
				}
			}
		});
		// find out what key
		// search api for names that begin with same letter
		// display list of up to first 5 pokemon with same first letter
	});

});