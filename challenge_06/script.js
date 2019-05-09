document.addEventListener("DOMContentLoaded", function(event){
	let container = document.getElementsByClassName("container")[0];
	let card = document.getElementsByClassName("card")[0];

	let mouse = {
		_x: 0,
		_y: 0,
		x: 0,
		y: 0,
		updatePosition: function(event) {
			let e = event || window.event;
			this.x = e.clientX - this._x;
			this.y = (e.clientY - this._y) * -1;
		},
		setOrigin: function(e) {
			this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
			this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
		}
	}

	mouse.setOrigin(card);

	let onMouseEnterHandler = function(event) {
		update(event);
	};

	let onMouseLeaveHandler = function() {
		card.style = "";
	};

	let onMouseMoveHandler = function(event) {
			update(event);
	};

	let update = function(event) {
		mouse.updatePosition(event);
		updateTransformStyle(
			(mouse.y / card.offsetHeight/2).toFixed(2),
			(mouse.x / card.offsetWidth/2).toFixed(2)
		);
	};

	let updateTransformStyle = function(x, y) {
		let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
		card.style.transform = style;
	}

	container.onmouseenter = onMouseEnterHandler;
	container.onmouseleave = onMouseLeaveHandler;
	container.onmousemove = onMouseMoveHandler;

});



