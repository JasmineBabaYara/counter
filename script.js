//DOM
const startbutton = document.getElementById('start-btn');
const resetbutton = document.getElementById('reset-btn');
const number = document.getElementById('number');
var num = 0;

//functions
//start
function start() {
    num ++;
    number.innerHTML = num;
}
//reset
function reset() {
    num = 0;
    number.innerHTML = num;
}


