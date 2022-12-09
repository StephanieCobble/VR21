  // const loanAmountInput = document.querySelector('#loan-amount');
  // const loanYearsInput = document.querySelector('#loan-years');
  // const loanRateInput = document.querySelector('#loan-rate');

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");

  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.querySelector('#loan-amount').value),
    years: +(document.querySelector('#loan-years').value),
    rate: +(document.querySelector('#loan-rate').value),
  }
}


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  const values = {amount: 5000, years: 5, rate: 3};
  const loanAmountInput = document.querySelector('#loan-amount');
  loanAmountInput.value = values.amount;
  const loanYearsInput = document.querySelector('#loan-years');
  loanYearsInput.value = values.years;
  const loanRateInput = document.querySelector('#loan-rate');
  loanRateInput.value = values.rate; 
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update(values) {
  values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthly = (values.rate/100)/12;
  const num = Math.floor(values.years * 12);
  return (
    (monthly * values.amount) / (1-Math.pow((1 + monthly * 12), -num))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyInput = document.querySelector('#monthly-payment');
  monthlyInput.innerText = "$" + monthly;
}
