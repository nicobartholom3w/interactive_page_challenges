document.addEventListener("DOMContentLoaded", function(event){
	let httpRequest;
	let requestObj;
	let cardSection = document.querySelector(".card-section");
	let button = document.querySelector(".button");
	let link = "https://swapi.co/api/people/";
	let height = 0;
	let next;

	button.addEventListener("click", makeRequest);

	function makeRequest(event) {
		height += 350;
		button.classList.add("loading");
		httpRequest = new XMLHttpRequest();

		if(!httpRequest) {
			alert("Cannot create instance!");
			return false;
		}
		if(next) {
			link = next;
		}

		httpRequest.onreadystatechange = addContents;
		httpRequest.open("GET", link);
		httpRequest.send();
	}

	function addContents(event) {
		if(httpRequest.readyState === XMLHttpRequest.DONE) {
			if(httpRequest.status === 200) {
				requestObj = JSON.parse(httpRequest.responseText);
				next = requestObj["next"];
				if(!link) {
					return;
				}
				populatePage(requestObj["results"]);
				setTimeout(() => {
					button.classList.remove("loading");
					cardSection.style.height = height + "px";
				}, 400);
			}
			else {
				alert("There was a problem with the request.");
			}
		}

		
	}

	function populatePage(objArray) {
		for(let i = 0; i < 10; i++) {
			if(!objArray[i]) {
				return;
			}
			let character = objArray[i];
			let charName = character["name"];
			let node = document.createElement("div");
			node.classList.add("card");
			node.innerText = charName;
			cardSection.appendChild(node);
		}
	}

	function loadComplete() {

	}

});
