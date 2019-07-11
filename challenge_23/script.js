document.addEventListener("DOMContentLoaded", function(event){
	let buttonLeft = document.querySelector(".button-left");
	let buttonRight = document.querySelector(".button-right");
	let weekDayArray = Array.from(document.getElementsByClassName("week__day"));
	let monthsArray = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ", "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "];
	let today = new Date();
	let thisDate;
	let initFirstWeekday;
	let initLastWeekday;
	let lastWeekday;
	let firstWeekday;

	Date.prototype.addDays = function(days) {
		let date = new Date(this.valueOf());
		date.setDate(date.getDate() + days);
		return date;
	}

	initCurrentWeek();

	function fillDate(num, newDate) {

		thisDate = newDate ? newDate.addDays(num) : today.addDays(num);
		
		let currentMonth = String(thisDate.getMonth());
		let currentDate = String(thisDate.getDate());
		let currentDay = String(thisDate.getDay());
		let todaysDate = monthsArray[currentMonth] + currentDate;
		weekDayArray[currentDay].textContent = todaysDate;

		let isToday = thisDate.toDateString() === today.toDateString();
		weekDayArray[currentDay].classList.toggle("week__day-active", isToday);
	}

	function initCurrentWeek() {
		for(let i = 0; i <= (weekDayArray.length - today.getDay() - 1); i++){
			fillDate(i);
			lastWeekday = thisDate;
			initLastWeekday = lastWeekday;
		}
		for(let k = 1; k <= today.getDay(); k++) {
			fillDate(-k);
			firstWeekday = thisDate;
			initFirstWeekday = firstWeekday;
		}
	}

	function previousWeek(event) {
		for(let b = 1; b <= weekDayArray.length; b++) {
			fillDate(-b, firstWeekday);
		}
		firstWeekday = thisDate;
		lastWeekday = thisDate.addDays(6);
	}

	function nextWeek(event) {
		for(let p = 1; p <= weekDayArray.length; p++) {
			fillDate(p, lastWeekday);
		}
		firstWeekday = thisDate.addDays(-6);
		lastWeekday = thisDate;
	}

	buttonLeft.onclick = previousWeek;
	buttonRight.onclick = nextWeek;

});