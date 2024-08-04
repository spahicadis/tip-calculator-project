import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

//DOM
const billAmount = document.querySelector('.bill');
const tipPercentage = document.querySelector('.tip');
const calculateButton = document.querySelector('.buttonAction');
const result = document.querySelector('.calculatedAmount');


//STATEs
let bill = 0;
let tip = 0;
let calculatedAmount = 0;

//BINDING
billAmount.addEventListener('input', function(e) {
    bill = e.target.value;
    console.log(typeof bill);
})

tipPercentage.addEventListener('input', function(e) {
    tip = e.target.value;
    console.log(typeof tip);
})

//CALCULATE
function calculate() {
 let formula = (parseFloat(tip) / 100) * parseFloat(bill) + parseFloat(bill);
 result.innerHTML = formula
}

calculateButton.addEventListener('click', calculate);

