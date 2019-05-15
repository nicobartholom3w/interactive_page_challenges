document.addEventListener("DOMContentLoaded", function(event){
	let searchButton = document.querySelector(".button__search");
	let runButton = document.querySelector(".button__run")
	let hideButton = document.querySelector(".hide");
	let closeButton = document.querySelector(".close");
	let sideMenu = document.querySelector(".side__menu");
	let sideMenuSearch = document.querySelector(".side__menu-search");
	let sideMenuRun = document.querySelector(".side__menu-run");
	let overlay = document.querySelector(".right-overlay");

	function addOverlay () {
		sideMenu.classList.remove("slide-out");
		sideMenu.classList.add("slide-in");
		overlay.classList.add("right-overlay-active");
		overlay.classList.add("right-overlay-zindex");
	}

	function removeOverlay (){
		sideMenu.classList.remove("slide-in");
		sideMenu.classList.add("slide-out");
		overlay.classList.remove("right-overlay-active");
		setTimeout(() => overlay.classList.remove("right-overlay-zindex"), 600);
	}

	searchButton.addEventListener("click", (event) => {
		sideMenuSearch.classList.add("side__menu-search-active");
		addOverlay();
	})

	runButton.addEventListener("click", (event) => {
		sideMenuRun.classList.add("side__menu-run-active");
		addOverlay();
	})

	hideButton.addEventListener("click", (event) => {
		setTimeout(() => sideMenuSearch.classList.remove("side__menu-search-active"), 500);
		removeOverlay();
	})
	
	closeButton.addEventListener("click", (event) => {
		setTimeout(() => sideMenuRun.classList.remove("side__menu-run-active"), 500);
		removeOverlay();
	})

	overlay.addEventListener("click", (event) => {
		setTimeout(() => sideMenuSearch.classList.remove("side__menu-search-active"), 500);
		setTimeout(() => sideMenuRun.classList.remove("side__menu-run-active"), 500);
		removeOverlay();
	})


});