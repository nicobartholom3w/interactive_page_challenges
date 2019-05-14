document.addEventListener("DOMContentLoaded", function(event){
	let searchButton = document.querySelector(".button__search");
	let runButton = document.querySelector(".button__run")
	let hideButton = document.querySelector(".hide");
	let closeButton = document.querySelector(".close");
	let sideMenu = document.querySelector(".side__menu");
	let sideMenuSearch = document.querySelector(".side__menu-search");
	let sideMenuRun = document.querySelector(".side__menu-run");
	let overlay = document.querySelector(".right-overlay");

	searchButton.addEventListener("click", (event) => {
		sideMenu.classList.remove("slide-out");
		sideMenu.classList.add("slide-in");
		sideMenuSearch.classList.add("side__menu-search-active");
		overlay.classList.add("right-overlay-active");
	})

	runButton.addEventListener("click", (event) => {
		// sideMenu.classList.remove("slide-out");
		sideMenu.classList.add("slide-in");
		sideMenuRun.classList.add("side__menu-run-active");
		overlay.classList.add("right-overlay-active");
	})

	hideButton.addEventListener("click", (event) => {
		sideMenu.classList.remove("slide-in");
		sideMenu.classList.add("slide-out");
		// sideMenuSearch.classList.remove("side__menu-search-active");
		// overlay.classList.remove("right-overlay-active");
	})
	
	closeButton.addEventListener("click", (event) => {
		sideMenu.classList.remove("slide-in");
		// sideMenu.classList.add("slide-out");
		sideMenuRun.classList.remove("side__menu-run-active");
		overlay.classList.remove("right-overlay-active");
	})




});