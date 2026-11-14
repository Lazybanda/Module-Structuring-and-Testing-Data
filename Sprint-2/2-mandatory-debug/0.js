// Predict and explain first...

// =============> not sure but i would think that there will be an error because the function is printing the result using console.log and we are trying to print again => print the print!

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

// =============> we get the result of calling the function so 320 but at the same time the seconf print shwoes undifined not sure but i think js run the function get to the console.log and surch for a function call to print and then run the second console outside the function but doese not work as we do not have a return statment so undifined result

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
