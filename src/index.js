import './style.css';
const operations = require('./operations.js');

let value = document.getElementById("value");
let power = document.getElementById("power");

function calculate() {
    document.getElementById("result").textContent = operations.pow(value.value, power.value)+"";
}

value.oninput = calculate;
power.oninput = calculate;
