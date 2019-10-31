import './style.css';

let value = document.getElementById("value");
let power = document.getElementById("power");

value.oninput = calculate;
power.oninput = calculate;

function calculate() {
    document.getElementById("result").textContent = Math.pow(value.value, power.value)+"";
}