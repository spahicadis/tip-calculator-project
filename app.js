//import Toastify from 'toastify-js';
//import "toastify-js/src/toastify.css";

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
    console.log(bill);
    if (parseFloat(bill) < 0) {
        Toastify({
            text: "The value cannot be negative",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
})

tipPercentage.addEventListener('input', function(e) {
    tip = e.target.value;
    console.log(tip);
    if (parseFloat(tip) < 0) {
        Toastify({
            text: "The value cannont be negative",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();  
    }

})

//CALCULATE
function calculate() {
calculatedAmount = (parseFloat(tip) / 100) * parseFloat(bill) + parseFloat(bill);
 result.innerHTML = calculatedAmount;
 if(calculatedAmount < 0) {
    Toastify({
        text: "Not possbile",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      calculatedAmount = 0
      result.innerHTML = calculatedAmount
 }
}

calculateButton.addEventListener('click', calculate);

