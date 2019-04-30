document.addEventListener("DOMContentLoaded", function(event){
	let container = document.getElementsByClassName("container")[0];
	let card = document.getElementsByClassName("card")[0];
	let counter = 0;
	let updateRate = 10;
	let isTimeToUpdate = function() {
	  return counter++ % updateRate === 0;
	};

	let mouse = {
		_x: 0,
		_y: 0,
		x: 0,
		y: 0,
		setOrigin: function(e) {
			this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
			this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
		},
		setPosition: function(event) {
			let e = event || window.event;
			this.x = e.clientX - this._x;
			this.y = (e.clientY - this._y) * -1;
		},
		show: function() {
			return '(' + this.x + ', ' + this.y + ')';
		} 
	}

	

	mouse.setOrigin(container);
	// record location of mouse on container/card
	// 	set center of card as 0
		








});