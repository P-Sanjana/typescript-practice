var num: number[] = [1, 5, 8, 1, 4];
var bigNum: number[] = [100, 130, 2345, 90, 60];
var grid: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function isEqualTo10(el) {
    return (el == 10);
}

var isTen = num.every(isEqualTo10);
console.log("Any element =10?: " + isTen);

function whoIsGreaterThan100(el) {
    return (el >= 100);
}

var moreThan100 = bigNum.filter(whoIsGreaterThan100);
console.log("Filter Value : " + moreThan100);

function squareIt(ary: number[]): number[] {
    var resultAry = new Array(ary.length);
    for (var i = 0; i < ary.length; i++) {
        resultAry[i] = ary[i] * ary[i];
    }
    return resultAry;
}

console.log(squareIt(num));

// other methods of traversing arrays
// using for-in loop
let years: Array<number> = [2016, 2017, 2018, 2019, 2020];
console.log("Using for-in loop: ");
for (let i in years) {
    console.log(years[i])
}

// using for-of loop
console.log("Using for-of loop: ");
for (let i of years) {
    console.log(i);
}

// using foreach loop
console.log("Using for-each loop: ");
years.forEach(function (yrs, i) {
    console.log(yrs);
});