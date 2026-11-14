// Predict and explain first...

// Why will an error occur when this program runs?
// =============> the function it self looks good exept for the first variable that we declaired, it should be outside the function it makes no sense to define a fixed parameter for a function, and we dont have any call for the function after that and the console log will output an error/ not defined because decimal number is only used in the scope of the function.

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// =============> the function takes a decimal as a parameter for example 0.5 in this case and return the percentage by multiplying by 100 and add the % part

// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

const result = convertToPercentage(decimalNumber);
console.log(result);
