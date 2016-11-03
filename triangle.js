/*
	author: Patrick Jiang
	Time: 3 Nov, 2016
	Use Node to run it on command line: "node triangle.js"
*/

var triangle = function(row) {
    //result holds all arrays
	var result = [];
	//based on rows 
    for (var i=0; i<row; i++) {
        //currerent row holder
		var arr = [];
        arr[0] = arr[i] = 1;
        for (var j=1; j<i; j++) {
            arr[j] = result[i - 1][j] + result[i - 1][j - 1];
        }
		//append the current row to the triangle array
        result.push(arr);
    }
    return result;
};

var howMayRowsYouWant=10;
var temp = triangle(howMayRowsYouWant);
console.log(temp);