document.addEventListener("DOMContentLoaded", function(event){

	function addTask(event) {
		event.preventDefault();
	}

	document.onsubmit = addTask;

});