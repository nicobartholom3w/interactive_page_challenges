document.addEventListener("DOMContentLoaded", function(event){
	let playButton = document.querySelector(".video-overlay");
	let video = document.querySelector(".video-view");
	let isPlaying = false;

	function playOrPause(event) {
		if(!isPlaying) {
			isPlaying = true;
			playButton.style.opacity = "0";
			setTimeout(() => video.play(), 300);
		}
		else {
			video.pause();
			playButton.style.opacity = "1";
			isPlaying = false;
		}
		
	}

	playButton.onclick = playOrPause;













});


function strCompression(str) {
	let charCount = 1;
	let newStr = "";
	for(let i = 0; i < str.length; i++) {
		if(str[i] === str[i + 1]) {
			charCount++;
		}
		else {
			newStr += str[i] + charCount;
			charCount = 1;
			if(str.length <= newStr.length) {
				return str;
			}
		}
	}
	return newStr;
}

// console.log(strCompression("aabbcccaa"));

function rotateMatrix(matrix) {
	let length = matrix.length;
	let layers = Math.floor(length/2);

	for(let start = 0; start < layers; start++){
		let count = length - 1;
		for(let k = start; k < length - 1; k++) {
			let temp = matrix[k][start];
			matrix[k][start] = matrix[start][count];
			matrix[start][count] = matrix[count][length - 1];
			matrix[count][length - 1] = matrix[length - 1][k];
			matrix[length - 1][k] = temp;
			count--;
		}
		length = layers + 1;
	}
	return matrix;
}

let matrix = [[1, 2, 3, 4],
			  [5, 6, 7, 8],
			  [9, 10, 11, 12],
			  [13, 14, 15, 16]];

let result = [[13, 9, 5, 1],
			  [14, 10, 6, 2],
			  [15, 11, 7, 3],
			  [16, 12, 8, 4]];

let reverseResult = [[ 4, 8, 12, 16],
				  	 [ 3, 7, 11, 15],
				  	 [ 2, 6, 10, 14],
				  	 [ 1, 5, 9, 13]]

// console.log(rotateMatrix(matrix));
