var num: number[] = [1, 5, 8, 1, 4];
var bigNum: number[] = [100, 130, 2345, 90, 60];
var grid: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/* function isBigEnough(element, index, array)
{
    return (element>=10);
}

var passed = num.every(isBigEnough);
console.log(passed); */

function isBigEnough(element, index, array) {
    return (element >= 10);
}

var passed = num.every(isBigEnough);
console.log("Test Value : " + passed);

function whoIsGreaterThan100(element, index, array) {
    return (element > 100);
}

var count = bigNum.filter(whoIsGreaterThan100);
console.log("Test Value : " + count);

function squareIt(ary: number[]): number[] {
    var resultAry = new Array(ary.length);
    for (var i = 0; i < ary.length; i++) {
        resultAry[i] = ary[i] * ary[i];
    }
    return resultAry;
}

console.log(squareIt(num));