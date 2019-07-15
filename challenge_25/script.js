document.addEventListener("DOMContentLoaded", function(event){
	let httpRequest;
	let requestObj;
	let progress = 0;
	let cardSection = document.querySelector(".card-section");
	let button = document.querySelector(".button");

	button.addEventListener("click", makeRequest);

	function makeRequest(event) {
		button.classList.add("loading");
		httpRequest = new XMLHttpRequest();

		if(!httpRequest) {
			alert("Cannot create instance!");
			return false;
		}

		httpRequest.onreadystatechange = addContents;
		httpRequest.open("GET", "https://swapi.co/api/people/");
		httpRequest.send();
	}

	function addContents(event) {
		if(httpRequest.readyState === XMLHttpRequest.DONE) {
			if(httpRequest.status === 200) {
				requestObj = JSON.parse(httpRequest.responseText);
					populatePage(requestObj["results"]);
			}
			else {
				alert("There was a problem with the request.");
			}
		}
		setTimeout(() => {button.classList.remove("loading");}, 400);
	}

	function populatePage(objArray) {
		for(let i = 0; i < 10; i++) {
			if(!objArray[progress]) {
				return;
			}
			let character = objArray[progress];
			let charName = character["name"];
			let node = document.createElement("div");
			node.classList.add("card");
			node.innerText = charName;
			cardSection.appendChild(node);
			progress++;
		}
	}


});

function loading(event) {
		
	}

	document.onload = loading;