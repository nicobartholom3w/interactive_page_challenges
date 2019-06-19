document.addEventListener("DOMContentLoaded", function(event){
	let form = document.querySelector(".form");
	let inputArray = Array.from(document.getElementsByClassName("form__entry-input"));
	let inputAlertArray = Array.from(document.getElementsByClassName("alert"));
	let submitButton = document.querySelector(".button");

	// email.addEventListener("input", (event) => {
	// 	for(let k = 0; k < inputArray.length; k++) {
	// 		if(!inputArray[k].validity.valid) {
	// 			inputAlertArray[k].classList.remove("alert-active");
	// 		}
	// 	}
	// 	if(inputArray[2].value === inputArray[3].value) {
	// 		inputAlertArray[3].classList.remove("alert-active");
	// 	}
	// }, false);

	form.addEventListener("submit", (event) => {
		for(let i = 0; i < inputArray.length; i++) {
			if(!inputArray[i].validity.valid) {
				inputAlertArray[i].classList.add("alert-active");
			}
			else {
				inputAlertArray[i].classList.remove("alert-active");
			}
		}
		if(inputArray[2].value !== inputArray[3].value) {
			inputAlertArray[3].classList.add("alert-active");
			
		}
		else {
			inputAlertArray[3].classList.remove("alert-active");
		}	
		event.preventDefault();	
	}, false);

});
























function palindromePerm(str) {
	let obj = {};
	for(let i = 0; i < str.length; i++) {
		if(str[i] === " ") {
			break;
		}
		if(obj[str[i]]) {
			obj[str[i]] += 1;
		}
		else {
			obj[str[i]] = 1;
		}
	}
	let count = 0;
	for(let key in obj) {
		if(obj[key] !== 2) {
			if(obj[key] !== 1) {
				return false;
			}
			else {
				count++;
			}
		}
	}
	if(count === 1 || count === 0) {
		return true;
	}
	else {
		return false;
	}
}
// t = O(n)  s = O(n)
// console.log(palindromePerm("abbba    "));





