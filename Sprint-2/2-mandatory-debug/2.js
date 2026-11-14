// Predict and explain first...

// Predict the output of the following code:
// =============> the result is allways going to be "3" because the num is hard coded at the start of our code, the console log will throw an error because we do not define the function using any parameter

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); *?

// Now run the code and compare the output to your prediction
/* =============> 
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3*/

// as metioned before the num is hard coded so it's always going to be the same result but my thinking was if we do not define a paramater it will print an error

// =============>  the function simply change the number to a string using the function toString() and take the las index bu using the slice(-1) function
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

//const num = 103; we simply omit this variable and add a paramater num

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
