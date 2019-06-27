document.addEventListener("DOMContentLoaded", function(event){




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

console.log(rotateMatrix(matrix));

// let temp = [];
// 	let length = matrix.length;
// 	let half = Math.floor(length /2);
// 	for(let start = 0; start < half; start++) {
// 		for(let i = start; i < length - 1; i++) {
// 			temp.push(matrix[start][i]);
// 			matrix[start][i] = matrix[length - i - 1][start];
// 		}
// 		for(let k = start; k < length; k++) {
// 			temp.push(matrix[k][length - 1]);
// 			matrix[k][length - 1] = temp[0];
// 			temp.shift();
// 		}
// 		for(let b = length - length/2; b > start; b--) {
// 			temp.push(matrix[length - 1][b]);
// 			matrix[length - 1][b] = temp[0];
// 			temp.shift();
// 		}
// 		for(let p = matrix.length - 1; p > start; p--) {
// 			temp.push(matrix[p][start]);
// 			matrix[p][start] = temp[0];
// 			temp.shift();
// 		}
// 		length = half;
// 	}
// 	return matrix;






