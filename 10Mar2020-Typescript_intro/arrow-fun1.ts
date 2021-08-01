function randomIn(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var RandomNumberPerSecond = function () {
    this.getRandomNumber = () => { console.log(randomIn(1, 100)) };
}

var a = new RandomNumberPerSecond();
a.getRandomNumber();