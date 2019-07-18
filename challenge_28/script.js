document.addEventListener("DOMContentLoaded", function(event){
	let input = document.querySelector(".input");
	let dropDown = document.querySelector(".dropdown");
	let isDelete = false;
	let previousPokemon;
	let pokemonArray = [];
	let keyCount = 0;
	let efficientPokemonSearch = debounce(() => {
		pokemonSearch(event);
	}, 200);

	input.addEventListener("input", efficientPokemonSearch);

	input.addEventListener("keydown", (event) => {
		keyCount = input.value.length;
		if(keyCount > 0) {
			if(event.key === "Backspace") {
				isDelete = true;
			}
		}
	});

	document.addEventListener("mouseover", (event) => {
		if(event.target.classList.contains("dropdown-li")){
			input.value = event.target.innerText;
		}
	});

	document.addEventListener("click", (event) => {
		if(event.target.classList.contains("dropdown-li")){
			removeAllPokemon(pokemonArray);
			dropDown.classList.remove("dropdown-active");
			pokemonArray = [];
			previousPokemon = pokemonArray;
		}
	});

	function pokemonSearch(event) {
		keyCount = input.value.length;
		if(keyCount === 0) {
			isDelete = false;
			dropDown.classList.remove("dropdown-active");
			removeAllPokemon(pokemonArray);
			pokemonArray = [];
			previousPokemon = [];
			return;
		}
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=964")
		.then((response) => response.json())
		.then((data) => {
			let pokemonObjectsArray = data.results;
			pokemonArray = pokemonObjectsArray;
			if(isDelete) {
				removeAllPokemon(previousPokemon);
				for(let count = 0; count <= keyCount - 1; count++) {
					pokemonArray = findPokemon(event, pokemonArray, count);
				}
				isDelete = false;
			}
			else {
				for(let count = 0; count <= keyCount - 1; count++) {
					pokemonArray = findPokemon(event, pokemonArray, count);
				}
				if(previousPokemon) {
					removeAllPokemon(previousPokemon);
				}
			}
			previousPokemon = pokemonArray;
			addPokemon(pokemonArray);
		});
	}

	function findPokemon(event, array, count) {
		let inputLetter = input.value[count]
		let newArray = [];
		let nthLetter;
		for(let i = 0; i < array.length; i++){
			if(count === 0){
				nthLetter = array[i]["name"][count];
				if(inputLetter.toLowerCase() === nthLetter) {
					newArray.push(array[i]["name"]);
				}
			}
			else {
				nthLetter = array[i][count];	
				if(inputLetter.toLowerCase() === nthLetter) {
					newArray.push(array[i]);
				}

			}	
		}
		return newArray;
	}

	function addPokemon(array) {
		for(let k = 0; k < array.length; k++){
			let listItem = document.createElement("div");
			listItem.classList.add("dropdown-li");
			listItem.innerText = array[k];
			listItem.id = array[k];
			dropDown.appendChild(listItem);
		}
		if(array.length > 0) {
			dropDown.classList.add("dropdown-active");
		}
	}

	function sortPokemon(event, array) {
		let newArray = [];
		for(let item of array) {
			let match = true;
			let pokemon = item.name;
			for(let b = 0; b < keyCount - 1; b++) {
				if(pokemon[b] !== input.value[b]) {
					match = false;
					break;
				}
			}
			if(match) {
				newArray.push(pokemon);
			}
		}
		return newArray;
	}

	function removeAllPokemon(array){
		for(let p = 0; p < array.length; p++) {
			document.getElementById(array[p]).remove();
		}
		dropDown.classList.remove("dropdown-active");
	}

	function debounce(func, wait, immediate) {
		let timeout;
		return () => {
			let context = this;
			let args = arguments;
			let later = () => {
				timeout = null;
				if(!immediate) func.apply(context, args);
			};
			let callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if(callNow) func.apply(context, args);
		};
	};
});